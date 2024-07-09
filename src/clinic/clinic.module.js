"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ae222cef-a4ab-5c49-8499-9c3a4a017013")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicModule = void 0;
const common_1 = require("@nestjs/common");
const clinic_service_1 = require("./clinic.service");
const clinic_controller_1 = require("./clinic.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const media_service_1 = require("../media/media.service");
let ClinicModule = class ClinicModule {
};
ClinicModule = __decorate([
    (0, common_1.Module)({
        controllers: [clinic_controller_1.ClinicController],
        providers: [clinic_service_1.ClinicService, media_service_1.MediaService],
        imports: [prisma_module_1.PrismaModule],
    })
], ClinicModule);
exports.ClinicModule = ClinicModule;
//# sourceMappingURL=clinic.module.js.map
//# debugId=ae222cef-a4ab-5c49-8499-9c3a4a017013
