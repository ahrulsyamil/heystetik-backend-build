"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="21769fba-783b-5a23-a447-7aa15108930b")}catch(e){}}();

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
exports.CreateVoucherDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
class CreateVoucherDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.VoucherType),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateVoucherDto.prototype, "period_start", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? new Date(value) : value)),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateVoucherDto.prototype, "period_end", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value == 'true' ? true : value == 'false' ? false : value),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateVoucherDto.prototype, "repeat_next_month", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "repeat_throughout", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.VourcherTarget),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "target_voucher", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)(({ target_voucher }) => target_voucher == enum_1.VourcherTarget.Special),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.VoucherPromotionType),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "promotion_type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value, obj }) => {
        if (obj.promotion_type != enum_1.VoucherPromotionType['Free Shipping'])
            return null;
        return value ? parseInt(value) : value;
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.ValidateIf)(({ promotion_type }) => promotion_type == enum_1.VoucherPromotionType['Free Shipping']),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "free_shipping_amount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.VoucherDiscountType),
    (0, class_transformer_1.Transform)(({ value, obj }) => {
        if (obj.promotion_type != enum_1.VoucherPromotionType.Discount)
            return null;
        return value;
    }),
    (0, class_validator_1.ValidateIf)(({ promotion_type }) => promotion_type == enum_1.VoucherPromotionType.Discount),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "discount_type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value, obj }) => {
        if (obj.promotion_type != enum_1.VoucherPromotionType.Discount ||
            obj.discount_type != enum_1.VoucherDiscountType['Fix Amount'])
            return null;
        return value ? parseInt(value) : value;
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.ValidateIf)(({ discount_type }) => discount_type == enum_1.VoucherDiscountType['Fix Amount']),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "discount_fix_amount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value, obj }) => {
        if (obj.promotion_type != enum_1.VoucherPromotionType.Discount ||
            obj.discount_type != enum_1.VoucherDiscountType.Percentage)
            return null;
        return value ? parseInt(value) : value;
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.ValidateIf)(({ discount_type }) => discount_type == enum_1.VoucherDiscountType.Percentage),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "discount_percentage", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value, obj }) => {
        if (obj.promotion_type != enum_1.VoucherPromotionType.Discount ||
            obj.discount_type != enum_1.VoucherDiscountType.Percentage)
            return null;
        return value ? parseInt(value) : value;
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.ValidateIf)(({ discount_type }) => discount_type == enum_1.VoucherDiscountType.Percentage),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "discount_percentage_maximum_amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "minimum_purchase", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "quota", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.VoucherTargetBuyer),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "target_buyer", void 0);
exports.CreateVoucherDto = CreateVoucherDto;
//# sourceMappingURL=create-voucher.dto.js.map
//# debugId=21769fba-783b-5a23-a447-7aa15108930b
