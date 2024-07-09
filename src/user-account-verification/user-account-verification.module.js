"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="04ac19cb-4c59-5c7d-a9e9-c9803118b084")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountVerificationModule = void 0;
const common_1 = require("@nestjs/common");
const user_account_verification_service_1 = require("./user-account-verification.service");
const user_account_verification_controller_1 = require("./user-account-verification.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const users_service_1 = require("../users/users.service");
const media_service_1 = require("../media/media.service");
let UserAccountVerificationModule = class UserAccountVerificationModule {
};
UserAccountVerificationModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_account_verification_controller_1.UserAccountVerificationController],
        providers: [
            user_account_verification_service_1.UserAccountVerificationService,
            user_service_1.UserService,
            users_service_1.UsersService,
            media_service_1.MediaService,
        ],
    })
], UserAccountVerificationModule);
exports.UserAccountVerificationModule = UserAccountVerificationModule;
//# sourceMappingURL=user-account-verification.module.js.map
//# debugId=04ac19cb-4c59-5c7d-a9e9-c9803118b084
