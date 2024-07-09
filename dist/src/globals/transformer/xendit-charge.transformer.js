"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f4e9581a-71bd-5388-86b9-d4c12704406e")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.xenditChargeTransformer = void 0;
const enum_1 = require("../constant/enum");
const dayjs = require("dayjs");
const xenditChargeTransformer = ({ transaction_id, transaction_type, selected_payment, customer, payload, }) => {
    const paymentMethod = {
        type: enum_1.MethodOfPayment[selected_payment.method],
        reusability: enum_1.XenditPaymentMethodReusability.ONE_TIME_USE,
    };
    if (selected_payment.method == enum_1.MethodOfPayment.VIRTUAL_ACCOUNT) {
        paymentMethod.virtual_account = {
            channel_code: selected_payment.channel_code,
            channel_properties: {
                customer_name: customer.fullname,
                expires_at: dayjs().add(1, 'day').toISOString(),
            },
        };
    }
    if (selected_payment.method == enum_1.MethodOfPayment.EWALLET) {
        if (selected_payment.type == enum_1.TypeOfPayment.OVO) {
            paymentMethod.ewallet = {
                channel_code: selected_payment.channel_code,
                channel_properties: {
                    mobile_number: customer.phone,
                },
            };
        }
        if (selected_payment.type == enum_1.TypeOfPayment.SHOPEEPAY) {
            paymentMethod.ewallet = {
                channel_code: selected_payment.channel_code,
                channel_properties: {
                    success_return_url: `${process.env.APP_BASE_URL}/deeplink?url=heystetik://payment/success?transaction_id=${transaction_id}&transaction_type=${transaction_type}`,
                },
            };
        }
    }
    if (selected_payment.method == enum_1.MethodOfPayment.QR_CODE) {
        paymentMethod.qr_code = {
            channel_properties: {
                expires_at: dayjs().add(1, 'day').toISOString(),
            },
        };
    }
    return {
        reference_id: payload.reference_id,
        country: payload.country,
        currency: payload.currency,
        amount: payload.amount,
        payment_method: paymentMethod,
    };
};
exports.xenditChargeTransformer = xenditChargeTransformer;
//# sourceMappingURL=xendit-charge.transformer.js.map
//# debugId=f4e9581a-71bd-5388-86b9-d4c12704406e
