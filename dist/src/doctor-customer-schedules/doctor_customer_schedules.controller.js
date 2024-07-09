"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="38a1e4e0-00d7-567c-821a-956739ac8580")}catch(e){}}();

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
exports.DoctorCustomerSChedulesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const doctor_customer_schedules_service_1 = require("./doctor_customer_schedules.service");
const create_doctor_customer_schedules_dto_1 = require("./dto/create-doctor_customer_schedules.dto");
const update_doctor_customer_schedules_dto_1 = require("./dto/update-doctor_customer_schedules.dto");
let DoctorCustomerSChedulesController = class DoctorCustomerSChedulesController {
    constructor(snipsTipsService) {
        this.snipsTipsService = snipsTipsService;
    }
    create(response, createDoctorCustomerSChedulesDto) {
        const result = this.snipsTipsService.create(createDoctorCustomerSChedulesDto);
        return response.status(201).json({
            data: result,
            message: 'Success Create Doctor Customer Schedules',
        });
    }
    async findAll(response) {
        const result = await this.snipsTipsService.findAll();
        console.log('result', result);
        return response.status(200).json({
            data: result,
            message: 'Success Get Doctor Customer Schedules',
        });
    }
    findOne(response, id) {
        const result = this.snipsTipsService.findOne(+id);
        return response.status(200).json({
            data: result,
            message: 'Success Get Detail Doctor Customer Schedules',
        });
    }
    update(response, id, updateDoctorCustomerSChedulesDto) {
        const reslut = this.snipsTipsService.update(+id, updateDoctorCustomerSChedulesDto);
        return response.status(200).json({
            data: reslut,
            message: 'Success Update Doctor Customer Schedules',
        });
    }
    remove(response, id) {
        const result = this.snipsTipsService.remove(+id);
        return response.status(200).json({
            data: result,
            message: 'Success Delete Doctor Customer Schedules',
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: create_doctor_customer_schedules_dto_1.CreateDoctorCustomerSchedulesDto }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_doctor_customer_schedules_dto_1.CreateDoctorCustomerSchedulesDto]),
    __metadata("design:returntype", void 0)
], DoctorCustomerSChedulesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: create_doctor_customer_schedules_dto_1.CreateDoctorCustomerSchedulesDto, isArray: true }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DoctorCustomerSChedulesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: create_doctor_customer_schedules_dto_1.CreateDoctorCustomerSchedulesDto }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DoctorCustomerSChedulesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: create_doctor_customer_schedules_dto_1.CreateDoctorCustomerSchedulesDto }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_doctor_customer_schedules_dto_1.UpdateDoctorCustomerSchedulesDto]),
    __metadata("design:returntype", void 0)
], DoctorCustomerSChedulesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: create_doctor_customer_schedules_dto_1.CreateDoctorCustomerSchedulesDto }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DoctorCustomerSChedulesController.prototype, "remove", null);
DoctorCustomerSChedulesController = __decorate([
    (0, common_1.Controller)('doctor-customer-schedules'),
    (0, swagger_1.ApiTags)('Doctor Customer Schedules'),
    __metadata("design:paramtypes", [doctor_customer_schedules_service_1.DoctorCustomerSchedulesService])
], DoctorCustomerSChedulesController);
exports.DoctorCustomerSChedulesController = DoctorCustomerSChedulesController;
//# sourceMappingURL=doctor_customer_schedules.controller.js.map
//# debugId=38a1e4e0-00d7-567c-821a-956739ac8580
