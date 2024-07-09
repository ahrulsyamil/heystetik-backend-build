"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a7e83f95-dd92-5a12-9cfe-ee6a06eb4175")}catch(e){}}();

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
exports.QueueEmailProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const mail_service_1 = require("../mail/mail.service");
let QueueEmailProcessor = class QueueEmailProcessor {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendEmailVerifyRegistration(job) {
        const { data } = job;
        await this.mailService.sendEmailVerifyRegistration(data.email, data.data);
    }
    async sendEmailVerifyChangeEmail(job) {
        const { data } = job;
        await this.mailService.sendEmailVerifyChangeEmail(data.email, data.data);
    }
    async sendEmailVerifyChangePhoneNumber(job) {
        const { data } = job;
        await this.mailService.sendEmailVerifyChangePhoneNumber(data.email, data.data);
    }
    async sendEmailVerifyChangePassword(job) {
        const { data } = job;
        await this.mailService.sendEmailVerifyChangePassword(data.email, data.data);
    }
    async sendEmailReportStream(job) {
        const { data } = job;
        await this.mailService.sendEmailReportStream(data.email, data.data);
    }
};
__decorate([
    (0, bull_1.Process)('sendEmailVerifyRegistration'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueEmailProcessor.prototype, "sendEmailVerifyRegistration", null);
__decorate([
    (0, bull_1.Process)('sendEmailVerifyChangeEmail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueEmailProcessor.prototype, "sendEmailVerifyChangeEmail", null);
__decorate([
    (0, bull_1.Process)('sendEmailVerifyChangePhoneNumber'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueEmailProcessor.prototype, "sendEmailVerifyChangePhoneNumber", null);
__decorate([
    (0, bull_1.Process)('sendEmailVerifyChangePassword'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueEmailProcessor.prototype, "sendEmailVerifyChangePassword", null);
__decorate([
    (0, bull_1.Process)('sendEmailReportStream'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueEmailProcessor.prototype, "sendEmailReportStream", null);
QueueEmailProcessor = __decorate([
    (0, bull_1.Processor)('queueEmail'),
    __metadata("design:paramtypes", [mail_service_1.MailService])
], QueueEmailProcessor);
exports.QueueEmailProcessor = QueueEmailProcessor;
//# sourceMappingURL=queue-email.processor.js.map
//# debugId=a7e83f95-dd92-5a12-9cfe-ee6a06eb4175
