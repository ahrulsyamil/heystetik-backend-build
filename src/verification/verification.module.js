"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d8762f22-4474-52c3-b722-90b838e02a45")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationModule = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("../mail/mail.service");
const prisma_module_1 = require("../prisma/prisma.module");
const telegram_mock_otp_service_1 = require("../telegram-mock-otp/telegram-mock-otp.service");
const users_service_1 = require("../users/users.service");
const whatsapp_cloud_service_1 = require("../whatsapp-cloud/whatsapp-cloud.service");
const verification_controller_1 = require("./verification.controller");
const verification_service_1 = require("./verification.service");
let VerificationModule = class VerificationModule {
};
VerificationModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [verification_controller_1.VerificationController],
        providers: [
            verification_service_1.VerificationService,
            users_service_1.UsersService,
            whatsapp_cloud_service_1.WhatsappCloudService,
            mail_service_1.MailService,
            telegram_mock_otp_service_1.TelegramMockOtpService,
        ],
    })
], VerificationModule);
exports.VerificationModule = VerificationModule;
//# sourceMappingURL=verification.module.js.map
//# debugId=d8762f22-4474-52c3-b722-90b838e02a45
