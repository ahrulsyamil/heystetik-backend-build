"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f1b2c93c-6d3c-52db-93b0-8ba3056c7662")}catch(e){}}();

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
exports.RecipeRecomendationSkincareEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../globals/entities/base.entity");
class RecipeRecomendationSkincareEntity extends base_entity_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.is_active = true;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RecipeRecomendationSkincareEntity.prototype, "doctor_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, nullable: false }),
    __metadata("design:type", String)
], RecipeRecomendationSkincareEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, required: false, nullable: true }),
    __metadata("design:type", Boolean)
], RecipeRecomendationSkincareEntity.prototype, "is_active", void 0);
exports.RecipeRecomendationSkincareEntity = RecipeRecomendationSkincareEntity;
//# sourceMappingURL=recipe-recomendation-skincare.entity.js.map
//# debugId=f1b2c93c-6d3c-52db-93b0-8ba3056c7662
