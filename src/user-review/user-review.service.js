"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="df96e3ec-3fe8-59c8-9f2c-2f38e63573a5")}catch(e){}}();

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
exports.UserReviewService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const dayjs = require("dayjs");
let UserReviewService = class UserReviewService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllWaitingReview(pageOptionsDto) {
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         (
            SELECT
               tc.id AS id, 
               tc.id AS transaction_id, 
               'CONSULTATION' AS transaction_type, 
               tc.created_at 
            FROM 
               transaction_consultation tc
            LEFT JOIN
               consultation_review cr ON cr.transaction_consultation_id = tc.id
            WHERE 
               tc.customer_id = ${pageOptionsDto.user_id}
               AND tc.status = 'SELESAI'
               AND cr.id IS NULL
               AND tc.deleted_at IS NULL
         )
         UNION
         (
            SELECT 
               CAST(tpi.id as varchar) AS id,
               tp.id AS transaction_id, 
               'PRODUCT' AS transaction_type, 
               tp.created_at 
            FROM 
               transaction_product tp
            INNER JOIN
               transaction_product_item tpi ON tpi.transaction_product_id = tp.id
            LEFT JOIN
               product_review pr ON pr.transaction_product_item_id = tpi.id
            WHERE 
               tp.user_id = ${pageOptionsDto.user_id}
               AND tp.status = 'SELESAI'
               AND pr.id IS NULL
               AND tp.deleted_at IS NULL
         )
         UNION
         (
            SELECT 
               CAST(tti.id as varchar) AS id,
               tt.id AS transaction_id, 
               'TREATMENT' AS transaction_type, 
               tt.created_at 
            FROM 
               transaction_treatment tt
            INNER JOIN
               transaction_treatment_item tti ON tti.transaction_treatment_id = tt.id
            LEFT JOIN
               treatment_review tr ON tr.transaction_treatment_item_id = tti.id
            WHERE 
               tt.user_id = ${pageOptionsDto.user_id}
               AND tt.status = 'SELESAI'
               AND tr.id IS NULL
               AND tt.deleted_at IS NULL
         )
         ORDER BY created_at ${pageOptionsDto.order}
         LIMIT ${pageOptionsDto.take}
         OFFSET ${pageOptionsDto.skip}
      `));
        });
        let countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         SELECT 
            COUNT(*)
         FROM (
            (
               SELECT
                  tc.id AS id,
                  tc.id AS transaction_id, 
                  'CONSULTATION' AS transaction_type, 
                  tc.created_at 
               FROM 
                  transaction_consultation tc
               LEFT JOIN
                  consultation_review cr on cr.transaction_consultation_id = tc.id
               WHERE
                  tc.customer_id = ${pageOptionsDto.user_id}
                  AND tc.status = 'SELESAI'
                  AND cr.id IS NULL
                  AND tc.deleted_at IS NULL
            )
            UNION
            (
               SELECT
                  CAST(tti.id as varchar) AS id,
                  tt.id AS transaction_id, 
                  'TREATMENT' AS transaction_type, 
                  tt.created_at 
               FROM 
                  transaction_treatment tt
               INNER JOIN
                  transaction_treatment_item tti ON tti.transaction_treatment_id = tt.id
               LEFT JOIN
                  treatment_review tr ON tr.transaction_treatment_item_id = tti.id
               WHERE 
                  tt.user_id = ${pageOptionsDto.user_id}
                  AND tt.status = 'SELESAI'
                  AND tr.id IS NULL
                  AND tt.deleted_at IS NULL
            )
            UNION
            (
               SELECT
                  CAST(tpi.id as varchar) AS id,
                  tp.id AS transaction_id, 
                  'PRODUCT' AS transaction_type, 
                  tp.created_at 
               FROM 
                  transaction_product tp
               INNER JOIN
                  transaction_product_item tpi ON tpi.transaction_product_id = tp.id
               LEFT JOIN
                  product_review pr ON pr.transaction_product_item_id = tpi.id
               WHERE 
                  tp.user_id = ${pageOptionsDto.user_id}
                  AND tp.status = 'SELESAI'
                  AND pr.id IS NULL
                  AND tp.deleted_at IS NULL
            )
         ) COUNT
      `));
        });
        countAll = countAll[0].count;
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data.map((item) => ({
            ...item,
            created_at: dayjs.tz(item.created_at).format(),
        })), pageMetaDto);
    }
    async findAllFinishedReview(pageOptionsDto) {
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         (
            SELECT
               tc.id AS id, 
               tc.id AS transaction_id, 
               'CONSULTATION' AS transaction_type, 
               tc.created_at 
            FROM 
               transaction_consultation tc
            LEFT JOIN
               consultation_review cr ON cr.transaction_consultation_id = tc.id
            WHERE 
               tc.customer_id = ${pageOptionsDto.user_id}
               AND tc.status = 'SELESAI'
               AND cr.id IS NOT NULL
               AND tc.deleted_at IS NULL
         )
         UNION
         (
            SELECT 
               CAST(tti.id as varchar) AS id,
               tt.id AS transaction_id, 
               'TREATMENT' AS transaction_type, 
               tt.created_at 
            FROM 
               transaction_treatment tt
            INNER JOIN
               transaction_treatment_item tti ON tti.transaction_treatment_id = tt.id
            LEFT JOIN
               treatment_review tr ON tr.transaction_treatment_item_id = tti.id
            WHERE 
               tt.user_id = ${pageOptionsDto.user_id}
               AND tt.status = 'SELESAI'
               AND tr.id IS NOT NULL
               AND tt.deleted_at IS NULL
         )
         UNION
         (
            SELECT 
               CAST(tpi.id as varchar) AS id,
               tp.id AS transaction_id, 
               'PRODUCT' AS transaction_type, 
               tp.created_at 
            FROM 
               transaction_product tp
            INNER JOIN
               transaction_product_item tpi ON tpi.transaction_product_id = tp.id
            LEFT JOIN
               product_review pr ON pr.transaction_product_item_id = tpi.id
            WHERE 
               tp.user_id = ${pageOptionsDto.user_id}
               AND tp.status = 'SELESAI'
               AND pr.id IS NOT NULL
               AND tp.deleted_at IS NULL
         )
         ORDER BY created_at ${pageOptionsDto.order}
         LIMIT ${pageOptionsDto.take}
         OFFSET ${pageOptionsDto.skip}
      `));
        });
        let countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         SELECT 
            COUNT(*)
         FROM (
            (
               SELECT
                  tc.id AS id,
                  tc.id AS transaction_id, 
                  'CONSULTATION' AS transaction_type, 
                  tc.created_at 
               FROM 
                  transaction_consultation tc
               LEFT JOIN
                  consultation_review cr on cr.transaction_consultation_id = tc.id
               WHERE
                  tc.customer_id = ${pageOptionsDto.user_id}
                  AND tc.status = 'SELESAI'
                  AND cr.id IS NOT NULL
                  AND tc.deleted_at IS NULL
            )
            UNION
            (
               SELECT
                  CAST(tti.id as varchar) AS id,
                  tt.id AS transaction_id, 
                  'TREATMENT' AS transaction_type, 
                  tt.created_at 
               FROM 
                  transaction_treatment tt
               INNER JOIN
                  transaction_treatment_item tti ON tti.transaction_treatment_id = tt.id
               LEFT JOIN
                  treatment_review tr ON tr.transaction_treatment_item_id = tti.id
               WHERE 
                  tt.user_id = ${pageOptionsDto.user_id}
                  AND tt.status = 'SELESAI'
                  AND tr.id IS NOT NULL
                  AND tt.deleted_at IS NULL
            )
            UNION
            (
               SELECT
                  CAST(tpi.id as varchar) AS id,
                  tp.id AS transaction_id, 
                  'PRODUCT' AS transaction_type, 
                  tp.created_at 
               FROM 
                  transaction_product tp
               INNER JOIN
                  transaction_product_item tpi ON tpi.transaction_product_id = tp.id
               LEFT JOIN
                  product_review pr ON pr.transaction_product_item_id = tpi.id
               WHERE 
                  tp.user_id = ${pageOptionsDto.user_id}
                  AND tp.status = 'SELESAI'
                  AND pr.id IS NOT NULL
                  AND tp.deleted_at IS NULL
            )
         ) COUNT
      `));
        });
        countAll = countAll[0].count;
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data.map((item) => ({
            ...item,
            created_at: dayjs.tz(item.created_at).format(),
        })), pageMetaDto);
    }
};
UserReviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserReviewService);
exports.UserReviewService = UserReviewService;
//# sourceMappingURL=user-review.service.js.map
//# debugId=df96e3ec-3fe8-59c8-9f2c-2f38e63573a5
