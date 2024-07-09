"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="44174a09-fef6-59d3-83fa-882aaa68138b")}catch(e){}}();

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
exports.RecipeRecomendationTreatmentEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../globals/entities/base.entity");
class RecipeRecomendationTreatmentEntity extends base_entity_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.is_active = true;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RecipeRecomendationTreatmentEntity.prototype, "doctor_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, nullable: false }),
    __metadata("design:type", String)
], RecipeRecomendationTreatmentEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, required: false, nullable: true }),
    __metadata("design:type", Boolean)
], RecipeRecomendationTreatmentEntity.prototype, "is_active", void 0);
exports.RecipeRecomendationTreatmentEntity = RecipeRecomendationTreatmentEntity;
//# sourceMappingURL=recipe-recomendation-treatment.entity.js.map
//# debugId=44174a09-fef6-59d3-83fa-882aaa68138b
