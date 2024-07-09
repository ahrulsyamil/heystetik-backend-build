"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4f5b5657-7b16-5529-88e4-f7ef20eec3c9")}catch(e){}}();

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
exports.CreateTransactionTreatmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const dayjs = require("dayjs");
const enum_1 = require("../../globals/constant/enum");
const string_1 = require("../../globals/helpers/string");
const is_custom_rule_validator_1 = require("../../globals/validator/is-custom-rule.validator");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
const time_range_validator_1 = require("../../globals/validator/time-range.validator");
class CreateTransactionTreatmentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    (0, is_custom_rule_validator_1.IsCustomRule)((value) => dayjs(value).isAfter(dayjs()), 'Invalid schedule date'),
    __metadata("design:type", String)
], CreateTransactionTreatmentDto.prototype, "schedule_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, { message: 'Invalid time range format' }),
    (0, class_validator_1.Validate)(time_range_validator_1.IsTimeRange),
    __metadata("design:type", String)
], CreateTransactionTreatmentDto.prototype, "schedule_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => TreatmentItemDto),
    __metadata("design:type", Array)
], CreateTransactionTreatmentDto.prototype, "treatment_item", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.MethodOfPayment),
    __metadata("design:type", String)
], CreateTransactionTreatmentDto.prototype, "payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.TypeOfPayment),
    __metadata("design:type", String)
], CreateTransactionTreatmentDto.prototype, "payment_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['voucher', 'id']),
    (0, class_validator_1.ValidateIf)((obj, value) => (0, string_1.isNotNullOrEmpty)(value)),
    __metadata("design:type", Number)
], CreateTransactionTreatmentDto.prototype, "voucher_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], CreateTransactionTreatmentDto.prototype, "total_price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], CreateTransactionTreatmentDto.prototype, "total_discount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionTreatmentDto.prototype, "transaction_fee", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionTreatmentDto.prototype, "tax", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], CreateTransactionTreatmentDto.prototype, "total_paid", void 0);
exports.CreateTransactionTreatmentDto = CreateTransactionTreatmentDto;
class TreatmentItemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['treatment', 'id']),
    __metadata("design:type", Number)
], TreatmentItemDto.prototype, "treatment_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TreatmentItemDto.prototype, "pax", void 0);
//# sourceMappingURL=create-transaction-treatment.dto.js.map
//# debugId=4f5b5657-7b16-5529-88e4-f7ef20eec3c9