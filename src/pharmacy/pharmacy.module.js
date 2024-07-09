"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c78c4a68-775a-5bfc-85b7-4c96d32cb62f")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmacyModule = void 0;
const common_1 = require("@nestjs/common");
const pharmacy_service_1 = require("./pharmacy.service");
const pharmacy_controller_1 = require("./pharmacy.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const media_service_1 = require("../media/media.service");
let PharmacyModule = class PharmacyModule {
};
PharmacyModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [pharmacy_controller_1.PharmacyController],
        providers: [pharmacy_service_1.PharmacyService, media_service_1.MediaService],
    })
], PharmacyModule);
exports.PharmacyModule = PharmacyModule;
//# sourceMappingURL=pharmacy.module.js.map
//# debugId=c78c4a68-775a-5bfc-85b7-4c96d32cb62f
