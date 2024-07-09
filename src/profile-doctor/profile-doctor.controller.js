"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cf2e8067-d384-5227-81d9-c4f3afa46fd3")}catch(e){}}();

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
exports.ProfileDoctorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dayjs = require("dayjs");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const media_1 = require("../globals/constant/media");
const string_1 = require("../globals/constant/string");
const roles_guard_1 = require("../globals/guards/roles.guard");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_service_1 = require("../media/media.service");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const page_options_doctor_review_dto_1 = require("./dto/page-options-doctor-review.dto");
const profile_doctor_filter_dto_1 = require("./dto/profile-doctor-filter.dto");
const update_profile_doctor_dto_1 = require("./dto/update-profile-doctor.dto");
const update_schedule_status_dto_1 = require("./dto/update-schedule-status.dto");
const update_schedule_dto_1 = require("./dto/update-schedule.dto");
const profile_doctor_service_1 = require("./profile-doctor.service");
const bull_1 = require("@nestjs/bull");
let ProfileDoctorController = class ProfileDoctorController {
    constructor(profileDoctorService, mediaService, usersService, queueTaskSchedule) {
        this.profileDoctorService = profileDoctorService;
        this.mediaService = mediaService;
        this.usersService = usersService;
        this.queueTaskSchedule = queueTaskSchedule;
    }
    async statistic(user, filter) {
        const statistic = await Promise.all([
            await this.profileDoctorService.getTotalConsultation(user.id, filter),
            await this.profileDoctorService.getTotalActiveDay(user.id, filter),
            await this.profileDoctorService.getTotalLike(user.id, filter),
            await this.profileDoctorService.getSatisfiedRating(user.id, filter),
        ]);
        return {
            consultation: statistic[0],
            active_day: statistic[1][0]?.count ?? 0,
            likes: statistic[2]?._sum.rating ?? 0,
            rating: statistic[3][0]?.satisfied_percentage ?? 0,
        };
    }
    async profile(user) {
        return await this.profileDoctorService.getProfile(user.id);
    }
    async update(user, files, data) {
        if (files.length > 1)
            throw new common_1.BadRequestException('Only one image can be uploaded');
        let media = [];
        if (files.length == 1) {
            media = await this.mediaService.insertMediaData(files);
        }
        data.dob = new Date(data.dob);
        return await this.profileDoctorService.update(user.id, data, media[0]);
    }
    async getReview(user, pageOptionsDto) {
        pageOptionsDto.doctor_id = user.id;
        return await this.profileDoctorService.findAllReview(pageOptionsDto);
    }
    async getOverviewReview(user) {
        const data = await this.profileDoctorService.getOverviewReview(user.id);
        return data[0];
    }
    async getDetailOverviewReview(user) {
        const data = await this.profileDoctorService.getDetailOverviewReview(user.id);
        return data[0];
    }
    async getScheduleStatus(user) {
        let todayConsultationSchedule = null;
        let restingDuration = null;
        if (user.doctor_schedule_status == enum_1.DoctorScheduleStatus.ACTIVE) {
            todayConsultationSchedule =
                await this.profileDoctorService.findDoctorScheduleBy({
                    userId: user.id,
                    day_number: dayjs().day(),
                });
        }
        if (user.doctor_schedule_status == enum_1.DoctorScheduleStatus.RESTING) {
            restingDuration = `${dayjs(user.doctor_schedule_end_date).diff(dayjs(user.doctor_schedule_start_date), 'minute')} menit`;
        }
        return {
            status: user.doctor_schedule_status,
            start_date: user.doctor_schedule_start_date,
            end_date: user.doctor_schedule_end_date,
            today_consultation_schedule: todayConsultationSchedule,
            resting_duration: restingDuration,
            resting_duration_time: user.doctor_schedule_resting_time,
        };
    }
    async updateScheduleStatus(user, data) {
        if (data.status == enum_1.DoctorScheduleStatus.ONLEAVE) {
            data.duration = null;
            data.start_date = dayjs(data.start_date)
                .hour(0)
                .minute(0)
                .second(0)
                .toDate();
            data.end_date = dayjs(data.end_date)
                .hour(23)
                .minute(59)
                .second(59)
                .toDate();
        }
        if (data.status == enum_1.DoctorScheduleStatus.RESTING) {
            data.start_date = dayjs().toDate();
            data.end_date = dayjs()
                .add(Number(data.duration.split(':')[0]), 'hour')
                .add(Number(data.duration.split(':')[1]), 'minute')
                .toDate();
        }
        if (data.status == enum_1.DoctorScheduleStatus.ACTIVE) {
        }
        await this.usersService.updateUser(user.id, {
            doctor_schedule_status: data.status,
            doctor_schedule_start_date: data.start_date,
            doctor_schedule_end_date: data.end_date,
            doctor_schedule_resting_time: data.duration,
        });
        if (data.status == enum_1.DoctorScheduleStatus.RESTING) {
            this.queueTaskSchedule.add('doctorScheduleStatus', {
                doctor_schedule_status: data.status,
                doctor_schedule_start_date: data.start_date,
                doctor_schedule_end_date: data.end_date,
            }, {
                delay: 60000,
            });
        }
        return;
    }
    customSort(a, b) {
        return a.day_number - b.day_number;
    }
    async getSchedule(user) {
        const desiredOrder = [1, 2, 3, 4, 5, 6, 0];
        let result = await this.profileDoctorService.findAllDoctorScheduleBy({
            userId: user.id,
        });
        result = result.map((item) => ({
            ...item,
            day: dayjs().set('day', item.day_number).format('dddd'),
        }));
        return result.sort((a, b) => {
            return (desiredOrder.indexOf(a.day_number) - desiredOrder.indexOf(b.day_number));
        });
    }
    async updateSchedule(user, data) {
        await Promise.all(data.schedules.map(async (schedule) => {
            return await this.profileDoctorService.upsertDoctorScheduleBy({
                where: {
                    day_number_userId: {
                        day_number: schedule.day_number,
                        userId: user.id,
                    },
                },
                create: {
                    day: string_1.DayOfWeek.find((x) => x.value == schedule.day_number).name,
                    day_number: schedule.day_number,
                    userId: user.id,
                    is_active: schedule.is_active,
                    doctor_schedule_times: {
                        create: schedule.schedule_times
                            ? schedule.schedule_times.map((item) => ({
                                start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.start_time}`),
                                end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.end_time}`),
                            }))
                            : [],
                    },
                },
                update: {
                    is_active: schedule.is_active,
                    doctor_schedule_times: {
                        deleteMany: {},
                        create: schedule.schedule_times
                            ? schedule.schedule_times.map((item) => ({
                                start_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.start_time}`),
                                end_time: new Date(`${dayjs().format('YYYY-MM-DD')} ${item.end_time}`),
                            }))
                            : [],
                    },
                },
            });
        }));
        return;
    }
};
__decorate([
    (0, common_1.Get)('statistic'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        profile_doctor_filter_dto_1.ProfileDoctorFilterDto]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "statistic", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "profile", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'files',
        dirPath: media_1.MEDIA_PROFILE_PICTURE_DIR,
        prefixName: 'profile-picture',
    })),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Array, update_profile_doctor_dto_1.UpdateProfileDoctorDto]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('review'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_doctor_review_dto_1.PageOptionsDoctorReviewDto]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "getReview", null);
__decorate([
    (0, common_1.Get)('review/overview'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "getOverviewReview", null);
__decorate([
    (0, common_1.Get)('review/detail-overview'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "getDetailOverviewReview", null);
__decorate([
    (0, common_1.Get)('schedule/status'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "getScheduleStatus", null);
__decorate([
    (0, common_1.Patch)('schedule/status'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_schedule_status_dto_1.UpdateScheduleStatusDto]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "updateScheduleStatus", null);
__decorate([
    (0, common_1.Get)('schedule'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "getSchedule", null);
__decorate([
    (0, common_1.Patch)('schedule'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_schedule_dto_1.UpdateScheduleDto]),
    __metadata("design:returntype", Promise)
], ProfileDoctorController.prototype, "updateSchedule", null);
ProfileDoctorController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiTags)('Profile Doctor'),
    (0, common_1.Controller)('profile/doctor'),
    __param(3, (0, bull_1.InjectQueue)('queueTaskSchedule')),
    __metadata("design:paramtypes", [profile_doctor_service_1.ProfileDoctorService,
        media_service_1.MediaService,
        users_service_1.UsersService, Object])
], ProfileDoctorController);
exports.ProfileDoctorController = ProfileDoctorController;
//# sourceMappingURL=profile-doctor.controller.js.map
//# debugId=cf2e8067-d384-5227-81d9-c4f3afa46fd3
