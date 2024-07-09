"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b67696b1-b5a4-5d2d-af0a-3b6f8bc22431")}catch(e){}}();

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
exports.BroadcastService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
let BroadcastService = class BroadcastService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.status) {
            filter.status = {
                in: pageOptionsDto.status,
            };
        }
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    topic: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    title: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    status: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    broadcast_targets: {
                        some: {
                            role: {
                                name: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                        },
                    },
                },
            ];
        }
        const result = await this.prismaService.broadcast.findMany({
            where: {
                ...filter,
            },
            include: {
                media_broadcast: {
                    include: {
                        media: true,
                    },
                },
                broadcast_targets: {
                    include: {
                        role: true,
                    },
                },
                broadcast_interests: true,
                broadcast_provinces: {
                    include: {
                        province: true,
                    },
                },
                broadcast_cities: {
                    include: {
                        city: true,
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
        const countAll = await this.prismaService.broadcast.count({
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
    async create(data) {
        return this.prismaService.broadcast.create({
            data,
            include: {
                broadcast_targets: {
                    include: {
                        role: true,
                    },
                },
                broadcast_interests: true,
                broadcast_provinces: {
                    include: {
                        province: true,
                    },
                },
                broadcast_cities: {
                    include: {
                        city: true,
                    },
                },
                media_broadcast: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async find(id) {
        return this.prismaService.broadcast.findFirst({
            where: {
                id,
            },
            include: {
                media_broadcast: {
                    include: {
                        media: true,
                    },
                },
                broadcast_targets: {
                    include: {
                        role: true,
                    },
                },
                broadcast_interests: true,
                broadcast_provinces: {
                    include: {
                        province: true,
                    },
                },
                broadcast_cities: {
                    include: {
                        city: true,
                    },
                },
            },
        });
    }
    async update(id, data, media) {
        const deleteMedia = media ? { delete: true } : {};
        return this.prismaService.broadcast.update({
            where: {
                id,
            },
            data: {
                ...data,
                media_broadcast: {
                    ...deleteMedia,
                    create: media,
                },
            },
        });
    }
    async delete(id) {
        return this.prismaService.broadcast.delete({
            where: {
                id,
            },
        });
    }
    async getUserReach(where) {
        const filter = {
            deleted_at: null,
        };
        if (where.role_id) {
            filter.roleId = {
                in: where.role_id,
            };
        }
        if (where.interests) {
            filter.OR = [
                {
                    interest_face_corrective_skin_goals: {
                        some: {
                            name_face_corrective: {
                                in: where.interests,
                            },
                        },
                    },
                },
                {
                    interest_body_corrective_skin_goals: {
                        some: {
                            name_body_corrective: {
                                in: where.interests,
                            },
                        },
                    },
                },
                {
                    interest_augmentation_skin_goals: {
                        some: {
                            name_augmentation: {
                                in: where.interests,
                            },
                        },
                    },
                },
                {
                    interest_sexually_and_skin_diseases_skin_goals: {
                        some: {
                            name: {
                                in: where.interests,
                            },
                        },
                    },
                },
            ];
        }
        if (where.province_ids) {
            filter.provinceId = {
                in: where.province_ids,
            };
        }
        if (where.city_ids) {
            filter.cityId = {
                in: where.city_ids,
            };
        }
        return this.prismaService.users.count({
            where: filter,
        });
    }
};
BroadcastService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BroadcastService);
exports.BroadcastService = BroadcastService;
//# sourceMappingURL=broadcast.service.js.map
//# debugId=b67696b1-b5a4-5d2d-af0a-3b6f8bc22431
