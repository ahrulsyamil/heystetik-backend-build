"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d4f91030-74cb-5555-b93b-17d5350bbb8c")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRolesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_roles_dto_1 = require("./create-roles.dto");
class UpdateRolesDto extends (0, mapped_types_1.PartialType)(create_roles_dto_1.CreateRolesDto) {
}
exports.UpdateRolesDto = UpdateRolesDto;
//# sourceMappingURL=update-roles.dto.js.map
//# debugId=d4f91030-74cb-5555-b93b-17d5350bbb8c
