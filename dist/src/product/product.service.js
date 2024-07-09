"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="73db5e91-3758-529a-9229-0ede88e0e1d9")}catch(e){}}();

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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const string_1 = require("../globals/helpers/string");
const enum_1 = require("../globals/constant/enum");
const client_1 = require("@prisma/client");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
let ProductService = class ProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(pageOptionsDto) {
        let whereQuery = `WHERE P.deleted_at IS NULL`;
        let orderQuery = ``;
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.is_active)) {
            whereQuery = `${whereQuery} AND P.product_is_active = ${pageOptionsDto.is_active}`;
        }
        if (pageOptionsDto.type) {
            whereQuery = `${whereQuery} AND P.type = '${pageOptionsDto.type}'`;
        }
        if (pageOptionsDto.category) {
            whereQuery = `${whereQuery} AND P.category IN (${pageOptionsDto.category
                .map((type) => `'${type}'`)
                .join(',')})`;
        }
        if (pageOptionsDto.brand_manufacture) {
            whereQuery = `${whereQuery} AND (
        (
          SELECT 
            COUNT(*)
          FROM
            skincare_details
          WHERE
            product_id = P.id
            AND brand IN (${pageOptionsDto.brand_manufacture
                .map((type) => `'${type.replaceAll("'", "''")}'`)
                .join(',')})
        ) > 0
        OR
        (
          SELECT 
            COUNT(*)
          FROM
            drug_details
          WHERE
            product_id = P.id
            AND manufacture IN (${pageOptionsDto.brand_manufacture
                .map((type) => `'${type.replaceAll("'", "''")}'`)
                .join(',')})
        ) > 0
      )`;
        }
        if (pageOptionsDto.display) {
            whereQuery = `${whereQuery} AND P.display IN (${pageOptionsDto.display
                .map((type) => `'${type}'`)
                .join(',')})`;
        }
        if (pageOptionsDto.rating) {
            whereQuery = `${whereQuery} AND (${pageOptionsDto.rating
                .map((item) => `(P.rating >= ${item} AND P.rating < ${item + 1})`)
                .join(' OR ')})`;
        }
        if (pageOptionsDto.dollar_rating) {
            const dollarRatingRange = {
                1: [100000, 500000],
                2: [500000, 1500000],
                3: [1500000, 5000000],
                4: [5000000, 10000000000],
            };
            whereQuery = `${whereQuery} AND P.price BETWEEN ${dollarRatingRange[pageOptionsDto.dollar_rating][0]} AND ${dollarRatingRange[pageOptionsDto.dollar_rating][1]}
      `;
        }
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND 
        (
          LOWER(P.name) LIKE LOWER('%${pageOptionsDto.search}%')
          OR LOWER(P.category) LIKE LOWER('%${pageOptionsDto.search}%')
          OR LOWER(P.display) LIKE LOWER('%${pageOptionsDto.search}%')
          OR (
            SELECT
              COUNT(*)
            FROM
              skincare_details
            WHERE
              product_id = P.id
              AND LOWER(brand) LIKE LOWER('%${pageOptionsDto.search}%')
          ) > 0
          OR (
            SELECT
              COUNT(*)
            FROM
              drug_details
            WHERE
              product_id = P.id
              AND LOWER(manufacture) LIKE LOWER('%${pageOptionsDto.search}%')
          ) > 0
        )
      `;
        }
        if (!pageOptionsDto.sort_by) {
            orderQuery = `ORDER BY P.updated_at DESC, P.id DESC`;
        }
        if (['created_at', 'updated_at', 'rating'].includes(pageOptionsDto.sort_by)) {
            orderQuery = `ORDER BY P.${pageOptionsDto.sort_by} ${pageOptionsDto.order}, P.id DESC`;
        }
        if (pageOptionsDto.sort_by == 'popularity') {
            orderQuery = `ORDER BY
        (
          SELECT 
            COALESCE(SUM(pax), 0) 
          FROM transaction_product tp
          INNER JOIN transaction_product_item tpi
            ON tpi.transaction_product_id = tp.id
          INNER JOIN product p
            ON p.id = tpi.product_id
          WHERE 
            p.id = P.id
            AND tp.payment_status = '${enum_1.PaymentStatus.SUCCEEDED}' 
            AND tp.updated_at::date BETWEEN (CURRENT_DATE - interval '30 days')::date AND CURRENT_DATE::date 
        ) ${pageOptionsDto.order},
        P.rating ${pageOptionsDto.order},
        P.id DESC
      `;
        }
        if (pageOptionsDto.sort_by == 'dollar_rating') {
            orderQuery = `ORDER BY P.price ${pageOptionsDto.order}, P.id DESC`;
        }
        const query = `
      SELECT 
        P.*
      FROM product P
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
        return this.prismaService.product.create({
            data,
        });
    }
    async update(id, data) {
        return this.prismaService.product.update({
            where: {
                id,
            },
            data,
        });
    }
    async updateSkincareDetail(id, data) {
        return this.prismaService.skincare_details.update({
            where: {
                id,
            },
            data,
        });
    }
    async updateDrugDetail(id, data) {
        return this.prismaService.drug_details.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        return this.prismaService.product.delete({
            where: {
                id,
            },
        });
    }
    async find(id) {
        return await this.prismaService.product.findUnique({
            where: {
                id,
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                tags: true,
                skincare_detail: true,
                drug_detail: true,
                product_variants: true,
                product_concerns: true,
                product_reviews: true,
            },
        });
    }
    async updateRating(id, rating) {
        return await this.prismaService.product.update({
            where: {
                id,
            },
            data: {
                rating,
            },
        });
    }
    async getProducts(ids) {
        return await this.prismaService.product.findMany({
            where: {
                id: {
                    in: ids,
                },
            },
        });
    }
    async getDistinctSkincareBrand() {
        return this.prismaService.skincare_details.groupBy({
            by: ['brand'],
        });
    }
    async getDistinctDrugManufacture() {
        return this.prismaService.drug_details.groupBy({
            by: ['manufacture'],
        });
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map
//# debugId=73db5e91-3758-529a-9229-0ede88e0e1d9
