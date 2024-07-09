"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b6e6216a-9c03-5388-82e0-800780251d0f")}catch(e){}}();

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
exports.RecipeRecomendationSkincareService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let RecipeRecomendationSkincareService = class RecipeRecomendationSkincareService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(doctor_id, pageOptionsDto) {
        const filter = {
            doctor_id,
        };
        if (pageOptionsDto.search) {
            filter.OR = {
                title: { contains: pageOptionsDto.search },
                subtitle: { contains: pageOptionsDto.search },
            };
        }
        const data = await this.prisma.recipe_recomendation_skincare.findMany({
            where: filter,
            include: {
                recipe_recomendation_skincare_items: {
                    include: {
                        skincare: {
                            include: {
                                skincare_detail: true,
                                drug_detail: true,
                                media_products: {
                                    include: {
                                        media: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.recipe_recomendation_skincare.count({
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
    async create(createRecipeRecomendationSkincareDto) {
        const { doctor_id, title, subtitle, is_active, recipe_recomendation_skincare_items, } = createRecipeRecomendationSkincareDto;
        return this.prisma.recipe_recomendation_skincare.create({
            data: {
                doctor_id,
                title,
                subtitle,
                is_active,
                recipe_recomendation_skincare_items: {
                    create: recipe_recomendation_skincare_items,
                },
            },
        });
    }
    async findOne(id) {
        return await this.prisma.recipe_recomendation_skincare.findUnique({
            where: { id },
            include: {
                recipe_recomendation_skincare_items: {
                    include: {
                        skincare: {
                            include: {
                                skincare_detail: true,
                                media_products: {
                                    include: {
                                        media: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    async update(id, updateRecipeRecomendationSkincareDto) {
        const { doctor_id, title, subtitle, is_active, recipe_recomendation_skincare_items, } = updateRecipeRecomendationSkincareDto;
        await this.prisma.recipe_recomendation_skincare_item.deleteMany({
            where: {
                recipe_recomendation_skincare_id: id,
            },
        });
        return await this.prisma.recipe_recomendation_skincare.update({
            where: {
                id,
            },
            data: {
                doctor_id,
                title,
                subtitle,
                is_active,
                recipe_recomendation_skincare_items: {
                    create: recipe_recomendation_skincare_items,
                },
            },
        });
    }
    async remove(id) {
        await this.prisma.recipe_recomendation_skincare_item.deleteMany({
            where: {
                recipe_recomendation_skincare_id: id,
            },
        });
        return await this.prisma.recipe_recomendation_skincare.delete({
            where: { id },
        });
    }
};
RecipeRecomendationSkincareService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RecipeRecomendationSkincareService);
exports.RecipeRecomendationSkincareService = RecipeRecomendationSkincareService;
//# sourceMappingURL=recipe-recomendation-skincare.service.js.map
//# debugId=b6e6216a-9c03-5388-82e0-800780251d0f
