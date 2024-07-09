"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="86b7a1fa-b936-5a97-b2f4-00070e593056")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchedulerModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const task_scheduler_service_1 = require("./task-scheduler.service");
const consultation_service_1 = require("../consultation/consultation.service");
const socket_module_1 = require("../socket/socket.module");
const notification_service_1 = require("../notification/notification.service");
let TaskSchedulerModule = class TaskSchedulerModule {
};
TaskSchedulerModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, socket_module_1.SocketModule],
        providers: [task_scheduler_service_1.TaskSchedulerService, consultation_service_1.ConsultationService, notification_service_1.NotificationService],
        exports: [task_scheduler_service_1.TaskSchedulerService],
    })
], TaskSchedulerModule);
exports.TaskSchedulerModule = TaskSchedulerModule;
//# sourceMappingURL=task-scheduler.module.js.map
//# debugId=86b7a1fa-b936-5a97-b2f4-00070e593056
