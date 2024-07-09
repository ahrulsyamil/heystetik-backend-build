"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2874ace1-1b28-570d-ac53-f4202975fd64")}catch(e){}}();

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
exports.CreateDoctorDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const boolean_1 = require("../../globals/helpers/boolean");
const string_1 = require("../../globals/helpers/string");
const is_custom_rule_validator_1 = require("../../globals/validator/is-custom-rule.validator");
const is_day_number_validator_1 = require("../../globals/validator/is-day-number.validator");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
const is_valid_date_string_validator_1 = require("../../globals/validator/is-valid-date-string.validator");
class ScheduleTimeDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    (0, class_validator_1.Matches)(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
        message: 'Invalid time format',
    }),
    __metadata("design:type", String)
], ScheduleTimeDto.prototype, "start_time", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    (0, class_validator_1.Matches)(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
        message: 'Invalid time format',
    }),
    __metadata("design:type", String)
], ScheduleTimeDto.prototype, "end_time", void 0);
class ConsultationSchedule {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsIn)([0, 1, 2, 3, 4, 5, 6]),
    (0, class_validator_1.Validate)(is_day_number_validator_1.IsDayNumber),
    __metadata("design:type", Number)
], ConsultationSchedule.prototype, "day_number", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => (0, boolean_1.convertToBoolean)(value)),
    __metadata("design:type", Boolean)
], ConsultationSchedule.prototype, "is_active", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => ScheduleTimeDto),
    (0, class_validator_1.ValidateIf)((obj) => obj.is_active),
    __metadata("design:type", Array)
], ConsultationSchedule.prototype, "schedule_times", void 0);
class CreateDoctorDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, is_custom_rule_validator_1.IsCustomRule)((value) => (0, class_validator_1.isPhoneNumber)(value, 'ID'), 'is not valid phone number'),
    (0, class_transformer_1.Transform)(({ value }) => (0, string_1.transformPhoneNumber)(value)),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['provinces', 'id']),
    __metadata("design:type", Number)
], CreateDoctorDto.prototype, "province_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['kota_kabupatens', 'id']),
    __metadata("design:type", Number)
], CreateDoctorDto.prototype, "city_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "education", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "practice_location", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(is_valid_date_string_validator_1.IsValidDateString),
    __metadata("design:type", Date)
], CreateDoctorDto.prototype, "join_date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "sip", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "str", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => ConsultationSchedule),
    (0, class_validator_1.Validate)((value) => {
        return value.schedules.every((schedule) => {
            return schedule.day_number >= 0 && schedule.day_number <= 6;
        });
    }, {
        message: 'Each schedule must have a day_number between 0 and 6',
    }),
    __metadata("design:type", Array)
], CreateDoctorDto.prototype, "schedules", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], CreateDoctorDto.prototype, "image_profile", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], CreateDoctorDto.prototype, "image_id_card", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], CreateDoctorDto.prototype, "image_npwp", void 0);
exports.CreateDoctorDto = CreateDoctorDto;
//# sourceMappingURL=create-doctor.dto.js.map
//# debugId=2874ace1-1b28-570d-ac53-f4202975fd64
