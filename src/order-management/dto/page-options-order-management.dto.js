"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8fbb0bfc-1fda-5c72-b106-5ecb4f1b7027")}catch(e){}}();

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
exports.PageOptionsOrderManagementDto = void 0;
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
const enum_1 = require("../../globals/constant/enum");
class PageOptionsOrderManagementDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.PaymentStatus),
    __metadata("design:type", String)
], PageOptionsOrderManagementDto.prototype, "payment_status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], PageOptionsOrderManagementDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], PageOptionsOrderManagementDto.prototype, "end_date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.transaction_product_order_status),
    __metadata("design:type", String)
], PageOptionsOrderManagementDto.prototype, "order_status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PageOptionsOrderManagementDto.prototype, "shipping_method_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.shipping_method_type),
    __metadata("design:type", String)
], PageOptionsOrderManagementDto.prototype, "shipping_type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(['created_at', 'total_paid', 'updated_at']),
    __metadata("design:type", String)
], PageOptionsOrderManagementDto.prototype, "sort_by", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.Order),
    __metadata("design:type", String)
], PageOptionsOrderManagementDto.prototype, "sort_type", void 0);
exports.PageOptionsOrderManagementDto = PageOptionsOrderManagementDto;
//# sourceMappingURL=page-options-order-management.dto.js.map
//# debugId=8fbb0bfc-1fda-5c72-b106-5ecb4f1b7027
