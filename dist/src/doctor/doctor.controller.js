"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ae61671a-d459-5c49-9f01-9ff4ee011bfc")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const enum_1 = require("../globals/constant/enum");
const media_1 = require("../globals/constant/media");
const string_1 = require("../globals/constant/string");
const date_1 = require("../globals/helpers/date");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const date_to_local_transformer_1 = require("../globals/transformer/date-to-local.transformer");
const media_service_1 = require("../media/media.service");
const doctor_service_1 = require("./doctor.service");
const create_doctor_dto_1 = require("./dto/create-doctor.dto");
const get_schedule_detail_doctor_dto_1 = require("./dto/get-schedule-detail-doctor.dto");
const get_schedule_doctor_dto_1 = require("./dto/get-schedule-doctor.dto");
const page_options_doctor_dto_1 = require("./dto/page-options-doctor.dto");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const update_doctor_dto_1 = require("./dto/update-doctor.dto");
let DoctorController = class DoctorController {
    constructor(doctorService, mediaService) {
        this.doctorService = doctorService;
        this.mediaService = mediaService;
    }
    async findAllSchedule(getScheduleDoctor) {
        const schedules = [];
        const [doctorSchedule, scheduleGroupTime] = await Promise.all([
            this.doctorService.findAllSchedule(),
            this.doctorService.findAllScheduleGroupTime(),
        ]);
        (0, date_1.getAllDaysInMonth)(getScheduleDoctor.year, getScheduleDoctor.month)
            .map((day) => dayjs.tz(day).format())
            .forEach((day) => {
            (0, date_to_local_transformer_1.transformDatesToLocal)(scheduleGroupTime).map((time) => {
                let doctorActive = 0;
                let doctorOnLeave = 0;
                const scheduleThisDay = doctorSchedule.filter((x) => x.day_number == dayjs(day).day());
                doctorActive = scheduleThisDay
                    .filter((x) => x.doctor_schedule_times.some((y) => y.start_time == time.start_time &&
                    y.end_time == time.end_time))
                    .filter((x) => x.user.doctor_schedule_status != enum_1.DoctorScheduleStatus.ONLEAVE).length;
                doctorOnLeave = scheduleThisDay
                    .filter((x) => x.doctor_schedule_times.some((y) => y.start_time == time.start_time &&
                    y.end_time == time.end_time))
                    .filter((x) => x.user.doctor_schedule_status ==
                    enum_1.DoctorScheduleStatus.ONLEAVE &&
                    (0, date_1.dateIsWithinRange)(dayjs(day)
                        .hour(dayjs(time.start_time).hour())
                        .minute(dayjs(time.start_time).minute())
                        .toDate(), dayjs(day)
                        .hour(dayjs(time.end_time).hour())
                        .minute(dayjs(time.end_time).minute())
                        .toDate(), x.user.doctor_schedule_start_date, x.user.doctor_schedule_end_date)).length;
                if (scheduleThisDay.some((x) => x.doctor_schedule_times.some((y) => y.start_time == time.start_time &&
                    y.end_time == time.end_time))) {
                    const startTime = dayjs(time.start_time).format('HH:mm');
                    const endTime = dayjs(time.end_time).format('HH:mm');
                    schedules.push({
                        title: `${doctorActive + doctorOnLeave} Doctors`,
                        start: dayjs(day)
                            .hour(Number(startTime.split(':')[0]))
                            .minute(Number(startTime.split(':')[1]))
                            .toDate(),
                        end: dayjs(day)
                            .hour(Number(endTime.split(':')[0]))
                            .minute(Number(endTime.split(':')[1]))
                            .toDate(),
                        doctor_active: doctorActive,
                        doctor_onleave: doctorOnLeave,
                    });
                }
            });
        });
        return (0, date_to_local_transformer_1.transformDatesToLocal)(schedules);
    }
    async findAllScheduleDetail(getScheduleDetailDoctor) {
        if (getScheduleDetailDoctor.status == 'ACTIVE') {
            return await this.doctorService.findAllOnActiveSchedule(getScheduleDetailDoctor);
        }
        if (getScheduleDetailDoctor.status == 'ONLEAVE') {
            return await this.doctorService.findAllOnLeaveSchedule(getScheduleDetailDoctor);
        }
        if (getScheduleDetailDoctor.status == 'UPCOMING') {
            return await this.doctorService.findAllUpComingLeaveSchedule(getScheduleDetailDoctor);
        }
        return null;
    }
    async findAll(pageOptions) {
        return await this.doctorService.findAll(pageOptions);
    }
    async create(files, data) {
        if (!files?.image_profile || !files?.image_id_card || !files?.image_npwp) {
            throw new common_1.BadRequestException('All files are required');
        }
        if (files.image_profile.length > 1 ||
            files.image_id_card.length > 1 ||
            files.image_npwp.length > 1)
            throw new common_1.BadRequestException('Only one image can be uploaded');
        const [mediaProfile, mediaIdCard, mediaNpwp] = await Promise.all([
            this.mediaService.insertMediaData(files.image_profile),
            this.mediaService.insertMediaData(files.image_id_card),
            this.mediaService.insertMediaData(files.image_npwp),
        ]);
        return await this.doctorService.create({
            roleId: 2,
            fullname: data.fullname,
            email: data.email,
            no_phone: data.phone,
            address: data.address,
            provinceId: data.province_id,
            cityId: data.city_id,
            education: data.education,
            practice_location: data.practice_location,
            title: data.title,
            join_date: new Date(data.join_date),
            sip: data.sip,
            str: data.str,
            media_user_profile_picture: {
                create: {
                    ...mediaProfile[0],
                },
            },
            media_doctor_id_card: {
                create: {
                    ...mediaIdCard[0],
                },
            },
            media_doctor_npwp: {
                create: {
                    ...mediaNpwp[0],
                },
            },
            doctor_schedules: {
                create: data.schedules.map((schedule) => ({
                    day: string_1.DayOfWeek.find((x) => x.value == schedule.day_number).name,
                    day_number: schedule.day_number,
                    is_active: schedule.is_active,
                    doctor_schedule_times: {
                        create: schedule.schedule_times.map((time) => ({
                            start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${time.start_time}`),
                            end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${time.end_time}`),
                        })),
                    },
                })),
            },
        });
    }
    async find(id) {
        const find = await this.doctorService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async update(files, id, data) {
        const find = await this.doctorService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if ((files?.image_profile && files.image_profile.length > 1) ||
            (files?.image_id_card && files.image_id_card.length > 1) ||
            (files?.image_npwp && files.image_npwp.length > 1))
            throw new common_1.BadRequestException('Only one image can be uploaded');
        const [mediaProfile, mediaIdCard, mediaNpwp] = await Promise.all([
            files?.image_profile
                ? this.mediaService.insertMediaData(files.image_profile)
                : null,
            files?.image_id_card
                ? this.mediaService.insertMediaData(files.image_id_card)
                : null,
            files?.image_npwp
                ? this.mediaService.insertMediaData(files.image_npwp)
                : null,
        ]);
        const deleteMediaUserProfile = files?.image_profile ? { delete: true } : {};
        const deleteMediaIdCard = files?.image_id_card ? { delete: true } : {};
        const deleteMediaNpwp = files?.image_npwp ? { delete: true } : {};
        const mediaUserProfile = mediaProfile
            ? {
                media_user_profile_picture: {
                    ...deleteMediaUserProfile,
                    create: {
                        ...mediaProfile[0],
                    },
                },
            }
            : {};
        const mediaDoctorIdCard = mediaIdCard
            ? {
                media_doctor_id_card: {
                    ...deleteMediaIdCard,
                    create: {
                        ...mediaIdCard[0],
                    },
                },
            }
            : {};
        const mediaDoctorNpwp = mediaNpwp
            ? {
                media_doctor_npwp: {
                    ...deleteMediaNpwp,
                    create: {
                        ...mediaNpwp[0],
                    },
                },
            }
            : {};
        if (data.schedules) {
            await this.doctorService.deleteManyDoctorScheduleBy({
                userId: find.id,
                day_number: {
                    in: data.schedules.map((schedule) => schedule.day_number),
                },
            });
        }
        const schedules = data.schedules
            ? {
                doctor_schedules: {
                    create: data.schedules.map((schedule) => ({
                        day: string_1.DayOfWeek.find((x) => x.value == schedule.day_number).name,
                        day_number: schedule.day_number,
                        is_active: schedule.is_active,
                        doctor_schedule_times: {
                            create: schedule.schedule_times.map((time) => ({
                                start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${time.start_time}`),
                                end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${time.end_time}`),
                            })),
                        },
                    })),
                },
            }
            : {};
        return await this.doctorService.update(find.id, {
            fullname: data.fullname,
            email: data.email,
            no_phone: data.phone,
            password: data.password,
            address: data.address,
            provinceId: data.province_id,
            cityId: data.city_id,
            education: data.education,
            practice_location: data.practice_location,
            join_date: new Date(data.join_date),
            title: data.title,
            sip: data.sip,
            str: data.str,
            is_active: data.is_active,
            ...mediaUserProfile,
            ...mediaDoctorIdCard,
            ...mediaDoctorNpwp,
            ...schedules,
        });
    }
    async delete(id) {
        const find = await this.doctorService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        await this.doctorService.delete(+id);
        return null;
    }
};
__decorate([
    (0, common_1.Get)('schedule'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_schedule_doctor_dto_1.GetScheduleDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "findAllSchedule", null);
__decorate([
    (0, common_1.Get)('schedule/detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_schedule_detail_doctor_dto_1.GetScheduleDetailDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "findAllScheduleDetail", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_doctor_dto_1.PageOptionsDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "findAll", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [
            {
                name: 'image_profile',
                maxCount: 1,
                dirPath: media_1.MEDIA_PROFILE_PICTURE_DIR,
            },
            {
                name: 'image_id_card',
                maxCount: 1,
                dirPath: media_1.MEDIA_DOCTOR_ID_CARD_DIR,
            },
            { name: 'image_npwp', maxCount: 1, dirPath: media_1.MEDIA_DOCTOR_NPWP_DIR },
        ],
        dirPath: './uploads',
        prefixName: 'doctor-file',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_doctor_dto_1.CreateDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "find", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [
            {
                name: 'image_profile',
                maxCount: 1,
                dirPath: media_1.MEDIA_PROFILE_PICTURE_DIR,
            },
            {
                name: 'image_id_card',
                maxCount: 1,
                dirPath: media_1.MEDIA_DOCTOR_ID_CARD_DIR,
            },
            { name: 'image_npwp', maxCount: 1, dirPath: media_1.MEDIA_DOCTOR_NPWP_DIR },
        ],
        dirPath: './uploads',
        prefixName: 'doctor-file',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_doctor_dto_1.UpdateDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "update", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "delete", null);
DoctorController = __decorate([
    (0, common_1.Controller)('doctor'),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService,
        media_service_1.MediaService])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map
//# debugId=ae61671a-d459-5c49-9f01-9ff4ee011bfc
