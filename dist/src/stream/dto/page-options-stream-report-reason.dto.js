"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5a396157-039b-5cfe-b87a-86e260a0515f")}catch(e){}}();

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
exports.PageOptionsStreamReportReasonDto = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
const string_1 = require("../../globals/helpers/string");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
class PageOptionsStreamReportReasonDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, common_1.Optional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['report_reason', 'id']),
    (0, class_validator_1.ValidateIf)((obj, value) => (0, string_1.isNotNullOrEmpty)(value)),
    __metadata("design:type", Number)
], PageOptionsStreamReportReasonDto.prototype, "parent_id", void 0);
exports.PageOptionsStreamReportReasonDto = PageOptionsStreamReportReasonDto;
//# sourceMappingURL=page-options-stream-report-reason.dto.js.map
//# debugId=5a396157-039b-5cfe-b87a-86e260a0515f