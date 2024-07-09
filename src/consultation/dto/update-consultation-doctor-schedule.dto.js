"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="33c1deec-fe6a-5908-ad80-761887fdca4f")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConsultationDoctorScheduleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_consultation_doctor_schedule_dto_1 = require("./create-consultation-doctor-schedule.dto");
class UpdateConsultationDoctorScheduleDto extends (0, mapped_types_1.PartialType)(create_consultation_doctor_schedule_dto_1.CreateConsultationDoctorScheduleDto) {
}
exports.UpdateConsultationDoctorScheduleDto = UpdateConsultationDoctorScheduleDto;
//# sourceMappingURL=update-consultation-doctor-schedule.dto.js.map
//# debugId=33c1deec-fe6a-5908-ad80-761887fdca4f
