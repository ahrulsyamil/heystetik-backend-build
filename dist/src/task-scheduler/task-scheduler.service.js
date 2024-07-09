"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9ba19d46-fcfb-5128-a227-e908644a71a2")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchedulerService = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const consultation_service_1 = require("../consultation/consultation.service");
const enum_1 = require("../globals/constant/enum");
const notification_service_1 = require("../notification/notification.service");
const prisma_service_1 = require("../prisma/prisma.service");
const socket_gateway_1 = require("../socket/socket.gateway");
const socket_service_1 = require("../socket/socket.service");
let TaskSchedulerService = class TaskSchedulerService {
    constructor(prisma, consultationService, socketService, notificationService, socketGateway, queueTaskSchedule, queueFcm) {
        this.prisma = prisma;
        this.consultationService = consultationService;
        this.socketService = socketService;
        this.notificationService = notificationService;
        this.socketGateway = socketGateway;
        this.queueTaskSchedule = queueTaskSchedule;
        this.queueFcm = queueFcm;
    }
    async createSchedule(data) {
        return await this.prisma.scheduled_task.create({
            data,
        });
    }
    async findManyBy(filter) {
        return await this.prisma.scheduled_task.findMany({
            where: filter,
        });
    }
    async updateSchedule(id, data) {
        return await this.prisma.scheduled_task.update({
            where: {
                id,
            },
            data,
        });
    }
    async runScheduleTimeOld(scheduleTask) {
        const scheduledTime = dayjs(scheduleTask.schedule_time.toString());
        const currentTime = dayjs();
        if (scheduledTime.isBefore(currentTime)) {
            if (scheduleTask.status != 'COMPLETED') {
                await this.prisma.scheduled_task.update({
                    where: {
                        id: scheduleTask.id,
                    },
                    data: {
                        status: 'FAILED',
                    },
                });
                if (scheduleTask.task_name == 'consultation_doctor_schedule_expire') {
                    const scheduledTaskData = scheduleTask.data;
                    await this.consultationService.updateStatusConsultationDoctorSchedule(scheduledTaskData['consultation_doctor_schedule_id'], 'EXPIRED');
                }
            }
            console.log('The scheduled time has passed, and the schedule was not executed.');
            return;
        }
        const timeDifference = scheduledTime.diff(currentTime, 'second');
        console.log(timeDifference);
        setTimeout(() => {
            this.runScheduledTask(scheduleTask);
        }, timeDifference * 1000);
    }
    async runScheduleTime(scheduleTask) {
        const scheduledTime = dayjs(scheduleTask.schedule_time.toString());
        const currentTime = dayjs();
        if (scheduledTime.isBefore(currentTime)) {
            if (scheduleTask.status != 'COMPLETED') {
                await this.prisma.scheduled_task.update({
                    where: {
                        id: scheduleTask.id,
                    },
                    data: {
                        status: 'FAILED',
                    },
                });
                if (scheduleTask.task_name == 'consultation_doctor_schedule_expire') {
                    const scheduledTaskData = scheduleTask.data;
                    await this.consultationService.updateStatusConsultationDoctorSchedule(scheduledTaskData['consultation_doctor_schedule_id'], 'EXPIRED');
                }
            }
            console.log('The scheduled time has passed, and the schedule was not executed.');
            return;
        }
        const timeDifference = scheduledTime.diff(currentTime, 'second');
        console.log(timeDifference);
        this.queueTaskSchedule.add('expireConsultationSchedule', scheduleTask, {
            delay: timeDifference * 1000,
        });
    }
    async runScheduledTask(scheduledTask) {
        await this.prisma.scheduled_task.update({
            where: {
                id: scheduledTask.id,
            },
            data: {
                status: 'COMPLETED',
            },
        });
        if (scheduledTask.task_name == 'consultation_doctor_schedule_expire') {
            this.consultationDoctorScheduleExpire(scheduledTask);
        }
        console.log('Fungsi dijalankan pada waktu yang ditentukan');
    }
    async consultationDoctorScheduleExpire(scheduledTask) {
        const scheduledTaskData = scheduledTask.data;
        const consultationDoctorSchedule = await this.consultationService.findConsultationDoctorSchedule(scheduledTaskData['consultation_doctor_schedule_id']);
        if (consultationDoctorSchedule.status == 'PENDING') {
            await this.consultationService.updateStatusConsultationDoctorSchedule(scheduledTaskData['consultation_doctor_schedule_id'], 'EXPIRED');
            const [socketClientCustomer, socketClientDoctor] = await Promise.all([
                this.socketService.getClientByUserId(consultationDoctorSchedule.customer_id),
                this.socketService.getClientByUserId(consultationDoctorSchedule.doctor_id),
            ]);
            if (socketClientCustomer) {
                this.socketGateway.emitListenApp(socketClientCustomer.id, {
                    success: false,
                    event: 'consultationScheduleExpired',
                    message: `Consultation schedule expired`,
                });
            }
            if (socketClientDoctor) {
                this.socketGateway.emitListenApp(socketClientDoctor.id, {
                    success: false,
                    event: 'consultationScheduleExpired',
                    message: `Consultation schedule expired`,
                });
            }
            const notifyUser = await this.notificationService.create({
                type: enum_1.NotificationType.CONSULTATION_DOCTOR_SCHEDULE_EXPIRED,
                sender_id: 0,
                recipient_id: scheduledTaskData['customer_id'],
                title: 'Konsultasi',
                body: `Yah, sepertinya Dokter ${scheduledTaskData['doctor_name']} belum bisa mengambil jadwal konsultasi ini. Mohon mulai kembali konsultasi, dan kami akan segera mencari dokter yang tersedia untuk Anda.`,
                data: {
                    transaction_consultation_id: scheduledTaskData['transaction_consultation_id'],
                    consultation_doctor_schedule_id: consultationDoctorSchedule.id,
                    doctor_id: scheduledTaskData['doctor_id'],
                    doctor_name: scheduledTaskData['doctor_name'],
                },
            });
            this.queueFcm.add('sendNotificationToTopic', {
                topic: scheduledTaskData['customer_id'],
                title: notifyUser.title,
                body: notifyUser.body,
                data: {
                    type: notifyUser.type,
                    transaction_consultation_id: scheduledTaskData['transaction_consultation_id'],
                    consultation_doctor_schedule_id: consultationDoctorSchedule.id,
                    doctor_id: scheduledTaskData['doctor_id'],
                    doctor_name: scheduledTaskData['doctor_name'],
                },
            });
        }
    }
};
TaskSchedulerService = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, common_1.Inject)(socket_gateway_1.SocketGateway)),
    __param(5, (0, bull_1.InjectQueue)('queueTaskSchedule')),
    __param(6, (0, bull_1.InjectQueue)('queueFcm')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        consultation_service_1.ConsultationService,
        socket_service_1.SocketService,
        notification_service_1.NotificationService,
        socket_gateway_1.SocketGateway, Object, Object])
], TaskSchedulerService);
exports.TaskSchedulerService = TaskSchedulerService;
//# sourceMappingURL=task-scheduler.service.js.map
//# debugId=9ba19d46-fcfb-5128-a227-e908644a71a2
