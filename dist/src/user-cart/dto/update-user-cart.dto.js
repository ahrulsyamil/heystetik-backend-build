"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="27f8d963-1dfa-5d2f-b771-19e93fba5191")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserCartDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_cart_dto_1 = require("./create-user-cart.dto");
class UpdateUserCartDto extends (0, mapped_types_1.PartialType)(create_user_cart_dto_1.CreateUserCartDto) {
}
exports.UpdateUserCartDto = UpdateUserCartDto;
//# sourceMappingURL=update-user-cart.dto.js.map
//# debugId=27f8d963-1dfa-5d2f-b771-19e93fba5191
