"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e01004e8-cd5d-5266-ac47-bd575d83408e")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransactionTreatmentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_transaction_treatment_dto_1 = require("./create-transaction-treatment.dto");
class UpdateTransactionTreatmentDto extends (0, mapped_types_1.PartialType)(create_transaction_treatment_dto_1.CreateTransactionTreatmentDto) {
}
exports.UpdateTransactionTreatmentDto = UpdateTransactionTreatmentDto;
//# sourceMappingURL=update-transaction-treatment.dto.js.map
//# debugId=e01004e8-cd5d-5266-ac47-bd575d83408e
