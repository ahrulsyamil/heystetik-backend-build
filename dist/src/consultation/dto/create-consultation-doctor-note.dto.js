"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="65b317f0-afc5-56e2-b2fd-2673e62c624a")}catch(e){}}();

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
exports.CreateConsultationDoctorNoteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_recipe_recomendation_skincare_dto_1 = require("../../recipe-recomendation-skincare/dto/create-recipe-recomendation-skincare.dto");
const recipe_drug_dto_1 = require("./recipe_drug.dto");
const boolean_1 = require("../../globals/helpers/boolean");
const enum_1 = require("../../globals/constant/enum");
class CreateConsultationDoctorNoteDto {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], CreateConsultationDoctorNoteDto.prototype, "consultation_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], CreateConsultationDoctorNoteDto.prototype, "customer_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => (0, boolean_1.convertToBoolean)(value)),
    __metadata("design:type", Boolean)
], CreateConsultationDoctorNoteDto.prototype, "profile_verified", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('profile_verified') && !obj.profile_verified),
    __metadata("design:type", String)
], CreateConsultationDoctorNoteDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.Gender),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('profile_verified') && !obj.profile_verified),
    __metadata("design:type", String)
], CreateConsultationDoctorNoteDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.hasOwnProperty('profile_verified') && !obj.profile_verified),
    __metadata("design:type", Number)
], CreateConsultationDoctorNoteDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConsultationDoctorNoteDto.prototype, "indication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CreateConsultationDoctorNoteDto.prototype, "diagnosis_possibility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateConsultationDoctorNoteDto.prototype, "diagnosis_secondary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConsultationDoctorNoteDto.prototype, "suggestion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_recipe_recomendation_skincare_dto_1.RecipeRecomendationSkincareItemsDto),
    __metadata("design:type", Array)
], CreateConsultationDoctorNoteDto.prototype, "recomendation_skincare_items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateConsultationDoctorNoteDto.prototype, "recomendation_treatment_types", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => recipe_drug_dto_1.RecipeDrugDto),
    __metadata("design:type", Array)
], CreateConsultationDoctorNoteDto.prototype, "recipe_drug_items", void 0);
exports.CreateConsultationDoctorNoteDto = CreateConsultationDoctorNoteDto;
//# sourceMappingURL=create-consultation-doctor-note.dto.js.map
//# debugId=65b317f0-afc5-56e2-b2fd-2673e62c624a
