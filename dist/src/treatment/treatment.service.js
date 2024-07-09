"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="030df997-2f25-5ebf-8ab3-79bde49a900c")}catch(e){}}();

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
exports.TreatmentService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const enum_1 = require("../globals/constant/enum");
const string_1 = require("../globals/helpers/string");
const prisma_service_1 = require("../prisma/prisma.service");
let TreatmentService = class TreatmentService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(pageOptionsDto) {
        let whereQuery = `WHERE T.deleted_at IS NULL`;
        let orderQuery = ``;
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.is_active)) {
            whereQuery = `${whereQuery} AND T.is_active = ${pageOptionsDto.is_active}`;
        }
        if (pageOptionsDto.category) {
            whereQuery = `${whereQuery} AND T.category IN (${pageOptionsDto.category
                .map((type) => `'${type}'`)
                .join(',')})`;
        }
        if (pageOptionsDto.treatment_type) {
            whereQuery = `${whereQuery} AND T.treatment_type IN (${pageOptionsDto.treatment_type
                .map((type) => `'${type}'`)
                .join(',')})`;
        }
        if (pageOptionsDto.clinic_id) {
            whereQuery = `${whereQuery} AND T.clinic_id IN (${pageOptionsDto.clinic_id.join(',')})`;
        }
        if (pageOptionsDto.rating) {
            whereQuery = `${whereQuery} AND (${pageOptionsDto.rating
                .map((item) => `(T.rating >= ${item} AND T.rating < ${item + 1})`)
                .join(' OR ')})`;
        }
        if (pageOptionsDto.dollar_rating) {
            const dollarRatingRange = {
                1: [100000, 500000],
                2: [500000, 1500000],
                3: [1500000, 5000000],
                4: [5000000, 10000000000],
            };
            whereQuery = `${whereQuery} AND T.price BETWEEN ${dollarRatingRange[pageOptionsDto.dollar_rating][0]} AND ${dollarRatingRange[pageOptionsDto.dollar_rating][1]}
      `;
        }
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND 
        (
          LOWER(T.name) LIKE LOWER('%${pageOptionsDto.search}%')
          OR (
            SELECT
              COUNT(*)
            FROM
              clinic
            WHERE
              id = T.clinic_id
              AND LOWER(name) LIKE LOWER('%${pageOptionsDto.search}%')
          ) > 0
          OR LOWER(T.category) LIKE LOWER('%${pageOptionsDto.search}%')
          OR LOWER(T.treatment_type) LIKE LOWER('%${pageOptionsDto.search}%')
        )
      `;
        }
        if (!pageOptionsDto.sort_by) {
            orderQuery = `ORDER BY T.updated_at DESC, T.id DESC`;
        }
        if (['created_at', 'updated_at', 'rating'].includes(pageOptionsDto.sort_by)) {
            orderQuery = `ORDER BY T.${pageOptionsDto.sort_by} ${pageOptionsDto.order}, T.id DESC`;
        }
        if (pageOptionsDto.sort_by == 'popularity') {
            orderQuery = `ORDER BY
        (
          SELECT 
            COALESCE(SUM(pax), 0) 
          FROM transaction_treatment tt
          INNER JOIN transaction_treatment_item tti
            ON tti.transaction_treatment_id = tt.id
          INNER JOIN treatment t
            ON t.id = tti.treatment_id
          WHERE 
            t.id = T.id
            AND tt.payment_status = '${enum_1.PaymentStatus.SUCCEEDED}' 
            AND tt.updated_at::date BETWEEN (CURRENT_DATE - interval '30 days')::date AND CURRENT_DATE::date 
        ) ${pageOptionsDto.order},
        T.rating ${pageOptionsDto.order},
        T.id DESC
      `;
        }
        if (pageOptionsDto.sort_by == 'dollar_rating') {
            orderQuery = `ORDER BY T.price ${pageOptionsDto.order}, id DESC`;
        }
        const query = `
      SELECT 
        T.*
      FROM treatment T
      ${whereQuery}
      ${orderQuery}
    `;
        const data = await this.prismaService.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
            ${query}
            LIMIT ${pageOptionsDto.take}
            OFFSET ${pageOptionsDto.skip}
          `));
        });
        const countAll = await this.prismaService.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT COUNT(*) FROM (
            ${query}
          ) RESULT
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async create(data) {
        return this.prismaService.treatment.create({
            data,
        });
    }
    async findOne(id) {
        return this.prismaService.treatment.findFirst({
            where: {
                id,
            },
            include: {
                clinic: true,
                media_treatments: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async update(id, data) {
        return this.prismaService.treatment.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        return this.prismaService.treatment.delete({
            where: {
                id,
            },
        });
    }
    async findManyBy(where) {
        return await this.prismaService.treatment.findMany({
            where,
            include: {
                clinic: true,
                media_treatments: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async updateRating(id, rating) {
        return await this.prismaService.treatment.update({
            where: {
                id,
            },
            data: {
                rating,
            },
        });
    }
};
TreatmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TreatmentService);
exports.TreatmentService = TreatmentService;
//# sourceMappingURL=treatment.service.js.map
//# debugId=030df997-2f25-5ebf-8ab3-79bde49a900c
