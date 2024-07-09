"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ac775fae-3a62-5350-af3c-a3427c0e5bad")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidBooleanString = exports.convertToBoolean = void 0;
const convertToBoolean = (str) => {
    const result = str == 'true' || str == true
        ? true
        : str == 'false' || str == false
            ? false
            : null;
    if (result === null)
        throw new Error('Invalid boolean value');
    return result;
};
exports.convertToBoolean = convertToBoolean;
const isValidBooleanString = (str) => {
    return str === 'true' || str === 'false';
};
exports.isValidBooleanString = isValidBooleanString;
//# sourceMappingURL=boolean.js.map
//# debugId=ac775fae-3a62-5350-af3c-a3427c0e5bad
