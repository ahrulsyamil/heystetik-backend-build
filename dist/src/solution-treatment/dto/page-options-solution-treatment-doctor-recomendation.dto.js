"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1596cf29-3faf-55d6-b350-7a11954a8354")}catch(e){}}();

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
exports.PageOptionsSolutionTreatmentDoctorRecomendationDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
const string_1 = require("../../globals/helpers/string");
class PageOptionsSolutionTreatmentDoctorRecomendationDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], PageOptionsSolutionTreatmentDoctorRecomendationDto.prototype, "treatment_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], PageOptionsSolutionTreatmentDoctorRecomendationDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    (0, class_validator_1.ValidateIf)((obj, value) => (0, string_1.isNotNullOrEmpty)(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PageOptionsSolutionTreatmentDoctorRecomendationDto.prototype, "min_price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    (0, class_validator_1.ValidateIf)((obj, value) => (0, string_1.isNotNullOrEmpty)(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PageOptionsSolutionTreatmentDoctorRecomendationDto.prototype, "max_price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value.map((item) => parseInt(item))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], PageOptionsSolutionTreatmentDoctorRecomendationDto.prototype, "concern_ids", void 0);
exports.PageOptionsSolutionTreatmentDoctorRecomendationDto = PageOptionsSolutionTreatmentDoctorRecomendationDto;
//# sourceMappingURL=page-options-solution-treatment-doctor-recomendation.dto.js.map
//# debugId=1596cf29-3faf-55d6-b350-7a11954a8354