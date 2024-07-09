"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a51dc165-0353-5849-8962-1fd26c4aaa16")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOptionalEnum = void 0;
const class_validator_1 = require("class-validator");
function IsOptionalEnum(enumType, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isOptionalEnum',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    if (value === '') {
                        return true;
                    }
                    return enumType.hasOwnProperty(value);
                },
                defaultMessage() {
                    const enumValues = Object.keys(enumType).join(', ');
                    return `Invalid value, must be one of: ${enumValues}`;
                },
            },
        });
    };
}
exports.IsOptionalEnum = IsOptionalEnum;
//# sourceMappingURL=is-optional-enum.validator.js.map
//# debugId=a51dc165-0353-5849-8962-1fd26c4aaa16
