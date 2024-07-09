"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="53fa4a85-b581-5ffe-be40-1d1e91d359e0")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupModule = void 0;
const common_1 = require("@nestjs/common");
const lookup_service_1 = require("./lookup.service");
const lookup_controller_1 = require("./lookup.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let LookupModule = class LookupModule {
};
LookupModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [lookup_controller_1.LookupController],
        providers: [lookup_service_1.LookupService, user_service_1.UserService],
    })
], LookupModule);
exports.LookupModule = LookupModule;
//# sourceMappingURL=lookup.module.js.map
//# debugId=53fa4a85-b581-5ffe-be40-1d1e91d359e0
