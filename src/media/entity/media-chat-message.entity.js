"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="453ffd43-960d-5f40-9b55-7b86a6581941")}catch(e){}}();

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
exports.MediaChatMessageEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../globals/entities/base.entity");
const media_entity_1 = require("./media.entity");
class MediaChatMessageEntity extends base_entity_1.BaseEntity {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MediaChatMessageEntity.prototype, "media_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MediaChatMessageEntity.prototype, "chat_message_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", media_entity_1.MediaEntity)
], MediaChatMessageEntity.prototype, "media", void 0);
exports.MediaChatMessageEntity = MediaChatMessageEntity;
//# sourceMappingURL=media-chat-message.entity.js.map
//# debugId=453ffd43-960d-5f40-9b55-7b86a6581941
