"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e7c7ca00-f456-5fac-b293-4600d7aae438")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePharmacyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pharmacy_dto_1 = require("./create-pharmacy.dto");
class UpdatePharmacyDto extends (0, mapped_types_1.PartialType)(create_pharmacy_dto_1.CreatePharmacyDto) {
}
exports.UpdatePharmacyDto = UpdatePharmacyDto;
//# sourceMappingURL=update-pharmacy.dto.js.map
//# debugId=e7c7ca00-f456-5fac-b293-4600d7aae438
