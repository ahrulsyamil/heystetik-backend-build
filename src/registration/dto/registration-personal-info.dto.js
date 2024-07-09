"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="91872f26-86af-5cee-9850-ce907874fe68")}catch(e){}}();

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
exports.RegistrationUserPersonalInfoDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
const is_length_validator_1 = require("../../globals/validator/is-length.validator");
class RegistrationUserPersonalInfoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['users', 'id']),
    __metadata("design:type", Number)
], RegistrationUserPersonalInfoDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.Gender),
    __metadata("design:type", String)
], RegistrationUserPersonalInfoDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegistrationUserPersonalInfoDto.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    (0, is_length_validator_1.IsLength)(6),
    __metadata("design:type", String)
], RegistrationUserPersonalInfoDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['provinces', 'id']),
    __metadata("design:type", Number)
], RegistrationUserPersonalInfoDto.prototype, "province_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['kota_kabupatens', 'id']),
    __metadata("design:type", Number)
], RegistrationUserPersonalInfoDto.prototype, "city_id", void 0);
exports.RegistrationUserPersonalInfoDto = RegistrationUserPersonalInfoDto;
//# sourceMappingURL=registration-personal-info.dto.js.map
//# debugId=91872f26-86af-5cee-9850-ce907874fe68
