"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c70bfc95-2dae-5e39-b08e-3c303cb9f305")}catch(e){}}();

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
exports.ChatQuickReplyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const chat_opening_entity_1 = require("../chat-opening/entities/chat-opening.entity");
const page_options_dto_1 = require("../decorators/page-options.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const media_1 = require("../globals/constant/media");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_service_1 = require("../media/media.service");
const user_entity_1 = require("../users/entities/user.entity");
const chat_quick_reply_service_1 = require("./chat-quick-reply.service");
const create_chat_quick_reply_dto_1 = require("./dto/create-chat-quick-reply.dto");
const update_chat_quick_reply_dto_1 = require("./dto/update-chat-quick-reply.dto");
const chat_quick_reply_entity_1 = require("./entities/chat-quick-reply.entity");
let ChatQuickReplyController = class ChatQuickReplyController {
    constructor(chatQuickReplyService, mediaService) {
        this.chatQuickReplyService = chatQuickReplyService;
        this.mediaService = mediaService;
    }
    async findAll(user, pageOptionsDto) {
        return await this.chatQuickReplyService.findAll(user.id, pageOptionsDto);
    }
    async create(user, files, createChatQuickReplyDto) {
        let media = [];
        if (files.length > 0) {
            media = await this.mediaService.insertMediaData(files);
        }
        createChatQuickReplyDto.doctor_id = user.id;
        return await this.chatQuickReplyService.create(createChatQuickReplyDto, media);
    }
    async findOne(user, id) {
        const result = await this.chatQuickReplyService.findOne(id);
        if (!result)
            throw new common_1.NotFoundException('Data not found');
        if (result.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        return result;
    }
    async update(user, files, id, updateChatQuickReplyDto) {
        let media = [];
        if (files.length > 0) {
            media = await this.mediaService.insertMediaData(files);
        }
        const find = await this.chatQuickReplyService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        const a = await this.chatQuickReplyService.update(find.id, updateChatQuickReplyDto, media);
        return a;
    }
    async remove(user, id) {
        const find = await this.chatQuickReplyService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.chatQuickReplyService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: chat_quick_reply_entity_1.ChatQuickReplyEntity, isArray: true }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], ChatQuickReplyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'files',
        dirPath: media_1.MEDIA_CHAT_QUICK_REPLY_DIR,
        prefixName: 'quick-reply',
    })),
    (0, swagger_1.ApiCreatedResponse)({ type: chat_opening_entity_1.ChatOpeningEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Array, create_chat_quick_reply_dto_1.CreateChatQuickReplyDto]),
    __metadata("design:returntype", Promise)
], ChatQuickReplyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: chat_quick_reply_entity_1.ChatQuickReplyEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], ChatQuickReplyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'files',
        dirPath: media_1.MEDIA_CHAT_QUICK_REPLY_DIR,
        prefixName: 'quick-reply',
    })),
    (0, swagger_1.ApiOkResponse)({ type: chat_quick_reply_entity_1.ChatQuickReplyEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Param)('id')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Array, Number, update_chat_quick_reply_dto_1.UpdateChatQuickReplyDto]),
    __metadata("design:returntype", Promise)
], ChatQuickReplyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: chat_quick_reply_entity_1.ChatQuickReplyEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], ChatQuickReplyController.prototype, "remove", null);
ChatQuickReplyController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('chat/quick-reply'),
    (0, swagger_1.ApiTags)('Chat Quick Reply'),
    __metadata("design:paramtypes", [chat_quick_reply_service_1.ChatQuickReplyService,
        media_service_1.MediaService])
], ChatQuickReplyController);
exports.ChatQuickReplyController = ChatQuickReplyController;
//# sourceMappingURL=chat-quick-reply.controller.js.map
//# debugId=c70bfc95-2dae-5e39-b08e-3c303cb9f305
