"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="56988d8c-9e16-5972-bd1b-dd7dfce508f8")}catch(e){}}();

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
exports.UserCartTreatmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
let UserCartTreatmentService = class UserCartTreatmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptionsDto) {
        const filter = {
            user_id: pageOptionsDto.user_id,
        };
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    treatement: {
                        name: { contains: pageOptionsDto.search },
                    },
                },
                {
                    clinic: {
                        name: { contains: pageOptionsDto.search },
                    },
                },
            ];
        }
        const data = await this.prisma.user_cart_treatment.findMany({
            where: {
                ...filter,
            },
            include: {
                treatement: {
                    include: {
                        media_treatments: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                clinic: {
                    include: {
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
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.user_cart_treatment.count({
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
        return await this.prisma.user_cart_treatment.findUnique({
            where: {
                id,
            },
        });
    }
    async findBy(filter) {
        return await this.prisma.user_cart_treatment.findFirst({
            where: filter,
        });
    }
    async findManyBy(filter) {
        return await this.prisma.user_cart_treatment.findMany({
            where: filter,
        });
    }
    async create(data) {
        return await this.prisma.user_cart_treatment.create({
            data,
        });
    }
    async update(id, data) {
        return await this.prisma.user_cart_treatment.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        return await this.prisma.user_cart_treatment.delete({
            where: {
                id,
            },
        });
    }
    async deleteMany(ids) {
        return await this.prisma.user_cart_treatment.deleteMany({
            where: {
                id: { in: ids },
            },
        });
    }
};
UserCartTreatmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserCartTreatmentService);
exports.UserCartTreatmentService = UserCartTreatmentService;
//# sourceMappingURL=user-cart-treatment.service.js.map
//# debugId=56988d8c-9e16-5972-bd1b-dd7dfce508f8
