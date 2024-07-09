"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8421362d-9c4d-5e05-a68a-f487839413b6")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FcmModule = void 0;
const common_1 = require("@nestjs/common");
const fcm_controller_1 = require("./fcm.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const fcm_service_1 = require("./fcm.service");
const user_service_1 = require("../auth/user/user.service");
let FcmModule = class FcmModule {
};
FcmModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [fcm_controller_1.FcmController],
        providers: [fcm_service_1.FcmService, user_service_1.UserService],
        exports: [fcm_service_1.FcmService],
    })
], FcmModule);
exports.FcmModule = FcmModule;
//# sourceMappingURL=fcm.module.js.map
//# debugId=8421362d-9c4d-5e05-a68a-f487839413b6
