"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b10ba26f-cb7c-5f97-aa3c-329b248dee86")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.XenditExpiryTimeInSecond = void 0;
const enum_1 = require("./enum");
exports.XenditExpiryTimeInSecond = {
    [enum_1.TypeOfPayment.MANDIRI]: 86400,
    [enum_1.TypeOfPayment.BRI]: 86400,
    [enum_1.TypeOfPayment.BSI]: 86400,
    [enum_1.TypeOfPayment.BJB]: 86400,
    [enum_1.TypeOfPayment.BNI]: 86400,
    [enum_1.TypeOfPayment.BCA]: 86400,
    [enum_1.TypeOfPayment.PERMATA]: 86400,
    [enum_1.TypeOfPayment.CIMB]: 86400,
    [enum_1.TypeOfPayment.MSB]: 86400,
    [enum_1.TypeOfPayment.BSS]: 86400,
    [enum_1.TypeOfPayment.OVO]: 55,
    [enum_1.TypeOfPayment.SHOPEEPAY]: 1800,
    [enum_1.TypeOfPayment.DANA]: 1800,
    [enum_1.TypeOfPayment.LINKAJA]: 1800,
    [enum_1.TypeOfPayment.QRIS]: 86400,
    [enum_1.TypeOfPayment.ASTRAPAY]: 900,
    [enum_1.TypeOfPayment.JENIUSPAY]: 600,
};
//# sourceMappingURL=common.js.map
//# debugId=b10ba26f-cb7c-5f97-aa3c-329b248dee86
