"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b2e29e10-5156-5415-8727-01808af8661a")}catch(e){}}();

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
exports.ChatOpeningController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const user_entity_1 = require("../users/entities/user.entity");
const chat_opening_service_1 = require("./chat-opening.service");
const create_chat_opening_dto_1 = require("./dto/create-chat-opening.dto");
const chat_opening_entity_1 = require("./entities/chat-opening.entity");
const roles_guard_1 = require("../globals/guards/roles.guard");
let ChatOpeningController = class ChatOpeningController {
    constructor(chatOpeningService) {
        this.chatOpeningService = chatOpeningService;
    }
    create(user, createChatOpeningDto) {
        return this.chatOpeningService.create(user.id, createChatOpeningDto);
    }
    async findOne(user) {
        return await this.chatOpeningService.findOne(user.id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: chat_opening_entity_1.ChatOpeningEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_chat_opening_dto_1.CreateChatOpeningDto]),
    __metadata("design:returntype", void 0)
], ChatOpeningController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: chat_opening_entity_1.ChatOpeningEntity, isArray: true }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ChatOpeningController.prototype, "findOne", null);
ChatOpeningController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('chat/opening'),
    (0, swagger_1.ApiTags)('Chat Opening'),
    __metadata("design:paramtypes", [chat_opening_service_1.ChatOpeningService])
], ChatOpeningController);
exports.ChatOpeningController = ChatOpeningController;
//# sourceMappingURL=chat-opening.controller.js.map
//# debugId=b2e29e10-5156-5415-8727-01808af8661a
