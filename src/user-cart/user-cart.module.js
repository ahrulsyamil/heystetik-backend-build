"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="81f4b38d-b55e-5b2d-8c88-e072b1682928")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCartModule = void 0;
const common_1 = require("@nestjs/common");
const user_cart_service_1 = require("./user-cart.service");
const user_cart_controller_1 = require("./user-cart.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let UserCartModule = class UserCartModule {
};
UserCartModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_cart_controller_1.UserCartController],
        providers: [user_cart_service_1.UserCartService, user_service_1.UserService],
    })
], UserCartModule);
exports.UserCartModule = UserCartModule;
//# sourceMappingURL=user-cart.module.js.map
//# debugId=81f4b38d-b55e-5b2d-8c88-e072b1682928
