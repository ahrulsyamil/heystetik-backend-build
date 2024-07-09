"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="da3612f0-ba4b-544f-9b1b-e47d0186dbd1")}catch(e){}}();

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
exports.CreateTreatmentReviewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
class CreateTreatmentReviewDto {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], CreateTreatmentReviewDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['transaction_treatment', 'id']),
    __metadata("design:type", String)
], CreateTreatmentReviewDto.prototype, "transaction_treatment_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['transaction_treatment_item', 'id']),
    __metadata("design:type", Number)
], CreateTreatmentReviewDto.prototype, "transaction_treatment_item_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], CreateTreatmentReviewDto.prototype, "treatment_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTreatmentReviewDto.prototype, "review", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateTreatmentReviewDto.prototype, "care_rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateTreatmentReviewDto.prototype, "service_rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateTreatmentReviewDto.prototype, "management_rating", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], CreateTreatmentReviewDto.prototype, "avg_rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: 'Binary file' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], CreateTreatmentReviewDto.prototype, "files", void 0);
exports.CreateTreatmentReviewDto = CreateTreatmentReviewDto;
//# sourceMappingURL=create-treatment-review.dto.js.map
//# debugId=da3612f0-ba4b-544f-9b1b-e47d0186dbd1
