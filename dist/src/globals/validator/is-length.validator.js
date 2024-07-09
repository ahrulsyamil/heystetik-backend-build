"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ea53e3a3-831e-55da-bc17-c556ac4cb151")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsLength = exports.LengthConstraint = void 0;
const class_validator_1 = require("class-validator");
let LengthConstraint = class LengthConstraint {
    validate(value, args) {
        const expectedLength = args.constraints[0];
        if (value) {
            return value.toString().length === expectedLength;
        }
        return true;
    }
    defaultMessage(args) {
        const expectedLength = args.constraints[0];
        return `The length of the value must be exactly ${expectedLength} characters.`;
    }
};
LengthConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isLength', async: true })
], LengthConstraint);
exports.LengthConstraint = LengthConstraint;
function IsLength(expectedLength, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [expectedLength],
            validator: LengthConstraint,
            async: false,
        });
    };
}
exports.IsLength = IsLength;
//# sourceMappingURL=is-length.validator.js.map
//# debugId=ea53e3a3-831e-55da-bc17-c556ac4cb151
