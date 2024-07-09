"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="92ea2502-4d27-5af3-b20b-c1bec254b5fd")}catch(e){}}();

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
exports.InterestFaceCorrectiveSkinGoalsEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class InterestFaceCorrectiveSkinGoalsEntity {
    constructor() {
        this.status = true;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], InterestFaceCorrectiveSkinGoalsEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, nullable: true }),
    __metadata("design:type", String)
], InterestFaceCorrectiveSkinGoalsEntity.prototype, "name_face_corrective", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, required: false, nullable: true }),
    __metadata("design:type", Boolean)
], InterestFaceCorrectiveSkinGoalsEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], InterestFaceCorrectiveSkinGoalsEntity.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], InterestFaceCorrectiveSkinGoalsEntity.prototype, "updated_at", void 0);
exports.InterestFaceCorrectiveSkinGoalsEntity = InterestFaceCorrectiveSkinGoalsEntity;
//# sourceMappingURL=interest_face_corrective_skin_goals.entity.js.map
//# debugId=92ea2502-4d27-5af3-b20b-c1bec254b5fd
