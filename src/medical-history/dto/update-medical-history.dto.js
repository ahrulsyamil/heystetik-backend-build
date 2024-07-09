"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ba62b208-d24c-5531-a145-777c6f7b198a")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicalHistoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_medical_history_dto_1 = require("./create-medical-history.dto");
class UpdateMedicalHistoryDto extends (0, mapped_types_1.PartialType)(create_medical_history_dto_1.CreateMedicalHistoryDto) {
}
exports.UpdateMedicalHistoryDto = UpdateMedicalHistoryDto;
//# sourceMappingURL=update-medical-history.dto.js.map
//# debugId=ba62b208-d24c-5531-a145-777c6f7b198a
