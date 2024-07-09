"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9c8de64b-c92d-5d63-9889-61d4b3a1c02d")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStreamDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_stream_dto_1 = require("./create-stream.dto");
class UpdateStreamDto extends (0, mapped_types_1.PartialType)(create_stream_dto_1.CreateStreamDto) {
}
exports.UpdateStreamDto = UpdateStreamDto;
//# sourceMappingURL=update-stream.dto.js.map
//# debugId=9c8de64b-c92d-5d63-9889-61d4b3a1c02d
