"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="49653e76-a37f-56f3-95c9-c3a8fb26f1f1")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToKg = void 0;
const client_1 = require("@prisma/client");
const convertToKg = (value, weightType) => {
    switch (weightType) {
        case client_1.product_shipping_weight_type.gr:
            return value * 0.001;
        case client_1.product_shipping_weight_type.kg:
            return value * 1;
    }
};
exports.convertToKg = convertToKg;
//# sourceMappingURL=weight.js.map
//# debugId=49653e76-a37f-56f3-95c9-c3a8fb26f1f1
