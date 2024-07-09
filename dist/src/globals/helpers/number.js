"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c3875f36-df67-5560-9d0a-70daab1299e3")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = exports.isNumeric = exports.calculateTransactionFee = exports.calculateProductFinalPrice = exports.calculateVoucherAmount = exports.generateReceiptNumber = exports.generateOTP = void 0;
const enum_1 = require("../constant/enum");
const generateOTP = (length) => {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp = `${otp}${digits[Math.floor(Math.random() * 10)]}`;
    }
    return otp;
};
exports.generateOTP = generateOTP;
const generateReceiptNumber = (length = 12) => {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    const receiptNumber = Math.floor(Math.random() * (max - min + 1) + min).toString();
    return receiptNumber;
};
exports.generateReceiptNumber = generateReceiptNumber;
const calculateVoucherAmount = (purchaseAmount, voucher) => {
    if (purchaseAmount < voucher.minimum_purchase)
        return 0;
    if (voucher.promotion_type == 'Free Shipping')
        return voucher.free_shipping_amount;
    if (voucher.promotion_type == 'Discount') {
        if (voucher.discount_type == 'Fix Amount')
            return voucher.discount_fix_amount;
        if (voucher.discount_type == 'Percentage')
            return Math.min(voucher.discount_percentage_maximum_amount, (purchaseAmount * voucher.discount_percentage) / 100);
        return 0;
    }
    return 0;
};
exports.calculateVoucherAmount = calculateVoucherAmount;
const calculateProductFinalPrice = (product) => {
    let finalPrice = product.price;
    if (product.discount_is_active) {
        if (product.discount_type == 'Fix Amount')
            finalPrice = Math.max(finalPrice - product.discount_fix_amount, 0);
        if (product.discount_type == 'Percentage')
            finalPrice -= Math.max((product.price * product.discount_percentage) / 100, 0);
    }
    return finalPrice;
};
exports.calculateProductFinalPrice = calculateProductFinalPrice;
const calculateTransactionFee = (purchaseAmount, paymentMethod) => {
    if (paymentMethod.transaction_fee_type == enum_1.TransactionFeeType.FIX_AMOUNT)
        return paymentMethod.transaction_fee_fix_amount;
    if (paymentMethod.transaction_fee_type == enum_1.TransactionFeeType.PERCENTAGE)
        return (purchaseAmount * paymentMethod.transaction_fee_percentage) / 100;
    if (paymentMethod.transaction_fee_type ==
        enum_1.TransactionFeeType.PERCENTAGE_FIX_AMOUNT)
        return ((purchaseAmount * paymentMethod.transaction_fee_percentage) / 100 +
            paymentMethod.transaction_fee_fix_amount);
    return 0;
};
exports.calculateTransactionFee = calculateTransactionFee;
const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};
exports.isNumeric = isNumeric;
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
};
exports.getRandomNumber = getRandomNumber;
//# sourceMappingURL=number.js.map
//# debugId=c3875f36-df67-5560-9d0a-70daab1299e3
