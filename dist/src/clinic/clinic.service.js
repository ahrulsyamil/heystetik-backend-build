"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3249f558-eca0-5f4c-833b-f382d4973d6c")}catch(e){}}();

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
exports.ClinicService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const enum_1 = require("../globals/constant/enum");
const string_1 = require("../globals/helpers/string");
const prisma_service_1 = require("../prisma/prisma.service");
let ClinicService = class ClinicService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAllOld(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    city: {
                        name: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                },
                {
                    province: {
                        name: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                },
                {
                    email: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    phone: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    pic_name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    pic_phone: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        if (pageOptionsDto.is_active) {
            filter.is_active = pageOptionsDto.is_active;
        }
        const result = await this.prismaService.clinic.findMany({
            where: {
                ...filter,
            },
            include: {
                province: true,
                city: true,
                media_clinics: {
                    include: {
                        media: true,
                    },
                },
                media_clinic_logo: {
                    include: {
                        media: true,
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
        const countAll = await this.prismaService.clinic.count({
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
    async findAll(pageOptionsDto) {
        let whereQuery = `WHERE C.deleted_at IS NULL`;
        let orderQuery = ``;
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.is_active)) {
            whereQuery = `${whereQuery} AND C.is_active = ${pageOptionsDto.is_active}`;
        }
        if (pageOptionsDto.treatment_type) {
            whereQuery = `${whereQuery} AND 
        (
          SELECT COUNT(*) FROM treatment 
          WHERE
            clinic_id = C.id
            AND treatment_type IN (${pageOptionsDto.treatment_type
                .map((type) => `'${type}'`)
                .join(',')})
        ) > 0
      `;
        }
        if (pageOptionsDto.rating) {
            whereQuery = `${whereQuery} AND (${pageOptionsDto.rating
                .map((item) => `(C.rating >= ${item} AND C.rating < ${item + 1})`)
                .join(' OR ')})`;
        }
        if (pageOptionsDto.dollar_rating) {
            const dollarRatingRange = {
                1: [100000, 500000],
                2: [500000, 1500000],
                3: [1500000, 5000000],
                4: [5000000, 10000000000],
            };
            whereQuery = `${whereQuery} AND 
        (
          SELECT
            SUM(price) / COUNT(id) 
          FROM
            treatment
          WHERE
            clinic_id = C.id
        ) BETWEEN ${dollarRatingRange[pageOptionsDto.dollar_rating][0]} AND ${dollarRatingRange[pageOptionsDto.dollar_rating][1]}
      `;
        }
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND 
        (
          LOWER(C.name) LIKE LOWER('%${pageOptionsDto.search}%')
          OR (
            SELECT
              COUNT(*)
            FROM
              provinces
            WHERE
              id = C.province_id
              AND LOWER(name) LIKE LOWER('%${pageOptionsDto.search}%')
          ) > 0
          OR (
            SELECT
              COUNT(*)
            FROM
              kota_kabupatens
            WHERE
              id = C.city_id
              AND LOWER(name) LIKE LOWER('%${pageOptionsDto.search}%')
          ) > 0
          OR LOWER(C.email) LIKE LOWER('%${pageOptionsDto.search}%')
          OR LOWER(C.phone) LIKE LOWER('%${pageOptionsDto.search}%')
          OR LOWER(C.pic_name) LIKE LOWER('%${pageOptionsDto.search}%')
          OR LOWER(C.pic_phone) LIKE LOWER('%${pageOptionsDto.search}%')
        )
      `;
        }
        if (!pageOptionsDto.sort_by) {
            orderQuery = `ORDER BY C.updated_at DESC, C.id DESC`;
        }
        if (['created_at', 'updated_at', 'rating'].includes(pageOptionsDto.sort_by)) {
            orderQuery = `ORDER BY C.${pageOptionsDto.sort_by} ${pageOptionsDto.order}, C.id DESC`;
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
          INNER JOIN clinic cl
            ON cl.id = t.clinic_id
          WHERE 
            cl.id = C.id
            AND tt.payment_status = '${enum_1.PaymentStatus.SUCCEEDED}' 
            AND tt.updated_at::date BETWEEN (CURRENT_DATE - interval '30 days')::date AND CURRENT_DATE::date 
        ) ${pageOptionsDto.order},
        C.rating ${pageOptionsDto.order},
        C.id DESC
      `;
        }
        if (pageOptionsDto.sort_by == 'dollar_rating') {
            orderQuery = `ORDER BY
      (
        SELECT
          SUM(price) / COUNT(id) 
        FROM
          treatment
        WHERE
          clinic_id = C.id
      ) ${pageOptionsDto.order},
      C.id DESC`;
        }
        const query = `
      SELECT 
        C.*
      FROM clinic C
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
        return this.prismaService.clinic.create({
            data,
        });
    }
    async findOne(id) {
        return this.prismaService.clinic.findFirst({
            where: {
                id,
            },
            include: {
                province: true,
                city: true,
                province_company: true,
                city_company: true,
                clinic_operation_hours: true,
                media_clinics: {
                    include: {
                        media: true,
                    },
                },
                media_clinic_logo: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async update(id, data) {
        return this.prismaService.clinic.update({
            where: {
                id,
            },
            data,
        });
    }
    async deleteManyOperationHourBy(where) {
        return this.prismaService.clinic_operation_hours.deleteMany({
            where,
        });
    }
    async delete(id) {
        return this.prismaService.clinic.delete({
            where: {
                id,
            },
        });
    }
};
ClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClinicService);
exports.ClinicService = ClinicService;
//# sourceMappingURL=clinic.service.js.map
//# debugId=3249f558-eca0-5f4c-833b-f382d4973d6c
