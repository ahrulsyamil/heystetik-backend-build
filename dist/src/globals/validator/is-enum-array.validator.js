"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ab7f50da-19ef-512d-9d8e-c53c22de5a40")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEnumArray = void 0;
const class_validator_1 = require("class-validator");
function IsEnumArray(enumType, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isEnumArray',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    if (!Array.isArray(value)) {
                        return false;
                    }
                    const enumValues = Object.values(enumType);
                    for (const item of value) {
                        if (!enumValues.includes(item)) {
                            return false;
                        }
                    }
                    return true;
                },
                defaultMessage(args) {
                    console.log(args);
                    return `${args.property} must be an array of valid enum values`;
                },
            },
        });
    };
}
exports.IsEnumArray = IsEnumArray;
//# sourceMappingURL=is-enum-array.validator.js.map
//# debugId=ab7f50da-19ef-512d-9d8e-c53c22de5a40
