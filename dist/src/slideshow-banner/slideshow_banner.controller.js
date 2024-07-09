"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c0e09e5e-5a12-5b15-9759-4313d2093da2")}catch(e){}}();

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
exports.SlideshowBannerController = void 0;
const common_1 = require("@nestjs/common");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const media_1 = require("../globals/constant/media");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_service_1 = require("../media/media.service");
const create_slideshow_banner_dto_1 = require("./dto/create-slideshow_banner.dto");
const get_slidehow_banner_dto_1 = require("./dto/get-slidehow_banner.dto");
const page_options_banner_dto_1 = require("./dto/page-options-banner.dto");
const update_slideshow_banner_dto_1 = require("./dto/update-slideshow_banner.dto");
const slideshow_banner_service_1 = require("./slideshow_banner.service");
let SlideshowBannerController = class SlideshowBannerController {
    constructor(slideshowBannerService, mediaService) {
        this.slideshowBannerService = slideshowBannerService;
        this.mediaService = mediaService;
    }
    async create(images, createSlideshowBannerDto) {
        if (!images) {
            throw new common_1.BadRequestException('Image is required');
        }
        if (images.length > 1)
            throw new common_1.BadRequestException('Only one image can be uploaded');
        let media = [];
        if (images.length == 1) {
            media = await this.mediaService.insertMediaData(images);
        }
        return await this.slideshowBannerService.create(createSlideshowBannerDto, media[0]);
    }
    async getAllPosition(query) {
        return await this.slideshowBannerService.getAllPosition(query.type);
    }
    async findAll(pageOptionsDto) {
        return await this.slideshowBannerService.findAll(pageOptionsDto);
    }
    async findOne(id) {
        const find = await this.slideshowBannerService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async update(id, images, updateSlideshowBannerDto) {
        const find = await this.slideshowBannerService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        let media = [];
        if (images) {
            if (images.length > 1)
                throw new common_1.BadRequestException('Only one image can be uploaded');
            if (images.length == 1) {
                media = await this.mediaService.insertMediaData(images);
            }
        }
        updateSlideshowBannerDto.id = find.id;
        return await this.slideshowBannerService.update(updateSlideshowBannerDto, media[0]);
    }
    async remove(id) {
        const find = await this.slideshowBannerService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        await this.slideshowBannerService.remove(+id);
        return null;
    }
};
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'image',
        dirPath: media_1.MEDIA_BANNER_DIR,
        prefixName: 'banner',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_slideshow_banner_dto_1.CreateSlideshowBannerDto]),
    __metadata("design:returntype", Promise)
], SlideshowBannerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-all-position'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_slidehow_banner_dto_1.GetPosition]),
    __metadata("design:returntype", Promise)
], SlideshowBannerController.prototype, "getAllPosition", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_banner_dto_1.PageOptionsBannerDto]),
    __metadata("design:returntype", Promise)
], SlideshowBannerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SlideshowBannerController.prototype, "findOne", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'image',
        dirPath: media_1.MEDIA_BANNER_DIR,
        prefixName: 'banner',
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, update_slideshow_banner_dto_1.UpdateSlideshowBannerDto]),
    __metadata("design:returntype", Promise)
], SlideshowBannerController.prototype, "update", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SlideshowBannerController.prototype, "remove", null);
SlideshowBannerController = __decorate([
    (0, common_1.Controller)('banner'),
    __metadata("design:paramtypes", [slideshow_banner_service_1.SlideshowBannerService,
        media_service_1.MediaService])
], SlideshowBannerController);
exports.SlideshowBannerController = SlideshowBannerController;
//# sourceMappingURL=slideshow_banner.controller.js.map
//# debugId=c0e09e5e-5a12-5b15-9759-4313d2093da2
