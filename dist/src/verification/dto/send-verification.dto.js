"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f25d9c50-ecb9-5553-8449-ee576563e20d")}catch(e){}}();

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
exports.SendVerificationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const string_1 = require("../../globals/helpers/string");
const is_custom_rule_validator_1 = require("../../globals/validator/is-custom-rule.validator");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
class SendVerificationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(client_1.method_otp),
    __metadata("design:type", String)
], SendVerificationDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(client_1.type_verify),
    __metadata("design:type", String)
], SendVerificationDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['users', 'id']),
    (0, class_validator_1.ValidateIf)((obj) => obj.type == client_1.type_verify.CHANGE_EMAIL ||
        obj.type == client_1.type_verify.CHANGE_PHONE_NUMBER),
    __metadata("design:type", Number)
], SendVerificationDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, is_custom_rule_validator_1.IsCustomRule)((value) => (0, class_validator_1.isPhoneNumber)(value, 'ID'), 'is not valid phone number'),
    (0, class_transformer_1.Transform)(({ value }) => (0, string_1.transformPhoneNumber)(value)),
    (0, class_validator_1.ValidateIf)((obj) => obj.method == client_1.method_otp.WHATSAPP),
    __metadata("design:type", String)
], SendVerificationDto.prototype, "no_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.method == client_1.method_otp.EMAIL),
    __metadata("design:type", String)
], SendVerificationDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], SendVerificationDto.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], SendVerificationDto.prototype, "identifier", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], SendVerificationDto.prototype, "expired_at", void 0);
exports.SendVerificationDto = SendVerificationDto;
//# sourceMappingURL=send-verification.dto.js.map
//# debugId=f25d9c50-ecb9-5553-8449-ee576563e20d
