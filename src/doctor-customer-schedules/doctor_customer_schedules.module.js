"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="be9e9bb0-e61c-5bf7-8d46-1701a88a7dd8")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorCustomerSchedulesModule = void 0;
const common_1 = require("@nestjs/common");
const doctor_customer_schedules_service_1 = require("./doctor_customer_schedules.service");
const doctor_customer_schedules_controller_1 = require("./doctor_customer_schedules.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let DoctorCustomerSchedulesModule = class DoctorCustomerSchedulesModule {
};
DoctorCustomerSchedulesModule = __decorate([
    (0, common_1.Module)({
        controllers: [doctor_customer_schedules_controller_1.DoctorCustomerSChedulesController],
        providers: [doctor_customer_schedules_service_1.DoctorCustomerSchedulesService],
        imports: [prisma_module_1.PrismaModule],
    })
], DoctorCustomerSchedulesModule);
exports.DoctorCustomerSchedulesModule = DoctorCustomerSchedulesModule;
//# sourceMappingURL=doctor_customer_schedules.module.js.map
//# debugId=be9e9bb0-e61c-5bf7-8d46-1701a88a7dd8
