"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5426622a-2dec-5cf7-94e4-2e45fa6a12f9")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserLocation = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_location_dto_1 = require("./create-user-location.dto");
class UpdateUserLocation extends (0, mapped_types_1.PartialType)(create_user_location_dto_1.CreateUserLocationDto) {
}
exports.UpdateUserLocation = UpdateUserLocation;
//# sourceMappingURL=update-user-location.dto.js.map
//# debugId=5426622a-2dec-5cf7-94e4-2e45fa6a12f9
