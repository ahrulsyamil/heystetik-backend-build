"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4a8935e2-73a0-5472-bfd1-0762f930dea7")}catch(e){}}();

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
exports.PageOptionsMyJourneyConsultationDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
class PageOptionsMyJourneyConsultationDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], PageOptionsMyJourneyConsultationDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['concern', 'id']),
    __metadata("design:type", Number)
], PageOptionsMyJourneyConsultationDto.prototype, "concern_id", void 0);
exports.PageOptionsMyJourneyConsultationDto = PageOptionsMyJourneyConsultationDto;
//# sourceMappingURL=page-options-my-journey-consultation.dto.js.map
//# debugId=4a8935e2-73a0-5472-bfd1-0762f930dea7
