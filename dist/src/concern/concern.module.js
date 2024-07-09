"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d9b8e6ff-8818-5adc-82e4-e44c5989b98c")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcernModule = void 0;
const common_1 = require("@nestjs/common");
const concern_service_1 = require("./concern.service");
const concern_controller_1 = require("./concern.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let ConcernModule = class ConcernModule {
};
ConcernModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [concern_controller_1.ConcernController],
        providers: [concern_service_1.ConcernService, user_service_1.UserService],
    })
], ConcernModule);
exports.ConcernModule = ConcernModule;
//# sourceMappingURL=concern.module.js.map
//# debugId=d9b8e6ff-8818-5adc-82e4-e44c5989b98c
