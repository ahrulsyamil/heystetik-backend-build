"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6fd1b7ba-033d-5f91-8609-ad7f116c9f1e")}catch(e){}}();

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
exports.QueueTelegramProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const telegram_mock_otp_service_1 = require("../telegram-mock-otp/telegram-mock-otp.service");
let QueueTelegramProcessor = class QueueTelegramProcessor {
    constructor(telegramMockOtpService) {
        this.telegramMockOtpService = telegramMockOtpService;
    }
    async sendOtp(job) {
        const { data } = job;
        await this.telegramMockOtpService.sendOtp({
            identifier: data.identifier,
            otp: data.otp,
        });
    }
};
__decorate([
    (0, bull_1.Process)('sendOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueTelegramProcessor.prototype, "sendOtp", null);
QueueTelegramProcessor = __decorate([
    (0, bull_1.Processor)('queueTelegram'),
    __metadata("design:paramtypes", [telegram_mock_otp_service_1.TelegramMockOtpService])
], QueueTelegramProcessor);
exports.QueueTelegramProcessor = QueueTelegramProcessor;
//# sourceMappingURL=queue-telegram.processor.js.map
//# debugId=6fd1b7ba-033d-5f91-8609-ad7f116c9f1e
