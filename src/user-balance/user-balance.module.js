"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1c290956-f023-55c4-983b-849a0dee9e23")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBalanceModule = void 0;
const common_1 = require("@nestjs/common");
const user_balance_service_1 = require("./user-balance.service");
const prisma_module_1 = require("../prisma/prisma.module");
const user_balance_controller_1 = require("./user-balance.controller");
const user_service_1 = require("../auth/user/user.service");
const user_bank_account_service_1 = require("../user-bank-account/user-bank-account.service");
let UserBalanceModule = class UserBalanceModule {
};
UserBalanceModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_balance_controller_1.UserBalanceController],
        providers: [
            user_balance_service_1.UserBalanceService,
            user_balance_service_1.UserBalanceService,
            user_service_1.UserService,
            user_bank_account_service_1.UserBankAccountService,
        ],
    })
], UserBalanceModule);
exports.UserBalanceModule = UserBalanceModule;
//# sourceMappingURL=user-balance.module.js.map
//# debugId=1c290956-f023-55c4-983b-849a0dee9e23
