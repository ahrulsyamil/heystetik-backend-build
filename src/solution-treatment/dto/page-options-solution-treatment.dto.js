"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="53e181cc-ef3a-516e-bd5a-1d05f8ed8195")}catch(e){}}();

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
exports.PageOptionsSolutionTreatmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
const enum_1 = require("../../globals/constant/enum");
const string_1 = require("../../globals/helpers/string");
const is_optional_enum_validator_1 = require("../../globals/validator/is-optional-enum.validator");
class PageOptionsSolutionTreatmentDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PageOptionsSolutionTreatmentDto.prototype, "treatment_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
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
], PageOptionsSolutionTreatmentDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    (0, class_validator_1.ValidateIf)((obj, value) => (0, string_1.isNotNullOrEmpty)(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PageOptionsSolutionTreatmentDto.prototype, "min_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    (0, class_validator_1.ValidateIf)((obj, value) => (0, string_1.isNotNullOrEmpty)(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PageOptionsSolutionTreatmentDto.prototype, "max_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, is_optional_enum_validator_1.IsOptionalEnum)(enum_1.OrderByTreatment),
    __metadata("design:type", String)
], PageOptionsSolutionTreatmentDto.prototype, "order_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value == 'true' ? true : value == 'false' ? false : value),
    (0, class_validator_1.ValidateIf)((obj) => obj.open_now),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PageOptionsSolutionTreatmentDto.prototype, "open_now", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value.map((item) => parseInt(item))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], PageOptionsSolutionTreatmentDto.prototype, "concern_ids", void 0);
exports.PageOptionsSolutionTreatmentDto = PageOptionsSolutionTreatmentDto;
//# sourceMappingURL=page-options-solution-treatment.dto.js.map
//# debugId=53e181cc-ef3a-516e-bd5a-1d05f8ed8195
