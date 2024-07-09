"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="95bf34ab-48cc-5068-abd9-6583b402f31d")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoWhitespace = void 0;
const class_validator_1 = require("class-validator");
function NoWhitespace(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'noWhitespace',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    return typeof value === 'string' && !/\s/.test(value);
                },
                defaultMessage() {
                    return '$property should not contain whitespace';
                },
            },
        });
    };
}
exports.NoWhitespace = NoWhitespace;
//# sourceMappingURL=no-whitespace.validator.js.map
//# debugId=95bf34ab-48cc-5068-abd9-6583b402f31d
