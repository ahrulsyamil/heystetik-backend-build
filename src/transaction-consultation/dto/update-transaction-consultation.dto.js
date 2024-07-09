"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f1e6eb08-2442-5e4b-8f5e-cedf4fd766ce")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransactionConsultationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const insert_transaction_consultation_dto_1 = require("./insert-transaction-consultation.dto");
class UpdateTransactionConsultationDto extends (0, mapped_types_1.PartialType)(insert_transaction_consultation_dto_1.InsertTransactionConsultationDto) {
}
exports.UpdateTransactionConsultationDto = UpdateTransactionConsultationDto;
//# sourceMappingURL=update-transaction-consultation.dto.js.map
//# debugId=f1e6eb08-2442-5e4b-8f5e-cedf4fd766ce
