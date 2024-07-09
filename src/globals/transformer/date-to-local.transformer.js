"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="83c9c6a8-1624-557a-ba37-ee576a6e84b6")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDatesToLocal = void 0;
const dayjs = require("dayjs");
const transformDatesToLocal = (data) => {
    return data.map((item) => {
        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                if (item[key] instanceof Date) {
                    item[key] = dayjs.tz(item[key]).format();
                }
                else if (typeof item[key] === 'object' && !Array.isArray(item[key])) {
                    item[key] = (0, exports.transformDatesToLocal)([item[key]])[0];
                }
                else if (Array.isArray(item[key])) {
                    item[key] = (0, exports.transformDatesToLocal)(item[key]);
                }
            }
        }
        return item;
    });
};
exports.transformDatesToLocal = transformDatesToLocal;
//# sourceMappingURL=date-to-local.transformer.js.map
//# debugId=83c9c6a8-1624-557a-ba37-ee576a6e84b6
