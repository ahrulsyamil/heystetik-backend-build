"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ed133670-6f3c-5ca5-9a82-8067a3fa6f6e")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodModule = void 0;
const common_1 = require("@nestjs/common");
const payment_method_service_1 = require("./payment-method.service");
const payment_method_controller_1 = require("./payment-method.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let PaymentMethodModule = class PaymentMethodModule {
};
PaymentMethodModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [payment_method_controller_1.PaymentMethodController],
        providers: [payment_method_service_1.PaymentMethodService, user_service_1.UserService],
    })
], PaymentMethodModule);
exports.PaymentMethodModule = PaymentMethodModule;
//# sourceMappingURL=payment-method.module.js.map
//# debugId=ed133670-6f3c-5ca5-9a82-8067a3fa6f6e
