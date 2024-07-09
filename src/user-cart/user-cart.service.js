"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="59ccd65b-f367-5235-b1e5-e78e085104a2")}catch(e){}}();

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
exports.UserCartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
let UserCartService = class UserCartService {
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
        const data = await this.prisma.user_cart.findMany({
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
        const countAll = await this.prisma.user_cart.count({
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
        return await this.prisma.user_cart.findUnique({
            where: {
                id,
            },
        });
    }
    async findBy(filter) {
        return await this.prisma.user_cart.findFirst({
            where: filter,
        });
    }
    async findManyBy(filter) {
        return await this.prisma.user_cart.findMany({
            where: filter,
        });
    }
    async create(data) {
        return await this.prisma.user_cart.create({
            data,
        });
    }
    async update(id, data) {
        return await this.prisma.user_cart.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        return await this.prisma.user_cart.delete({
            where: {
                id,
            },
        });
    }
    async deleteMany(ids) {
        return await this.prisma.user_cart.deleteMany({
            where: {
                id: { in: ids },
            },
        });
    }
};
UserCartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserCartService);
exports.UserCartService = UserCartService;
//# sourceMappingURL=user-cart.service.js.map
//# debugId=59ccd65b-f367-5235-b1e5-e78e085104a2
