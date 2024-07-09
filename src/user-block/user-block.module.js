"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3a9ab0b9-cf97-550b-aa7b-0407e1e7590d")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlockModule = void 0;
const common_1 = require("@nestjs/common");
const user_block_service_1 = require("./user-block.service");
const user_block_controller_1 = require("./user-block.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const users_service_1 = require("../users/users.service");
let UserBlockModule = class UserBlockModule {
};
UserBlockModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_block_controller_1.UserBlockController],
        providers: [user_block_service_1.UserBlockService, user_service_1.UserService, users_service_1.UsersService],
    })
], UserBlockModule);
exports.UserBlockModule = UserBlockModule;
//# sourceMappingURL=user-block.module.js.map
//# debugId=3a9ab0b9-cf97-550b-aa7b-0407e1e7590d
