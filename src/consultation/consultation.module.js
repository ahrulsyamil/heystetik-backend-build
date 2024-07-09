"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4f6e5175-2ce0-53a9-8153-75d7b5a6afa0")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../auth/user/user.service");
const chat_opening_service_1 = require("../chat-opening/chat-opening.service");
const chat_module_1 = require("../chat/chat.module");
const doctor_schedule_service_1 = require("../doctor-schedule/doctor_schedule.service");
const fcm_service_1 = require("../fcm/fcm.service");
const notification_service_1 = require("../notification/notification.service");
const prisma_module_1 = require("../prisma/prisma.module");
const product_service_1 = require("../product/product.service");
const socket_module_1 = require("../socket/socket.module");
const task_scheduler_service_1 = require("../task-scheduler/task-scheduler.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const consultation_controller_1 = require("./consultation.controller");
const consultation_service_1 = require("./consultation.service");
const invoice_service_1 = require("../invoice/invoice.service");
const medical_history_service_1 = require("../medical-history/medical-history.service");
const media_service_1 = require("../media/media.service");
const my_journey_service_1 = require("../my-journey/my-journey.service");
let ConsultationModule = class ConsultationModule {
};
ConsultationModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, chat_module_1.ChatModule, socket_module_1.SocketModule],
        controllers: [consultation_controller_1.ConsultationController],
        providers: [
            consultation_service_1.ConsultationService,
            user_service_1.UserService,
            transaction_consultation_service_1.TransactionConsultationService,
            chat_opening_service_1.ChatOpeningService,
            doctor_schedule_service_1.DoctorScheduleService,
            task_scheduler_service_1.TaskSchedulerService,
            product_service_1.ProductService,
            notification_service_1.NotificationService,
            fcm_service_1.FcmService,
            invoice_service_1.InvoiceService,
            medical_history_service_1.MedicalHistoryService,
            media_service_1.MediaService,
            my_journey_service_1.MyJourneyService,
            task_scheduler_service_1.TaskSchedulerService,
        ],
    })
], ConsultationModule);
exports.ConsultationModule = ConsultationModule;
//# sourceMappingURL=consultation.module.js.map
//# debugId=4f6e5175-2ce0-53a9-8153-75d7b5a6afa0
