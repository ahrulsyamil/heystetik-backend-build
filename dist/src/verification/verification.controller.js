"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f02631a7-dda9-53c9-82dc-41b2a4c0d3c3")}catch(e){}}();

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
exports.VerificationController = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const client_1 = require("@prisma/client");
const dayjs = require("dayjs");
const number_1 = require("../globals/helpers/number");
const users_service_1 = require("../users/users.service");
const send_verification_dto_1 = require("./dto/send-verification.dto");
const verify_otp_dto_1 = require("./dto/verify-otp.dto");
const verification_service_1 = require("./verification.service");
let VerificationController = class VerificationController {
    constructor(configService, verificationService, usersService, queueEmail, queueTelegram, queueVerification) {
        this.configService = configService;
        this.verificationService = verificationService;
        this.usersService = usersService;
        this.queueEmail = queueEmail;
        this.queueTelegram = queueTelegram;
        this.queueVerification = queueVerification;
    }
    async send(data) {
        let findUser = null;
        if (data.user_id &&
            (data.type == client_1.type_verify.CHANGE_PHONE_NUMBER ||
                data.type == client_1.type_verify.CHANGE_EMAIL ||
                data.type == client_1.type_verify.CHANGE_PASSWORD)) {
            findUser = await this.usersService.findOne(data.user_id);
            if (!findUser)
                throw new common_1.BadRequestException('User not found');
        }
        await this.verificationService.updateManyBy({
            identifier: data.method == client_1.method_otp.EMAIL ? data.email : data.no_phone,
            method: data.method,
            type: data.type,
        }, {
            is_valid: false,
        });
        const otp = (0, number_1.generateOTP)(5);
        if (data.method == 'WHATSAPP') {
            if (data.type == 'REGISTRATION') {
                const findRegistered = await this.usersService.findBy({
                    no_phone: data?.no_phone,
                    finish_register: true,
                });
                if (findRegistered) {
                    throw new common_1.BadRequestException('Phone number has been registered');
                }
            }
            this.queueVerification.add('sendQontakWhatsappVerificationCode', {
                name: findUser?.fullname ?? 'Unknown',
                mobileNumber: data?.no_phone,
                code: otp.toString(),
            });
        }
        if (data.method == 'EMAIL') {
            if (data.type == 'REGISTRATION') {
                const findRegistered = await this.usersService.findBy({
                    email: data?.email,
                    finish_register: true,
                });
                if (findRegistered)
                    throw new common_1.BadRequestException('The email has been registered');
                this.queueEmail.add('sendEmailVerifyRegistration', {
                    email: data?.email,
                    data: {
                        fullname: findUser?.fullname ?? 'Sobat Hey',
                        code: otp,
                    },
                });
            }
            if (data.type == 'CHANGE_EMAIL') {
                this.queueEmail.add('sendEmailVerifyChangeEmail', {
                    email: data?.email,
                    data: {
                        fullname: findUser?.fullname ?? 'Sobat Hey',
                        code: otp,
                    },
                });
            }
            if (data.type == 'CHANGE_PHONE_NUMBER') {
                this.queueEmail.add('sendEmailVerifyChangePhoneNumber', {
                    email: data?.email,
                    data: {
                        fullname: findUser?.fullname ?? 'Sobat Hey',
                        code: otp,
                    },
                });
            }
            if (data.type == 'CHANGE_PASSWORD') {
                this.queueEmail.add('sendEmailVerifyChangePassword', {
                    email: data?.email,
                    data: {
                        fullname: findUser?.fullname ?? 'Sobat Hey',
                        code: otp,
                    },
                });
            }
        }
        data.code = otp;
        data.expired_at = dayjs().add(10, 'minute').toDate();
        data.identifier =
            data.method == client_1.method_otp.EMAIL ? data.email : data.no_phone;
        const result = await this.verificationService.create(data);
        delete result.code;
        return result;
    }
    async verify(data) {
        const find = await this.verificationService.findBy({
            type: data.type,
            code: data.verification_code,
            is_valid: true,
        });
        if (!find || !find.is_valid || find.used_at != null)
            throw new common_1.BadRequestException('Invalid verification code');
        if (dayjs().isAfter(find.expired_at))
            throw new common_1.BadRequestException('Verification code expired');
        return await this.verificationService.update(find.id, {
            is_valid: false,
            used_at: new Date(),
        });
    }
};
__decorate([
    (0, throttler_1.Throttle)(1, 120),
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_verification_dto_1.SendVerificationDto]),
    __metadata("design:returntype", Promise)
], VerificationController.prototype, "send", null);
__decorate([
    (0, common_1.Post)('verify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_otp_dto_1.VerifyOtpDto]),
    __metadata("design:returntype", Promise)
], VerificationController.prototype, "verify", null);
VerificationController = __decorate([
    (0, common_1.Controller)('verification'),
    __param(3, (0, bull_1.InjectQueue)('queueEmail')),
    __param(4, (0, bull_1.InjectQueue)('queueTelegram')),
    __param(5, (0, bull_1.InjectQueue)('queueVerification')),
    __metadata("design:paramtypes", [config_1.ConfigService,
        verification_service_1.VerificationService,
        users_service_1.UsersService, Object, Object, Object])
], VerificationController);
exports.VerificationController = VerificationController;
//# sourceMappingURL=verification.controller.js.map
//# debugId=f02631a7-dda9-53c9-82dc-41b2a4c0d3c3
