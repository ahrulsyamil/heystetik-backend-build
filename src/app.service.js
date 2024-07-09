"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d7bf7a0b-baf1-5450-be88-c374a015ec2c")}catch(e){}}();

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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const task_scheduler_service_1 = require("./task-scheduler/task-scheduler.service");
const socket_service_1 = require("./socket/socket.service");
const mailer_1 = require("@nestjs-modules/mailer");
const bull_1 = require("@nestjs/bull");
let AppService = class AppService {
    constructor(taskScheduleService, socketService, mailerService, queueTaskSchedule) {
        this.taskScheduleService = taskScheduleService;
        this.socketService = socketService;
        this.mailerService = mailerService;
        this.queueTaskSchedule = queueTaskSchedule;
        this.isFirstRun = true;
        this.items = [];
    }
    async onModuleInit() {
        await this.socketService.resetClient();
        if (this.isFirstRun && process.env.NODE_APP_INSTANCE) {
            if (process.env.NODE_APP_INSTANCE == '0') {
                const schedules = await this.taskScheduleService.findManyBy({
                    status: 'PENDING',
                });
                schedules.forEach((item) => {
                    this.taskScheduleService.runScheduleTime(item);
                });
            }
            this.isFirstRun = false;
        }
        else {
            const schedules = await this.taskScheduleService.findManyBy({
                status: 'PENDING',
            });
            schedules.forEach((item) => {
                this.taskScheduleService.runScheduleTime(item);
            });
            this.isFirstRun = false;
        }
    }
    listItem() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    sendMail(to, code) {
        console.log('to', to);
        console.log('code', code);
        this.mailerService.sendMail({
            to: to,
            subject: 'Code Verify',
            text: 'Test Email',
            html: `Verify Code : <b>${code}</b>`,
        });
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, bull_1.InjectQueue)('queueTaskSchedule')),
    __metadata("design:paramtypes", [task_scheduler_service_1.TaskSchedulerService,
        socket_service_1.SocketService,
        mailer_1.MailerService, Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
//# debugId=d7bf7a0b-baf1-5450-be88-c374a015ec2c
