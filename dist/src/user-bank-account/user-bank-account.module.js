"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8dfe4577-96bd-5e83-95d5-e9c047387826")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBankAccountModule = void 0;
const common_1 = require("@nestjs/common");
const user_bank_account_service_1 = require("./user-bank-account.service");
const prisma_module_1 = require("../prisma/prisma.module");
const user_bank_account_controller_1 = require("./user-bank-account.controller");
const user_service_1 = require("../auth/user/user.service");
let UserBankAccountModule = class UserBankAccountModule {
};
UserBankAccountModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [user_bank_account_service_1.UserBankAccountService, user_bank_account_service_1.UserBankAccountService, user_service_1.UserService],
        controllers: [user_bank_account_controller_1.UserBankAccountController],
    })
], UserBankAccountModule);
exports.UserBankAccountModule = UserBankAccountModule;
//# sourceMappingURL=user-bank-account.module.js.map
//# debugId=8dfe4577-96bd-5e83-95d5-e9c047387826
