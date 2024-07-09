"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="99059025-81c1-5300-849f-99a2f7cf4c92")}catch(e){}}();

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
exports.PageOptionsVoucherDto = void 0;
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
const enum_1 = require("../../globals/constant/enum");
class PageOptionsVoucherDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.VoucherType, { each: true }),
    __metadata("design:type", Array)
], PageOptionsVoucherDto.prototype, "voucher_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enum_1.VourcherTarget, { each: true }),
    __metadata("design:type", Array)
], PageOptionsVoucherDto.prototype, "target_voucher", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enum_1.VoucherPromotionType, { each: true }),
    __metadata("design:type", Array)
], PageOptionsVoucherDto.prototype, "promotion_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enum_1.VoucherDiscountType, { each: true }),
    __metadata("design:type", Array)
], PageOptionsVoucherDto.prototype, "discount_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enum_1.VoucherTargetBuyer, { each: true }),
    __metadata("design:type", Array)
], PageOptionsVoucherDto.prototype, "target_buyer", void 0);
exports.PageOptionsVoucherDto = PageOptionsVoucherDto;
//# sourceMappingURL=page-options-vourcher.dto.js.map
//# debugId=99059025-81c1-5300-849f-99a2f7cf4c92
