"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="969ca73c-b15d-5617-91ad-b86f54fad54a")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePharmacistDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pharmacist_dto_1 = require("./create-pharmacist.dto");
class UpdatePharmacistDto extends (0, mapped_types_1.PartialType)(create_pharmacist_dto_1.CreatePharmacistDto) {
}
exports.UpdatePharmacistDto = UpdatePharmacistDto;
//# sourceMappingURL=update-pharmacist.dto.js.map
//# debugId=969ca73c-b15d-5617-91ad-b86f54fad54a
