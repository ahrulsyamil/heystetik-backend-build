"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8dad599a-7649-5044-b26c-74a383df07d8")}catch(e){}}();

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
exports.InvoiceController = void 0;
const common_1 = require("@nestjs/common");
const htmlPdf = require("html-pdf-node");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const invoice_service_1 = require("./invoice.service");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const auth_guard_1 = require("../auth/auth.guard");
const skip_guard_decorator_1 = require("../decorators/skip-guard.decorator");
const config_1 = require("@nestjs/config");
const dayjs = require("dayjs");
const string_1 = require("../globals/helpers/string");
let InvoiceController = class InvoiceController {
    constructor(invoiceService, configService) {
        this.invoiceService = invoiceService;
        this.configService = configService;
    }
    async consultation(user, transactionId) {
        const find = await this.invoiceService.findConsultationInvoiceBy({
            transaction_consultation_id: transactionId,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.customer_id != user.id)
            throw new common_1.ForbiddenException();
        return find;
    }
    async consultationPreview(transactionId) {
        const data = await this.invoiceService.findConsultationInvoiceBy({
            transaction_consultation_id: transactionId,
        });
        if (!data) {
            throw new common_1.BadRequestException('Data not found');
        }
        data.base_url = process.env.APP_BASE_URL;
        data.doctor_address = data.doctor_address ?? '-';
        data.consultation_date = dayjs
            .tz(data.consultation_date)
            .format('D MMMM YYYY');
        data.total_fee = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(data.total_fee);
        data.total_discount = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(data.total_discount);
        data.total_paid = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(data.total_paid);
        data.invoice_date = dayjs.tz(data.created_at).format('D MMMM YYYY');
        data.invoice_time = dayjs.tz(data.created_at).format('HH:mm');
        return data;
    }
    async downloadConsultation(user, transactionId, res) {
        const find = await this.invoiceService.findConsultationInvoiceBy({
            transaction_consultation_id: transactionId,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.customer_id != user.id)
            throw new common_1.ForbiddenException();
        const options = { format: 'A4' };
        const file = {
            url: `${this.configService.get('app').base_url}/invoice/consultation/${transactionId}/preview`,
        };
        const buffer = await htmlPdf.generatePdf(file, options);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=invoice-consultation-${find.invoice_number}.pdf`);
        res.send(buffer);
    }
    async product(user, transactionId) {
        const find = await this.invoiceService.findProductInvoiceBy({
            transaction_product_id: transactionId,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.customer_id != user.id)
            throw new common_1.BadRequestException();
        return find;
    }
    async productPreview(transactionId) {
        const data = await this.invoiceService.findProductInvoiceBy({
            transaction_product_id: transactionId,
        });
        if (!data) {
            throw new common_1.BadRequestException('Data not found');
        }
        data.base_url = data.base_url = process.env.APP_BASE_URL;
        data.transaction_date = dayjs
            .tz(data.transaction_date)
            .format('D MMMM YYYY');
        data.total_price = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(data.total_price);
        data.delivery_fee = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(data.delivery_fee);
        data.transaction_fee = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(data.transaction_fee);
        data.tax = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(data.tax);
        data.total_discount = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(data.total_discount);
        data.total_paid = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(data.total_paid);
        data.total_product = data.product_invoice_items.length;
        data.discount_title = !data.voucher_type
            ? null
            : data.voucher_type == 'Discount'
                ? 'Diskon Barang'
                : 'Diskon Ongkos Kirim';
        data.invoice_date = dayjs.tz(data.created_at).format('D MMMM YYYY');
        data.invoice_time = dayjs.tz(data.created_at).format('HH:mm');
        data.product_invoice_items = data.product_invoice_items.map((item) => ({
            ...item,
            qty: (0, string_1.formatCurrency)(item.qty),
            price: new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(item.price),
            total_price: new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(item.total_price),
        }));
        return data;
    }
    async downloadProduct(user, transactionId, res) {
        const find = await this.invoiceService.findProductInvoiceBy({
            transaction_product_id: transactionId,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.customer_id != user.id)
            throw new common_1.ForbiddenException();
        const options = { format: 'A4' };
        const file = {
            url: `${this.configService.get('app').base_url}/invoice/product/${transactionId}/preview`,
        };
        const buffer = await htmlPdf.generatePdf(file, options);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=invoice-consultation-${find.invoice_number}.pdf`);
        res.send(buffer);
    }
};
__decorate([
    (0, common_1.Get)('consultation/:transactionId'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "consultation", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('consultation/:transactionId/preview'),
    (0, common_1.Render)('invoice/consultation'),
    (0, common_1.SetMetadata)('render', true),
    __param(0, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "consultationPreview", null);
__decorate([
    (0, common_1.Get)('consultation/:transactionId/download'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('transactionId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, Object]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "downloadConsultation", null);
__decorate([
    (0, common_1.Get)('product/:transactionId'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "product", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('product/:transactionId/preview'),
    (0, common_1.Render)('invoice/product'),
    (0, common_1.SetMetadata)('render', true),
    __param(0, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "productPreview", null);
__decorate([
    (0, common_1.Get)('product/:transactionId/download'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('transactionId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, Object]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "downloadProduct", null);
InvoiceController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('invoice'),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService,
        config_1.ConfigService])
], InvoiceController);
exports.InvoiceController = InvoiceController;
//# sourceMappingURL=invoice.controller.js.map
//# debugId=8dad599a-7649-5044-b26c-74a383df07d8
