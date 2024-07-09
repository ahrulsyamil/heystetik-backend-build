"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="37690fb3-6b97-5e12-ada7-fd90a9a469f5")}catch(e){}}();

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
exports.UserWishlistService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let UserWishlistService = class UserWishlistService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptionsDto) {
        const filter = {
            user_id: pageOptionsDto.user_id,
        };
        if (pageOptionsDto.search) {
            filter.product = {
                OR: [
                    { name: { contains: pageOptionsDto.search } },
                    { skincare_detail: { brand: { contains: pageOptionsDto.search } } },
                    { drug_detail: { manufacture: { contains: pageOptionsDto.search } } },
                ].filter(Boolean),
            };
        }
        const data = await this.prisma.user_wishlist.findMany({
            where: {
                ...filter,
            },
            include: {
                product: {
                    include: {
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
                        media_products: {
                            include: {
                                media: true,
                            },
                        },
                        skincare_detail: true,
                        drug_detail: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.user_wishlist.count({
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
    async find(id) {
        return await this.prisma.user_wishlist.findUnique({
            where: {
                id,
            },
        });
    }
    async findBy(filter) {
        return await this.prisma.user_wishlist.findFirst({
            where: filter,
        });
    }
    async create(data) {
        return await this.prisma.user_wishlist.create({
            data,
        });
    }
    async delete(user_id, id) {
        return await this.prisma.user_wishlist.delete({
            where: {
                user_id_product_id: {
                    user_id,
                    product_id: id,
                },
            },
        });
    }
};
UserWishlistService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserWishlistService);
exports.UserWishlistService = UserWishlistService;
//# sourceMappingURL=user-wishlist.service.js.map
//# debugId=37690fb3-6b97-5e12-ada7-fd90a9a469f5
