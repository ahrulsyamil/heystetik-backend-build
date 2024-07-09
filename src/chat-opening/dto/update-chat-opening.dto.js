"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1e2d9767-287e-55a3-90db-ce692927c13c")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChatOpeningDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chat_opening_dto_1 = require("./create-chat-opening.dto");
class UpdateChatOpeningDto extends (0, mapped_types_1.PartialType)(create_chat_opening_dto_1.CreateChatOpeningDto) {
}
exports.UpdateChatOpeningDto = UpdateChatOpeningDto;
//# sourceMappingURL=update-chat-opening.dto.js.map
//# debugId=1e2d9767-287e-55a3-90db-ce692927c13c
