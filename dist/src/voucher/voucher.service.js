"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="84adf1db-a07c-50f6-872b-3666c17249c2")}catch(e){}}();

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
exports.VoucherService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const dayjs = require("dayjs");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let VoucherService = class VoucherService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(pageOptionsDto) {
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
                    type: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    target_voucher: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    code: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    promotion_type: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    target_buyer: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        if (pageOptionsDto.voucher_type) {
            filter.type = {
                in: pageOptionsDto.voucher_type,
            };
        }
        if (pageOptionsDto.target_voucher) {
            filter.target_voucher = {
                in: pageOptionsDto.target_voucher,
            };
        }
        if (pageOptionsDto.promotion_type) {
            filter.promotion_type = {
                in: pageOptionsDto.promotion_type,
            };
        }
        if (pageOptionsDto.discount_type) {
            filter.discount_type = {
                in: pageOptionsDto.discount_type,
            };
        }
        if (pageOptionsDto.target_buyer) {
            filter.target_buyer = {
                in: pageOptionsDto.target_buyer,
            };
        }
        const result = await this.prismaService.voucher.findMany({
            where: {
                ...filter,
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
        const countAll = await this.prismaService.voucher.count({
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
    async findAllAvailableVoucher(pageOptionsDto) {
        const dateNow = dayjs().format('YYYY-MM-DD HH:mm');
        const query = `
      SELECT
        v.*
      FROM 
        voucher v
      WHERE 
        v.deleted_at IS NULL
        AND (v.quota > 0 OR v.quota IS NULL)
        AND (
          (
            '${dateNow}' >= TO_CHAR(v.period_start, 'YYYY-MM-DD HH24:MI')
            AND 
            (
              v.period_end IS NULL OR '${dateNow}' <= TO_CHAR(v.period_end, 'YYYY-MM-DD HH24:MI')
            )
          )
          OR
          (
            v.repeat_next_month IS TRUE
            AND v.period_end IS NOT NULL
            AND (
              (DATE_PART('YEAR', '${dateNow}'::DATE) 
              - DATE_PART('YEAR', v.period_end::DATE)) * 12 
              + (DATE_PART('Month', '${dateNow}'::DATE) 
              - DATE_PART('Month', v.period_end::DATE))
            ) <= v.repeat_throughout 
            AND (
                (
                  '${dateNow}' >= TO_CHAR(v.period_start + (
                    (DATE_PART('YEAR', '${dateNow}'::DATE) 
                    - DATE_PART('YEAR', v.period_start::DATE)) * 12 
                    + (DATE_PART('Month', '${dateNow}'::DATE) 
                    - DATE_PART('Month', v.period_start::DATE)) || ' month'
                  )::INTERVAL, 'YYYY-MM-DD HH24:MI')
                  OR 
                  (
                    CASE
                      WHEN ((date_part('year', v.period_start) <> date_part('year', v.period_end))
                        OR (date_part('month', v.period_start) <> date_part('month', v.period_end)))
                        THEN
                          '${dateNow}' <= TO_CHAR(v.period_end + (
                            (DATE_PART('YEAR', '${dateNow}'::DATE) 
                            - DATE_PART('YEAR', v.period_start::DATE)) * 12 
                            + (DATE_PART('Month', '${dateNow}'::DATE) 
                            - DATE_PART('Month', v.period_start::DATE)) || ' month'
                          )::INTERVAL, 'YYYY-MM-DD HH24:MI')
                      ELSE 
                        FALSE
                    END
                  )
                )
              AND 
              (
                '${dateNow}' <= TO_CHAR(v.period_end + (
                  (DATE_PART('YEAR', '${dateNow}'::DATE) 
                  - DATE_PART('YEAR', v.period_start::DATE)) * 12 
                  + (DATE_PART('Month', '${dateNow}'::DATE) 
                  - DATE_PART('Month', v.period_start::DATE)) || ' month'
                )::INTERVAL, 'YYYY-MM-DD HH24:MI')
              )
            )
          )
        )
        AND v.target_voucher <> 'Special'
        AND (
          CASE 
            WHEN v.target_voucher = 'Limited'
              THEN (
                (
                  (SELECT COUNT(*) FROM transaction_consultation_voucher_applied WHERE voucher_id = v.id AND user_id = ${pageOptionsDto.user_id})
                  +
                  (SELECT COUNT(*) FROM transaction_product_voucher_applied WHERE voucher_id = v.id AND user_id = ${pageOptionsDto.user_id})
                  +
                  (SELECT COUNT(*) FROM transaction_treatment_voucher_applied WHERE voucher_id = v.id AND user_id = ${pageOptionsDto.user_id})
                ) = 0
              )
            ELSE 1 = 1
          END
        )
        AND (
          CASE
            WHEN v.target_buyer = 'First Purchase Buyers'
              THEN (
                (
                  (SELECT COUNT(*) FROM transaction_consultation WHERE customer_id = ${pageOptionsDto.user_id})
                  +
                  (SELECT COUNT(*) FROM transaction_product WHERE user_id = ${pageOptionsDto.user_id})
                  +
                  (SELECT COUNT(*) FROM transaction_treatment WHERE user_id = ${pageOptionsDto.user_id})
                ) = 0
              )
            ELSE 1 = 1
          END
        )
        AND v.type IN ('${pageOptionsDto.type.join("','")}')
    `;
        const data = await this.prismaService.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
            ${query}
            ORDER BY v.created_at ${pageOptionsDto.order}
               LIMIT ${pageOptionsDto.take}
               OFFSET ${pageOptionsDto.skip}
        `));
        });
        let countAll = await this.prismaService.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            COUNT(*)
          FROM
            (${query}) RESULT
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
            updated_at: dayjs.tz(item.updated_at).format(),
        })), pageMetaDto);
    }
    async find(id) {
        return this.prismaService.voucher.findUnique({
            where: {
                id,
            },
        });
    }
    async findByCode(code) {
        return this.prismaService.voucher.findUnique({
            where: {
                code,
            },
        });
    }
    async create(data) {
        return this.prismaService.voucher.create({
            data,
        });
    }
    async update(id, data) {
        return this.prismaService.voucher.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        return this.prismaService.voucher.delete({
            where: {
                id,
            },
        });
    }
};
VoucherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VoucherService);
exports.VoucherService = VoucherService;
//# sourceMappingURL=voucher.service.js.map
//# debugId=84adf1db-a07c-50f6-872b-3666c17249c2
