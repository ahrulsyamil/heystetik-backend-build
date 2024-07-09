"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4c9c2a15-b5f4-534b-bbc0-6a54880c8c0c")}catch(e){}}();

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
exports.UserWishlistTreatmentService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let UserWishlistTreatmentService = class UserWishlistTreatmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptionsDto) {
        const filter = {
            user_id: pageOptionsDto.user_id,
        };
        if (pageOptionsDto.search) {
            filter.treatment = {
                name: {
                    contains: pageOptionsDto.search,
                    mode: 'insensitive',
                },
            };
        }
        const data = await this.prisma.user_wishlist_treatment.findMany({
            where: {
                ...filter,
            },
            include: {
                treatment: {
                    include: {
                        clinic: {
                            include: {
                                clinic_operation_hours: true,
                                province: true,
                                city: true,
                            },
                        },
                        treatment_concerns: {
                            include: {
                                concern: true,
                            },
                        },
                        media_treatments: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.user_wishlist_treatment.count({
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
        return await this.prisma.user_wishlist_treatment.findUnique({
            where: {
                id,
            },
        });
    }
    async findBy(filter) {
        return await this.prisma.user_wishlist_treatment.findFirst({
            where: filter,
        });
    }
    async create(data) {
        return await this.prisma.user_wishlist_treatment.create({
            data,
        });
    }
    async delete(user_id, id) {
        return await this.prisma.user_wishlist_treatment.delete({
            where: {
                user_id_treatment_id: {
                    user_id,
                    treatment_id: id,
                },
            },
        });
    }
};
UserWishlistTreatmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserWishlistTreatmentService);
exports.UserWishlistTreatmentService = UserWishlistTreatmentService;
//# sourceMappingURL=user-wishlist-treatment.service.js.map
//# debugId=4c9c2a15-b5f4-534b-bbc0-6a54880c8c0c
