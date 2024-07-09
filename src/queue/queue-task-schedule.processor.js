"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b2f565ce-230a-5c35-819f-90c03c019757")}catch(e){}}();

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
exports.QueueTaskScheduleProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const broadcast_service_1 = require("../broadcast/broadcast.service");
const enum_1 = require("../globals/constant/enum");
const notification_service_1 = require("../notification/notification.service");
const prisma_service_1 = require("../prisma/prisma.service");
const task_scheduler_service_1 = require("../task-scheduler/task-scheduler.service");
let QueueTaskScheduleProcessor = class QueueTaskScheduleProcessor {
    constructor(taskSchedulerService, prismaService, notificationService, broadcastService, queueFcm) {
        this.taskSchedulerService = taskSchedulerService;
        this.prismaService = prismaService;
        this.notificationService = notificationService;
        this.broadcastService = broadcastService;
        this.queueFcm = queueFcm;
    }
    async expireConsultationSchedule(job) {
        const { data } = job;
        await this.taskSchedulerService.runScheduledTask(data);
    }
    async doctorScheduleStatus(job) {
        const { data } = job;
        console.log('+++++++++++++', data);
    }
    async scheduledBroadcast(job) {
        const { data } = job;
        await this.broadcastService.update(data.id, {
            status: enum_1.BroadcastStatus.Progress,
        });
        const targetFilter = {};
        if (data.broadcast_interests.length > 0) {
            targetFilter.OR = [
                {
                    interest_face_corrective_skin_goals: {
                        some: {
                            name_face_corrective: {
                                in: data.broadcast_interests.map((interest) => interest.interest),
                            },
                        },
                    },
                },
                {
                    interest_body_corrective_skin_goals: {
                        some: {
                            name_body_corrective: {
                                in: data.broadcast_interests.map((interest) => interest.interest),
                            },
                        },
                    },
                },
                {
                    interest_augmentation_skin_goals: {
                        some: {
                            name_augmentation: {
                                in: data.broadcast_interests.map((interest) => interest.interest),
                            },
                        },
                    },
                },
                {
                    interest_sexually_and_skin_diseases_skin_goals: {
                        some: {
                            name: {
                                in: data.broadcast_interests.map((interest) => interest.interest),
                            },
                        },
                    },
                },
            ];
        }
        if (data.broadcast_provinces.length > 0) {
            targetFilter.provinceId = {
                in: data.broadcast_provinces.map((province) => province.province_id),
            };
        }
        if (data.broadcast_cities.length > 0) {
            targetFilter.cityId = {
                in: data.broadcast_cities.map((city) => city.city_id),
            };
        }
        if (data.broadcast_targets.length != 0) {
            targetFilter.roleId = {
                in: data.broadcast_targets.map((role) => role.role_id),
            };
        }
        const target = await this.prismaService.users.findMany({
            where: {
                ...targetFilter,
            },
            include: {
                role: true,
            },
        });
        try {
            let img_url = undefined;
            if (data.media_broadcast)
                img_url = `${process.env.APP_BASE_URL}/files/${data.media_broadcast.media.path}`;
            let link = undefined;
            if (data.link)
                link = data.link;
            await Promise.all(target.map(async (user) => {
                return await this.notificationService.create({
                    type: enum_1.NotificationType.GENERAL,
                    sender_id: 0,
                    recipient_id: user.id,
                    title: data.title,
                    body: data.description,
                    data: {
                        img_url,
                        link,
                    },
                });
            }));
            if (!data.broadcast_targets || data.broadcast_targets.length == 0) {
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: 'app',
                    title: data.title,
                    body: data.description,
                    data: {
                        img_url,
                        link,
                    },
                    img_url,
                });
            }
            else {
                data.broadcast_targets.forEach((target) => {
                    this.queueFcm.add('sendNotificationToTopic', {
                        topic: target.role.code,
                        title: data.title,
                        body: data.description,
                        data: {
                            img_url,
                            link,
                        },
                        img_url,
                    });
                });
            }
            await this.broadcastService.update(data.id, {
                status: enum_1.BroadcastStatus.Done,
            });
        }
        catch (err) {
            console.log(err);
            await this.broadcastService.update(data.id, {
                status: enum_1.BroadcastStatus.Failed,
            });
        }
    }
};
__decorate([
    (0, bull_1.Process)('expireConsultationSchedule'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueTaskScheduleProcessor.prototype, "expireConsultationSchedule", null);
__decorate([
    (0, bull_1.Process)('doctorScheduleStatus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueTaskScheduleProcessor.prototype, "doctorScheduleStatus", null);
__decorate([
    (0, bull_1.Process)('scheduledBroadcast'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueTaskScheduleProcessor.prototype, "scheduledBroadcast", null);
QueueTaskScheduleProcessor = __decorate([
    (0, bull_1.Processor)('queueTaskSchedule'),
    __param(4, (0, bull_1.InjectQueue)('queueFcm')),
    __metadata("design:paramtypes", [task_scheduler_service_1.TaskSchedulerService,
        prisma_service_1.PrismaService,
        notification_service_1.NotificationService,
        broadcast_service_1.BroadcastService, Object])
], QueueTaskScheduleProcessor);
exports.QueueTaskScheduleProcessor = QueueTaskScheduleProcessor;
//# sourceMappingURL=queue-task-schedule.processor.js.map
//# debugId=b2f565ce-230a-5c35-819f-90c03c019757
