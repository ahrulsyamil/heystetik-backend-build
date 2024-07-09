"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="35b61234-b71b-5383-b546-27c27c955537")}catch(e){}}();

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
exports.ProfileDoctorService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const enum_1 = require("../globals/constant/enum");
let ProfileDoctorService = class ProfileDoctorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getTotalConsultation(doctor_id, filter) {
        const where = {};
        if (filter.period_end && filter.period_start) {
            where.created_at = {
                gte: new Date(filter.period_start),
                lte: new Date(filter.period_end),
            };
        }
        if (filter.type == enum_1.DoctorStatisticType.FINISHED_CHAT) {
            where.status = 'SELESAI';
        }
        if (filter.type == enum_1.DoctorStatisticType.UNFINISHED_CHAT) {
            where.status = {
                not: 'SELESAI',
            };
        }
        return await this.prisma.consultation.count({
            where: {
                doctor_id,
                ...where,
            },
        });
    }
    async getTotalActiveDay(doctor_id, filter) {
        const filterDate = filter.period_start && filter.period_end
            ? `AND DATE(created_at) between '${filter.period_start}' AND '${filter.period_end}'`
            : '';
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
        SELECT COUNT(*) FROM (
          SELECT COUNT(*) FROM consultation
            WHERE
            doctor_id = ${doctor_id}
            AND status = 'SELESAI'
            AND deleted_at IS NULL
            ${filterDate}
            GROUP BY DATE(created_at)
        ) AS RESULT
      `));
        });
    }
    async getTotalLike(doctor_id, filter) {
        const where = {};
        if (filter.period_end && filter.period_start) {
            where.created_at = {
                gte: new Date(filter.period_start),
                lte: new Date(filter.period_end),
            };
        }
        return await this.prisma.consultation_review.aggregate({
            where: {
                doctor_id,
                ...where,
            },
            _sum: {
                rating: true,
            },
        });
    }
    async getSatisfiedRating(doctor_id, filter) {
        const filterDate = filter.period_start && filter.period_end
            ? `AND DATE(created_at) between '${filter.period_start}' AND '${filter.period_end}'`
            : '';
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT 
            CASE 
              WHEN (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id) = 0
              THEN 
                0
              ELSE
                COALESCE((SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id and rating >= 4 ${filterDate}) / (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id ${filterDate}) * 100, 0)
            END
            AS satisfied_percentage
          FROM users U WHERE U.id = ${doctor_id}
        `));
        });
    }
    async getBalance(user_id) {
        return await this.prisma.user_balance.findUnique({
            where: {
                user_id,
            },
        });
    }
    async getProfile(user_id) {
        return await this.prisma.users.findUnique({
            where: {
                id: user_id,
            },
            select: {
                fullname: true,
                specialist: true,
                email: true,
                no_phone: true,
                gender: true,
                dob: true,
                sip: true,
                str: true,
                education: true,
                practice_location: true,
                media_user_profile_picture: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async update(user_id, data, media_user_profile_picture) {
        const deleteProfilePicture = media_user_profile_picture
            ? { delete: true }
            : {};
        return await this.prisma.users.update({
            where: {
                id: user_id,
            },
            data: {
                ...data,
                media_user_profile_picture: {
                    ...deleteProfilePicture,
                    create: media_user_profile_picture,
                },
            },
        });
    }
    async findAllReview(pageOptionsDto) {
        const where = {
            doctor_id: pageOptionsDto.doctor_id,
        };
        const orderBy = {};
        if (pageOptionsDto.rating_order) {
            if (pageOptionsDto.rating_order == enum_1.RatingOrder.LATEST) {
                orderBy.created_at = 'desc';
            }
            if (pageOptionsDto.rating_order == enum_1.RatingOrder.HIGHEST) {
                orderBy.rating = 'desc';
            }
            if (pageOptionsDto.rating_order == enum_1.RatingOrder.LOWEST) {
                orderBy.rating = 'asc';
            }
        }
        if (pageOptionsDto.rating) {
            where.rating = {
                in: pageOptionsDto.rating,
            };
        }
        const data = await this.prisma.consultation_review.findMany({
            where,
            include: {
                customer: true,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.consultation_review.count({
            where: {
                ...where,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async getOverviewReview(doctor_id) {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT 
            CASE 
              WHEN (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id) = 0
              THEN 
                0
              ELSE
                COALESCE((SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id and rating >= 4 ) / (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id) * 100, 0)
            END
            AS satisfied_percentage,
            (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id) AS total_rating,
            (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id AND review IS NOT NULL) AS total_review
          FROM users U WHERE U.id = ${doctor_id}
        `));
        });
    }
    async getDetailOverviewReview(doctor_id) {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT 
          *,
          CASE WHEN RESULT.total_rating = 0 THEN 0 ELSE (RESULT.rating5 / RESULT.total_rating) * 100 END AS rating5_percentage,
          CASE WHEN RESULT.total_rating = 0 THEN 0 ELSE (RESULT.rating4 / RESULT.total_rating) * 100 END AS rating4_percentage,
          CASE WHEN RESULT.total_rating = 0 THEN 0 ELSE (RESULT.rating3 / RESULT.total_rating) * 100 END AS rating3_percentage,
          CASE WHEN RESULT.total_rating = 0 THEN 0 ELSE (RESULT.rating2 / RESULT.total_rating) * 100 END AS rating2_percentage,
          CASE WHEN RESULT.total_rating = 0 THEN 0 ELSE (RESULT.rating1 / RESULT.total_rating) * 100 END AS rating1_percentage
          FROM (
            SELECT 
                CASE 
                  WHEN (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id) = 0
                  THEN 
                    0
                  ELSE
                    COALESCE((SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id and rating >= 4 ) / (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id) * 100, 0)
                END
                AS satisfied_percentage,
                (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id AND rating = 5) AS rating5,
                (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id AND rating = 4) AS rating4,
                (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id AND rating = 3) AS rating3,
                (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id AND rating = 2) AS rating2,
                (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id AND rating = 1) AS rating1,
                (SELECT COUNT(*) FROM consultation_review WHERE doctor_id = U.id) AS total_rating
              FROM users U WHERE U.id = ${doctor_id}
          ) RESULT
        `));
        });
    }
    async findAllDoctorScheduleBy(where) {
        return this.prisma.doctor_schedules.findMany({
            where,
            include: {
                doctor_schedule_times: true,
            },
        });
    }
    async findDoctorScheduleBy(where) {
        return this.prisma.doctor_schedules.findFirst({
            where,
            include: {
                doctor_schedule_times: true,
            },
        });
    }
    async createDoctorSchedule(data) {
        return this.prisma.doctor_schedules.create({
            data,
        });
    }
    async deleteManyDoctorScheduleBy(where) {
        return this.prisma.doctor_schedules.deleteMany({
            where,
        });
    }
    async upsertDoctorScheduleBy(args) {
        return this.prisma.doctor_schedules.upsert(args);
    }
};
ProfileDoctorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileDoctorService);
exports.ProfileDoctorService = ProfileDoctorService;
//# sourceMappingURL=profile-doctor.service.js.map
//# debugId=35b61234-b71b-5383-b546-27c27c955537
