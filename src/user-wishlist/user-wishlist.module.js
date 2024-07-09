"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c9534f3f-4a14-5ced-8fee-48a2e7116748")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWishlistModule = void 0;
const common_1 = require("@nestjs/common");
const user_wishlist_service_1 = require("./user-wishlist.service");
const user_wishlist_controller_1 = require("./user-wishlist.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let UserWishlistModule = class UserWishlistModule {
};
UserWishlistModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_wishlist_controller_1.UserWishlistController],
        providers: [user_wishlist_service_1.UserWishlistService, user_service_1.UserService],
    })
], UserWishlistModule);
exports.UserWishlistModule = UserWishlistModule;
//# sourceMappingURL=user-wishlist.module.js.map
//# debugId=c9534f3f-4a14-5ced-8fee-48a2e7116748
