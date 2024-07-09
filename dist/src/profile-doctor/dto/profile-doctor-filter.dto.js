"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3feffc16-a22f-59c4-833d-553b24de1a18")}catch(e){}}();

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
exports.ProfileDoctorFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
const is_valid_date_string_validator_1 = require("../../globals/validator/is-valid-date-string.validator");
class ProfileDoctorFilterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Validate)(is_valid_date_string_validator_1.IsValidDateString),
    __metadata("design:type", String)
], ProfileDoctorFilterDto.prototype, "period_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Validate)(is_valid_date_string_validator_1.IsValidDateString),
    __metadata("design:type", String)
], ProfileDoctorFilterDto.prototype, "period_end", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.DoctorStatisticType),
    __metadata("design:type", String)
], ProfileDoctorFilterDto.prototype, "type", void 0);
exports.ProfileDoctorFilterDto = ProfileDoctorFilterDto;
//# sourceMappingURL=profile-doctor-filter.dto.js.map
//# debugId=3feffc16-a22f-59c4-833d-553b24de1a18