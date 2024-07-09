"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f9d3db62-75c2-5622-ae3b-2b730cc511c1")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTimeRange = void 0;
const class_validator_1 = require("class-validator");
let IsTimeRange = class IsTimeRange {
    validate(value) {
        const pattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        return typeof value === 'string' && pattern.test(value);
    }
    defaultMessage(args) {
        return `${args.property} must be in the format "16:00-18:00"`;
    }
};
IsTimeRange = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'timeRange', async: true })
], IsTimeRange);
exports.IsTimeRange = IsTimeRange;
//# sourceMappingURL=time-range.validator.js.map
//# debugId=f9d3db62-75c2-5622-ae3b-2b730cc511c1
