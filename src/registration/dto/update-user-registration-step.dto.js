"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1eb703ee-14c4-5b09-b11c-839d9e4bebfe")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserRegistrationStep = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_registration_step_dto_1 = require("./create-user-registration-step.dto");
class UpdateUserRegistrationStep extends (0, mapped_types_1.PartialType)(create_user_registration_step_dto_1.CreateUserRegistrationStep) {
}
exports.UpdateUserRegistrationStep = UpdateUserRegistrationStep;
//# sourceMappingURL=update-user-registration-step.dto.js.map
//# debugId=1eb703ee-14c4-5b09-b11c-839d9e4bebfe
