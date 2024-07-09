"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0fc23fbb-9a96-5cd2-ab43-ae1f73cc1cd0")}catch(e){}}();

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
exports.DoctorScheduleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DoctorScheduleService = class DoctorScheduleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDoctorScheduleDto) {
        return await this.prisma.doctor_schedules.create({
            data: createDoctorScheduleDto,
        });
    }
    async findAll() {
        return await this.prisma.doctor_schedules.findMany({
            include: {
                user: true,
            },
        });
    }
    async findOne(id) {
        return await this.prisma.doctor_schedules.findUnique({
            where: { id },
            include: {
                user: true,
            },
        });
    }
    async update(id, updateDoctorScheduleDto) {
        return await this.prisma.doctor_schedules.update({
            where: { id },
            data: updateDoctorScheduleDto,
        });
    }
    async remove(id) {
        return await this.prisma.doctor_schedules.delete({ where: { id } });
    }
    async findScheduleByUser(id, day_number) {
        return await this.prisma.doctor_schedules.findFirst({
            where: {
                userId: id,
                day_number,
            },
            include: {
                doctor_schedule_times: true,
            },
        });
    }
};
DoctorScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DoctorScheduleService);
exports.DoctorScheduleService = DoctorScheduleService;
//# sourceMappingURL=doctor_schedule.service.js.map
//# debugId=0fc23fbb-9a96-5cd2-ab43-ae1f73cc1cd0
