"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="810858fb-0979-54d3-b003-56ec3f0e9cf2")}catch(e){}}();

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
exports.UserBlockService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
let UserBlockService = class UserBlockService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptionsDto) {
        const filter = {};
        filter.user_id = pageOptionsDto.user_id;
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    blocked_user: {
                        username: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                },
                {
                    blocked_user: {
                        fullname: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                },
            ];
        }
        const data = await this.prisma.user_block.findMany({
            where: {
                ...filter,
            },
            include: {
                blocked_user: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                blocked_user: {
                    fullname: pageOptionsDto.order,
                },
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.user_block.count({
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
    async block(data) {
        return await this.prisma.user_block.upsert({
            where: {
                user_id_blocked_user_id: data,
            },
            create: data,
            update: data,
        });
    }
    async unblock(data) {
        return await this.prisma.user_block.delete({
            where: {
                user_id_blocked_user_id: data,
            },
        });
    }
    async find(where) {
        return await this.prisma.user_block.findFirst({
            where,
        });
    }
};
UserBlockService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserBlockService);
exports.UserBlockService = UserBlockService;
//# sourceMappingURL=user-block.service.js.map
//# debugId=810858fb-0979-54d3-b003-56ec3f0e9cf2
