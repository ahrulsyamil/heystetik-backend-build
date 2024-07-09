"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="92a9b9e9-06aa-5982-9c50-ed8234cc137b")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInterestConditionsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_interest_conditions_dto_1 = require("./create-interest_conditions.dto");
class UpdateInterestConditionsDto extends (0, mapped_types_1.PartialType)(create_interest_conditions_dto_1.CreateInterestConditionsDto) {
}
exports.UpdateInterestConditionsDto = UpdateInterestConditionsDto;
//# sourceMappingURL=update-interest_conditions.dto.js.map
//# debugId=92a9b9e9-06aa-5982-9c50-ed8234cc137b
