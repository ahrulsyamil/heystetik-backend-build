"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0afbcc80-582d-5c47-a882-14c736b66cb2")}catch(e){}}();

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
exports.PageOptionsProductReviewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
const enum_1 = require("../../globals/constant/enum");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
const is_optional_enum_validator_1 = require("../../globals/validator/is-optional-enum.validator");
class PageOptionsProductReviewDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['product', 'id']),
    __metadata("design:type", Number)
], PageOptionsProductReviewDto.prototype, "product_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => Boolean(value)),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PageOptionsProductReviewDto.prototype, "has_photo", void 0);
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
], PageOptionsProductReviewDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, is_optional_enum_validator_1.IsOptionalEnum)(enum_1.SortingTypeReview),
    __metadata("design:type", String)
], PageOptionsProductReviewDto.prototype, "sorting_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, is_optional_enum_validator_1.IsOptionalEnum)(enum_1.TopicProductReview, { each: true }),
    __metadata("design:type", Array)
], PageOptionsProductReviewDto.prototype, "topic", void 0);
exports.PageOptionsProductReviewDto = PageOptionsProductReviewDto;
//# sourceMappingURL=page-options-product-review.dto.js.map
//# debugId=0afbcc80-582d-5c47-a882-14c736b66cb2