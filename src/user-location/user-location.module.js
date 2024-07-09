"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4c028e57-8c20-56ef-9a10-6e3247caf050")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLocationModule = void 0;
const common_1 = require("@nestjs/common");
const user_location_service_1 = require("./user-location.service");
const user_location_controller_1 = require("./user-location.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let UserLocationModule = class UserLocationModule {
};
UserLocationModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_location_controller_1.UserLocationController],
        providers: [user_location_service_1.UserLocationService, user_service_1.UserService],
    })
], UserLocationModule);
exports.UserLocationModule = UserLocationModule;
//# sourceMappingURL=user-location.module.js.map
//# debugId=4c028e57-8c20-56ef-9a10-6e3247caf050
