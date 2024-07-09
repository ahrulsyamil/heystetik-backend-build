"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b92e7493-0457-5376-9993-200e5c5be87f")}catch(e){}}();

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
exports.TransactionConsultationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crypto_1 = require("crypto");
const dayjs = require("dayjs");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const common_2 = require("../globals/constant/common");
const enum_1 = require("../globals/constant/enum");
const media_1 = require("../globals/constant/media");
const roles_guard_1 = require("../globals/guards/roles.guard");
const number_1 = require("../globals/helpers/number");
const string_1 = require("../globals/helpers/string");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const date_to_local_transformer_1 = require("../globals/transformer/date-to-local.transformer");
const midtrans_charge_transformer_1 = require("../globals/transformer/midtrans-charge.transformer");
const xendit_charge_transformer_1 = require("../globals/transformer/xendit-charge.transformer");
const media_service_1 = require("../media/media.service");
const medical_history_service_1 = require("../medical-history/medical-history.service");
const midtrans_service_1 = require("../midtrans/midtrans.service");
const payment_method_service_1 = require("../payment-method/payment-method.service");
const prisma_service_1 = require("../prisma/prisma.service");
const transaction_service_1 = require("../transaction/transaction.service");
const user_entity_1 = require("../users/entities/user.entity");
const voucher_service_1 = require("../voucher/voucher.service");
const xendit_service_1 = require("../xendit/xendit.service");
const create_transaction_consultation_dto_1 = require("./dto/create-transaction-consultation.dto");
const page_option_transaction_consultation_dto_1 = require("./dto/page-option-transaction-consultation.dto");
const transaction_consultation_service_1 = require("./transaction-consultation.service");
let TransactionConsultationController = class TransactionConsultationController {
    constructor(transactionConsultationService, medicalHistoryService, paymentMethodService, midtransService, prisma, mediaService, voucherService, transactionService, xenditService) {
        this.transactionConsultationService = transactionConsultationService;
        this.medicalHistoryService = medicalHistoryService;
        this.paymentMethodService = paymentMethodService;
        this.midtransService = midtransService;
        this.prisma = prisma;
        this.mediaService = mediaService;
        this.voucherService = voucherService;
        this.transactionService = transactionService;
        this.xenditService = xenditService;
    }
    async create(user, files, data) {
        const { payment_method, payment_type, interest_condition_id, medical_history_item, } = data;
        let media = [];
        if (!files)
            throw new common_1.BadRequestException('Property files is required');
        if (files.length == 0)
            throw new common_1.BadRequestException('At least 1 file is required');
        const [allPaymentMethods, findVoucher] = await Promise.all([
            this.paymentMethodService.findAll(),
            data.voucher_id ? this.voucherService.find(data.voucher_id) : null,
        ]);
        if (!allPaymentMethods
            .filter((x) => x.method == payment_method)
            .map((item) => item.type)
            .includes(enum_1.TypeOfPayment[payment_type]))
            throw new common_1.BadRequestException('Invalid payment type');
        if (!allPaymentMethods.find((x) => x.method == payment_method && x.type == payment_type).is_active)
            throw new common_1.BadRequestException('Selected payment is not active');
        if (data.voucher_id && !findVoucher)
            throw new common_1.BadRequestException('Voucher not found');
        if (findVoucher && findVoucher.promotion_type == 'Free Shipping')
            throw new common_1.BadRequestException('Invalid selected voucher, free shipping promotion type is not valid for this transaction');
        if (findVoucher &&
            (!['All Solution Voucher', 'Consultation Voucher'].includes(findVoucher.type) ||
                dayjs().isBefore(findVoucher.period_start) ||
                dayjs().isAfter(findVoucher.period_end)))
            throw new common_1.BadRequestException(`Invalid voucher for this transaction`);
        if (findVoucher && data.total_fee < findVoucher.minimum_purchase)
            throw new common_1.BadRequestException(`Invalid selected voucher, minimum purchase amount is ${(0, string_1.formatCurrency)(findVoucher.minimum_purchase, 'Rp')}`);
        const selectedPayment = allPaymentMethods.find((x) => x.method == payment_method && x.type == payment_type);
        if ((selectedPayment.method == enum_1.MethodOfPayment.FREE && data.total_paid > 0) ||
            (selectedPayment.method != enum_1.MethodOfPayment.FREE && data.total_paid <= 0))
            throw new common_1.BadRequestException('Invalid selected payment method');
        let totalFee = 45000;
        let transactionFee = enum_1.AppSetting.transaction_fee;
        let totalDiscount = 0;
        let tax = enum_1.AppSetting.transaction_tax;
        let totalPaid = totalFee + tax;
        if (findVoucher) {
            totalDiscount = (0, number_1.calculateVoucherAmount)(totalPaid, findVoucher);
            totalPaid -= totalDiscount;
        }
        totalPaid += transactionFee;
        totalFee = Math.round(totalFee);
        totalDiscount = Math.round(totalDiscount);
        tax = Math.round(0);
        transactionFee = Math.round(transactionFee);
        totalPaid = Math.round(totalPaid);
        if (totalFee != data.total_fee ||
            totalDiscount != data.total_discount ||
            tax != data.tax ||
            transactionFee != data.transaction_fee ||
            totalPaid != data.total_paid)
            throw new common_1.BadRequestException({
                message: 'There is something wrong with the calculation amount',
                espected_value: {
                    total_fee: totalFee,
                    total_discount: totalDiscount,
                    tax,
                    transaction_fee: transactionFee,
                    total_paid: totalPaid,
                },
            });
        if (files.length > 0) {
            media = await this.mediaService.insertMediaData(files);
        }
        let payment = null;
        const DBTransaction = await Promise.all(await this.prisma.$transaction(async (tx) => {
            const medicalHistory = await tx.medical_history.create({
                data: {
                    customer_id: user.id,
                    interest_condition_id,
                    medical_history_items: {
                        create: medical_history_item,
                    },
                    media_medical_histories: {
                        create: media,
                    },
                },
            });
            const transactionUUID = (0, crypto_1.randomUUID)();
            const refId = `CONSULTATION.${transactionUUID}`;
            const transaction = await tx.transaction_consultation.create({
                data: {
                    id: transactionUUID,
                    customer_id: user.id,
                    medical_history_id: medicalHistory.id,
                    duration: 30,
                    total_fee: totalFee,
                    total_discount: totalDiscount,
                    transaction_fee: transactionFee,
                    tax,
                    total_paid: totalPaid < 0 ? 0 : totalPaid,
                    order_id: refId,
                    payment_method_id: selectedPayment.id,
                    payment_status: selectedPayment.type == enum_1.TypeOfPayment.FREE_VOUCHER
                        ? enum_1.PaymentStatus.SUCCEEDED
                        : enum_1.PaymentStatus.PENDING,
                    status: selectedPayment.type == enum_1.TypeOfPayment.FREE_VOUCHER
                        ? 'READY'
                        : 'MENUNGGU_PEMBAYARAN',
                },
            });
            let payload = null;
            try {
                if (selectedPayment.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                    const charge = (0, midtrans_charge_transformer_1.midtransChargeTransformer)({
                        transaction_id: transactionUUID,
                        transaction_type: 'CONSULTATION',
                        selected_payment: selectedPayment,
                        transaction_details: {
                            gross_amount: transaction.total_paid,
                            order_id: refId,
                        },
                        customer_details: {
                            first_name: user.fullname,
                            email: user.email,
                            phone: user.no_phone,
                        },
                        custom_expiry: {
                            expiry_duration: 1,
                            unit: 'day',
                        },
                    });
                    payload = {
                        payment_type: charge.payment_type,
                        transaction_details: charge.transaction_details,
                        customer_details: charge.customer_details,
                        custom_expiry: charge.custom_expiry,
                        ...charge.bank_transfer,
                        ...charge.echannel,
                    };
                    payment = await this.midtransService.charge(payload);
                    if (payment.hasOwnProperty('status_code') &&
                        !(payment.status_code >= 200 && payment.status_code < 300)) {
                        this.transactionService.createTransactionLog({
                            user_id: user.id,
                            payment_method_id: selectedPayment.id,
                            reference_id: refId,
                            payment_gateway: selectedPayment.payment_gateway,
                            type: 'Charge',
                            response_exception: payment?.message ?? 'Something went wrong',
                        });
                        throw new Error(`Payment Gateway: ${payment?.message ?? 'Something went wrong'}`);
                    }
                }
                if (selectedPayment.payment_gateway == enum_1.PaymentGateway.Xendit) {
                    payload = (0, xendit_charge_transformer_1.xenditChargeTransformer)({
                        transaction_id: transactionUUID,
                        transaction_type: 'CONSULTATION',
                        selected_payment: selectedPayment,
                        customer: {
                            id: user.id.toString(),
                            fullname: user.fullname,
                            phone: user.no_phone,
                            type: enum_1.XenditCustomerType.INDIVIDUAL,
                            email: user.email,
                            dob: user.dob
                                ? dayjs(user.dob).format('YYYY-MM-DD').toString()
                                : null,
                            gender: !user.gender
                                ? null
                                : user.gender == enum_1.Gender['Laki-laki']
                                    ? 'MALE'
                                    : 'FEMALE',
                        },
                        payload: {
                            reference_id: refId,
                            country: enum_1.Country.ID,
                            currency: enum_1.Currency.IDR,
                            amount: totalPaid,
                        },
                    });
                    payment = await this.xenditService.charge(payload);
                }
                this.transactionService.createTransactionLog({
                    user_id: user.id,
                    payment_method_id: selectedPayment.id,
                    reference_id: refId,
                    payment_gateway: selectedPayment.payment_gateway,
                    type: 'Charge',
                    payload: JSON.stringify(payload),
                    response: JSON.stringify(payment),
                });
            }
            catch (err) {
                this.transactionService.createTransactionLog({
                    user_id: user.id,
                    payment_method_id: selectedPayment.id,
                    reference_id: refId,
                    payment_gateway: selectedPayment.payment_gateway,
                    type: 'Charge',
                    payload: JSON.stringify(payload),
                    response_exception: typeof err == 'object' ? JSON.stringify(err) : err,
                });
                throw new Error(err);
            }
            let updatedTransaction = null;
            if (selectedPayment.payment_gateway == enum_1.PaymentGateway.Heystetik) {
                updatedTransaction = transaction;
            }
            if (selectedPayment.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                updatedTransaction = await tx.transaction_consultation.update({
                    where: {
                        id: transaction.id,
                    },
                    data: {
                        payment_external_id: payment.transaction_id,
                        payment_expiry_time: new Date(payment?.expiry_time) ??
                            dayjs().add(1, 'day').toDate(),
                        va_number: payment?.permata_va_number ||
                            (payment?.va_numbers &&
                                typeof payment?.va_numbers == 'object' &&
                                payment?.va_numbers?.length > 0
                                ? payment?.va_numbers[0]?.va_number
                                : null) ||
                            null,
                        bill_key: payment?.bill_key || null,
                        biller_code: payment?.biller_code || null,
                    },
                });
            }
            if (selectedPayment.payment_gateway == enum_1.PaymentGateway.Xendit) {
                updatedTransaction = await tx.transaction_consultation.update({
                    where: {
                        id: transaction.id,
                    },
                    data: {
                        payment_external_id: payment.id,
                        payment_expiry_time: new Date(dayjs(payment.created_at)
                            .add(common_2.XenditExpiryTimeInSecond[selectedPayment.type], 'second')
                            .toDate()),
                        va_number: selectedPayment.method == enum_1.MethodOfPayment.VIRTUAL_ACCOUNT
                            ? payment.payment_method.virtual_account.channel_properties
                                .virtual_account_number
                            : null,
                        qr_string: selectedPayment.method == enum_1.MethodOfPayment.QR_CODE
                            ? payment.payment_method.qr_code.channel_properties
                                .qr_string
                            : null,
                    },
                });
            }
            return [
                (0, date_to_local_transformer_1.transformDatesToLocal)([medicalHistory])[0],
                (0, date_to_local_transformer_1.transformDatesToLocal)([updatedTransaction])[0],
                (0, date_to_local_transformer_1.transformDatesToLocal)([payment])[0],
            ];
        }, {
            maxWait: 5000,
            timeout: 60000,
        }));
        if (!DBTransaction[1] &&
            selectedPayment.payment_gateway == enum_1.PaymentGateway.Midtrans) {
            await this.midtransService.cancel(payment?.order_id);
        }
        if (DBTransaction[1] && findVoucher) {
            this.transactionConsultationService.createManyTransactionVoucer([
                {
                    transaction_consultation_id: DBTransaction[1].id,
                    voucher_id: findVoucher.id,
                    user_id: user.id,
                    amount_applied: totalDiscount,
                    voucher_details: JSON.stringify(findVoucher),
                },
            ]);
        }
        return {
            medical_history: DBTransaction[0],
            transaction: DBTransaction[1],
            payment: DBTransaction[2],
        };
    }
    async findAll(user, pageOptionsDto) {
        return this.transactionConsultationService.findAll(user.id, pageOptionsDto);
    }
};
__decorate([
    (0, common_1.Post)('order'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'files',
        dirPath: media_1.MEDIA_MEDICAL_HISTORY_DIR,
        prefixName: 'medical-history',
    })),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, create_transaction_consultation_dto_1.CreateTransactionConsultationDto]),
    __metadata("design:returntype", Promise)
], TransactionConsultationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_option_transaction_consultation_dto_1.PageOptionTransactionConsultationDto]),
    __metadata("design:returntype", Promise)
], TransactionConsultationController.prototype, "findAll", null);
TransactionConsultationController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('transaction/consultation'),
    (0, swagger_1.ApiTags)('Transaction Consultation'),
    __metadata("design:paramtypes", [transaction_consultation_service_1.TransactionConsultationService,
        medical_history_service_1.MedicalHistoryService,
        payment_method_service_1.PaymentMethodService,
        midtrans_service_1.MidtransService,
        prisma_service_1.PrismaService,
        media_service_1.MediaService,
        voucher_service_1.VoucherService,
        transaction_service_1.TransactionService,
        xendit_service_1.XenditService])
], TransactionConsultationController);
exports.TransactionConsultationController = TransactionConsultationController;
//# sourceMappingURL=transaction-consultation.controller.js.map
//# debugId=b92e7493-0457-5376-9993-200e5c5be87f
