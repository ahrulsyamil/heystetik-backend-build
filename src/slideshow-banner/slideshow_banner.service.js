"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8d0dde98-fd25-564c-bb73-72df67ee132e")}catch(e){}}();

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
exports.SlideshowBannerService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let SlideshowBannerService = class SlideshowBannerService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSlideshowBannerDto, media) {
        return this.prisma.banner.create({
            data: {
                ...createSlideshowBannerDto,
                media_banner: {
                    create: media,
                },
            },
        });
    }
    async findAll(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.type) {
            filter.type = {
                in: pageOptionsDto.type,
            };
        }
        if (pageOptionsDto.status) {
            filter.status = {
                in: pageOptionsDto.status,
            };
        }
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    title: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    link: {
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
            ];
        }
        const result = await this.prisma.banner.findMany({
            where: {
                ...filter,
            },
            include: {
                media_banner: {
                    include: {
                        media: true,
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
        const countAll = await this.prisma.banner.count({
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
    async getAllPosition(type) {
        return this.prisma.banner.findMany({
            where: {
                type,
            },
            orderBy: {
                position: 'asc',
            },
            distinct: 'position',
            select: {
                position: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.banner.findUnique({
            where: { id },
            include: {
                media_banner: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async update(updateSlideshowBannerDto, media) {
        const deleteMediaBanner = media ? { delete: true } : {};
        return this.prisma.banner.update({
            where: {
                id: updateSlideshowBannerDto.id,
            },
            data: {
                ...updateSlideshowBannerDto,
                media_banner: {
                    ...deleteMediaBanner,
                    create: media,
                },
            },
        });
    }
    remove(id) {
        return this.prisma.banner.delete({ where: { id } });
    }
};
SlideshowBannerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SlideshowBannerService);
exports.SlideshowBannerService = SlideshowBannerService;
//# sourceMappingURL=slideshow_banner.service.js.map
//# debugId=8d0dde98-fd25-564c-bb73-72df67ee132e
