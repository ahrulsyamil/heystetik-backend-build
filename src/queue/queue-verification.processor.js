"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="79045831-91fd-5892-a66b-d7eb9a732160")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueVerificationProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const qontak_service_1 = require("../qontak/qontak.service");
const telegram_mock_otp_service_1 = require("../telegram-mock-otp/telegram-mock-otp.service");
const whatsapp_cloud_service_1 = require("../whatsapp-cloud/whatsapp-cloud.service");
let QueueVerificationProcessor = class QueueVerificationProcessor {
    constructor(whatsappCloudService, telegramMockOtpService, qontakService) {
        this.whatsappCloudService = whatsappCloudService;
        this.telegramMockOtpService = telegramMockOtpService;
        this.qontakService = qontakService;
    }
    async sendWhatsappCloudVerificationCode(job) {
        const { data } = job;
        await this.whatsappCloudService.sendVerificationCode(data.mobileNumber, data.code);
    }
    async sendOtp(job) {
        const { data } = job;
        await this.telegramMockOtpService.sendOtp({
            identifier: data.identifier,
            otp: data.otp,
        });
    }
    async sendQontakWhatsappVerificationCode(job) {
        const { data } = job;
        await this.qontakService.sendVerificationCode(data.name, data.mobileNumber, data.code);
    }
};
__decorate([
    (0, bull_1.Process)('sendWhatsappCloudVerificationCode'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueVerificationProcessor.prototype, "sendWhatsappCloudVerificationCode", null);
__decorate([
    (0, bull_1.Process)('sendOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueVerificationProcessor.prototype, "sendOtp", null);
__decorate([
    (0, bull_1.Process)('sendQontakWhatsappVerificationCode'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueVerificationProcessor.prototype, "sendQontakWhatsappVerificationCode", null);
QueueVerificationProcessor = __decorate([
    (0, bull_1.Processor)('queueVerification'),
    __metadata("design:paramtypes", [whatsapp_cloud_service_1.WhatsappCloudService,
        telegram_mock_otp_service_1.TelegramMockOtpService,
        qontak_service_1.QontakService])
], QueueVerificationProcessor);
exports.QueueVerificationProcessor = QueueVerificationProcessor;
//# sourceMappingURL=queue-verification.processor.js.map
//# debugId=79045831-91fd-5892-a66b-d7eb9a732160
