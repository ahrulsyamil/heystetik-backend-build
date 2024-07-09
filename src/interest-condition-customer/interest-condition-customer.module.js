"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e24bbbfc-54a6-556b-957a-8e73500b19d6")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestConditionCustomerModule = void 0;
const common_1 = require("@nestjs/common");
const interest_condition_customer_service_1 = require("./interest-condition-customer.service");
const interest_condition_customer_controller_1 = require("./interest-condition-customer.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let InterestConditionCustomerModule = class InterestConditionCustomerModule {
};
InterestConditionCustomerModule = __decorate([
    (0, common_1.Module)({
        controllers: [interest_condition_customer_controller_1.InterestConditionsController],
        providers: [interest_condition_customer_service_1.InterestConditionsService],
        imports: [prisma_module_1.PrismaModule],
    })
], InterestConditionCustomerModule);
exports.InterestConditionCustomerModule = InterestConditionCustomerModule;
//# sourceMappingURL=interest-condition-customer.module.js.map
//# debugId=e24bbbfc-54a6-556b-957a-8e73500b19d6
