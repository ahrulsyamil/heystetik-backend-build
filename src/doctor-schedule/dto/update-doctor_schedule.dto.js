"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d89e527a-a3b4-568e-b53b-17b8b32dae5d")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoctorScheduleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_doctor_schedule_dto_1 = require("./create-doctor_schedule.dto");
class UpdateDoctorScheduleDto extends (0, mapped_types_1.PartialType)(create_doctor_schedule_dto_1.CreateDoctorScheduleDto) {
}
exports.UpdateDoctorScheduleDto = UpdateDoctorScheduleDto;
//# sourceMappingURL=update-doctor_schedule.dto.js.map
//# debugId=d89e527a-a3b4-568e-b53b-17b8b32dae5d
