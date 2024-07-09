"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cafda183-b969-5037-aee9-98b11634bcd9")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.midtransChargeTransformer = void 0;
const enum_1 = require("../constant/enum");
const midtransChargeTransformer = ({ transaction_id, transaction_type, selected_payment, transaction_details, customer_details, item_details, custom_expiry, }) => {
    let payment = '';
    let bank_transfer = {};
    let echannel = {};
    let gopay = {};
    if (selected_payment.method == enum_1.MethodOfPayment.EWALLET &&
        selected_payment.type == enum_1.TypeOfPayment.GOPAY) {
        payment = selected_payment.channel_code;
        gopay = {
            enable_callback: true,
            callback_url: `${process.env.APP_BASE_URL}/deeplink?url=heystetik://payment/success?transaction_id=${transaction_id}&transaction_type=${transaction_type}`,
        };
    }
    if (selected_payment.method == enum_1.MethodOfPayment.VIRTUAL_ACCOUNT &&
        selected_payment.type != enum_1.TypeOfPayment.MANDIRI) {
        payment = 'bank_transfer';
        bank_transfer = {
            bank_transfer: {
                bank: selected_payment.channel_code,
            },
        };
    }
    if (selected_payment.method == 'VIRTUAL_ACCOUNT' &&
        selected_payment.type == 'MANDIRI') {
        payment = 'echannel';
        echannel = {
            echannel: {
                bill_info1: 'Payment For:',
                bill_info2: 'Heystetik',
            },
        };
    }
    return {
        payment_type: payment,
        transaction_details,
        customer_details,
        item_details,
        ...({ bank_transfer } ?? {}),
        ...({ echannel } ?? {}),
        ...({ custom_expiry } ?? {}),
        ...gopay,
    };
};
exports.midtransChargeTransformer = midtransChargeTransformer;
//# sourceMappingURL=midtrans-charge.transformer.js.map
//# debugId=cafda183-b969-5037-aee9-98b11634bcd9
