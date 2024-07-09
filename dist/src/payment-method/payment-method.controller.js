"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ae62f2b4-b199-58ab-9e8e-cbd22490b550")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const payment_method_service_1 = require("./payment-method.service");
const page_options_payment_method_dto_1 = require("./dto/page-options-payment-method.dto");
let PaymentMethodController = class PaymentMethodController {
    constructor(paymentMethodService) {
        this.paymentMethodService = paymentMethodService;
    }
    async findAll(pageOptions) {
        let result = await this.paymentMethodService.findAll(pageOptions);
        result = result.map((item) => ({
            ...item,
            description: item.is_active
                ? item.description
                : 'Tidak tersedia untuk transaksi ini',
        }));
        return result;
    }
    async find(id) {
        const find = await this.paymentMethodService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_payment_method_dto_1.PageOptionsPaymentMethodDto]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "find", null);
PaymentMethodController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiTags)('Payment Method'),
    (0, common_1.Controller)('payment-method'),
    __metadata("design:paramtypes", [payment_method_service_1.PaymentMethodService])
], PaymentMethodController);
exports.PaymentMethodController = PaymentMethodController;
//# sourceMappingURL=payment-method.controller.js.map
//# debugId=ae62f2b4-b199-58ab-9e8e-cbd22490b550
