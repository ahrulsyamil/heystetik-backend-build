"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e5131251-8eee-5982-abc8-01cb6e1cdfbb")}catch(e){}}();

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
exports.PageOptionsSolutionRecomendationSkincareDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
class PageOptionsSolutionRecomendationSkincareDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], PageOptionsSolutionRecomendationSkincareDto.prototype, "user_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], PageOptionsSolutionRecomendationSkincareDto.prototype, "product_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], PageOptionsSolutionRecomendationSkincareDto.prototype, "interest_face_corrective_skin_goals", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], PageOptionsSolutionRecomendationSkincareDto.prototype, "interest_body_corrective_skin_goals", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], PageOptionsSolutionRecomendationSkincareDto.prototype, "interest_augmentation_skin_goals", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PageOptionsSolutionRecomendationSkincareDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PageOptionsSolutionRecomendationSkincareDto.prototype, "display", void 0);
exports.PageOptionsSolutionRecomendationSkincareDto = PageOptionsSolutionRecomendationSkincareDto;
//# sourceMappingURL=page-options-solution-recomendation-skincare.dto.js.map
//# debugId=e5131251-8eee-5982-abc8-01cb6e1cdfbb
