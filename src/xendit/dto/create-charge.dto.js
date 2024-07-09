"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c2d614a2-3702-5eff-9573-38e5aa3aa4e7")}catch(e){}}();

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
exports.CreateChargeDto = exports.XenditPaymentMethod = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
class CustomerIndividualDetail {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerIndividualDetail.prototype, "given_names", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerIndividualDetail.prototype, "surname", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerIndividualDetail.prototype, "nationality", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerIndividualDetail.prototype, "place_of_birth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerIndividualDetail.prototype, "date_of_birth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerIndividualDetail.prototype, "gender", void 0);
class Customer {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Customer.prototype, "reference_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.XenditCustomerType),
    __metadata("design:type", String)
], Customer.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => CustomerIndividualDetail),
    __metadata("design:type", CustomerIndividualDetail)
], Customer.prototype, "individual_detail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Customer.prototype, "mobile_number", void 0);
class XenditVirtualAccountChannelProperties {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], XenditVirtualAccountChannelProperties.prototype, "customer_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], XenditVirtualAccountChannelProperties.prototype, "virtual_account_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], XenditVirtualAccountChannelProperties.prototype, "suggested_amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], XenditVirtualAccountChannelProperties.prototype, "expires_at", void 0);
class XenditVirtualAccount {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], XenditVirtualAccount.prototype, "channel_code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => XenditVirtualAccountChannelProperties),
    __metadata("design:type", XenditVirtualAccountChannelProperties)
], XenditVirtualAccount.prototype, "channel_properties", void 0);
class XenditEwalletChannelPropertiesOvo {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], XenditEwalletChannelPropertiesOvo.prototype, "mobile_number", void 0);
class XenditEwalletChannelPropertiesShopeePay {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], XenditEwalletChannelPropertiesShopeePay.prototype, "success_return_url", void 0);
class XenditEwallet {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], XenditEwallet.prototype, "channel_code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => XenditEwalletChannelPropertiesOvo ||
        XenditEwalletChannelPropertiesShopeePay),
    __metadata("design:type", Object)
], XenditEwallet.prototype, "channel_properties", void 0);
class XenditQrCodeChannelProperties {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], XenditQrCodeChannelProperties.prototype, "expires_at", void 0);
class XenditQrCode {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], XenditQrCode.prototype, "channel_code", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => XenditQrCodeChannelProperties),
    __metadata("design:type", XenditQrCodeChannelProperties)
], XenditQrCode.prototype, "channel_properties", void 0);
class XenditPaymentMethod {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(enum_1.MethodOfPayment),
    __metadata("design:type", String)
], XenditPaymentMethod.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(enum_1.XenditPaymentMethodReusability),
    __metadata("design:type", String)
], XenditPaymentMethod.prototype, "reusability", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['payment_method', 'id']),
    __metadata("design:type", String)
], XenditPaymentMethod.prototype, "reference_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => XenditVirtualAccount),
    (0, class_validator_1.ValidateIf)((obj) => obj.type == enum_1.MethodOfPayment.VIRTUAL_ACCOUNT),
    __metadata("design:type", XenditVirtualAccount)
], XenditPaymentMethod.prototype, "virtual_account", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => XenditEwallet),
    (0, class_validator_1.ValidateIf)((obj) => obj.type == enum_1.MethodOfPayment.EWALLET),
    __metadata("design:type", XenditEwallet)
], XenditPaymentMethod.prototype, "ewallet", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => XenditQrCode),
    __metadata("design:type", XenditQrCode)
], XenditPaymentMethod.prototype, "qr_code", void 0);
exports.XenditPaymentMethod = XenditPaymentMethod;
class CreateChargeDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChargeDto.prototype, "reference_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChargeDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChargeDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateChargeDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => Customer),
    __metadata("design:type", Customer)
], CreateChargeDto.prototype, "customer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => XenditPaymentMethod),
    __metadata("design:type", XenditPaymentMethod)
], CreateChargeDto.prototype, "payment_method", void 0);
exports.CreateChargeDto = CreateChargeDto;
//# sourceMappingURL=create-charge.dto.js.map
//# debugId=c2d614a2-3702-5eff-9573-38e5aa3aa4e7
