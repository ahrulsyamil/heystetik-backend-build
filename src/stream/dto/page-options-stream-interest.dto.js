"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6e006f2f-cc94-523e-a36c-e2f2c390ec97")}catch(e){}}();

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
exports.PageOptionsStreamInterestDto = void 0;
const class_transformer_1 = require("class-transformer");
const page_options_dto_1 = require("../../decorators/page-options.dto");
class PageOptionsStreamInterestDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], PageOptionsStreamInterestDto.prototype, "user_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], PageOptionsStreamInterestDto.prototype, "interest_face_corrective_skin_goals", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], PageOptionsStreamInterestDto.prototype, "interest_body_corrective_skin_goals", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], PageOptionsStreamInterestDto.prototype, "interest_augmentation_skin_goals", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], PageOptionsStreamInterestDto.prototype, "interest_sexually_and_skin_diseases_skin_goals", void 0);
exports.PageOptionsStreamInterestDto = PageOptionsStreamInterestDto;
//# sourceMappingURL=page-options-stream-interest.dto.js.map
//# debugId=6e006f2f-cc94-523e-a36c-e2f2c390ec97
