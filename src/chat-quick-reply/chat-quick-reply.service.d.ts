import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChatQuickReplyDto } from './dto/create-chat-quick-reply.dto';
import { UpdateChatQuickReplyDto } from './dto/update-chat-quick-reply.dto';
import { Prisma } from '@prisma/client';
export declare class ChatQuickReplyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createChatQuickReplyDto: CreateChatQuickReplyDto, media?: {
        media_id: number;
    }[]): Prisma.Prisma__chat_quick_replyClient<import(".prisma/client").chat_quick_reply & {
        media_chat_quick_replies: (import(".prisma/client").media_chat_quick_reply & {
            media: import(".prisma/client").media;
        })[];
    }>;
    findAll(doctor_id: number, pageOptionsDto: PageOptionsDto): Promise<PageDto<import(".prisma/client").chat_quick_reply & {
        media_chat_quick_replies: (import(".prisma/client").media_chat_quick_reply & {
            media: import(".prisma/client").media;
        })[];
    }>>;
    findOne(id: number): Prisma.Prisma__chat_quick_replyClient<import(".prisma/client").chat_quick_reply & {
        media_chat_quick_replies: (import(".prisma/client").media_chat_quick_reply & {
            media: import(".prisma/client").media;
        })[];
    }>;
    update(id: number, updateChatQuickReplyDto: UpdateChatQuickReplyDto, media?: {
        media_id: number;
    }[]): Promise<import(".prisma/client").chat_quick_reply & {
        media_chat_quick_replies: (import(".prisma/client").media_chat_quick_reply & {
            media: import(".prisma/client").media;
        })[];
    }>;
    remove(id: number): Promise<import(".prisma/client").chat_quick_reply>;
}
