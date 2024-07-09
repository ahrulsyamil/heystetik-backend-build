"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d542b166-643e-5960-87a0-fb3e899e7a7d")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QontakModule = void 0;
const common_1 = require("@nestjs/common");
const qontak_service_1 = require("./qontak.service");
const qontak_controller_1 = require("./qontak.controller");
const user_service_1 = require("../auth/user/user.service");
const prisma_module_1 = require("../prisma/prisma.module");
let QontakModule = class QontakModule {
};
QontakModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [qontak_controller_1.QontakController],
        providers: [qontak_service_1.QontakService, user_service_1.UserService],
        exports: [qontak_service_1.QontakService],
    })
], QontakModule);
exports.QontakModule = QontakModule;
//# sourceMappingURL=qontak.module.js.map
//# debugId=d542b166-643e-5960-87a0-fb3e899e7a7d
