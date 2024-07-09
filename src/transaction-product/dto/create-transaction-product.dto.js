"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1b6d045c-583b-5d79-904c-d5606f3bf516")}catch(e){}}();

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
exports.CreateTransactionProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
const string_1 = require("../../globals/helpers/string");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
class CreateTransactionProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => ProductItemDto),
    __metadata("design:type", Array)
], CreateTransactionProductDto.prototype, "product_item", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.MethodOfPayment),
    __metadata("design:type", String)
], CreateTransactionProductDto.prototype, "payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.TypeOfPayment),
    __metadata("design:type", String)
], CreateTransactionProductDto.prototype, "payment_type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['shipping_method', 'id']),
    __metadata("design:type", Number)
], CreateTransactionProductDto.prototype, "shipping_method_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['user_address', 'id']),
    __metadata("design:type", Number)
], CreateTransactionProductDto.prototype, "user_address_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['voucher', 'id']),
    (0, class_validator_1.ValidateIf)((obj, value) => (0, string_1.isNotNullOrEmpty)(value)),
    __metadata("design:type", Number)
], CreateTransactionProductDto.prototype, "voucher_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionProductDto.prototype, "total_price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], CreateTransactionProductDto.prototype, "total_discount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionProductDto.prototype, "delivery_fee", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionProductDto.prototype, "transaction_fee", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionProductDto.prototype, "tax", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionProductDto.prototype, "total_paid", void 0);
exports.CreateTransactionProductDto = CreateTransactionProductDto;
class ProductItemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['product', 'id']),
    __metadata("design:type", Number)
], ProductItemDto.prototype, "product_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductItemDto.prototype, "qty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductItemDto.prototype, "note", void 0);
//# sourceMappingURL=create-transaction-product.dto.js.map
//# debugId=1b6d045c-583b-5d79-904c-d5606f3bf516
