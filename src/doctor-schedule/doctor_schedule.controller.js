"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4d566c09-b4ad-52f4-ac73-8e24f0f38349")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorScheduleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const doctor_schedule_service_1 = require("./doctor_schedule.service");
const create_doctor_schedule_dto_1 = require("./dto/create-doctor_schedule.dto");
const update_doctor_schedule_dto_1 = require("./dto/update-doctor_schedule.dto");
const doctor_schedule_entity_1 = require("./entities/doctor_schedule.entity");
let DoctorScheduleController = class DoctorScheduleController {
    constructor(doctorScheduleService) {
        this.doctorScheduleService = doctorScheduleService;
    }
    async create(response, createDoctorScheduleDto) {
        const result = await this.doctorScheduleService.create(createDoctorScheduleDto);
        return response.status(201).json({
            data: result,
            message: 'Success Create Doctor Schedules',
        });
    }
    async findAll(response) {
        const result = await this.doctorScheduleService.findAll();
        return response.status(200).json({
            data: result,
            message: 'Success Get Doctor Schedules',
        });
    }
    async findOne(response, id) {
        const result = await this.doctorScheduleService.findOne(+id);
        return response.status(200).json({
            data: result,
            message: 'Success Detail Doctor Schedules',
        });
    }
    async update(response, id, updateDoctorScheduleDto) {
        const result = await this.doctorScheduleService.update(+id, updateDoctorScheduleDto);
        return response.status(200).json({
            data: result,
            message: 'Success Update Doctor Schedules',
        });
    }
    async remove(response, id) {
        const result = await this.doctorScheduleService.remove(+id);
        return response.status(200).json({
            data: result,
            message: 'Success Delete Doctor Schedules',
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: doctor_schedule_entity_1.DoctorScheduleEntity }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_doctor_schedule_dto_1.CreateDoctorScheduleDto]),
    __metadata("design:returntype", Promise)
], DoctorScheduleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: doctor_schedule_entity_1.DoctorScheduleEntity, isArray: true }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DoctorScheduleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: doctor_schedule_entity_1.DoctorScheduleEntity }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DoctorScheduleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: doctor_schedule_entity_1.DoctorScheduleEntity }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_doctor_schedule_dto_1.UpdateDoctorScheduleDto]),
    __metadata("design:returntype", Promise)
], DoctorScheduleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: doctor_schedule_entity_1.DoctorScheduleEntity }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DoctorScheduleController.prototype, "remove", null);
DoctorScheduleController = __decorate([
    (0, common_1.Controller)('doctor_schedule'),
    (0, swagger_1.ApiTags)('Doctor Schedule'),
    __metadata("design:paramtypes", [doctor_schedule_service_1.DoctorScheduleService])
], DoctorScheduleController);
exports.DoctorScheduleController = DoctorScheduleController;
//# sourceMappingURL=doctor_schedule.controller.js.map
//# debugId=4d566c09-b4ad-52f4-ac73-8e24f0f38349
