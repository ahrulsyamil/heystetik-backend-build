"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e8a0236f-7e74-505b-9fa5-d99cea10b486")}catch(e){}}();

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
exports.UpdateScheduleStatusDto = void 0;
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
const is_custom_rule_validator_1 = require("../../globals/validator/is-custom-rule.validator");
const is_valid_date_string_validator_1 = require("../../globals/validator/is-valid-date-string.validator");
const dayjs = require("dayjs");
class UpdateScheduleStatusDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.DoctorScheduleStatus),
    __metadata("design:type", String)
], UpdateScheduleStatusDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^([0-9][0-9]):([0-9][0-9])$/, {
        message: 'Invalid duration format',
    }),
    (0, class_validator_1.ValidateIf)((obj) => obj.status == enum_1.DoctorScheduleStatus.RESTING),
    __metadata("design:type", String)
], UpdateScheduleStatusDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(is_valid_date_string_validator_1.IsValidDateString),
    (0, class_validator_1.ValidateIf)((obj) => obj.status == enum_1.DoctorScheduleStatus.ONLEAVE),
    __metadata("design:type", Date)
], UpdateScheduleStatusDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(is_valid_date_string_validator_1.IsValidDateString),
    (0, is_custom_rule_validator_1.IsCustomRule)((value) => {
        const now = dayjs().startOf('day');
        return !dayjs(value).startOf('day').isBefore(now);
    }, "End date can't before than date now"),
    (0, class_validator_1.ValidateIf)((obj) => obj.status == enum_1.DoctorScheduleStatus.ONLEAVE),
    __metadata("design:type", Date)
], UpdateScheduleStatusDto.prototype, "end_date", void 0);
exports.UpdateScheduleStatusDto = UpdateScheduleStatusDto;
//# sourceMappingURL=update-schedule-status.dto.js.map
//# debugId=e8a0236f-7e74-505b-9fa5-d99cea10b486
