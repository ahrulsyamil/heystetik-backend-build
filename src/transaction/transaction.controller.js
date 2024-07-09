"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="35969a3d-ebf0-5b35-b5b1-259497ed963e")}catch(e){}}();

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
exports.TransactionController = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const payment_gateway_payment_status_transformer_1 = require("../globals/transformer/payment-gateway-payment-status.transformer");
const invoice_service_1 = require("../invoice/invoice.service");
const midtrans_service_1 = require("../midtrans/midtrans.service");
const notification_service_1 = require("../notification/notification.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const user_entity_1 = require("../users/entities/user.entity");
const xendit_service_1 = require("../xendit/xendit.service");
const page_options_transaction_dto_1 = require("./dto/page-options-transaction.dto");
const transaction_service_1 = require("./transaction.service");
let TransactionController = class TransactionController {
    constructor(midtransService, transactionConsultationService, transactionTreatmentService, transactionProductService, transactioService, notificationService, invoiceService, xenditService, queueFcm) {
        this.midtransService = midtransService;
        this.transactionConsultationService = transactionConsultationService;
        this.transactionTreatmentService = transactionTreatmentService;
        this.transactionProductService = transactionProductService;
        this.transactioService = transactioService;
        this.notificationService = notificationService;
        this.invoiceService = invoiceService;
        this.xenditService = xenditService;
        this.queueFcm = queueFcm;
    }
    async getStatus(user, id) {
        const type = id.split('.')[0];
        const order_id = id.split('.')[1];
        if (!['CONSULTATION', 'PRODUCT', 'TREATMENT'].includes(type)) {
            throw new common_1.BadRequestException('Invalid order id');
        }
        let payment = null;
        let transaction;
        const result = {
            payment_status: null,
            payment_method: null,
            payment_type: null,
            expiry_time: null,
            va_number: null,
            bill_key: null,
            bill_code: null,
            qr_string: null,
            actions: [],
        };
        if (type == 'CONSULTATION') {
            const find = await this.transactionConsultationService.find(order_id);
            if (!find)
                throw new common_1.BadRequestException('Data not found');
            transaction = find;
            const data = {};
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                payment = await this.midtransService.status(id);
                const paymentStatus = (0, payment_gateway_payment_status_transformer_1.paymentGatewayPaymentStatusTransformer)(payment.transaction_status, find.payment_expiry_time);
                result.payment_status = paymentStatus;
                if (find.payment_status != paymentStatus) {
                    data.payment_status = paymentStatus;
                    if (paymentStatus == enum_1.PaymentStatus.SUCCEEDED &&
                        find.payment_status != enum_1.PaymentStatus.SUCCEEDED)
                        data.status = 'READY';
                }
            }
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Xendit) {
                payment = await this.xenditService.status(find.payment_external_id);
                const paymentStatus = (0, payment_gateway_payment_status_transformer_1.paymentGatewayPaymentStatusTransformer)(payment.status, find.payment_expiry_time);
                result.payment_status = paymentStatus;
                if (find.payment_status != paymentStatus) {
                    data.payment_status = paymentStatus;
                    if (paymentStatus == enum_1.PaymentStatus.SUCCEEDED &&
                        find.payment_status != enum_1.PaymentStatus.SUCCEEDED)
                        data.status = 'READY';
                }
            }
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Heystetik) {
                result.payment_status = enum_1.PaymentStatus.SUCCEEDED;
                payment = find.payment_method;
            }
            const transactionConsultation = await this.transactionConsultationService.update(find.id, data);
            if (data.payment_status == enum_1.PaymentStatus.SUCCEEDED &&
                transaction.payment_status != enum_1.PaymentStatus.SUCCEEDED) {
                const notification = await this.notificationService.create({
                    type: 'TRANSACTION_CONSULTATION_SUCCESS',
                    sender_id: 0,
                    recipient_id: transactionConsultation.customer_id,
                    title: 'Yeay, Transkasimu berhasil! 🎉🎉',
                    body: 'Sekarang kamu bisa mulai konsultasi dengan Dokter.',
                    data: {
                        transaction_id: find.id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: transactionConsultation.customer_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        transaction_id: find.id,
                    },
                });
            }
        }
        if (type == 'TREATMENT') {
            const find = await this.transactionTreatmentService.find(order_id);
            if (!find)
                throw new common_1.BadRequestException('Data not found');
            transaction = find;
            const data = {};
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                payment = await this.midtransService.status(id);
                const paymentStatus = (0, payment_gateway_payment_status_transformer_1.paymentGatewayPaymentStatusTransformer)(payment.transaction_status, find.payment_expiry_time);
                result.payment_status = paymentStatus;
                if (find.payment_status != paymentStatus) {
                    data.payment_status = paymentStatus;
                    if (paymentStatus == enum_1.PaymentStatus.SUCCEEDED &&
                        find.payment_status != enum_1.PaymentStatus.SUCCEEDED)
                        data.status = 'SELESAI';
                }
            }
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Xendit) {
                payment = await this.xenditService.status(find.payment_external_id);
                const paymentStatus = (0, payment_gateway_payment_status_transformer_1.paymentGatewayPaymentStatusTransformer)(payment.status, find.payment_expiry_time);
                result.payment_status = paymentStatus;
                if (find.payment_status != paymentStatus) {
                    data.payment_status = paymentStatus;
                    if (paymentStatus == enum_1.PaymentStatus.SUCCEEDED &&
                        find.payment_status != enum_1.PaymentStatus.SUCCEEDED)
                        data.status = 'SELESAI';
                }
            }
            const transactionTreatment = await this.transactionTreatmentService.update(order_id, data);
            if (data.payment_status == enum_1.PaymentStatus.SUCCEEDED &&
                transaction.payment_status != enum_1.PaymentStatus.SUCCEEDED) {
                const notification = await this.notificationService.create({
                    type: 'GENERAL',
                    sender_id: 0,
                    recipient_id: transactionTreatment.user_id,
                    title: 'Yeay, Transkasimu berhasil! 🎉🎉',
                    body: `Dana sebesar Rp${transactionTreatment.total_paid
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} berhasil dibayarkan`,
                    data: {
                        transaction_id: find.id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: transactionTreatment.user_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        transaction_id: find.id,
                    },
                });
            }
        }
        if (type == 'PRODUCT') {
            const find = await this.transactionProductService.find(order_id);
            if (!find)
                throw new common_1.BadRequestException('Data not found');
            transaction = find;
            const data = {};
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                payment = await this.midtransService.status(id);
                const paymentStatus = (0, payment_gateway_payment_status_transformer_1.paymentGatewayPaymentStatusTransformer)(payment.transaction_status, find.payment_expiry_time);
                result.payment_status = paymentStatus;
                if (find.payment_status != payment.transaction_status) {
                    data.payment_status = paymentStatus;
                    if (paymentStatus == enum_1.PaymentStatus.SUCCEEDED &&
                        find.payment_status != enum_1.PaymentStatus.SUCCEEDED)
                        data.status = 'DIPROSES';
                }
            }
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Xendit) {
                payment = await this.xenditService.status(find.payment_external_id);
                const paymentStatus = (0, payment_gateway_payment_status_transformer_1.paymentGatewayPaymentStatusTransformer)(payment.status, find.payment_expiry_time);
                result.payment_status = paymentStatus;
                if (find.payment_status != paymentStatus) {
                    data.payment_status = paymentStatus;
                    if (paymentStatus == enum_1.PaymentStatus.SUCCEEDED &&
                        find.payment_status != enum_1.PaymentStatus.SUCCEEDED)
                        data.status = 'DIPROSES';
                }
            }
            const transactionProduct = await this.transactionProductService.update(order_id, data);
            const findInvoice = await this.invoiceService.findProductInvoiceBy({
                transaction_product_id: order_id,
            });
            if (data.payment_status == enum_1.PaymentStatus.SUCCEEDED && !findInvoice) {
                const invoice = await this.invoiceService.createProductInvoice({
                    customer_id: find.user_id,
                    transaction_product_id: find.id,
                    invoice_number: await this.invoiceService.generateProductInvoiceNumber(),
                    transaction_date: find.created_at,
                    shipper_name: find.shipping_product.shipper.name,
                    customer_name: find.user.fullname,
                    customer_address: find.shipping_product.recipient_address,
                    voucher_type: find.total_discount > 0
                        ? find.transaction_product_voucher_applieds[0].voucher
                            .promotion_type
                        : null,
                    total_price: find.total_price,
                    delivery_fee: find.delivery_fee,
                    tax: find.tax,
                    total_discount: find.total_discount,
                    transaction_fee: find.transaction_fee,
                    total_paid: find.total_paid,
                    shipping_method: find.shipping_product.shipping_method.type,
                    payment_method: find.payment_method.name,
                });
                this.invoiceService.createProductItemInvoice(find.transaction_product_items.map((item) => ({
                    product_invoice_id: invoice.id,
                    product_name: item.product.name,
                    product_weight: item.product.shipping_product_weight,
                    product_weight_type: item.product.shipping_product_weight_type,
                    qty: item.qty,
                    price: item.price,
                    total_price: item.subtotal,
                })));
            }
            if (data.payment_status == enum_1.PaymentStatus.SUCCEEDED &&
                transaction.payment_status != enum_1.PaymentStatus.SUCCEEDED) {
                const notification = await this.notificationService.create({
                    type: 'GENERAL',
                    sender_id: 0,
                    recipient_id: transactionProduct.user_id,
                    title: 'Yeay, Transkasimu berhasil! 🎉🎉',
                    body: `Dana sebesar Rp${transactionProduct.total_paid
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} berhasil dibayarkan`,
                    data: {
                        transaction_id: find.id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: transactionProduct.user_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        transaction_id: find.id,
                    },
                });
            }
        }
        result.payment_method = transaction.payment_method.method;
        result.payment_type = transaction.payment_method.type;
        result.expiry_time = transaction.payment_expiry_time;
        result.va_number = transaction.va_number;
        result.bill_key = transaction.bill_key;
        result.bill_code = transaction.biller_code;
        result.qr_string = transaction.qr_string;
        if (transaction.payment_method.payment_gateway == enum_1.PaymentGateway.Midtrans &&
            transaction.payment_method.method == enum_1.MethodOfPayment.EWALLET) {
            const actions = JSON.parse((await this.transactioService.findTransactionLogBy({
                reference_id: transaction.order_id,
            })).response)?.actions;
            result.actions = [
                {
                    ...actions.find((x) => x.name == 'deeplink-redirect'),
                    name: 'DEFAULT',
                },
                ...actions,
            ];
        }
        if (transaction.payment_method.payment_gateway == enum_1.PaymentGateway.Xendit &&
            transaction.payment_method.method == enum_1.MethodOfPayment.EWALLET) {
            result.actions = [
                {
                    ...payment?.actions.find((x) => x.url_type == 'DEEPLINK'),
                    name: 'DEFAULT',
                    action: undefined,
                    url_type: undefined,
                    qr_code: undefined,
                },
                ...payment?.actions?.map((item) => ({
                    name: item.action,
                    method: item.method,
                    url: item.url,
                })),
            ];
        }
        if (!payment)
            throw new common_1.BadRequestException('Invalid order id');
        if (payment.status_code >= 400)
            throw new common_1.BadRequestException(status);
        if (payment.status_code >= 500)
            throw new common_1.InternalServerErrorException(payment.message);
        return {
            ...result,
            transaction,
            payment,
        };
    }
    async findAll(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        const data = await this.transactioService.findAll(pageOptionsDto);
        data.data = await Promise.all(data.data.map(async (item) => {
            let detail = null;
            if (item.transaction_type == 'TREATMENT') {
                detail = await this.transactionTreatmentService.find(item.transaction_id);
            }
            if (item.transaction_type == 'CONSULTATION') {
                detail = await this.transactionConsultationService.find(item.transaction_id);
            }
            if (item.transaction_type == 'PRODUCT') {
                detail = await this.transactionProductService.find(item.transaction_id);
            }
            return {
                ...item,
                detail,
            };
        }));
        return data;
    }
    async findTransactionProduct(order_id) {
        const find = await this.transactionProductService.find(order_id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async findTransactionTreatment(order_id) {
        const find = await this.transactionTreatmentService.find(order_id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async findTransactionConsultation(order_id) {
        const find = await this.transactionConsultationService.find(order_id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(':order_id/status'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getStatus", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_transaction_dto_1.PageOptionsTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(':order_id/product'),
    __param(0, (0, common_1.Param)('order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findTransactionProduct", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(':order_id/treatment'),
    __param(0, (0, common_1.Param)('order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findTransactionTreatment", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(':order_id/consultation'),
    __param(0, (0, common_1.Param)('order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findTransactionConsultation", null);
TransactionController = __decorate([
    (0, common_1.Controller)('transaction'),
    (0, swagger_1.ApiTags)('Transaction'),
    __param(8, (0, bull_1.InjectQueue)('queueFcm')),
    __metadata("design:paramtypes", [midtrans_service_1.MidtransService,
        transaction_consultation_service_1.TransactionConsultationService,
        transaction_treatment_service_1.TransactionTreatmentService,
        transaction_product_service_1.TransactionProductService,
        transaction_service_1.TransactionService,
        notification_service_1.NotificationService,
        invoice_service_1.InvoiceService,
        xendit_service_1.XenditService, Object])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map
//# debugId=35969a3d-ebf0-5b35-b5b1-259497ed963e
