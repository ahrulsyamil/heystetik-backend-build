"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="084ec11c-4430-5049-959e-76e3372ea9f6")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationReviewModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const consultation_review_controller_1 = require("./consultation-review.controller");
const consultation_review_service_1 = require("./consultation-review.service");
const user_service_1 = require("../auth/user/user.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const users_service_1 = require("../users/users.service");
const notification_service_1 = require("../notification/notification.service");
const fcm_service_1 = require("../fcm/fcm.service");
let ConsultationReviewModule = class ConsultationReviewModule {
};
ConsultationReviewModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [consultation_review_controller_1.ConsultationReviewController],
        providers: [
            consultation_review_service_1.ConsultationReviewService,
            user_service_1.UserService,
            transaction_consultation_service_1.TransactionConsultationService,
            users_service_1.UsersService,
            notification_service_1.NotificationService,
            fcm_service_1.FcmService,
        ],
    })
], ConsultationReviewModule);
exports.ConsultationReviewModule = ConsultationReviewModule;
//# sourceMappingURL=consultation-review.module.js.map
//# debugId=084ec11c-4430-5049-959e-76e3372ea9f6
