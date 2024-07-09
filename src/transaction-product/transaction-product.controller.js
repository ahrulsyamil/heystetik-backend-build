"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2fd5b0a4-d0e7-5992-875b-e71d5fd63f33")}catch(e){}}();

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
exports.TransactionProductController = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const dayjs = require("dayjs");
const auth_guard_1 = require("../auth/auth.guard");
const consultation_service_1 = require("../consultation/consultation.service");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const common_2 = require("../globals/constant/common");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const number_1 = require("../globals/helpers/number");
const weight_1 = require("../globals/helpers/weight");
const date_to_local_transformer_1 = require("../globals/transformer/date-to-local.transformer");
const midtrans_charge_transformer_1 = require("../globals/transformer/midtrans-charge.transformer");
const xendit_charge_transformer_1 = require("../globals/transformer/xendit-charge.transformer");
const midtrans_service_1 = require("../midtrans/midtrans.service");
const payment_method_service_1 = require("../payment-method/payment-method.service");
const prisma_service_1 = require("../prisma/prisma.service");
const shipment_gosend_service_1 = require("../shipment-gosend/shipment-gosend.service");
const shipment_sicepat_service_1 = require("../shipment-sicepat/shipment-sicepat.service");
const shipping_service_1 = require("../shipping/shipping.service");
const transaction_service_1 = require("../transaction/transaction.service");
const user_address_service_1 = require("../user-address/user-address.service");
const voucher_service_1 = require("../voucher/voucher.service");
const xendit_service_1 = require("../xendit/xendit.service");
const create_transaction_product_dto_1 = require("./dto/create-transaction-product.dto");
const transaction_product_service_1 = require("./transaction-product.service");
let TransactionProductController = class TransactionProductController {
    constructor(paymentMethodService, midtransService, transactionProductService, consultationService, prisma, shippingMethodService, shipmentSicepatService, shipmentGosendService, shippingService, userAddressService, voucherService, transactionService, xenditService) {
        this.paymentMethodService = paymentMethodService;
        this.midtransService = midtransService;
        this.transactionProductService = transactionProductService;
        this.consultationService = consultationService;
        this.prisma = prisma;
        this.shippingMethodService = shippingMethodService;
        this.shipmentSicepatService = shipmentSicepatService;
        this.shipmentGosendService = shipmentGosendService;
        this.shippingService = shippingService;
        this.userAddressService = userAddressService;
        this.voucherService = voucherService;
        this.transactionService = transactionService;
        this.xenditService = xenditService;
    }
    async create(user, data) {
        const { product_item, payment_method, payment_type } = data;
        const [allPaymentMethod, products, shippingMethod, userAddress, shipper, findVoucher,] = await Promise.all([
            this.paymentMethodService.findAll(),
            this.transactionProductService.findManyBy({
                id: {
                    in: product_item.map((item) => item.product_id),
                },
            }),
            this.shippingMethodService.findOneShippingMethod(data.shipping_method_id),
            this.userAddressService.find(data.user_address_id),
            this.shippingService.findOneShipperByName('Apotek Srikandi'),
            data.voucher_id ? this.voucherService.find(data.voucher_id) : null,
        ]);
        if (!shipper)
            throw new common_1.BadRequestException('Shipper not found');
        if (!allPaymentMethod
            .filter((x) => x.method == payment_method)
            .map((item) => item.type)
            .includes(enum_1.TypeOfPayment[payment_type]))
            throw new common_1.BadRequestException('Invalid payment type');
        if (!allPaymentMethod.find((x) => x.method == payment_method && x.type == payment_type).is_active)
            throw new common_1.BadRequestException('Selected payment is not active');
        let totalWeight = 0;
        for (let i = 0; i < products.length; i++) {
            totalWeight += (0, weight_1.convertToKg)(data.product_item.find((x) => x.product_id == products[i].id).qty *
                products[i].shipping_product_weight, products[i].shipping_product_weight_type);
            const selectedProduct = product_item.find((x) => x.product_id == products[i].id);
            if (products[i].min_order > selectedProduct.qty)
                throw new common_1.BadRequestException(`Minimum purchase quantity not met. We regret to inform you that the quantity of the ${products[i].name} you are attempting to purchase is below the minimum order requirement. Please adjust the quantity to meet or exceed the minimum order quantity specified for this product.`);
            if (products[i].product_stock < selectedProduct.qty) {
                throw new common_1.BadRequestException(`Purchase cannot be processed. The product ${products[i].name} exceeds the currently available stock. Please try again with a smaller quantity or check the product's stock availability.`);
            }
        }
        const medicine = products.filter((x) => x.type == 'DRUGS');
        for (let i = 0; i < medicine.length; i++) {
            const recipe = await this.consultationService.findManyRecipeDrugBy({
                product_id: medicine[i].id,
                consultation: {
                    customer_id: user.id,
                },
            });
            if (recipe.length == 0)
                throw new common_1.BadRequestException(`Prescription for ${medicine[i].name} not found. We apologize, but the requested prescription for the ${medicine[i].name} could not be located. Please ensure the prescription details are accurate or reach out to our support team for further assistance.`);
            const activeRecipe = await this.consultationService.findRecipeDrugBy({
                product_id: medicine[i].id,
                consultation: {
                    customer_id: user.id,
                },
                due_date: {
                    gte: new Date(),
                },
            }, {
                due_date: 'asc',
            });
            if (!activeRecipe)
                throw new common_1.BadRequestException(`Prescription expired for medication. We regret to inform you that the doctor's prescription for ${medicine[i].name} has expired.  Please consult your doctor for a new prescription or consider other available options.`);
            if (activeRecipe.remaining_redeem_amount == 0)
                throw new common_1.BadRequestException(`Prescription medication purchase limit exceeded. We're sorry, but the purchase limit for this doctor's prescription medication has been exceeded. Please review your prescription details or contact our support team for further assistance.`);
        }
        const destination = await this.userAddressService.getDestination({
            province: userAddress.province,
            city: userAddress.city,
            subdistrict: userAddress.subdistrict,
            zip_code: userAddress.zip_code,
        });
        if (!destination)
            throw new common_1.BadRequestException('Destination not found');
        let deliveryFee = 0;
        if (shippingMethod.provider == 'sicepat') {
            const sicepatService = await this.shipmentSicepatService.getTariff({
                origin: shipper.origin_code,
                destination: destination.destination_code,
                weight: totalWeight,
            });
            const selectedSicepatService = sicepatService.sicepat.results.find((x) => x.service == shippingMethod.provider_service_code);
            if (!selectedSicepatService)
                throw new common_1.BadRequestException('Shipping method not found');
            deliveryFee = selectedSicepatService.tariff;
            if (selectedSicepatService.tariff != data.delivery_fee &&
                findVoucher?.promotion_type != enum_1.VoucherPromotionType['Free Shipping'])
                throw new common_1.BadRequestException({
                    message: 'There is something wrong with the delivery fee',
                    delivery_fee: selectedSicepatService.tariff,
                });
        }
        else if (shippingMethod.provider == 'gosend') {
            const gosendService = await this.shipmentGosendService.estimate({
                origin: `${shipper.latitude},${shipper.longitude}`,
                destination: `${userAddress.pinpoint_latitude},${userAddress.pinpoint_longitude}`,
            });
            const selectedGosendService = gosendService[shippingMethod.provider_service_code];
            if (!selectedGosendService)
                throw new common_1.BadRequestException('Shipping method not found');
            deliveryFee = selectedGosendService?.price?.total_price;
            if (selectedGosendService?.price?.total_price !== data.delivery_fee &&
                findVoucher?.promotion_type != enum_1.VoucherPromotionType['Free Shipping'])
                throw new common_1.BadRequestException('There is something wrong with the delivery fee');
        }
        else {
            throw new common_1.BadRequestException('Shipping method not found');
        }
        if (data.voucher_id && !findVoucher)
            throw new common_1.BadRequestException('Voucher not found');
        if (findVoucher &&
            (![
                'All Solution Voucher',
                'Skincare Voucher',
                'Medicine Voucher',
                'Product Voucher',
            ].includes(findVoucher.type) ||
                dayjs().isBefore(findVoucher.period_start) ||
                dayjs().isAfter(findVoucher.period_end)))
            throw new common_1.BadRequestException(`Invalid ${findVoucher.name} voucher for this transaction`);
        if (findVoucher &&
            findVoucher.type == 'Skincare Voucher' &&
            (products.filter((x) => x.type == 'DRUGS').length > 0 ||
                products.filter((x) => x.type == 'SKINCARE').length == 0))
            throw new common_1.BadRequestException(`Invalid ${findVoucher.name} voucher for this transaction. This voucher valid only for skincare product`);
        if (findVoucher &&
            findVoucher.type == 'Medicine Voucher' &&
            (products.filter((x) => x.type == 'DRUGS').length == 0 ||
                products.filter((x) => x.type == 'SKINCARE').length > 0))
            throw new common_1.BadRequestException(`Invalid voucher for this transaction. This voucher valid only for medicine product`);
        const selectedPayment = allPaymentMethod.find((x) => x.method == payment_method && x.type == payment_type);
        if (selectedPayment.method == enum_1.MethodOfPayment.FREE)
            throw new common_1.BadRequestException('Invalid selected payment method');
        let totalPrice = products.reduce((total, item) => total +
            (0, number_1.calculateProductFinalPrice)(item) *
                product_item.find((x) => x.product_id == item.id).qty, 0);
        let totalDiscount = 0;
        let transactionFee = enum_1.AppSetting.transaction_fee;
        let tax = enum_1.AppSetting.transaction_tax;
        let totalPaid = totalPrice + tax;
        if (findVoucher) {
            totalDiscount = (0, number_1.calculateVoucherAmount)(totalPaid, findVoucher);
            if (findVoucher.promotion_type == enum_1.VoucherPromotionType['Free Shipping']) {
                totalDiscount = Math.min(totalDiscount, deliveryFee);
                deliveryFee -= totalDiscount;
                deliveryFee = deliveryFee < 0 ? 0 : deliveryFee;
            }
            else {
                totalPaid -= totalDiscount;
            }
        }
        totalPaid += deliveryFee;
        totalPaid += transactionFee;
        totalPrice = Math.round(totalPrice);
        deliveryFee = Math.round(deliveryFee);
        totalDiscount = Math.round(totalDiscount);
        transactionFee = Math.round(transactionFee);
        tax = Math.round(tax);
        totalPaid = Math.round(totalPaid);
        if (totalPrice != data.total_price ||
            deliveryFee != data.delivery_fee ||
            totalDiscount != data.total_discount ||
            transactionFee != data.transaction_fee ||
            tax != data.tax ||
            totalPaid != data.total_paid ||
            data.total_paid <= 0)
            throw new common_1.BadRequestException({
                message: 'There is something wrong with the calculation amount',
                espected_value: {
                    total_price: totalPrice,
                    total_discount: totalDiscount,
                    delivery_fee: deliveryFee,
                    tax,
                    transaction_fee: transactionFee,
                    total_paid: totalPaid,
                },
            });
        let payment = null;
        const DBTransaction = await Promise.all(await this.prisma.$transaction(async (tx) => {
            const transactionUUID = (0, crypto_1.randomUUID)();
            const refId = `PRODUCT.${transactionUUID}`;
            const transaction = await tx.transaction_product.create({
                data: {
                    id: transactionUUID,
                    user_id: user.id,
                    total_price: totalPrice,
                    delivery_fee: deliveryFee,
                    transaction_fee: transactionFee,
                    tax,
                    total_discount: totalDiscount,
                    total_paid: totalPaid,
                    order_id: refId,
                    payment_method_id: selectedPayment.id,
                    payment_status: enum_1.PaymentStatus.PENDING,
                    status: 'MENUNGGU_PEMBAYARAN',
                    transaction_product_items: {
                        create: products.map((item) => {
                            return {
                                product_id: item.id,
                                qty: product_item.find((x) => x.product_id == item.id).qty,
                                price: (0, number_1.calculateProductFinalPrice)(item),
                                discount: 0,
                                subtotal: item.price,
                                note: product_item.find((x) => x.product_id == item.id)
                                    .note,
                            };
                        }),
                    },
                },
            });
            let payload = null;
            try {
                if (selectedPayment.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                    const charge = (0, midtrans_charge_transformer_1.midtransChargeTransformer)({
                        transaction_id: transactionUUID,
                        transaction_type: 'PRODUCT',
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
                        transaction_type: 'PRODUCT',
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
            if (selectedPayment.payment_gateway == enum_1.PaymentGateway.Midtrans) {
                updatedTransaction = await tx.transaction_product.update({
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
                updatedTransaction = await tx.transaction_product.update({
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
        await Promise.all([
            this.shippingService.create({
                user_id: user.id,
                transaction_product_id: DBTransaction[0].id,
                shipping_method_id: shippingMethod.id,
                shipper_id: shipper.id,
                recipient_name: userAddress.recipient_name,
                recipient_phone: userAddress.recipient_phone,
                recipient_latitude: userAddress.pinpoint_latitude.toString(),
                recipient_longitude: userAddress.pinpoint_longitude.toString(),
                recipient_province: userAddress.province,
                recipient_city: userAddress.city,
                recipient_subdistrict: userAddress.subdistrict,
                recipient_zip_code: userAddress.zip_code,
                recipient_address: userAddress.complete_address,
                recipient_note: userAddress.note_for_courier,
                delivery_fee: data.delivery_fee,
            }),
            findVoucher
                ? this.transactionProductService.createManyTransactionVoucherApplied([
                    {
                        transaction_product_id: DBTransaction[0].id,
                        voucher_id: findVoucher.id,
                        user_id: user.id,
                        amount_applied: totalDiscount,
                        voucher_details: JSON.stringify(findVoucher),
                    },
                ])
                : null,
        ]);
        return {
            transaction: DBTransaction[0],
            payment: DBTransaction[1],
        };
    }
};
__decorate([
    (0, common_1.Post)('order'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_transaction_product_dto_1.CreateTransactionProductDto]),
    __metadata("design:returntype", Promise)
], TransactionProductController.prototype, "create", null);
TransactionProductController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('transaction/product'),
    __metadata("design:paramtypes", [payment_method_service_1.PaymentMethodService,
        midtrans_service_1.MidtransService,
        transaction_product_service_1.TransactionProductService,
        consultation_service_1.ConsultationService,
        prisma_service_1.PrismaService,
        shipping_service_1.ShippingService,
        shipment_sicepat_service_1.ShipmentSicepatService,
        shipment_gosend_service_1.ShipmentGosendService,
        shipping_service_1.ShippingService,
        user_address_service_1.UserAddressService,
        voucher_service_1.VoucherService,
        transaction_service_1.TransactionService,
        xendit_service_1.XenditService])
], TransactionProductController);
exports.TransactionProductController = TransactionProductController;
//# sourceMappingURL=transaction-product.controller.js.map
//# debugId=2fd5b0a4-d0e7-5992-875b-e71d5fd63f33
