"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0d22d1b0-b0ad-54d7-9c20-a61fc662a6c3")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddressModule = void 0;
const common_1 = require("@nestjs/common");
const user_address_service_1 = require("./user-address.service");
const user_address_controller_1 = require("./user-address.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let UserAddressModule = class UserAddressModule {
};
UserAddressModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_address_controller_1.UserAddressController],
        providers: [user_address_service_1.UserAddressService, user_service_1.UserService],
    })
], UserAddressModule);
exports.UserAddressModule = UserAddressModule;
//# sourceMappingURL=user-address.module.js.map
//# debugId=0d22d1b0-b0ad-54d7-9c20-a61fc662a6c3
