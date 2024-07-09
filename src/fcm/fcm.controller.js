"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e501fb85-9447-570e-b6a1-fc40c672ead1")}catch(e){}}();

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
exports.FcmController = void 0;
const common_1 = require("@nestjs/common");
const fcm_service_1 = require("./fcm.service");
const save_user_notification_setting_dto_1 = require("./dto/save-user-notification-setting.dto");
const auth_guard_1 = require("../auth/auth.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const subscribe_topic_dto_1 = require("./dto/subscribe-topic.dto");
const push_to_token_dto_1 = require("./dto/push-to-token.dto");
const push_to_topic_dto_1 = require("./dto/push-to-topic.dto");
let FcmController = class FcmController {
    constructor(fcmService) {
        this.fcmService = fcmService;
    }
    async create(user, data) {
        const verify = await this.fcmService.verifyToken(data.token);
        if (!verify)
            throw new common_1.BadRequestException('Invalid token');
        data.user_id = user.id;
        return await this.fcmService.save(data);
    }
    async find(user) {
        const find = await this.fcmService.find(user.id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async subscribeToTopic(user, data) {
        const verify = await this.fcmService.verifyToken(data.token);
        if (!verify)
            throw new common_1.BadRequestException('Invalid token');
        return this.fcmService.subscribeToTopic([data.token], data.topic);
    }
    async unsubscribeFromTopic(user, data) {
        const verify = await this.fcmService.verifyToken(data.token);
        if (!verify)
            throw new common_1.BadRequestException('Invalid token');
        return this.fcmService.unsubscribeFromTopic([data.token], data.topic);
    }
    async pushToToken(data) {
        const verify = await this.fcmService.verifyToken(data.token);
        if (!verify)
            throw new common_1.BadRequestException('Invalid token');
        return await this.fcmService.sendNotificationToUser(data);
    }
    async pushToTopic(data) {
        return await this.fcmService.sendNotificationToTopic(data);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        save_user_notification_setting_dto_1.SaveUserNotificationSettingDto]),
    __metadata("design:returntype", Promise)
], FcmController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], FcmController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('topic/subscribe'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        subscribe_topic_dto_1.SubscribeTopicDto]),
    __metadata("design:returntype", Promise)
], FcmController.prototype, "subscribeToTopic", null);
__decorate([
    (0, common_1.Post)('topic/unsubscribe'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        subscribe_topic_dto_1.SubscribeTopicDto]),
    __metadata("design:returntype", Promise)
], FcmController.prototype, "unsubscribeFromTopic", null);
__decorate([
    (0, common_1.Post)('push-to-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [push_to_token_dto_1.PushToTokenDto]),
    __metadata("design:returntype", Promise)
], FcmController.prototype, "pushToToken", null);
__decorate([
    (0, common_1.Post)('push-to-topic'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [push_to_topic_dto_1.PushToTopicDto]),
    __metadata("design:returntype", Promise)
], FcmController.prototype, "pushToTopic", null);
FcmController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('fcm'),
    __metadata("design:paramtypes", [fcm_service_1.FcmService])
], FcmController);
exports.FcmController = FcmController;
//# sourceMappingURL=fcm.controller.js.map
//# debugId=e501fb85-9447-570e-b6a1-fc40c672ead1
