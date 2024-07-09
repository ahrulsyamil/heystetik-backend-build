"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9ffd6a04-7afa-5b0c-990f-5982202204ec")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoctorCustomerSchedulesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_doctor_customer_schedules_dto_1 = require("./create-doctor_customer_schedules.dto");
class UpdateDoctorCustomerSchedulesDto extends (0, mapped_types_1.PartialType)(create_doctor_customer_schedules_dto_1.CreateDoctorCustomerSchedulesDto) {
}
exports.UpdateDoctorCustomerSchedulesDto = UpdateDoctorCustomerSchedulesDto;
//# sourceMappingURL=update-doctor_customer_schedules.dto.js.map
//# debugId=9ffd6a04-7afa-5b0c-990f-5982202204ec
