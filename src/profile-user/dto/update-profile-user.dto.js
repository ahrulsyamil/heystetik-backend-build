"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4b4b3f8f-7e04-53a8-891f-d06fced5187f")}catch(e){}}();

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
exports.UpdateProfileUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
class UpdateProfileUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('fullname')),
    __metadata("design:type", String)
], UpdateProfileUserDto.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('username')),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProfileUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('bio')),
    __metadata("design:type", String)
], UpdateProfileUserDto.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('email')),
    __metadata("design:type", String)
], UpdateProfileUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('no_phone')),
    __metadata("design:type", String)
], UpdateProfileUserDto.prototype, "no_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.Gender),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('gender')),
    __metadata("design:type", String)
], UpdateProfileUserDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('dob')),
    __metadata("design:type", Date)
], UpdateProfileUserDto.prototype, "dob", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('email') || obj.hasOwnProperty('no_phone')),
    __metadata("design:type", String)
], UpdateProfileUserDto.prototype, "verification_code", void 0);
exports.UpdateProfileUserDto = UpdateProfileUserDto;
//# sourceMappingURL=update-profile-user.dto.js.map
//# debugId=4b4b3f8f-7e04-53a8-891f-d06fced5187f
