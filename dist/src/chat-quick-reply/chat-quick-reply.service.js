"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="74382f18-eff7-5d23-b509-befa27de56b2")}catch(e){}}();

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
exports.ChatQuickReplyService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let ChatQuickReplyService = class ChatQuickReplyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createChatQuickReplyDto, media) {
        return this.prisma.chat_quick_reply.upsert({
            where: {
                shortcut: createChatQuickReplyDto.shortcut,
            },
            create: {
                ...createChatQuickReplyDto,
                media_chat_quick_replies: {
                    create: media,
                },
            },
            update: {
                ...createChatQuickReplyDto,
                media_chat_quick_replies: {
                    deleteMany: {},
                    create: media,
                },
            },
            include: {
                media_chat_quick_replies: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async findAll(doctor_id, pageOptionsDto) {
        const filter = {
            doctor_id,
        };
        if (pageOptionsDto.search) {
            filter.OR = [
                { shortcut: { contains: pageOptionsDto.search } },
                { message: { contains: pageOptionsDto.search } },
            ];
        }
        const data = await this.prisma.chat_quick_reply.findMany({
            where: filter,
            include: {
                media_chat_quick_replies: {
                    include: {
                        media: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.chat_quick_reply.count({
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
    findOne(id) {
        return this.prisma.chat_quick_reply.findUnique({
            where: { id },
            include: {
                media_chat_quick_replies: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async update(id, updateChatQuickReplyDto, media) {
        return await this.prisma.chat_quick_reply.update({
            where: { id },
            data: {
                ...updateChatQuickReplyDto,
                media_chat_quick_replies: {
                    deleteMany: {},
                    create: media,
                },
            },
            include: {
                media_chat_quick_replies: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async remove(id) {
        return this.prisma.chat_quick_reply.delete({ where: { id } });
    }
};
ChatQuickReplyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatQuickReplyService);
exports.ChatQuickReplyService = ChatQuickReplyService;
//# sourceMappingURL=chat-quick-reply.service.js.map
//# debugId=74382f18-eff7-5d23-b509-befa27de56b2
