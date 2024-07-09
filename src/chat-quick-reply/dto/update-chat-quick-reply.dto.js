"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8d4987a4-f5c0-555a-9bd4-e63c269fee25")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChatQuickReplyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chat_quick_reply_dto_1 = require("./create-chat-quick-reply.dto");
class UpdateChatQuickReplyDto extends (0, mapped_types_1.PartialType)(create_chat_quick_reply_dto_1.CreateChatQuickReplyDto) {
}
exports.UpdateChatQuickReplyDto = UpdateChatQuickReplyDto;
//# sourceMappingURL=update-chat-quick-reply.dto.js.map
//# debugId=8d4987a4-f5c0-555a-9bd4-e63c269fee25
