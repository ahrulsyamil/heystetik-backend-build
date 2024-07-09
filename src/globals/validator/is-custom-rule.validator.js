"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="73306b5b-bedb-583a-b77b-397edc24d5de")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCustomRule = void 0;
const class_validator_1 = require("class-validator");
let CustomValidationConstraint = class CustomValidationConstraint {
    validate(value, args) {
        const rule = args.constraints[0];
        return rule(value);
    }
    defaultMessage(args) {
        return `${args.property} ${args.constraints[1]}`;
    }
};
CustomValidationConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsCustomRule', async: true })
], CustomValidationConstraint);
function IsCustomRule(rule, message, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [rule, message],
            validator: CustomValidationConstraint,
        });
    };
}
exports.IsCustomRule = IsCustomRule;
//# sourceMappingURL=is-custom-rule.validator.js.map
//# debugId=73306b5b-bedb-583a-b77b-397edc24d5de
