"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ef5e606c-e731-572f-8b32-69c4c8b6b195")}catch(e){}}();

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
exports.StreamSaveController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const stream_save_service_1 = require("./stream-save.service");
const stream_service_1 = require("../stream/stream.service");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_save_dto_1 = require("./dto/page-options-save.dto");
const stream_like_service_1 = require("../stream-like/stream-like.service");
let StreamSaveController = class StreamSaveController {
    constructor(streamSaveService, streamService, streamLikeService) {
        this.streamSaveService = streamSaveService;
        this.streamService = streamService;
        this.streamLikeService = streamLikeService;
    }
    async isInCircle(streamer_id, user_id) {
        const circleUser = await this.streamService.findUserInCircle(streamer_id, user_id);
        if (circleUser.length == 0) {
            return false;
        }
        return true;
    }
    async saved(user, pageOptions) {
        pageOptions.user_id = user.id;
        const result = await this.streamSaveService.findAllByUser(pageOptions);
        result.data = await Promise.all(result.data.map(async (item) => {
            const [saved, like, follow] = await Promise.all([
                this.streamSaveService.findBy({
                    stream_id: item.stream.id,
                    user_id: user.id,
                }),
                this.streamLikeService.findBy({
                    stream_id: item.stream.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamFollowerBy({
                    stream_id: item.stream.id,
                    user_id: user.id,
                }),
            ]);
            return {
                ...item,
                stream: {
                    ...item.stream,
                    saved: saved ? true : false,
                    like: like ? true : false,
                    follow: follow ? true : false,
                },
            };
        }));
        return result;
    }
    async save(user, id) {
        const find = await this.streamService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Stream not found');
        if (find.visibility == 'CIRCLE') {
            if (!(await this.isInCircle(find.user_id, user.id)))
                throw new common_1.ForbiddenException();
        }
        return await this.streamSaveService.create({
            stream_id: id,
            user_id: user.id,
        });
    }
    async unsave(user, id) {
        const find = await this.streamService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Stream not found');
        if (find.visibility == 'CIRCLE') {
            if (!(await this.isInCircle(find.user_id, user.id)))
                throw new common_1.ForbiddenException();
        }
        const findStreamSave = await this.streamSaveService.findBy({
            stream_id: id,
            user_id: user.id,
        });
        if (!findStreamSave)
            throw new common_1.BadRequestException('Data not found');
        if (findStreamSave.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.streamSaveService.delete({
            stream_id: id,
            user_id: user.id,
        });
    }
};
__decorate([
    (0, common_1.Get)('saved/my'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_save_dto_1.PageOptionsSaveStreamDto]),
    __metadata("design:returntype", Promise)
], StreamSaveController.prototype, "saved", null);
__decorate([
    (0, common_1.Post)(':id/save'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], StreamSaveController.prototype, "save", null);
__decorate([
    (0, common_1.Post)(':id/unsave'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], StreamSaveController.prototype, "unsave", null);
StreamSaveController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('stream'),
    __metadata("design:paramtypes", [stream_save_service_1.StreamSaveService,
        stream_service_1.StreamService,
        stream_like_service_1.StreamLikeService])
], StreamSaveController);
exports.StreamSaveController = StreamSaveController;
//# sourceMappingURL=stream-save.controller.js.map
//# debugId=ef5e606c-e731-572f-8b32-69c4c8b6b195
