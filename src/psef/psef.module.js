"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ec05ce68-e003-575d-9a60-06cf59097371")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsefModule = void 0;
const common_1 = require("@nestjs/common");
const psef_service_1 = require("./psef.service");
const psef_controller_1 = require("./psef.controller");
const pharmacy_service_1 = require("../pharmacy/pharmacy.service");
const prisma_module_1 = require("../prisma/prisma.module");
let PsefModule = class PsefModule {
};
PsefModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [psef_controller_1.PsefController],
        providers: [psef_service_1.PsefService, pharmacy_service_1.PharmacyService],
    })
], PsefModule);
exports.PsefModule = PsefModule;
//# sourceMappingURL=psef.module.js.map
//# debugId=ec05ce68-e003-575d-9a60-06cf59097371
