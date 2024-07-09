"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="624a5713-8f21-5e8c-927a-0dab5c4455c8")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAddressDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_address_dto_1 = require("./create-user-address.dto");
class UpdateUserAddressDto extends (0, mapped_types_1.PartialType)(create_user_address_dto_1.CreateUserAdressDto) {
}
exports.UpdateUserAddressDto = UpdateUserAddressDto;
//# sourceMappingURL=update-user-address.dto.js.map
//# debugId=624a5713-8f21-5e8c-927a-0dab5c4455c8
