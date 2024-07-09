"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e468825f-7569-59a7-a0d4-ba072bc4021f")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeographyModule = void 0;
const common_1 = require("@nestjs/common");
const geography_service_1 = require("./geography.service");
const geography_controller_1 = require("./geography.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let GeographyModule = class GeographyModule {
};
GeographyModule = __decorate([
    (0, common_1.Module)({
        controllers: [geography_controller_1.GeographyController],
        providers: [geography_service_1.GeographyService],
        imports: [prisma_module_1.PrismaModule],
    })
], GeographyModule);
exports.GeographyModule = GeographyModule;
//# sourceMappingURL=geography.module.js.map
//# debugId=e468825f-7569-59a7-a0d4-ba072bc4021f
