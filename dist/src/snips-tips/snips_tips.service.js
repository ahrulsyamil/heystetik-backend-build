"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2fb94798-f1aa-593a-91f5-1a7febba648b")}catch(e){}}();

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
exports.SnipsTipsService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const enum_1 = require("../globals/constant/enum");
const prisma_service_1 = require("../prisma/prisma.service");
let SnipsTipsService = class SnipsTipsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createSnipsTipsDto) {
        return this.prisma.snips_tips.create({
            data: createSnipsTipsDto,
        });
    }
    async findAll() {
        return await this.prisma.snips_tips.findMany({
            where: {
                status: enum_1.SnipTipsStatus.Published,
            },
            include: {
                doctor: {
                    select: {
                        fullname: true,
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                position: 'asc',
            },
        });
    }
    async findAllCms(pageOptionsDto) {
        const filter = {};
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
                    tips: {
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
                    doctor: {
                        fullname: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                },
            ];
        }
        const result = await this.prisma.snips_tips.findMany({
            where: {
                ...filter,
            },
            include: {
                doctor: {
                    select: {
                        fullname: true,
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
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
        const countAll = await this.prisma.snips_tips.count({
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
    findOne(id) {
        return this.prisma.snips_tips.findUnique({
            where: { id },
            include: {
                doctor: true,
            },
        });
    }
    getAllPosition() {
        return this.prisma.snips_tips.findMany({
            orderBy: {
                position: 'asc',
            },
            distinct: 'position',
            select: {
                position: true,
            },
        });
    }
    update(id, updateSnipsTipsDto) {
        return this.prisma.snips_tips.update({
            where: { id: +id },
            data: updateSnipsTipsDto,
        });
    }
    delete(id) {
        return this.prisma.snips_tips.delete({ where: { id } });
    }
};
SnipsTipsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SnipsTipsService);
exports.SnipsTipsService = SnipsTipsService;
//# sourceMappingURL=snips_tips.service.js.map
//# debugId=2fb94798-f1aa-593a-91f5-1a7febba648b
