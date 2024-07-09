"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="73f68afb-50aa-51ae-820a-6f1acc44ae33")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorCustomerSchedulesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DoctorCustomerSchedulesService = class DoctorCustomerSchedulesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDoctorCustomerSchedulesDto) {
        return await this.prisma.doctor_customer_schedules.create({
            data: createDoctorCustomerSchedulesDto,
        });
    }
    async findAll() {
        return await this.prisma.doctor_customer_schedules.findMany({
            include: {
                customer: true,
                doctor: true,
                doctor_schedule: true,
            },
        });
    }
    async findOne(id) {
        return await this.prisma.doctor_customer_schedules.findUnique({
            where: { id },
            include: {
                customer: true,
                doctor: true,
                doctor_schedule: true,
            },
        });
    }
    async update(id, updateDoctorCustomerSchedulesDto) {
        return await this.prisma.doctor_customer_schedules.update({
            where: { id },
            data: updateDoctorCustomerSchedulesDto,
        });
    }
    async remove(id) {
        return await this.prisma.doctor_customer_schedules.delete({
            where: { id },
        });
    }
};
DoctorCustomerSchedulesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DoctorCustomerSchedulesService);
exports.DoctorCustomerSchedulesService = DoctorCustomerSchedulesService;
//# sourceMappingURL=doctor_customer_schedules.service.js.map
//# debugId=73f68afb-50aa-51ae-820a-6f1acc44ae33
