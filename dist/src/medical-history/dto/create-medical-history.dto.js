"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fd177275-fcd4-507a-9767-307b903e4d63")}catch(e){}}();

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
exports.CreateMedicalHistoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const string_1 = require("../../globals/helpers/string");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
class CreateMedicalHistoryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['interest_conditions', 'id']),
    __metadata("design:type", Number)
], CreateMedicalHistoryDto.prototype, "interest_condition_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => MedicalHistoryItemDto),
    __metadata("design:type", Array)
], CreateMedicalHistoryDto.prototype, "medical_history_item", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: 'Binary file' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], CreateMedicalHistoryDto.prototype, "files", void 0);
exports.CreateMedicalHistoryDto = CreateMedicalHistoryDto;
class MedicalHistoryItemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['interest_conditions_question', 'id']),
    __metadata("design:type", Number)
], MedicalHistoryItemDto.prototype, "interest_condition_question_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : null)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['interest_conditions_answer', 'id']),
    (0, class_validator_1.ValidateIf)((obj, value) => (0, string_1.isNotNullOrEmpty)(value)),
    __metadata("design:type", Number)
], MedicalHistoryItemDto.prototype, "interest_condition_answer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MedicalHistoryItemDto.prototype, "answer_description", void 0);
//# sourceMappingURL=create-medical-history.dto.js.map
//# debugId=fd177275-fcd4-507a-9767-307b903e4d63
