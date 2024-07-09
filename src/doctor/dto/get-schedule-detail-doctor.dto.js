"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="efb2c647-2faa-5eb4-9a16-3f7df96a9bf4")}catch(e){}}();

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
exports.GetScheduleDetailDoctorDto = void 0;
const class_validator_1 = require("class-validator");
const is_valid_date_string_validator_1 = require("../../globals/validator/is-valid-date-string.validator");
class GetScheduleDetailDoctorDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(['ACTIVE', 'ONLEAVE', 'UPCOMING']),
    __metadata("design:type", String)
], GetScheduleDetailDoctorDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(is_valid_date_string_validator_1.IsValidDateString),
    __metadata("design:type", Date)
], GetScheduleDetailDoctorDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(is_valid_date_string_validator_1.IsValidDateString),
    __metadata("design:type", Date)
], GetScheduleDetailDoctorDto.prototype, "start_time", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(is_valid_date_string_validator_1.IsValidDateString),
    __metadata("design:type", Date)
], GetScheduleDetailDoctorDto.prototype, "end_time", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetScheduleDetailDoctorDto.prototype, "search", void 0);
exports.GetScheduleDetailDoctorDto = GetScheduleDetailDoctorDto;
//# sourceMappingURL=get-schedule-detail-doctor.dto.js.map
//# debugId=efb2c647-2faa-5eb4-9a16-3f7df96a9bf4
