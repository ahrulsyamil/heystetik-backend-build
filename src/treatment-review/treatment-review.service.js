"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6f16f200-9108-54c0-bf3d-3f9654ec9118")}catch(e){}}();

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
exports.TreatmentReviewService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const enum_1 = require("../globals/constant/enum");
const prisma_service_1 = require("../prisma/prisma.service");
let TreatmentReviewService = class TreatmentReviewService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptionsDto) {
        const where = {};
        const sorting = {};
        where.treatment_id = pageOptionsDto.treatment_id;
        if (pageOptionsDto.has_photo) {
            where.media_treatment_reviews = {
                some: {
                    NOT: {
                        media: undefined,
                    },
                },
            };
        }
        if (pageOptionsDto.rating) {
            where.OR = pageOptionsDto.rating.map((rating) => ({
                avg_rating: {
                    gte: rating,
                    lt: rating + 1,
                },
            }));
        }
        if (pageOptionsDto.sorting_type) {
            if (pageOptionsDto.sorting_type == enum_1.SortingTypeReview.PALING_MEMBANTU) {
                sorting.treatment_review_helpfuls = {
                    _count: 'desc',
                };
            }
            if (pageOptionsDto.sorting_type == enum_1.SortingTypeReview.RATING_TERENDAH) {
                sorting.avg_rating = 'asc';
            }
            if (pageOptionsDto.sorting_type == enum_1.SortingTypeReview.RATING_TERTINGGI) {
                sorting.avg_rating = 'desc';
            }
            if (pageOptionsDto.sorting_type == enum_1.SortingTypeReview.TERBARU) {
                sorting.created_by = 'desc';
            }
        }
        if (pageOptionsDto.topic) {
            if (pageOptionsDto.topic.includes(enum_1.TopicTreatmentReview.CARE)) {
                where.care_rating = {
                    not: 0,
                };
            }
            if (pageOptionsDto.topic.includes(enum_1.TopicTreatmentReview.SERVICE)) {
                where.service_rating = {
                    not: 0,
                };
            }
            if (pageOptionsDto.topic.includes(enum_1.TopicTreatmentReview.MANAGEMENT)) {
                where.management_rating = {
                    not: 0,
                };
            }
        }
        const data = await this.prisma.treatment_review.findMany({
            where,
            include: {
                user: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                transaction_treatment_item: {
                    include: {
                        treatment: true,
                    },
                },
                media_treatment_reviews: {
                    include: {
                        media: true,
                    },
                },
                _count: {
                    select: {
                        treatment_review_helpfuls: true,
                    },
                },
            },
            orderBy: sorting,
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.treatment_review.count({
            where: {
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async create(data, media) {
        return await this.prisma.treatment_review.create({
            data: {
                ...data,
                media_treatment_reviews: {
                    create: media,
                },
            },
        });
    }
    async createHelpful(data) {
        return await this.prisma.treatment_review_helpful.create({
            data,
        });
    }
    async findHelpfulBy(where) {
        return await this.prisma.treatment_review_helpful.findFirst({
            where,
        });
    }
    async deleteHelpful(data) {
        return await this.prisma.treatment_review_helpful.delete({
            where: {
                treatment_review_id_user_id: {
                    treatment_review_id: data.treatment_review_id,
                    user_id: data.user_id,
                },
            },
        });
    }
    async createReplyReview(data) {
        return await this.prisma.treatment_review.update({
            where: {
                id: data.treatment_review_id,
            },
            data: {
                reply_review: data.reply_review,
            },
        });
    }
    async findBy(where) {
        return await this.prisma.treatment_review.findFirst({
            where,
        });
    }
    async countSumBy(where) {
        return await this.prisma.treatment_review.aggregate({
            _count: {
                avg_rating: true,
            },
            _sum: {
                avg_rating: true,
            },
            where,
        });
    }
    async overview(id) {
        const query = `
      SELECT 
        CASE 
          WHEN (SELECT COUNT(*) FROM treatment_review WHERE treatment_id = T.id) > 0 
          THEN
            COALESCE((
              SELECT
              COALESCE(((SELECT COUNT(*) FROM treatment_review WHERE treatment_id = T.id and avg_rating >= 4)::NUMERIC / (SELECT COUNT(*) FROM treatment_review WHERE treatment_id = T.id)) * 100, 0) sub_query
            ), 0)
          ELSE
            0
        END AS satisfied_percentage,
        TO_CHAR(COALESCE((SELECT AVG(care_rating) FROM treatment_review WHERE treatment_id = T.id), 0), 'FM9999999999999990.0') AS avg_care_rating,
        TO_CHAR(COALESCE((SELECT count(care_rating) FROM treatment_review WHERE treatment_id = T.id), 0), 'FM9999999999999990.0') AS count_care_rating,
        TO_CHAR(COALESCE((SELECT AVG(service_rating) FROM treatment_review WHERE treatment_id = T.id), 0), 'FM9999999999999990.0') AS avg_service_rating,
        TO_CHAR(COALESCE((SELECT count(service_rating) FROM treatment_review WHERE treatment_id = T.id), 0), 'FM9999999999999990.0') AS count_service_rating,
        TO_CHAR(COALESCE((SELECT AVG(management_rating) FROM treatment_review WHERE treatment_id = T.id), 0), 'FM9999999999999990.0') AS avg_management_rating,
        TO_CHAR(COALESCE((SELECT count(management_rating) FROM treatment_review WHERE treatment_id = T.id), 0), 'FM9999999999999990.0') AS count_management_rating,
        COALESCE((SELECT count(*) FROM treatment_review WHERE treatment_id = T.id), 0) AS total_rating,
        COALESCE((SELECT count(*) FROM treatment_review WHERE treatment_id = T.id and (review IS NOT NULL OR review <> '')), 0) AS total_review,
        TO_CHAR(COALESCE((SELECT AVG(avg_rating) FROM treatment_review WHERE treatment_id = T.id), 0), 'FM9999999999999990.0') AS avg_rating
      FROM treatment T
      WHERE id = ${id}
      LIMIT 1
    `;
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(query));
        });
    }
};
TreatmentReviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TreatmentReviewService);
exports.TreatmentReviewService = TreatmentReviewService;
//# sourceMappingURL=treatment-review.service.js.map
//# debugId=6f16f200-9108-54c0-bf3d-3f9654ec9118
