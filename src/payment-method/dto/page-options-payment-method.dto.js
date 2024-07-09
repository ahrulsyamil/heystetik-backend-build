"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ca3674c3-42a0-5213-8b42-23c6963132af")}catch(e){}}();

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
exports.PageOptionsPaymentMethodDto = void 0;
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
const is_enum_array_validator_1 = require("../../globals/validator/is-enum-array.validator");
class PageOptionsPaymentMethodDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, is_enum_array_validator_1.IsEnumArray)(enum_1.MethodOfPayment),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], PageOptionsPaymentMethodDto.prototype, "method", void 0);
exports.PageOptionsPaymentMethodDto = PageOptionsPaymentMethodDto;
//# sourceMappingURL=page-options-payment-method.dto.js.map
//# debugId=ca3674c3-42a0-5213-8b42-23c6963132af
