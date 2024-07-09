"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="747db6dc-0088-504b-aee7-378f4138648e")}catch(e){}}();

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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_notification_dto_1 = require("./dto/page-options-notification.dto");
const store_notification_setting_dto_1 = require("./dto/store-notification-setting.dto");
const notification_service_1 = require("./notification.service");
const user_service_1 = require("../auth/user/user.service");
const user_profile_service_1 = require("../user-profile/user-profile.service");
const store_notification_user_activity_dto_1 = require("./dto/store-notification-user-activity.dto");
let NotificationController = class NotificationController {
    constructor(notificationService, userService, userProfileService) {
        this.notificationService = notificationService;
        this.userService = userService;
        this.userProfileService = userProfileService;
    }
    async findAll(user, pageOptions) {
        pageOptions.recipient_id = user.id;
        return await this.notificationService.findAll(pageOptions);
    }
    async getSetting(user) {
        const notificationSetting = [
            {
                name: 'Mention',
                type: 'NOTIF_STREAM_MENTION',
                group: 'Stream',
            },
            {
                name: 'Postingan yang disukai',
                type: 'NOTIF_STREAM_LIKE',
                group: 'Stream',
            },
            {
                name: 'Balasan',
                type: 'NOTIF_STREAM_REPLY',
                group: 'Stream',
            },
            {
                name: 'Followers',
                type: 'NOTIF_STREAM_FOLLOWER',
                group: 'Stream',
            },
            {
                name: 'Repost',
                type: 'NOTIF_STREAM_REPOST',
                group: 'Stream',
            },
            {
                name: 'Postingan akun yang diikuti',
                type: 'NOTIF_STREAM_FOLLOWED_POST',
                group: 'Stream',
            },
            {
                name: 'Teman di Heystetik',
                type: 'NOTIF_INAPP_NEW_FRIEND',
                group: 'Stream',
            },
        ];
        const userNotificationSetting = await this.notificationService.findAllNotificationSetting(user.id);
        return notificationSetting.map((setting) => {
            const find = userNotificationSetting.find((x) => x.type == setting.type);
            return {
                ...setting,
                is_enabled: find ? find.is_enabled : true,
            };
        });
    }
    async markAsRead(user, id) {
        const find = await this.notificationService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.recipient_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.notificationService.update(find.id, {
            is_read: true,
        });
    }
    async markAllAsRead(user) {
        return await this.notificationService.updateMany({
            recipient_id: user.id,
        }, {
            is_read: true,
        });
    }
    async storeSetting(user, body) {
        await Promise.all(body.data.map((setting) => {
            return this.notificationService.storeNotificationSetting({
                user_id: user.id,
                ...setting,
            });
        }));
        return;
    }
    async getNotificationUserActifity(user, user_id) {
        const [findUser, findUserFollow] = await Promise.all([
            this.userService.find(user_id),
            this.userProfileService.findUserFollow(user_id, user.id),
        ]);
        if (!findUser)
            throw new common_1.BadRequestException('User not found');
        if (!findUserFollow)
            throw new common_1.BadRequestException('You not following this user');
        if (user_id == user.id)
            throw new common_1.BadRequestException('Invalid request, this user is yours');
        const userActivity = [
            {
                name: 'Posts',
                type: 'NOTIF_ACTIVITY_POSTS',
            },
        ];
        const notificationUserActivity = await this.notificationService.findAllNotificationUserActivity(user_id, user.id);
        return userActivity.map((setting) => {
            const find = notificationUserActivity.find((x) => x.type == setting.type);
            return {
                ...setting,
                is_enabled: find ? find.is_enabled : false,
            };
        });
    }
    async storeNotificationUserActivity(user, user_id, body) {
        const [findUser, findUserFollow] = await Promise.all([
            this.userService.find(user_id),
            this.userProfileService.findUserFollow(user_id, user.id),
        ]);
        if (!findUser)
            throw new common_1.BadRequestException('User not found');
        if (!findUserFollow)
            throw new common_1.BadRequestException('You not following this user');
        if (user_id == user.id)
            throw new common_1.BadRequestException('Invalid request, this user is yours');
        await Promise.all(body.data.map((setting) => {
            return this.notificationService.storeNotificationUserActivity({
                user_id,
                follower_id: user.id,
                ...setting,
            });
        }));
        return;
    }
    async unreadCount(user) {
        return await this.notificationService.unreadCount(user.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_notification_dto_1.PageOptionsNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('setting'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getSetting", null);
__decorate([
    (0, common_1.Patch)(':id/read'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Patch)('read-all'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markAllAsRead", null);
__decorate([
    (0, common_1.Post)('setting'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        store_notification_setting_dto_1.StoreNotificationSettingDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "storeSetting", null);
__decorate([
    (0, common_1.Get)('user-activity/:user_id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotificationUserActifity", null);
__decorate([
    (0, common_1.Post)('user-activity/:user_id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('user_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, store_notification_user_activity_dto_1.StoreNotificationUserActivityDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "storeNotificationUserActivity", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "unreadCount", null);
NotificationController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('notification'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService,
        user_service_1.UserService,
        user_profile_service_1.UserProfileService])
], NotificationController);
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map
//# debugId=747db6dc-0088-504b-aee7-378f4138648e
