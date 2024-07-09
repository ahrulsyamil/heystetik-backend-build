"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bcdcf9a9-a57d-5b73-8e97-1d78dddddbf9")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConsultationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_consultation_dto_1 = require("./create-consultation.dto");
class UpdateConsultationDto extends (0, mapped_types_1.PartialType)(create_consultation_dto_1.CreateConsultationDto) {
}
exports.UpdateConsultationDto = UpdateConsultationDto;
//# sourceMappingURL=update-consultation.dto.js.map
//# debugId=bcdcf9a9-a57d-5b73-8e97-1d78dddddbf9
