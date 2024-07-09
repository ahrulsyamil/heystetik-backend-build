"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7f35e9e2-5c84-5e7c-a98e-7e476e6564aa")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoucherModule = void 0;
const common_1 = require("@nestjs/common");
const voucher_service_1 = require("./voucher.service");
const voucher_controller_1 = require("./voucher.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let VoucherModule = class VoucherModule {
};
VoucherModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [voucher_controller_1.VoucherController],
        providers: [voucher_service_1.VoucherService, user_service_1.UserService],
    })
], VoucherModule);
exports.VoucherModule = VoucherModule;
//# sourceMappingURL=voucher.module.js.map
//# debugId=7f35e9e2-5c84-5e7c-a98e-7e476e6564aa
