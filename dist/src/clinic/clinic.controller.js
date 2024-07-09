"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="72aa4cf4-1646-5804-92dd-809d375a3038")}catch(e){}}();

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
exports.ClinicController = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const media_1 = require("../globals/constant/media");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_service_1 = require("../media/media.service");
const clinic_service_1 = require("./clinic.service");
const create_clinic_dto_1 = require("./dto/create-clinic.dto");
const page_options_clinic_dto_1 = require("./dto/page-options-clinic.dto");
const update_clinic_dto_1 = require("./dto/update-clinic.dto");
let ClinicController = class ClinicController {
    constructor(clinicService, mediaService) {
        this.clinicService = clinicService;
        this.mediaService = mediaService;
    }
    async findAll(pageOptions) {
        const result = await this.clinicService.findAll(pageOptions);
        result.data = await Promise.all(result.data.map(async (item) => {
            const find = await this.clinicService.findOne(item.id);
            return find;
        }));
        return result;
    }
    async create(files, data) {
        if (!files?.image_photos || !files?.image_logo) {
            throw new common_1.BadRequestException('All files are required');
        }
        if (files.image_logo.length > 1)
            throw new common_1.BadRequestException('Only one logo image can be uploaded');
        const [mediaPhotos, mediaLogo] = await Promise.all([
            this.mediaService.insertMediaData(files.image_photos),
            this.mediaService.insertMediaData(files.image_logo),
        ]);
        return await this.clinicService.create({
            name: data.name,
            address: data.address,
            pinpoint_latitude: data.pinpoint_latitude,
            pinpoint_longitude: data.pinpoint_longitude,
            pinpoint_address: data.pinpoint_address,
            province_id: data.province_id,
            city_id: data.city_id,
            postal_code: data.postal_code,
            registration_number: data.registration_number,
            phone: data.phone,
            email: data.email,
            description: data.description,
            company_name: data.company_name,
            company_address: data.company_address,
            company_city_id: data.company_city_id,
            company_province_id: data.company_province_id,
            company_postal_code: data.company_postal_code,
            npwp: data.npwp,
            pic_name: data.pic_name,
            pic_phone: data.pic_phone,
            contract_expired_date: new Date(data.contract_expired_date),
            is_active: true,
            media_clinics: {
                create: mediaPhotos,
            },
            media_clinic_logo: {
                create: {
                    ...mediaLogo[0],
                },
            },
            clinic_operation_hours: {
                create: data.operation_hours.map((hour) => ({
                    day_number: hour.day_number,
                    start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${hour.start_time}`),
                    end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${hour.end_time}`),
                })),
            },
        });
    }
    async find(id) {
        const find = await this.clinicService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async update(files, id, data) {
        const find = await this.clinicService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (files?.image_logo && files.image_logo.length > 1)
            throw new common_1.BadRequestException('Only one logo image can be uploaded');
        const [mediaPhotos, mediaLogo] = await Promise.all([
            files?.image_photos
                ? this.mediaService.insertMediaData(files.image_photos)
                : null,
            files?.image_logo
                ? this.mediaService.insertMediaData(files.image_logo)
                : null,
        ]);
        const deleteMediaPhotos = files?.image_photos ? { deleteMany: {} } : {};
        const deleteMediaLogo = files?.image_logo ? { delete: true } : {};
        const mediaClinicPhotos = mediaPhotos
            ? {
                media_clinics: {
                    ...deleteMediaPhotos,
                    create: mediaPhotos,
                },
            }
            : {};
        const mediaClinicLogo = mediaLogo
            ? {
                media_clinic_logo: {
                    ...deleteMediaLogo,
                    create: {
                        ...mediaLogo[0],
                    },
                },
            }
            : {};
        if (data.operation_hours) {
            await this.clinicService.deleteManyOperationHourBy({
                clinic_id: find.id,
                day_number: {
                    in: data.operation_hours.map((hour) => hour.day_number),
                },
            });
        }
        const operationHours = data.operation_hours
            ? {
                clinic_operation_hours: {
                    create: data.operation_hours.map((hour) => ({
                        day_number: hour.day_number,
                        start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${hour.start_time}`),
                        end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${hour.end_time}`),
                    })),
                },
            }
            : {};
        return await this.clinicService.update(find.id, {
            name: data.name,
            address: data.address,
            pinpoint_latitude: data.pinpoint_latitude,
            pinpoint_longitude: data.pinpoint_longitude,
            pinpoint_address: data.pinpoint_address,
            province_id: data.province_id,
            city_id: data.city_id,
            postal_code: data.postal_code,
            registration_number: data.registration_number,
            phone: data.phone,
            email: data.email,
            description: data.description,
            company_name: data.company_name,
            company_address: data.company_address,
            company_city_id: data.company_city_id,
            company_province_id: data.company_province_id,
            company_postal_code: data.company_postal_code,
            npwp: data.npwp,
            pic_name: data.pic_name,
            pic_phone: data.pic_phone,
            contract_expired_date: data.contract_expired_date
                ? new Date(data.contract_expired_date)
                : undefined,
            is_active: data.is_active,
            ...mediaClinicPhotos,
            ...mediaClinicLogo,
            ...operationHours,
        });
    }
    async delete(id) {
        const find = await this.clinicService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        await this.clinicService.delete(+id);
        return null;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_clinic_dto_1.PageOptionsClinicDto]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "findAll", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [
            {
                name: 'image_photos',
                maxCount: 6,
                dirPath: media_1.MEDIA_CLINIC_DIR,
            },
            { name: 'image_logo', maxCount: 1, dirPath: media_1.MEDIA_CLINIC_LOGO_DIR },
        ],
        dirPath: './uploads',
        prefixName: 'clinic-file',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_clinic_dto_1.CreateClinicDto]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "find", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [
            {
                name: 'image_photos',
                maxCount: 6,
                dirPath: media_1.MEDIA_CLINIC_DIR,
            },
            { name: 'image_logo', maxCount: 1, dirPath: media_1.MEDIA_CLINIC_LOGO_DIR },
        ],
        dirPath: './uploads',
        prefixName: 'clinic-file',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_clinic_dto_1.UpdateClinicDto]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "update", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "delete", null);
ClinicController = __decorate([
    (0, common_1.Controller)('clinic'),
    __metadata("design:paramtypes", [clinic_service_1.ClinicService,
        media_service_1.MediaService])
], ClinicController);
exports.ClinicController = ClinicController;
//# sourceMappingURL=clinic.controller.js.map
//# debugId=72aa4cf4-1646-5804-92dd-809d375a3038
