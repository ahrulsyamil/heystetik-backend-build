"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5b44f244-8921-58e0-8bf6-239573930983")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorScheduleModule = void 0;
const common_1 = require("@nestjs/common");
const doctor_schedule_service_1 = require("./doctor_schedule.service");
const doctor_schedule_controller_1 = require("./doctor_schedule.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let DoctorScheduleModule = class DoctorScheduleModule {
};
DoctorScheduleModule = __decorate([
    (0, common_1.Module)({
        controllers: [doctor_schedule_controller_1.DoctorScheduleController],
        providers: [doctor_schedule_service_1.DoctorScheduleService],
        imports: [prisma_module_1.PrismaModule],
    })
], DoctorScheduleModule);
exports.DoctorScheduleModule = DoctorScheduleModule;
//# sourceMappingURL=doctor_schedule.module.js.map
//# debugId=5b44f244-8921-58e0-8bf6-239573930983
