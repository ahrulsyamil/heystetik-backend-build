"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="af86544c-bd90-545b-b915-5df7d7f5d4dc")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserCartTreatmentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_cart_treatment_dto_1 = require("./create-user-cart-treatment.dto");
class UpdateUserCartTreatmentDto extends (0, mapped_types_1.PartialType)(create_user_cart_treatment_dto_1.CreateUserCartTreatmentDto) {
}
exports.UpdateUserCartTreatmentDto = UpdateUserCartTreatmentDto;
//# sourceMappingURL=update-user-cart-treatment.dto.js.map
//# debugId=af86544c-bd90-545b-b915-5df7d7f5d4dc
