"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="44004074-197e-5c7d-8725-2094ecd769cb")}catch(e){}}();

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
exports.StreamCommentService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let StreamCommentService = class StreamCommentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllByStream(stream_id, pageOptionsDto) {
        const filter = {
            stream_id,
        };
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    user: {
                        fullname: { contains: pageOptionsDto.search },
                    },
                },
                {
                    content: { contains: pageOptionsDto.search },
                },
            ];
        }
        const data = await this.prisma.stream_comment.findMany({
            where: {
                ...filter,
            },
            include: {
                user: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                stream_comment_mentions: true,
                _count: {
                    select: {
                        stream_comment_likes: true,
                        stream_comment_replies: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.stream_comment.count({
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
    async findAllByStreamComment(stream_id, stream_comment_id, pageOptionsDto) {
        const filter = {
            stream_id,
            stream_comment_id,
        };
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    user: {
                        fullname: { contains: pageOptionsDto.search },
                    },
                },
                {
                    content: { contains: pageOptionsDto.search },
                },
            ];
        }
        const data = await this.prisma.stream_comment_reply.findMany({
            where: {
                ...filter,
            },
            include: {
                user: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                stream_comment_reply_mentions: true,
                _count: {
                    select: {
                        stream_comment_reply_likes: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.stream_comment_reply.count({
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
    async create(data) {
        return this.prisma.stream_comment.create({
            data: {
                stream_id: data.stream_id,
                user_id: data.user_id,
                content: data.content,
                stream_comment_mentions: {
                    create: data.mentions,
                },
            },
        });
    }
    async createReply(data) {
        return this.prisma.stream_comment_reply.create({
            data: {
                stream_id: data.stream_id,
                stream_comment_id: data.stream_comment_id,
                user_id: data.user_id,
                content: data.content,
                stream_comment_reply_mentions: {
                    create: data.mentions,
                },
            },
        });
    }
    async find(id) {
        return this.prisma.stream_comment.findUnique({
            where: {
                id,
            },
        });
    }
    async findBy(where) {
        return this.prisma.stream_comment.findFirst({
            where,
        });
    }
    async findLikeBy(where) {
        return this.prisma.stream_comment_like.findFirst({
            where,
        });
    }
    async findReply(id) {
        return this.prisma.stream_comment_reply.findUnique({
            where: {
                id,
            },
        });
    }
    async findReplyBy(where) {
        return this.prisma.stream_comment_reply.findFirst({
            where,
        });
    }
    async findReplyLikeBy(where) {
        return this.prisma.stream_comment_reply_like.findFirst({
            where,
        });
    }
    async deleteComment(id) {
        return await this.prisma.stream_comment.delete({
            where: {
                id,
            },
        });
    }
    async deleteReplyComment(id) {
        return await this.prisma.stream_comment_reply.delete({
            where: {
                id,
            },
        });
    }
    async likeComment(data) {
        return await this.prisma.stream_comment_like.upsert({
            where: {
                stream_comment_id_user_id: data,
            },
            create: data,
            update: {
                ...data,
                deleted_at: null,
            },
        });
    }
    async unlikeComment(data) {
        return await this.prisma.stream_comment_like.delete({
            where: {
                stream_comment_id_user_id: data,
            },
        });
    }
    async likeCommentReply(data) {
        return await this.prisma.stream_comment_reply_like.upsert({
            where: {
                stream_comment_id_stream_comment_reply_id_user_id: data,
            },
            create: data,
            update: {
                ...data,
                deleted_at: null,
            },
        });
    }
    async unlikeCommentReply(data) {
        return await this.prisma.stream_comment_reply_like.delete({
            where: {
                stream_comment_id_stream_comment_reply_id_user_id: data,
            },
        });
    }
};
StreamCommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StreamCommentService);
exports.StreamCommentService = StreamCommentService;
//# sourceMappingURL=stream-comment.service.js.map
//# debugId=44004074-197e-5c7d-8725-2094ecd769cb
