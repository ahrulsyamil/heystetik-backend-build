"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0ef1a438-01a6-5257-9966-720578035a3b")}catch(e){}}();

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
exports.SolutionProductService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
const string_1 = require("../globals/helpers/string");
const enum_1 = require("../globals/constant/enum");
let SolutionProductService = class SolutionProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllProduct(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.type) {
            filter.type = pageOptionsDto.type;
        }
        if (pageOptionsDto.category) {
            filter.category = {
                in: pageOptionsDto.category,
            };
        }
        if (pageOptionsDto.tag) {
            filter.tags.some = {
                tag: {
                    in: pageOptionsDto.tag,
                    mode: 'insensitive',
                },
            };
        }
        if (pageOptionsDto.display) {
            filter.display = {
                in: pageOptionsDto.display,
            };
        }
        if (pageOptionsDto.concern_ids) {
            filter.product_concerns = {
                some: {
                    concern_id: {
                        in: pageOptionsDto.concern_ids,
                    },
                },
            };
        }
        if (pageOptionsDto.packaging) {
            filter.skincare_detail = {
                specification_packaging_type: {
                    in: pageOptionsDto.packaging,
                },
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            (0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            filter.price = {
                gte: pageOptionsDto.min_price,
                lte: pageOptionsDto.max_price,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            filter.price = {
                gte: pageOptionsDto.min_price,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price)) {
            filter.price = {
                lte: pageOptionsDto.max_price,
            };
        }
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        const data = await this.prisma.product.findMany({
            where: {
                ...filter,
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                skincare_detail: true,
                drug_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.product.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllSkincare(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.category) {
            filter.category = {
                in: pageOptionsDto.category,
            };
        }
        if (pageOptionsDto.tag) {
            filter.tags.some = {
                tag: {
                    in: pageOptionsDto.tag,
                    mode: 'insensitive',
                },
            };
        }
        if (pageOptionsDto.display) {
            filter.display = {
                in: pageOptionsDto.display,
            };
        }
        if (pageOptionsDto.concern_ids) {
            filter.product_concerns = {
                some: {
                    concern_id: {
                        in: pageOptionsDto.concern_ids,
                    },
                },
            };
        }
        if (pageOptionsDto.brand) {
            filter.skincare_detail = {
                brand: {
                    in: pageOptionsDto.brand,
                },
            };
        }
        if (pageOptionsDto.packaging) {
            filter.skincare_detail = {
                specification_packaging_type: {
                    in: pageOptionsDto.packaging,
                },
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            (0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            filter.price = {
                gte: pageOptionsDto.min_price,
                lte: pageOptionsDto.max_price,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            filter.price = {
                gte: pageOptionsDto.min_price,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price)) {
            filter.price = {
                lte: pageOptionsDto.max_price,
            };
        }
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        const data = await this.prisma.product.findMany({
            where: {
                type: 'SKINCARE',
                ...filter,
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                skincare_detail: true,
                drug_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.product.count({
            where: {
                ...filter,
                type: 'SKINCARE',
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findSkincare(id) {
        return await this.prisma.product.findFirst({
            where: {
                id,
                type: 'SKINCARE',
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                skincare_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
        });
    }
    async findAllDrug(pageOptionsDto) {
        const filter = {
            drug_detail: {},
        };
        if (pageOptionsDto.tag) {
            filter.tags.some = {
                tag: {
                    in: pageOptionsDto.tag,
                    mode: 'insensitive',
                },
            };
        }
        if (pageOptionsDto.display) {
            filter.display = {
                in: pageOptionsDto.display,
            };
        }
        if (pageOptionsDto.concern_ids) {
            filter.product_concerns = {
                some: {
                    concern_id: {
                        in: pageOptionsDto.concern_ids,
                    },
                },
            };
        }
        if (pageOptionsDto.packaging) {
            filter.drug_detail.specification_packaging = {
                in: pageOptionsDto.packaging,
            };
        }
        if (pageOptionsDto.classification) {
            filter.drug_detail.specification_classification = {
                in: pageOptionsDto.classification,
            };
        }
        if (pageOptionsDto.form) {
            filter.drug_detail.specification_form = {
                in: pageOptionsDto.form,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            (0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            filter.price = {
                gte: pageOptionsDto.min_price,
                lte: pageOptionsDto.max_price,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            filter.price = {
                gte: pageOptionsDto.min_price,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price)) {
            filter.price = {
                lte: pageOptionsDto.max_price,
            };
        }
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    drug_detail: {
                        OR: [
                            {
                                indication: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                            {
                                specification_ingredients: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                        ],
                    },
                },
            ];
        }
        const data = await this.prisma.product.findMany({
            where: {
                type: 'DRUGS',
                ...filter,
            },
            include: {
                consultation_recipe_drugs: {
                    where: {
                        customer_id: {
                            equals: pageOptionsDto.customer_id,
                        },
                        due_date: {
                            gte: new Date(),
                        },
                    },
                    orderBy: {
                        due_date: 'desc',
                    },
                },
                media_products: {
                    include: {
                        media: true,
                    },
                },
                skincare_detail: true,
                drug_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.product.count({
            where: {
                ...filter,
                type: 'DRUGS',
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findDrug(id) {
        return await this.prisma.product.findFirst({
            where: {
                id,
                type: 'DRUGS',
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                drug_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
                consultation_recipe_drugs: {
                    where: {
                        due_date: {
                            gte: new Date(),
                        },
                    },
                    orderBy: {
                        due_date: 'desc',
                    },
                },
            },
        });
    }
    async findAllDrugRecipe(pageOptionsDto) {
        const query = `
      SELECT
        id,
        consultation_id,
        product_id,
        notes,
        redeem_amount,
        remaining_redeem_amount,
        due_date,
        created_by,
        updated_by,
        created_at,
        updated_at,
        deleted_at
      FROM (
        SELECT
          crd.id, crd.consultation_id, crd.product_id, crd.notes, crd.redeem_amount, crd.remaining_redeem_amount, crd.due_date, crd.created_by, crd.updated_by, crd.created_at, crd.updated_at, crd.deleted_at,
          ROW_NUMBER() OVER (PARTITION BY crd.product_id ORDER BY crd.due_date DESC) AS rn
        FROM consultation_recipe_drug crd
        INNER JOIN consultation c ON c.id = crd.consultation_id 
        WHERE c.customer_id = ${pageOptionsDto.user_id}
      ) ranked
      WHERE rn = 1
      AND deleted_at IS NULL
      AND remaining_redeem_amount > 0
      AND due_date >= NOW()
    `;
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
            ${query}
            LIMIT ${pageOptionsDto.take}
            OFFSET ${pageOptionsDto.skip}  
          `));
        });
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
        SELECT COUNT(*) FROM (
          ${query}
        ) COUNT
      `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async createProductView(data) {
        return await this.prisma.product_view.create({
            data,
        });
    }
    async findAllRecentlyViewed(pageOptionsDto) {
        const filter = {
            product_views: {
                some: {
                    user_id: pageOptionsDto.user_id,
                },
            },
        };
        if (pageOptionsDto.search) {
            filter.name = {
                contains: pageOptionsDto.search,
                mode: 'insensitive',
            };
        }
        if (pageOptionsDto.type) {
            filter.type = pageOptionsDto.type;
        }
        if (pageOptionsDto.category) {
            filter.category = {
                in: pageOptionsDto.category,
            };
        }
        if (pageOptionsDto.display) {
            filter.display = {
                in: pageOptionsDto.display,
            };
        }
        if (pageOptionsDto.concern_ids) {
            filter.product_concerns = {
                some: {
                    concern_id: {
                        in: pageOptionsDto.concern_ids,
                    },
                },
            };
        }
        const data = await this.prisma.product.findMany({
            where: {
                ...filter,
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                skincare_detail: true,
                drug_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: {
                product_views: {
                    _count: pageOptionsDto.order,
                },
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.product.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllRelatedSkincare(pageOptionsDto) {
        const filter = {
            type: 'SKINCARE',
            transaction_product_items: {
                some: {
                    transaction_product: {
                        payment_status: enum_1.PaymentStatus.SUCCEEDED,
                        user_id: {
                            not: pageOptionsDto.user_id,
                        },
                        user: {
                            user_transaction_products: {
                                some: {
                                    transaction_product_items: {
                                        some: {
                                            product_id: pageOptionsDto.product_id,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    product_id: {
                        not: pageOptionsDto.product_id,
                    },
                },
            },
        };
        if (pageOptionsDto.search) {
            filter.name = {
                contains: pageOptionsDto.search,
                mode: 'insensitive',
            };
        }
        if (pageOptionsDto.category) {
            filter.category = {
                in: pageOptionsDto.category,
            };
        }
        if (pageOptionsDto.display) {
            filter.display = {
                in: pageOptionsDto.display,
            };
        }
        const data = await this.prisma.product.findMany({
            where: {
                ...filter,
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                skincare_detail: true,
                drug_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: {
                transaction_product_items: {
                    _count: pageOptionsDto.order,
                },
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.product.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllRecomendationSkincare(pageOptionsDto) {
        const filter = {
            type: 'SKINCARE',
            id: {
                not: pageOptionsDto.product_id,
            },
            product_concerns: {
                some: {
                    concern: {
                        name: {
                            in: [
                                ...pageOptionsDto.interest_face_corrective_skin_goals,
                                ...pageOptionsDto.interest_body_corrective_skin_goals,
                                ...pageOptionsDto.interest_augmentation_skin_goals,
                            ],
                            mode: 'insensitive',
                        },
                    },
                },
            },
        };
        if (pageOptionsDto.search) {
            filter.name = {
                contains: pageOptionsDto.search,
                mode: 'insensitive',
            };
        }
        if (pageOptionsDto.category) {
            filter.category = {
                in: pageOptionsDto.category,
            };
        }
        if (pageOptionsDto.display) {
            filter.display = {
                in: pageOptionsDto.display,
            };
        }
        const data = await this.prisma.product.findMany({
            where: {
                ...filter,
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                skincare_detail: true,
                drug_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: [
                {
                    rating: pageOptionsDto.order,
                },
                {
                    transaction_product_items: {
                        _count: pageOptionsDto.order,
                    },
                },
            ],
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.product.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async getDermatologistsSkincare(customer_id) {
        return await this.prisma.consultation_recomendation_skincare.findMany({
            where: {
                consultation: {
                    customer_id,
                },
            },
            select: {
                product_id: true,
            },
            distinct: ['product_id'],
        });
    }
    async findAllDermatologistsChoiceSkincare(pageOptionsDto) {
        const filter = {
            type: 'SKINCARE',
            id: {
                in: pageOptionsDto.product_ids,
            },
        };
        if (pageOptionsDto.search) {
            filter.name = {
                contains: pageOptionsDto.search,
                mode: 'insensitive',
            };
        }
        if (pageOptionsDto.category) {
            filter.category = {
                in: pageOptionsDto.category,
            };
        }
        if (pageOptionsDto.display) {
            filter.display = {
                in: pageOptionsDto.display,
            };
        }
        const data = await this.prisma.product.findMany({
            where: {
                ...filter,
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                skincare_detail: true,
                drug_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: [
                {
                    rating: pageOptionsDto.order,
                },
                {
                    transaction_product_items: {
                        _count: pageOptionsDto.order,
                    },
                },
            ],
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.product.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllRecomendationDrug(pageOptionsDto) {
        const filter = {
            type: 'DRUGS',
            id: {
                not: pageOptionsDto.product_id,
            },
            product_concerns: {
                some: {
                    product: {
                        product_concerns: {
                            some: {
                                concern_id: {
                                    in: pageOptionsDto.concern_ids,
                                },
                            },
                        },
                    },
                },
            },
        };
        if (pageOptionsDto.search) {
            filter.name = {
                contains: pageOptionsDto.search,
                mode: 'insensitive',
            };
        }
        if (pageOptionsDto.category) {
            filter.category = {
                in: pageOptionsDto.category,
            };
        }
        if (pageOptionsDto.display) {
            filter.display = {
                in: pageOptionsDto.display,
            };
        }
        const data = await this.prisma.product.findMany({
            where: {
                ...filter,
            },
            include: {
                media_products: {
                    include: {
                        media: true,
                    },
                },
                skincare_detail: true,
                drug_detail: true,
                product_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: [
                {
                    rating: pageOptionsDto.order,
                },
                {
                    transaction_product_items: {
                        _count: pageOptionsDto.order,
                    },
                },
            ],
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.product.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllProductSkincareBrand() {
        return this.prisma.skincare_details.findMany({
            distinct: 'brand',
            select: {
                brand: true,
            },
        });
    }
};
SolutionProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SolutionProductService);
exports.SolutionProductService = SolutionProductService;
//# sourceMappingURL=solution-product.service.js.map
//# debugId=0ef1a438-01a6-5257-9966-720578035a3b
