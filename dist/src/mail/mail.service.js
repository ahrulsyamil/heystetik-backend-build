"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="11923065-919c-54fe-a33c-bf14280174e1")}catch(e){}}();

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
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendEmail(email, subject, message) {
        await this.mailerService.sendMail({
            to: email,
            subject: subject,
            text: message,
            html: `<p>${message}</p>`,
        });
    }
    async sendMail(email, message) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Verification',
            html: `<p>${message}</p>`,
        });
    }
    async sendEmailVerifyRegistration(email, data) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Account Registration Verification Code',
            template: './verification-registration',
            context: data,
        });
    }
    async sendEmailVerifyChangeEmail(email, data) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Change Email Verification Code',
            template: './verification-change-email',
            context: data,
        });
    }
    async sendEmailVerifyChangePhoneNumber(email, data) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Change Phone Number Verification Code',
            template: './verification-change-phone-number',
            context: data,
        });
    }
    async sendEmailVerifyChangePassword(email, data) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Change Password Verification Code',
            template: './verification-change-password',
            context: data,
        });
    }
    async sendEmailResetPassword(email, data) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Reset Your Password',
            template: './reset-password',
            context: data,
        });
    }
    async sendEmailReportStream(email, data) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Report Stream Notification: Post Reported on Heystetik Mobile App',
            template: './report-stream-notification',
            context: data,
        });
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map
//# debugId=11923065-919c-54fe-a33c-bf14280174e1
