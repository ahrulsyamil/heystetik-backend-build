"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="eb5b23e1-3996-55d2-9771-ab44a8bfc58a")}catch(e){}}();

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
exports.TreatmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const page_options_treatment_dto_1 = require("./dto/page-options-treatment.dto");
const treatment_service_1 = require("./treatment.service");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_1 = require("../globals/constant/media");
const create_treatment_dto_1 = require("./dto/create-treatment.dto");
const media_service_1 = require("../media/media.service");
const update_treatment_dto_1 = require("./dto/update-treatment.dto");
let TreatmentController = class TreatmentController {
    constructor(treatmentService, mediaService) {
        this.treatmentService = treatmentService;
        this.mediaService = mediaService;
    }
    async findAll(pageOptions) {
        const result = await this.treatmentService.findAll(pageOptions);
        result.data = await Promise.all(result.data.map(async (item) => {
            const find = await this.treatmentService.findOne(item.id);
            return find;
        }));
        return result;
    }
    async create(files, data) {
        if (!files?.image_photos) {
            throw new common_1.BadRequestException('All files are required');
        }
        const mediaPhotos = await this.mediaService.insertMediaData(files.image_photos);
        return await this.treatmentService.create({
            name: data.name,
            clinic_id: data.clinic_id,
            category: data.category,
            description: data.description,
            duration: data.duration,
            downtime: data.downtime,
            treatment_type: data.treatment_type,
            treatment_step: data.treatment_step,
            price: data.price,
            method: data.treatment_method,
            is_active: true,
            media_treatments: {
                create: mediaPhotos,
            },
        });
    }
    async find(id) {
        const find = await this.treatmentService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async update(files, id, data) {
        const find = await this.treatmentService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        const mediaPhotos = files?.image_photos
            ? await this.mediaService.insertMediaData(files.image_photos)
            : null;
        const deleteMediaPhotos = files?.image_photos ? { deleteMany: {} } : {};
        const mediaTreatmentPhotos = mediaPhotos
            ? {
                media_treatments: {
                    ...deleteMediaPhotos,
                    create: mediaPhotos,
                },
            }
            : {};
        return await this.treatmentService.update(find.id, {
            name: data.name,
            clinic_id: data.clinic_id,
            category: data.category,
            description: data.description,
            duration: data.duration,
            downtime: data.downtime,
            treatment_type: data.treatment_type,
            treatment_step: data.treatment_step,
            price: data.price,
            method: data.treatment_method,
            is_active: data.is_active,
            ...mediaTreatmentPhotos,
        });
    }
    async delete(id) {
        const find = await this.treatmentService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        await this.treatmentService.delete(+id);
        return null;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_treatment_dto_1.PageOptionsTreatmentDto]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "findAll", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [
            {
                name: 'image_photos',
                maxCount: 6,
                dirPath: media_1.MEDIA_TREATMENT_DIR,
            },
        ],
        dirPath: './uploads',
        prefixName: 'treatment',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_treatment_dto_1.CreateTreatmentDto]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "find", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [
            {
                name: 'image_photos',
                maxCount: 6,
                dirPath: media_1.MEDIA_TREATMENT_DIR,
            },
        ],
        dirPath: './uploads',
        prefixName: 'treatment',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_treatment_dto_1.UpdateTreatmentDto]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "update", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "delete", null);
TreatmentController = __decorate([
    (0, common_1.Controller)('treatment'),
    (0, swagger_1.ApiTags)('Treatment'),
    __metadata("design:paramtypes", [treatment_service_1.TreatmentService,
        media_service_1.MediaService])
], TreatmentController);
exports.TreatmentController = TreatmentController;
//# sourceMappingURL=treatment.controller.js.map
//# debugId=eb5b23e1-3996-55d2-9771-ab44a8bfc58a
