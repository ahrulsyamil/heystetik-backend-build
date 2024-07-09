/// <reference types="multer" />
import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { MediaService } from 'src/media/media.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { ChatQuickReplyService } from './chat-quick-reply.service';
import { CreateChatQuickReplyDto } from './dto/create-chat-quick-reply.dto';
import { UpdateChatQuickReplyDto } from './dto/update-chat-quick-reply.dto';
export declare class ChatQuickReplyController {
    private readonly chatQuickReplyService;
    private readonly mediaService;
    constructor(chatQuickReplyService: ChatQuickReplyService, mediaService: MediaService);
    findAll(user: UserEntity, pageOptionsDto: PageOptionsDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").chat_quick_reply & {
        media_chat_quick_replies: (import(".prisma/client").media_chat_quick_reply & {
            media: import(".prisma/client").media;
        })[];
    }>>;
    create(user: UserEntity, files: Express.Multer.File[], createChatQuickReplyDto: CreateChatQuickReplyDto): Promise<import(".prisma/client").chat_quick_reply & {
        media_chat_quick_replies: (import(".prisma/client").media_chat_quick_reply & {
            media: import(".prisma/client").media;
        })[];
    }>;
    findOne(user: UserEntity, id: number): Promise<import(".prisma/client").chat_quick_reply & {
        media_chat_quick_replies: (import(".prisma/client").media_chat_quick_reply & {
            media: import(".prisma/client").media;
        })[];
    }>;
    update(user: UserEntity, files: Express.Multer.File[], id: number, updateChatQuickReplyDto: UpdateChatQuickReplyDto): Promise<import(".prisma/client").chat_quick_reply & {
        media_chat_quick_replies: (import(".prisma/client").media_chat_quick_reply & {
            media: import(".prisma/client").media;
        })[];
    }>;
    remove(user: UserEntity, id: number): Promise<import(".prisma/client").chat_quick_reply>;
}
