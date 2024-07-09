"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bb7c6cef-2c73-573b-9c41-19754b3fdeff")}catch(e){}}();

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
exports.MyJourneyController = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const auth_guard_1 = require("../auth/auth.guard");
const concern_service_1 = require("../concern/concern.service");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const media_1 = require("../globals/constant/media");
const roles_guard_1 = require("../globals/guards/roles.guard");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_service_1 = require("../media/media.service");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_my_journey_consultation_dto_1 = require("./dto/page-options-my-journey-consultation.dto");
const page_options_my_journey_galery_concern_list_dto_1 = require("./dto/page-options-my-journey-galery-concern-list.dto");
const page_options_my_journey_treatment_dto_1 = require("./dto/page-options-my-journey-treatment.dto");
const page_options_my_journey_dto_1 = require("./dto/page-options-my-journey.dto");
const update_my_journey_dto_1 = require("./dto/update-my-journey.dto");
const my_journey_service_1 = require("./my-journey.service");
const create_my_journey_dto_1 = require("./dto/create-my-journey.dto");
const string_1 = require("../globals/helpers/string");
let MyJourneyController = class MyJourneyController {
    constructor(myJourneyService, mediaService, concernService) {
        this.myJourneyService = myJourneyService;
        this.mediaService = mediaService;
        this.concernService = concernService;
    }
    async findAll(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.myJourneyService.findAll(pageOptionsDto);
    }
    async galery(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        const result = await this.myJourneyService.galeryConcernList(pageOptionsDto);
        return await Promise.all(result.map(async (item) => ({
            ...item,
            last_created_at: dayjs.tz(dayjs(item.last_created_at)).format(),
            galery: await this.myJourneyService.findAllGalery({
                concern_id: item.id,
            }),
        })));
    }
    async galeryByConcern(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        const result = await this.myJourneyService.galeryConcernList(pageOptionsDto);
        return result.map((item) => ({
            ...item,
            last_created_at: dayjs.tz(dayjs(item.last_created_at)).format(),
        }));
    }
    async create(user, files, data) {
        const findExist = await this.myJourneyService.findBy({
            concern_id: data.concern_id,
            media_my_journeys: {
                none: {
                    category: 'AFTER_CONDITION',
                },
            },
        });
        if (findExist)
            throw new common_1.BadRequestException('Invalid request. Update after condition first for this concern');
        if (!files || (Array.isArray(files) && files.length == 0)) {
            throw new common_1.BadRequestException('Files is required');
        }
        let media = [];
        if (files && files.length > 0) {
            media = await this.mediaService.insertMediaData(files);
        }
        return await this.myJourneyService.create({
            concern_id: data.concern_id,
            user_id: user.id,
        }, media.map((item) => ({
            key: (0, string_1.randomString)(10),
            category: 'INITIAL_CONDITION',
            media_id: item.media_id,
        })));
    }
    async update(user, id, files, data) {
        const find = await this.myJourneyService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id !== user.id)
            throw new common_1.ForbiddenException();
        if (!files || (typeof files == 'object' && files.length == 0)) {
            throw new common_1.BadRequestException('File is required');
        }
        if (files && files.length > 1) {
            throw new common_1.BadRequestException('Only one file is allowed');
        }
        let media = [];
        if (files && files.length == 1) {
            media = await this.mediaService.insertMediaData(files);
        }
        await this.mediaService.deleteMediaMyJourney({
            my_journey_id: find.id,
            category: 'AFTER_CONDITION',
            key: data.initial_condition_key,
        });
        return await this.mediaService.createMediaMyJourney({
            media_id: media[0].media_id,
            my_journey_id: find.id,
            category: 'AFTER_CONDITION',
            key: data.initial_condition_key,
        });
    }
    async findAllConsultation(user, id, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.myJourneyService.findAllConsultation(pageOptionsDto);
    }
    async findAllTreatment(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.myJourneyService.findAllTreatment(pageOptionsDto);
    }
    async findByConsultation(user, id, consultationId) {
        const find = await this.myJourneyService.findBy({
            id: +id,
            consultation_id: +consultationId,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id !== user.id)
            throw new common_1.ForbiddenException();
        return find;
    }
    async findByConcern(user, concern_id) {
        const find = await this.myJourneyService.findBy({
            concern_id: +concern_id,
            media_my_journeys: {
                none: {
                    category: 'AFTER_CONDITION',
                },
            },
        });
        if (find && find.user_id != user.id)
            throw new common_1.ForbiddenException();
        if (!find)
            return null;
        return find;
    }
    async find(user, id) {
        const find = await this.myJourneyService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id !== user.id)
            throw new common_1.ForbiddenException();
        return find;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_my_journey_dto_1.PageOptionsMyJourneyDto]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('galery'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_my_journey_galery_concern_list_dto_1.PageOptionsMyJourneyGaleryConcernList]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "galery", null);
__decorate([
    (0, common_1.Get)('galery/concern'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_my_journey_galery_concern_list_dto_1.PageOptionsMyJourneyGaleryConcernList]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "galeryByConcern", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'files',
        dirPath: media_1.MEDIA_MY_JOURNEY_DIR,
        prefixName: 'my-journey-initial-condition',
    })),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Array, create_my_journey_dto_1.CreateMyJourneyDto]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'file',
        dirPath: media_1.MEDIA_MY_JOURNEY_DIR,
        prefixName: 'my-journey-after-condition',
    })),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.UploadedFiles)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, Array, update_my_journey_dto_1.UpdateMyJourneyDto]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('consultation'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, page_options_my_journey_consultation_dto_1.PageOptionsMyJourneyConsultationDto]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "findAllConsultation", null);
__decorate([
    (0, common_1.Get)('treatment'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_my_journey_treatment_dto_1.PageOptionsMyJourneyTreatmentDto]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "findAllTreatment", null);
__decorate([
    (0, common_1.Get)(':id/consultation/:consultationId'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('consultationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, String]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "findByConsultation", null);
__decorate([
    (0, common_1.Get)('concern/:concern_id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('concern_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "findByConcern", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], MyJourneyController.prototype, "find", null);
MyJourneyController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('my-journey'),
    __metadata("design:paramtypes", [my_journey_service_1.MyJourneyService,
        media_service_1.MediaService,
        concern_service_1.ConcernService])
], MyJourneyController);
exports.MyJourneyController = MyJourneyController;
//# sourceMappingURL=my-journey.controller.js.map
//# debugId=bb7c6cef-2c73-573b-9c41-19754b3fdeff
