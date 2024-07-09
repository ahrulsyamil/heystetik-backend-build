"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5771097e-eebf-529d-8115-6984e7f5c26c")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVoucherDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_voucher_dto_1 = require("./create-voucher.dto");
class UpdateVoucherDto extends (0, mapped_types_1.PartialType)(create_voucher_dto_1.CreateVoucherDto) {
}
exports.UpdateVoucherDto = UpdateVoucherDto;
//# sourceMappingURL=update-voucher.dto.js.map
//# debugId=5771097e-eebf-529d-8115-6984e7f5c26c
