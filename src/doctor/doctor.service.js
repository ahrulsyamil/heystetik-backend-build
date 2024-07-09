"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7b9263f3-2eb7-5299-b1b5-c8689f7c7e6c")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const rxjs_1 = require("rxjs");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const enum_1 = require("../globals/constant/enum");
const prisma_service_1 = require("../prisma/prisma.service");
let DoctorService = class DoctorService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAllSchedule() {
        return this.prismaService.doctor_schedules.findMany({
            where: {
                user: {
                    roleId: 2,
                    is_active: true,
                },
                is_active: true,
            },
            include: {
                doctor_schedule_times: true,
                user: true,
            },
        });
    }
    async findAllScheduleGroupTime() {
        return this.prismaService.doctor_schedule_time.groupBy({
            by: ['start_time', 'end_time'],
            where: {
                doctor_schedule: {
                    user: {
                        is_active: true,
                    },
                },
            },
        });
    }
    async findAllOnLeaveSchedule(getScheduleDetailDoctor) {
        const filter = {};
        if (getScheduleDetailDoctor.search) {
            filter.fullname = {
                contains: getScheduleDetailDoctor.search,
                mode: 'insensitive',
            };
        }
        return this.prismaService.users.findMany({
            where: {
                ...filter,
                is_active: true,
                AND: [
                    {
                        AND: [
                            {
                                doctor_schedule_start_date: {
                                    not: null,
                                },
                            },
                            {
                                doctor_schedule_end_date: {
                                    not: null,
                                },
                            },
                        ],
                    },
                    {
                        AND: [
                            {
                                doctor_schedule_start_date: {
                                    lte: new Date(getScheduleDetailDoctor.date),
                                },
                            },
                            {
                                doctor_schedule_end_date: {
                                    gte: new Date(getScheduleDetailDoctor.date),
                                },
                            },
                        ],
                    },
                ],
            },
            include: {
                media_user_profile_picture: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async findAllUpComingLeaveSchedule(getScheduleDetailDoctor) {
        const filter = {};
        if (getScheduleDetailDoctor.search) {
            filter.fullname = {
                contains: getScheduleDetailDoctor.search,
                mode: 'insensitive',
            };
        }
        return this.prismaService.users.findMany({
            where: {
                ...filter,
                is_active: true,
                AND: [
                    {
                        AND: [
                            {
                                doctor_schedule_start_date: {
                                    not: null,
                                },
                            },
                            {
                                doctor_schedule_end_date: {
                                    not: null,
                                },
                            },
                        ],
                    },
                    {
                        AND: [
                            {
                                doctor_schedule_start_date: {
                                    gt: dayjs(getScheduleDetailDoctor.date)
                                        .hour(0)
                                        .minute(0)
                                        .second(0)
                                        .toDate(),
                                },
                            },
                        ],
                    },
                ],
            },
            include: {
                media_user_profile_picture: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async findAllOnActiveSchedule(getScheduleDetailDoctor) {
        return this.prismaService.users.findMany({
            where: {
                ...rxjs_1.filter,
                is_active: true,
                doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
                NOT: {
                    AND: [
                        {
                            doctor_schedule_start_date: {
                                not: null,
                                lte: new Date(getScheduleDetailDoctor.date),
                            },
                        },
                        {
                            doctor_schedule_end_date: {
                                not: null,
                                gte: new Date(getScheduleDetailDoctor.date),
                            },
                        },
                    ],
                },
                doctor_schedules: {
                    some: {
                        day_number: dayjs(getScheduleDetailDoctor.date).day(),
                        doctor_schedule_times: {
                            some: {
                                start_time: new Date(`1970-01-01 ${dayjs(getScheduleDetailDoctor.start_time).format('HH:mm')}`),
                                end_time: new Date(`1970-01-01 ${dayjs(getScheduleDetailDoctor.end_time).format('HH:mm')}`),
                            },
                        },
                    },
                },
            },
            include: {
                media_user_profile_picture: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async findAll(pageOptionsDto) {
        const filter = {
            roleId: 2,
        };
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    fullname: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    email: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    no_phone: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    doctor_schedules: {
                        some: {
                            day: {
                                contains: pageOptionsDto.search,
                                mode: 'insensitive',
                            },
                        },
                    },
                },
            ];
        }
        const result = await this.prismaService.users.findMany({
            where: {
                ...filter,
            },
            include: {
                media_user_profile_picture: {
                    include: {
                        media: true,
                    },
                },
                doctor_schedules: {
                    include: {
                        doctor_schedule_times: true,
                    },
                },
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
            orderBy: [
                {
                    updated_at: pageOptionsDto.order,
                },
                {
                    id: 'desc',
                },
            ],
        });
        const countAll = await this.prismaService.users.count({
            where: {
                deleted_at: null,
                ...filter,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(result, pageMetaDto);
    }
    async create(data) {
        return this.prismaService.users.create({
            data,
        });
    }
    async findOne(id) {
        return this.prismaService.users.findFirst({
            where: {
                id,
                roleId: 2,
            },
            include: {
                province: true,
                city: true,
                media_user_profile_picture: {
                    include: {
                        media: true,
                    },
                },
                media_doctor_id_card: {
                    include: {
                        media: true,
                    },
                },
                media_doctor_npwp: {
                    include: {
                        media: true,
                    },
                },
                doctor_schedules: {
                    include: {
                        doctor_schedule_times: true,
                    },
                },
            },
        });
    }
    async update(id, data) {
        return this.prismaService.users.update({
            where: {
                id,
            },
            data,
        });
    }
    async deleteManyDoctorScheduleBy(where) {
        return this.prismaService.doctor_schedules.deleteMany({
            where,
        });
    }
    async delete(id) {
        return this.prismaService.users.delete({
            where: {
                id,
            },
        });
    }
};
DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map
//# debugId=7b9263f3-2eb7-5299-b1b5-c8689f7c7e6c
