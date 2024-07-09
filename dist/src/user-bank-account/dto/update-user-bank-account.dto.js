"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5d99ca73-82f8-50b9-b580-13dc9a74a1d7")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserBankAccountDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_bank_account_dto_1 = require("./create-user-bank-account.dto");
class UpdateUserBankAccountDto extends (0, mapped_types_1.PartialType)(create_user_bank_account_dto_1.CreateUserBankAccountDto) {
}
exports.UpdateUserBankAccountDto = UpdateUserBankAccountDto;
//# sourceMappingURL=update-user-bank-account.dto.js.map
//# debugId=5d99ca73-82f8-50b9-b580-13dc9a74a1d7
