"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a234c3d0-a9c3-52cd-a5ce-2bff341c2e6f")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsBase64Array = exports.IsBase64ArrayConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsBase64ArrayConstraint = class IsBase64ArrayConstraint {
    validate(value) {
        if (!Array.isArray(value)) {
            return false;
        }
        return value.every((item) => {
            const base64Regex = /^data:([a-zA-Z0-9+/]+);base64,/;
            return typeof item === 'string' && base64Regex.test(item);
        });
    }
    defaultMessage(args) {
        return `${args.property} must be an array of valid base64 strings`;
    }
};
IsBase64ArrayConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isBase64Array', async: true })
], IsBase64ArrayConstraint);
exports.IsBase64ArrayConstraint = IsBase64ArrayConstraint;
function IsBase64Array(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsBase64ArrayConstraint,
        });
    };
}
exports.IsBase64Array = IsBase64Array;
//# sourceMappingURL=base64-array.validator.js.map
//# debugId=a234c3d0-a9c3-52cd-a5ce-2bff341c2e6f
