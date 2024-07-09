"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9c1eb671-7421-5910-811b-cbd449aaa55d")}catch(e){}}();

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
exports.StreamSaveService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let StreamSaveService = class StreamSaveService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.stream_save.upsert({
            where: {
                stream_id_user_id: data,
            },
            create: data,
            update: {
                ...data,
                deleted_at: null,
            },
        });
    }
    async findBy(where) {
        return await this.prisma.stream_save.findFirst({
            where,
        });
    }
    async findAllByUser(pageOptionsDto) {
        const filter = {
            user_id: pageOptionsDto.user_id,
        };
        if (pageOptionsDto.search) {
            filter.user = {
                fullname: { contains: pageOptionsDto.search },
            };
        }
        const data = await this.prisma.stream_save.findMany({
            where: {
                ...filter,
            },
            include: {
                stream: {
                    include: {
                        stream_hastags: {
                            include: {
                                hashtag: true,
                            },
                        },
                        stream_mentions: true,
                        stream_poll: {
                            include: {
                                stream_poll_options: true,
                                stream_pollings: true,
                            },
                        },
                        media_streams: {
                            include: {
                                media: true,
                            },
                        },
                        user: {
                            include: {
                                media_user_profile_picture: {
                                    include: {
                                        media: true,
                                    },
                                },
                            },
                        },
                        _count: {
                            select: {
                                stream_saves: true,
                                stream_comments: true,
                                stream_likes: true,
                                stream_comment_replies: true,
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
        const countAll = await this.prisma.stream_save.count({
            where: {
                ...filter,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async delete(data) {
        return await this.prisma.stream_save.delete({
            where: {
                stream_id_user_id: data,
            },
        });
    }
};
StreamSaveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StreamSaveService);
exports.StreamSaveService = StreamSaveService;
//# sourceMappingURL=stream-save.service.js.map
//# debugId=9c1eb671-7421-5910-811b-cbd449aaa55d
