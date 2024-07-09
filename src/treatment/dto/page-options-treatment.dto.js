"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7e1814a7-d7e3-5240-8778-9a48b3edc115")}catch(e){}}();

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
exports.PageOptionsTreatmentDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
class PageOptionsTreatmentDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value == 'true' ? true : value == 'false' ? false : value),
    (0, class_validator_1.ValidateIf)((obj) => obj.is_active),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PageOptionsTreatmentDto.prototype, "is_active", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.map((num) => parseInt(num)), {
        toClassOnly: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Max)(5, { each: true }),
    (0, class_validator_1.Min)(1, { each: true }),
    __metadata("design:type", Array)
], PageOptionsTreatmentDto.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PageOptionsTreatmentDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PageOptionsTreatmentDto.prototype, "treatment_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.map((num) => parseInt(num)), {
        toClassOnly: true,
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], PageOptionsTreatmentDto.prototype, "clinic_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.Max)(4),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PageOptionsTreatmentDto.prototype, "dollar_rating", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['created_at', 'updated_at', 'rating', 'dollar_rating', 'popularity']),
    __metadata("design:type", String)
], PageOptionsTreatmentDto.prototype, "sort_by", void 0);
exports.PageOptionsTreatmentDto = PageOptionsTreatmentDto;
//# sourceMappingURL=page-options-treatment.dto.js.map
//# debugId=7e1814a7-d7e3-5240-8778-9a48b3edc115
