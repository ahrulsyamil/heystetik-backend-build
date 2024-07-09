"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="47a67331-5fba-56e7-a27c-987981fba2b8")}catch(e){}}();

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
exports.BroadcastController = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const media_1 = require("../globals/constant/media");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_service_1 = require("../media/media.service");
const broadcast_service_1 = require("./broadcast.service");
const create_broadcast_dto_1 = require("./dto/create-broadcast.dto");
const get_count_user_reach_broadcast_dto_1 = require("./dto/get-count-user-reach-broadcast.dto");
const page_options_broadcast_dto_1 = require("./dto/page-options-broadcast.dto");
const bull_1 = require("@nestjs/bull");
const date_1 = require("../globals/helpers/date");
const update_broadcast_dto_1 = require("./dto/update-broadcast.dto");
let BroadcastController = class BroadcastController {
    constructor(broadcastService, mediaService, queueTaskSchedule) {
        this.broadcastService = broadcastService;
        this.mediaService = mediaService;
        this.queueTaskSchedule = queueTaskSchedule;
    }
    async create(images, data) {
        if (images && images.length > 1)
            throw new common_1.BadRequestException('Only one image can be uploaded');
        let media = [];
        if (images && images.length == 1) {
            media = await this.mediaService.insertMediaData(images);
        }
        let status = 'Queue';
        if (dayjs(data.execution_time).isBefore(dayjs()) ||
            dayjs(data.execution_time).isSame(dayjs())) {
            status = 'Progress';
        }
        const mediaBroadcast = media.length > 0
            ? {
                media_broadcast: {
                    create: media[0],
                },
            }
            : {};
        const broadcastInterest = data.interests && data.interests.length > 0
            ? {
                broadcast_interests: {
                    create: data.interests.map((interest) => ({ interest })),
                },
            }
            : {};
        const broadcastProvince = data.province_ids && data.province_ids.length > 0
            ? {
                broadcast_provinces: {
                    create: data.province_ids.map((province_id) => ({ province_id })),
                },
            }
            : {};
        const broadcastCity = data.city_ids && data.city_ids.length > 0
            ? {
                broadcast_cities: {
                    create: data.city_ids.map((city_id) => ({ city_id })),
                },
            }
            : {};
        const result = await this.broadcastService.create({
            topic: data.topic,
            title: data.title,
            description: data.description,
            execution_time: new Date(data.execution_time),
            link: data.link,
            status,
            user_reach: data.user_reach,
            broadcast_targets: {
                create: data.role_id
                    .filter((x) => x != 'All')
                    .map((role_id) => ({ role_id: +role_id })),
            },
            ...broadcastInterest,
            ...broadcastProvince,
            ...broadcastCity,
            ...mediaBroadcast,
        });
        const job = await this.queueTaskSchedule.add('scheduledBroadcast', result, {
            delay: (0, date_1.calculateDelay)(data.execution_time),
        });
        this.broadcastService.update(result.id, {
            job_id: `${job.id}`,
        });
        return result;
    }
    async findAll(pageOptionsDto) {
        return await this.broadcastService.findAll(pageOptionsDto);
    }
    async findOne(id) {
        const find = await this.broadcastService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async remove(id) {
        const find = await this.broadcastService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.status != 'Queue')
            throw new common_1.BadRequestException(`Invalid request for deleting ${find.status} broadcast`);
        const job = await this.queueTaskSchedule.getJob(find.job_id);
        if (job && job.isDelayed()) {
            await job.remove();
        }
        await this.broadcastService.delete(+id);
        return null;
    }
    async getUserReach(data) {
        return this.broadcastService.getUserReach(data);
    }
    async update(id, images, data) {
        const find = await this.broadcastService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.status != 'Queue')
            throw new common_1.BadRequestException(`Invalid request for deleting ${find.status} broadcast`);
        let media = [];
        if (images) {
            if (images.length > 1)
                throw new common_1.BadRequestException('Only one image can be uploaded');
            if (images.length == 1) {
                media = await this.mediaService.insertMediaData(images);
            }
        }
        if (data.status == 'Cancelled') {
            const job = await this.queueTaskSchedule.getJob(find.job_id);
            if (job && job.isDelayed()) {
                await job.remove();
            }
        }
        return await this.broadcastService.update(find.id, data, media.length > 0 ? media[0] : undefined);
    }
};
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'image',
        dirPath: media_1.MEDIA_BROADCAST_DIR,
        prefixName: 'broadcast',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_broadcast_dto_1.CreateBroadcastDto]),
    __metadata("design:returntype", Promise)
], BroadcastController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_broadcast_dto_1.PageOptionsBroadcastDto]),
    __metadata("design:returntype", Promise)
], BroadcastController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BroadcastController.prototype, "findOne", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BroadcastController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('count/user-reach'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_count_user_reach_broadcast_dto_1.GetCountUserReachBroadcastDto]),
    __metadata("design:returntype", Promise)
], BroadcastController.prototype, "getUserReach", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'image',
        dirPath: media_1.MEDIA_BROADCAST_DIR,
        prefixName: 'broadcast',
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, update_broadcast_dto_1.UpdateBroadcastDto]),
    __metadata("design:returntype", Promise)
], BroadcastController.prototype, "update", null);
BroadcastController = __decorate([
    (0, common_1.Controller)('broadcast'),
    __param(2, (0, bull_1.InjectQueue)('queueTaskSchedule')),
    __metadata("design:paramtypes", [broadcast_service_1.BroadcastService,
        media_service_1.MediaService, Object])
], BroadcastController);
exports.BroadcastController = BroadcastController;
//# sourceMappingURL=broadcast.controller.js.map
//# debugId=47a67331-5fba-56e7-a27c-987981fba2b8
