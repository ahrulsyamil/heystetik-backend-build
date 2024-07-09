"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6ed585aa-cb50-5de7-b248-1644ab627cc0")}catch(e){}}();

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
exports.MedicalHistoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const medical_history_service_1 = require("./medical-history.service");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const create_medical_history_dto_1 = require("./dto/create-medical-history.dto");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_1 = require("../globals/constant/media");
const media_service_1 = require("../media/media.service");
let MedicalHistoryController = class MedicalHistoryController {
    constructor(medicalHistoryService, mediaService) {
        this.medicalHistoryService = medicalHistoryService;
        this.mediaService = mediaService;
    }
    async create(user, files, createMedicalHistoryDto) {
        let media = [];
        if (!files)
            throw new common_1.BadRequestException('Property files is required');
        if (files.length == 0)
            throw new common_1.BadRequestException('At least 1 file is required');
        if (files.length > 0) {
            media = await this.mediaService.insertMediaData(files);
        }
        return await this.medicalHistoryService.create(user.id, createMedicalHistoryDto, media);
    }
    async findOne(user, id) {
        const find = await this.medicalHistoryService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.customer_id != user.id)
            throw new common_1.ForbiddenException();
        return find;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'files',
        dirPath: media_1.MEDIA_MEDICAL_HISTORY_DIR,
        prefixName: 'medical-history',
    })),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Array, create_medical_history_dto_1.CreateMedicalHistoryDto]),
    __metadata("design:returntype", Promise)
], MedicalHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], MedicalHistoryController.prototype, "findOne", null);
MedicalHistoryController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('medical-history'),
    (0, swagger_1.ApiTags)('Medical History'),
    __metadata("design:paramtypes", [medical_history_service_1.MedicalHistoryService,
        media_service_1.MediaService])
], MedicalHistoryController);
exports.MedicalHistoryController = MedicalHistoryController;
//# sourceMappingURL=medical-history.controller.js.map
//# debugId=6ed585aa-cb50-5de7-b248-1644ab627cc0
