"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8de6358d-582f-5aa8-86da-55704b1c1e86")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidDateString = void 0;
const class_validator_1 = require("class-validator");
let IsValidDateString = class IsValidDateString {
    validate(value) {
        if (value === null || value === undefined || value == '') {
            return true;
        }
        if (typeof value !== 'string') {
            return false;
        }
        const date = new Date(value);
        return !isNaN(date.getTime());
    }
    defaultMessage(args) {
        return `${args.property} must be a valid date string.`;
    }
};
IsValidDateString = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isValidDateString', async: true })
], IsValidDateString);
exports.IsValidDateString = IsValidDateString;
//# sourceMappingURL=is-valid-date-string.validator.js.map
//# debugId=8de6358d-582f-5aa8-86da-55704b1c1e86
