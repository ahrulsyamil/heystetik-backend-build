"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3fb97d20-7054-5608-a7c6-603b1e185ed2")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRecentEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const chat_room_1 = require("./chat-room");
const chat_message_entity_1 = require("./chat-message.entity");
class ChatRecentEntity extends chat_room_1.ChatRoomEntity {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: chat_message_entity_1.ChatMessageEntity }),
    __metadata("design:type", chat_message_entity_1.ChatMessageEntity)
], ChatRecentEntity.prototype, "last_chat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ChatRecentEntity.prototype, "unseen_count", void 0);
exports.ChatRecentEntity = ChatRecentEntity;
//# sourceMappingURL=chat-recent.entity.js.map
//# debugId=3fb97d20-7054-5608-a7c6-603b1e185ed2
