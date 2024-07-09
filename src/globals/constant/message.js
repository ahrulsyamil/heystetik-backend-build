"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ba1b2ffa-22d9-58bb-90b5-5172d6493289")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataFailed = void 0;
class CreateDataFailed extends Error {
    constructor() {
        super(...arguments);
        this.name = 'CreateDataFailed';
        this.message = 'Create Data Failed';
    }
}
exports.CreateDataFailed = CreateDataFailed;
//# sourceMappingURL=message.js.map
//# debugId=ba1b2ffa-22d9-58bb-90b5-5172d6493289
