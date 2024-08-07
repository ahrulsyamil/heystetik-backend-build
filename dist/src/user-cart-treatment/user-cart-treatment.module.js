"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a78b8485-f81e-5fa8-be95-7f4706371672")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCartTreatmentModule = void 0;
const common_1 = require("@nestjs/common");
const user_cart_treatment_service_1 = require("./user-cart-treatment.service");
const user_cart_treatment_controller_1 = require("./user-cart-treatment.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const treatment_service_1 = require("../treatment/treatment.service");
let UserCartTreatmentModule = class UserCartTreatmentModule {
};
UserCartTreatmentModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_cart_treatment_controller_1.UserCartTreatmentController],
        providers: [user_cart_treatment_service_1.UserCartTreatmentService, user_service_1.UserService, treatment_service_1.TreatmentService],
    })
], UserCartTreatmentModule);
exports.UserCartTreatmentModule = UserCartTreatmentModule;
//# sourceMappingURL=user-cart-treatment.module.js.map
//# debugId=a78b8485-f81e-5fa8-be95-7f4706371672
