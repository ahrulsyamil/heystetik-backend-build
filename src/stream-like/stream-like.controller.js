"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="69db506e-eb3b-5fa5-b58f-499e544fa7d3")}catch(e){}}();

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
exports.StreamLikeController = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const notification_service_1 = require("../notification/notification.service");
const stream_service_1 = require("../stream/stream.service");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_stream_dto_1 = require("./dto/page-options-stream.dto");
const stream_like_service_1 = require("./stream-like.service");
let StreamLikeController = class StreamLikeController {
    constructor(streamLikeService, streamService, notificationService, queueFcm) {
        this.streamLikeService = streamLikeService;
        this.streamService = streamService;
        this.notificationService = notificationService;
        this.queueFcm = queueFcm;
    }
    async isInCircle(streamer_id, user_id) {
        const circleUser = await this.streamService.findUserInCircle(streamer_id, user_id);
        if (circleUser.length == 0) {
            return false;
        }
        return true;
    }
    async likes(user, id, pageOptions) {
        const find = await this.streamService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Stream not found');
        if (find.visibility == 'CIRCLE') {
            if (!(await this.isInCircle(find.user_id, user.id)))
                throw new common_1.ForbiddenException();
        }
        pageOptions.stream_id = id;
        return await this.streamLikeService.findAllByStream(pageOptions);
    }
    async like(user, id) {
        const [find] = await Promise.all([this.streamService.find(id)]);
        if (!find)
            throw new common_1.BadRequestException('Stream not found');
        const ownerNotificationSetting = await this.notificationService.findAllNotificationSetting(find.user_id);
        if (find.visibility == 'CIRCLE') {
            if (!(await this.isInCircle(find.user_id, user.id)))
                throw new common_1.ForbiddenException();
        }
        const like = await this.streamLikeService.create({
            stream_id: id,
            user_id: user.id,
        });
        if (user.id != find.user_id &&
            (ownerNotificationSetting.find((x) => x.type == 'NOTIF_STREAM_LIKE')
                ?.is_enabled ??
                true)) {
            const notification = await this.notificationService.create({
                type: 'STREAM_LIKE',
                sender_id: 0,
                recipient_id: find.user_id,
                title: 'Stream',
                body: `${user.username} telah memberi "like" pada postingan Anda`,
                data: {
                    stream_id: find.id,
                    stream_like_id: like.id,
                    user_id: like.user_id,
                },
            });
            this.queueFcm.add('sendNotificationToTopic', {
                topic: find.user_id.toString(),
                title: notification.title,
                body: notification.body,
                data: {
                    type: notification.type,
                    stream_id: find.id,
                    stream_like_id: like.id,
                    user_id: like.user_id,
                },
            });
        }
        const streamFollower = await this.streamService.findAllStreamFollower(find.id);
        await Promise.all(streamFollower
            .filter((x) => x.user_id != user.id)
            .map(async (item) => {
            if (item.user.notification_settings.find((x) => x.type == 'NOTIF_STREAM_FOLLOWED_POST')?.is_enabled ??
                true) {
                const notification = await this.notificationService.create({
                    type: 'STREAM_LIKE',
                    sender_id: 0,
                    recipient_id: item.user_id,
                    title: 'Stream',
                    body: `${user.username} telah memberi "like" pada postingan yang anda ikuti`,
                    data: {
                        stream_id: find.id,
                        stream_like_id: like.id,
                        user_id: like.user_id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: item.user_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        stream_id: find.id,
                        stream_like_id: like.id,
                        user_id: like.user_id,
                    },
                });
                return notification;
            }
            return null;
        }));
        return like;
    }
    async unlike(user, id) {
        const find = await this.streamService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Stream not found');
        if (find.visibility == 'CIRCLE') {
            if (!(await this.isInCircle(find.user_id, user.id)))
                throw new common_1.ForbiddenException();
        }
        const findStreamLike = await this.streamLikeService.findBy({
            stream_id: id,
            user_id: user.id,
        });
        if (!findStreamLike)
            throw new common_1.BadRequestException('Data not found');
        if (findStreamLike.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.streamLikeService.delete({
            stream_id: id,
            user_id: user.id,
        });
    }
};
__decorate([
    (0, common_1.Get)(':id/likes'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, page_options_stream_dto_1.PageOptionsLikeStreamDto]),
    __metadata("design:returntype", Promise)
], StreamLikeController.prototype, "likes", null);
__decorate([
    (0, common_1.Post)(':id/like'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], StreamLikeController.prototype, "like", null);
__decorate([
    (0, common_1.Post)(':id/unlike'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], StreamLikeController.prototype, "unlike", null);
StreamLikeController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('stream'),
    __param(3, (0, bull_1.InjectQueue)('queueFcm')),
    __metadata("design:paramtypes", [stream_like_service_1.StreamLikeService,
        stream_service_1.StreamService,
        notification_service_1.NotificationService, Object])
], StreamLikeController);
exports.StreamLikeController = StreamLikeController;
//# sourceMappingURL=stream-like.controller.js.map
//# debugId=69db506e-eb3b-5fa5-b58f-499e544fa7d3
