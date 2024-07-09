"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b6b1f74a-0d45-5eab-a185-c128264f073f")}catch(e){}}();

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
exports.PharmacyController = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const media_1 = require("../globals/constant/media");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_service_1 = require("../media/media.service");
const create_pharmacist_dto_1 = require("./dto/create-pharmacist.dto");
const create_pharmacy_dto_1 = require("./dto/create-pharmacy.dto");
const page_options_pharmacist_dto_1 = require("./dto/page-options-pharmacist.dto");
const page_options_pharmacy_dto_1 = require("./dto/page-options-pharmacy.dto");
const update_pharmacist_dto_1 = require("./dto/update-pharmacist.dto");
const update_pharmacy_dto_1 = require("./dto/update-pharmacy.dto");
const pharmacy_service_1 = require("./pharmacy.service");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
let PharmacyController = class PharmacyController {
    constructor(pharmacyService, mediaService) {
        this.pharmacyService = pharmacyService;
        this.mediaService = mediaService;
    }
    async getAll(pageOptions) {
        return await this.pharmacyService.findAll(pageOptions);
    }
    async create(npwp_picture, data) {
        if (npwp_picture.length > 1)
            throw new common_1.BadRequestException('Only one image can be uploaded');
        let media = [];
        if (npwp_picture.length == 1) {
            media = await this.mediaService.insertMediaData(npwp_picture);
        }
        return await this.pharmacyService.create({
            name: data.name,
            permit_no: data.permit_no,
            telp: data.telp,
            province: data.province,
            city: data.city,
            subdistrict: data.subdistrict,
            village: data.village,
            address: data.address,
            address_gmap_url: data.address_gmap_url,
            email: data.email,
            npwp_no: data.npwp_no,
            npwp_name: data.npwp_name,
            is_active: data.is_active,
            pharmacy_operation_hours: {
                create: data.operating_hours.map((item) => ({
                    day_number: item.day_number,
                    start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.start_time}`),
                    end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.end_time}`),
                    is_active: item.is_active,
                })),
            },
            media_pharmacy_npwp: {
                create: media[0],
            },
        });
    }
    async find(id) {
        const find = await this.pharmacyService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async update(id, npwp_picture, data) {
        const find = await this.pharmacyService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (npwp_picture && npwp_picture.length > 1)
            throw new common_1.BadRequestException('Only one image can be uploaded');
        let media = [];
        if (npwp_picture && npwp_picture.length == 1) {
            media = await this.mediaService.insertMediaData(npwp_picture);
        }
        const deleteNpwpPicture = media[0] ? { delete: true } : {};
        const mediaNpwpPicture = media[0]
            ? {
                media_pharmacy_npwp: {
                    ...deleteNpwpPicture,
                    create: media[0],
                },
            }
            : {};
        const operatingHours = data.operating_hours
            ? {
                pharmacy_operation_hours: {
                    deleteMany: {},
                    create: data.operating_hours.map((hour) => ({
                        day_number: hour.day_number,
                        start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${hour.start_time}`),
                        end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${hour.end_time}`),
                        is_active: hour.is_active,
                    })),
                },
            }
            : {};
        return await this.pharmacyService.update(id, {
            name: data.name,
            permit_no: data.permit_no,
            telp: data.telp,
            province: data.province,
            city: data.city,
            subdistrict: data.subdistrict,
            village: data.village,
            address: data.address,
            address_gmap_url: data.address_gmap_url,
            email: data.email,
            npwp_no: data.npwp_no,
            npwp_name: data.npwp_name,
            is_active: data.is_active,
            ...mediaNpwpPicture,
            ...operatingHours,
        });
    }
    async delete(id) {
        const find = await this.pharmacyService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return await this.pharmacyService.delete(find.id);
    }
    async getAllPharmacist(pharmacy_id, pageOptions) {
        return await this.pharmacyService.findAllPharmacist(pharmacy_id, pageOptions);
    }
    async createPharmacist(pharmacy_id, data) {
        const pharmacy = await this.pharmacyService.find(pharmacy_id);
        if (!pharmacy)
            throw new common_1.BadRequestException('Pharmacy not found');
        data.pharmacy_id = pharmacy.id;
        data.schedules = data.schedules.map((item) => ({
            day: item.day,
            start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.start_time}`),
            end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.end_time}`),
        }));
        return await this.pharmacyService.createPharmacist(data);
    }
    async findPharmacist(pharmacy_id, pharmacist_id) {
        const [pharmacy, pharmacist] = await Promise.all([
            this.pharmacyService.find(pharmacy_id),
            this.pharmacyService.findPharmacist(pharmacist_id),
        ]);
        if (!pharmacy)
            throw new common_1.BadRequestException('Pharmacy not found');
        if (!pharmacist || pharmacist.pharmacy_id != pharmacy.id)
            throw new common_1.BadRequestException('Pharmacist not found');
        return pharmacist;
    }
    async updatePharmacist(pharmacy_id, pharmacist_id, data) {
        const [pharmacy, pharmacist] = await Promise.all([
            this.pharmacyService.find(pharmacy_id),
            this.pharmacyService.findPharmacist(pharmacist_id),
        ]);
        if (!pharmacy)
            throw new common_1.BadRequestException('Pharmacy not found');
        if (!pharmacist || pharmacist.pharmacy_id != pharmacy.id)
            throw new common_1.BadRequestException('Pharmacist not found');
        data.pharmacy_id = pharmacy.id;
        data.schedules = data.schedules.map((item) => ({
            day: item.day,
            start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.start_time}`),
            end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.end_time}`),
        }));
        return await this.pharmacyService.updatePharmacist(pharmacist_id, data);
    }
    async deletePharmacist(pharmacy_id, pharmacist_id) {
        const [pharmacy, pharmacist] = await Promise.all([
            this.pharmacyService.find(pharmacy_id),
            this.pharmacyService.findPharmacist(pharmacist_id),
        ]);
        if (!pharmacy)
            throw new common_1.BadRequestException('Pharmacy not found');
        if (!pharmacist || pharmacist.pharmacy_id != pharmacy.id)
            throw new common_1.BadRequestException('Pharmacist not found');
        return await this.pharmacyService.deletePharmacist(pharmacist_id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_pharmacy_dto_1.PageOptionsPharmacyDto]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "getAll", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'npwp_picture',
        dirPath: media_1.MEDIA_PHARMACY_NPWP_PICTURE_DIR,
        prefixName: 'npwp-picture',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_pharmacy_dto_1.CreatePharmacyDto]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "find", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'npwp_picture',
        dirPath: media_1.MEDIA_PHARMACY_NPWP_PICTURE_DIR,
        prefixName: 'npwp-picture',
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array, update_pharmacy_dto_1.UpdatePharmacyDto]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':pharmacy_id/pharmacist'),
    __param(0, (0, common_1.Param)('pharmacy_id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, page_options_pharmacist_dto_1.PageOptionsPharmacistDto]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "getAllPharmacist", null);
__decorate([
    (0, common_1.Post)(':pharmacy_id/pharmacist'),
    __param(0, (0, common_1.Param)('pharmacy_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_pharmacist_dto_1.CreatePharmacistDto]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "createPharmacist", null);
__decorate([
    (0, common_1.Get)(':pharmacy_id/pharmacist/:pharmacist_id'),
    __param(0, (0, common_1.Param)('pharmacy_id')),
    __param(1, (0, common_1.Param)('pharmacist_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "findPharmacist", null);
__decorate([
    (0, common_1.Patch)(':pharmacy_id/pharmacist/:pharmacist_id'),
    __param(0, (0, common_1.Param)('pharmacy_id')),
    __param(1, (0, common_1.Param)('pharmacist_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_pharmacist_dto_1.UpdatePharmacistDto]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "updatePharmacist", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':pharmacy_id/pharmacist/:pharmacist_id'),
    __param(0, (0, common_1.Param)('pharmacy_id')),
    __param(1, (0, common_1.Param)('pharmacist_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "deletePharmacist", null);
PharmacyController = __decorate([
    (0, common_1.Controller)('pharmacy'),
    __metadata("design:paramtypes", [pharmacy_service_1.PharmacyService,
        media_service_1.MediaService])
], PharmacyController);
exports.PharmacyController = PharmacyController;
//# sourceMappingURL=pharmacy.controller.js.map
//# debugId=b6b1f74a-0d45-5eab-a185-c128264f073f
