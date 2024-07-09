"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="30cb5c3b-7fef-5645-9be9-9d2d1d8a1398")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentTypeTransformer = void 0;
const paymentTypeTransformer = (params) => ['CREDIT_CARD', 'GOPAY'].includes(params.value)
    ? params.value?.toLowerCase().trim()
    : 'bank_transfer';
exports.paymentTypeTransformer = paymentTypeTransformer;
//# sourceMappingURL=payment-type.transformer.js.map
//# debugId=30cb5c3b-7fef-5645-9be9-9d2d1d8a1398
