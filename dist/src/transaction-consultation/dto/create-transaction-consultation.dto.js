"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="02c9b2af-673f-5047-baa6-ee4f6087577c")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionConsultationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_medical_history_dto_1 = require("../../medical-history/dto/create-medical-history.dto");
const transaction_consultation_dto_1 = require("./transaction-consultation.dto");
class CreateTransactionConsultationDto extends (0, swagger_1.IntersectionType)(transaction_consultation_dto_1.TransactionConsultationDto, create_medical_history_dto_1.CreateMedicalHistoryDto) {
}
exports.CreateTransactionConsultationDto = CreateTransactionConsultationDto;
//# sourceMappingURL=create-transaction-consultation.dto.js.map
//# debugId=02c9b2af-673f-5047-baa6-ee4f6087577c
