"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="64909d9c-62a4-5b36-a878-4f1c1b095c21")}catch(e){}}();

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
exports.InterestHistoryTreatmentSkinGoalsEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class InterestHistoryTreatmentSkinGoalsEntity {
    constructor() {
        this.status = true;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], InterestHistoryTreatmentSkinGoalsEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, nullable: true }),
    __metadata("design:type", String)
], InterestHistoryTreatmentSkinGoalsEntity.prototype, "name_history_treatment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, required: false, nullable: true }),
    __metadata("design:type", Boolean)
], InterestHistoryTreatmentSkinGoalsEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], InterestHistoryTreatmentSkinGoalsEntity.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], InterestHistoryTreatmentSkinGoalsEntity.prototype, "updated_at", void 0);
exports.InterestHistoryTreatmentSkinGoalsEntity = InterestHistoryTreatmentSkinGoalsEntity;
//# sourceMappingURL=interest_history_treatment_skin_goals.entity.js.map
//# debugId=64909d9c-62a4-5b36-a878-4f1c1b095c21