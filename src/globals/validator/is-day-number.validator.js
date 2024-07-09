"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3dec7b03-9f46-5577-aed7-8b2d7a344df0")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDayNumber = exports.IsValidDayNumberConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsValidDayNumberConstraint = class IsValidDayNumberConstraint {
    validate(value) {
        const dayNumber = Number(value);
        return !isNaN(dayNumber) && dayNumber >= 0 && dayNumber <= 6;
    }
    defaultMessage() {
        return 'Invalid day number. Must be one of: 0, 1, 2, 3, 4, 5, 6';
    }
};
IsValidDayNumberConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isDayNumber', async: true })
], IsValidDayNumberConstraint);
exports.IsValidDayNumberConstraint = IsValidDayNumberConstraint;
function IsDayNumber(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidDayNumberConstraint,
        });
    };
}
exports.IsDayNumber = IsDayNumber;
//# sourceMappingURL=is-day-number.validator.js.map
//# debugId=3dec7b03-9f46-5577-aed7-8b2d7a344df0
