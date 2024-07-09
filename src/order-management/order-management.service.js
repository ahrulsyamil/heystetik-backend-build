"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9a4e13df-9717-5020-b3e6-e3f0fc7499a0")}catch(e){}}();

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
exports.OrderManagementService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
const dayjs = require("dayjs");
let OrderManagementService = class OrderManagementService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(pageOptionsDto) {
        const filter = {};
        filter.shipping_product = {
            shipping_method: {},
        };
        if (pageOptionsDto.payment_status)
            filter.payment_status = pageOptionsDto.payment_status;
        if (pageOptionsDto.start_date && pageOptionsDto.end_date)
            filter.created_at = {
                gte: dayjs(pageOptionsDto.start_date)
                    .hour(0)
                    .minute(0)
                    .second(0)
                    .toDate(),
                lte: dayjs(pageOptionsDto.end_date)
                    .hour(23)
                    .minute(59)
                    .second(59)
                    .toDate(),
            };
        if (pageOptionsDto.order_status)
            filter.order_status = pageOptionsDto.order_status;
        if (pageOptionsDto.shipping_method_id)
            filter.shipping_product.shipping_method_id =
                pageOptionsDto.shipping_method_id;
        if (pageOptionsDto.shipping_type)
            filter.shipping_product.shipping_method.type =
                pageOptionsDto.shipping_type;
        if (pageOptionsDto.search)
            filter.OR = [
                {
                    id: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    shipping_product: {
                        recipient_address: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                },
                {
                    shipping_product: {
                        recipient_name: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                },
                {
                    transaction_product_items: {
                        some: {
                            product: {
                                name: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                        },
                    },
                },
            ];
        const [data, countAll] = await Promise.all([
            this.prismaService.transaction_product.findMany({
                where: {
                    ...filter,
                },
                include: {
                    user: true,
                    payment_method: true,
                    shipping_product: {
                        include: {
                            shipper: true,
                            shipping_method: true,
                        },
                    },
                },
                skip: pageOptionsDto.skip,
                take: pageOptionsDto.take,
                orderBy: [
                    {
                        [pageOptionsDto.sort_by]: pageOptionsDto.sort_type,
                    },
                    {
                        id: 'desc',
                    },
                ],
            }),
            this.prismaService.transaction_product.count({
                where: {
                    ...filter,
                    deleted_at: null,
                },
            }),
        ]);
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async getProductsByTransactionId(pageOptionsGetProduct) {
        const [data, countAll] = await Promise.all([
            this.prismaService.transaction_product_item.findMany({
                where: {
                    transaction_product_id: pageOptionsGetProduct.transaction_id,
                },
                include: {
                    product: {
                        include: {
                            media_products: {
                                include: {
                                    media: true,
                                },
                            },
                        },
                    },
                },
                skip: pageOptionsGetProduct.skip,
                take: pageOptionsGetProduct.take,
            }),
            this.prismaService.transaction_product_item.count({
                where: {
                    transaction_product_id: pageOptionsGetProduct.transaction_id,
                    deleted_at: null,
                },
            }),
        ]);
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto: pageOptionsGetProduct,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async updateTransaction(id, data) {
        return await this.prismaService.transaction_product.update({
            where: {
                id,
            },
            data,
        });
    }
    async findTransaction(id) {
        return this.prismaService.transaction_product.findUnique({
            where: {
                id,
            },
            include: {
                user: true,
                transaction_product_items: {
                    include: {
                        product: true,
                    },
                },
                shipping_product: {
                    include: {
                        shipping_method: true,
                        shipper: true,
                    },
                },
            },
        });
    }
    async createTransactionOrderStatusHistory(data) {
        return this.prismaService.transaction_product_order_status_history.create({
            data,
        });
    }
};
OrderManagementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderManagementService);
exports.OrderManagementService = OrderManagementService;
//# sourceMappingURL=order-management.service.js.map
//# debugId=9a4e13df-9717-5020-b3e6-e3f0fc7499a0
