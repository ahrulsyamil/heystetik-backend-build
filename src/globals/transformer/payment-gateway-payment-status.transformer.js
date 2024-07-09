"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a531a88f-a62d-5c23-a965-8e0b69edf474")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentGatewayPaymentStatusTransformer = void 0;
const dayjs = require("dayjs");
const enum_1 = require("../constant/enum");
const string_1 = require("../helpers/string");
const paymentGatewayPaymentStatusTransformer = (status, expiryTime) => {
    if ((0, string_1.isNotNullOrEmpty)(expiryTime) && dayjs().isAfter(expiryTime)) {
        return enum_1.PaymentStatus.EXPIRED;
    }
    if (['settlement', 'SUCCEEDED'].includes(status))
        return enum_1.PaymentStatus.SUCCEEDED;
    if ([
        'authorize',
        'capture',
        'cancel',
        'refund',
        'partial_fund',
        'chargeback',
        'partial_chargeback',
    ].includes(status))
        return enum_1.PaymentStatus.UNKNOWN;
    if (['deny', 'failure', 'FAILED'].includes(status))
        return enum_1.PaymentStatus.FAILED;
    if (['pending', 'REQUIRES_ACTION', 'PENDING', 'AWAITING_CAPTURE'].includes(status))
        return enum_1.PaymentStatus.PENDING;
    if (['expire'].includes(status))
        return enum_1.PaymentStatus.EXPIRED;
    return enum_1.PaymentStatus.UNKNOWN;
};
exports.paymentGatewayPaymentStatusTransformer = paymentGatewayPaymentStatusTransformer;
//# sourceMappingURL=payment-gateway-payment-status.transformer.js.map
//# debugId=a531a88f-a62d-5c23-a965-8e0b69edf474
