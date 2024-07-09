"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="12129921-f7aa-530d-bb7a-92c6ca144ba5")}catch(e){}}();

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
exports.MidtransController = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../decorators/user.decorator");
const notification_service_1 = require("../notification/notification.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const user_entity_1 = require("../users/entities/user.entity");
const midtrans_service_1 = require("./midtrans.service");
const enum_1 = require("../globals/constant/enum");
const payment_gateway_payment_status_transformer_1 = require("../globals/transformer/payment-gateway-payment-status.transformer");
const invoice_service_1 = require("../invoice/invoice.service");
let MidtransController = class MidtransController {
    constructor(midtransService, transactionConsultationService, transactionTreatmentService, transactionProductService, notificationService, invoiceService, queueFcm) {
        this.midtransService = midtransService;
        this.transactionConsultationService = transactionConsultationService;
        this.transactionTreatmentService = transactionTreatmentService;
        this.transactionProductService = transactionProductService;
        this.notificationService = notificationService;
        this.invoiceService = invoiceService;
        this.queueFcm = queueFcm;
    }
    async handlePaymentStatusUpdate(user, payload) {
        console.log(payload);
        const { order_id, transaction_status } = payload;
        const type = order_id.split('.')[0];
        if (type == 'CONSULTATION') {
            const find = await this.transactionConsultationService.find(order_id);
            if (!find)
                throw new common_1.BadRequestException('Data not found');
            const data = {};
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                const paymentStatus = (0, payment_gateway_payment_status_transformer_1.paymentGatewayPaymentStatusTransformer)(transaction_status, find.payment_expiry_time);
                if (find.payment_status != paymentStatus) {
                    data.payment_status = paymentStatus;
                    if (paymentStatus == enum_1.PaymentStatus.SUCCEEDED &&
                        find.payment_status != enum_1.PaymentStatus.SUCCEEDED)
                        data.status = 'READY';
                }
            }
            const transactionConsultation = await this.transactionConsultationService.update(find.id, data);
            if (data.payment_status == enum_1.PaymentStatus.SUCCEEDED &&
                find.payment_status != enum_1.PaymentStatus.SUCCEEDED) {
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
            const data = {};
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                const paymentStatus = (0, payment_gateway_payment_status_transformer_1.paymentGatewayPaymentStatusTransformer)(transaction_status, find.payment_expiry_time);
                if (find.payment_status != paymentStatus) {
                    data.payment_status = paymentStatus;
                    if (paymentStatus == enum_1.PaymentStatus.SUCCEEDED &&
                        find.payment_status != enum_1.PaymentStatus.SUCCEEDED)
                        data.status = 'SELESAI';
                }
            }
            const transactionTreatment = await this.transactionTreatmentService.update(order_id, data);
            if (data.payment_status == enum_1.PaymentStatus.SUCCEEDED &&
                find.payment_status != enum_1.PaymentStatus.SUCCEEDED) {
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
            const data = {};
            if (find.payment_method.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                const paymentStatus = (0, payment_gateway_payment_status_transformer_1.paymentGatewayPaymentStatusTransformer)(transaction_status, find.payment_expiry_time);
                if (find.payment_status != transaction_status) {
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
                find.payment_status != enum_1.PaymentStatus.SUCCEEDED) {
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
        return 'Success';
    }
};
__decorate([
    (0, common_1.Post)('webhook/payment-status'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Object]),
    __metadata("design:returntype", Promise)
], MidtransController.prototype, "handlePaymentStatusUpdate", null);
MidtransController = __decorate([
    (0, common_1.Controller)('midtrans'),
    __param(6, (0, bull_1.InjectQueue)('queueFcm')),
    __metadata("design:paramtypes", [midtrans_service_1.MidtransService,
        transaction_consultation_service_1.TransactionConsultationService,
        transaction_treatment_service_1.TransactionTreatmentService,
        transaction_product_service_1.TransactionProductService,
        notification_service_1.NotificationService,
        invoice_service_1.InvoiceService, Object])
], MidtransController);
exports.MidtransController = MidtransController;
//# sourceMappingURL=midtrans.controller.js.map
//# debugId=12129921-f7aa-530d-bb7a-92c6ca144ba5
