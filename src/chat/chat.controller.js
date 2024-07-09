"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="767f523e-ad4a-5467-8fdd-a70daec6d786")}catch(e){}}();

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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const consultation_service_1 = require("../consultation/consultation.service");
const user_decorator_1 = require("../decorators/user.decorator");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const chat_service_1 = require("./chat.service");
const get_message_room_dto_1 = require("./dto/get-message-room.dto");
const page_options_search_recent_chat_dto_1 = require("./dto/page-options-search-recent-chat.dto");
const chat_message_entity_1 = require("./entities/chat-message.entity");
const chat_recent_entity_1 = require("./entities/chat-recent.entity");
let ChatController = class ChatController {
    constructor(chatService, transactionConsultationService, consultationService) {
        this.chatService = chatService;
        this.transactionConsultationService = transactionConsultationService;
        this.consultationService = consultationService;
    }
    async fetchMessageRoom(pageOptionsDto, code) {
        return await this.chatService.fetchChatMessageByRoom(pageOptionsDto, code);
    }
    async fetchRecentChat(user) {
        return await this.chatService.fetchRecentChat(user.id);
    }
    async searchRecentChat(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return this.chatService.searchRecentChat(pageOptionsDto);
    }
};
__decorate([
    (0, common_1.Get)('/message/:code'),
    (0, swagger_1.ApiOkResponse)({ type: chat_message_entity_1.ChatMessageEntity, isArray: true }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_message_room_dto_1.GetMessageRoomDto, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "fetchMessageRoom", null);
__decorate([
    (0, common_1.Get)('/recent'),
    (0, swagger_1.ApiOkResponse)({ type: chat_recent_entity_1.ChatRecentEntity, isArray: true }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "fetchRecentChat", null);
__decorate([
    (0, common_1.Get)('/recent/search'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, page_options_search_recent_chat_dto_1.PageOptionsSearchRecentChatDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "searchRecentChat", null);
ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    (0, swagger_1.ApiTags)('Chat'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        transaction_consultation_service_1.TransactionConsultationService,
        consultation_service_1.ConsultationService])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map
//# debugId=767f523e-ad4a-5467-8fdd-a70daec6d786
