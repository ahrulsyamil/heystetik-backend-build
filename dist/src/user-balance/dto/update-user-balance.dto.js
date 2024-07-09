"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2ea72c9f-3b02-5e00-9f06-a329eb61efc1")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserBalance = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_balance_dto_1 = require("./create-user-balance.dto");
class UpdateUserBalance extends (0, mapped_types_1.PartialType)(create_user_balance_dto_1.CreateUserBalance) {
}
exports.UpdateUserBalance = UpdateUserBalance;
//# sourceMappingURL=update-user-balance.dto.js.map
//# debugId=2ea72c9f-3b02-5e00-9f06-a329eb61efc1
