"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3092eca2-6d0b-501c-a730-a28b33e2deae")}catch(e){}}();

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
exports.PageOptionsAvailableVoucherDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
const enum_1 = require("../../globals/constant/enum");
const is_enum_array_validator_1 = require("../../globals/validator/is-enum-array.validator");
class PageOptionsAvailableVoucherDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], PageOptionsAvailableVoucherDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, is_enum_array_validator_1.IsEnumArray)(enum_1.VoucherType),
    __metadata("design:type", Array)
], PageOptionsAvailableVoucherDto.prototype, "type", void 0);
exports.PageOptionsAvailableVoucherDto = PageOptionsAvailableVoucherDto;
//# sourceMappingURL=page-options-available-voucher.dto.js.map
//# debugId=3092eca2-6d0b-501c-a730-a28b33e2deae
