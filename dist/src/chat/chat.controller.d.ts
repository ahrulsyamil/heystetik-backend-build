import { users } from '@prisma/client';
import { ConsultationService } from 'src/consultation/consultation.service';
import { TransactionConsultationService } from 'src/transaction-consultation/transaction-consultation.service';
import { ChatService } from './chat.service';
import { GetMessageRoomDto } from './dto/get-message-room.dto';
import { PageOptionsSearchRecentChatDto } from './dto/page-options-search-recent-chat.dto';
export declare class ChatController {
    private readonly chatService;
    private readonly transactionConsultationService;
    private readonly consultationService;
    constructor(chatService: ChatService, transactionConsultationService: TransactionConsultationService, consultationService: ConsultationService);
    fetchMessageRoom(pageOptionsDto: GetMessageRoomDto, code: string): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").chat_message & {
        media_chat_messages: (import(".prisma/client").media_chat_message & {
            media: import(".prisma/client").media;
        })[];
        sender: {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
            fullname: string;
        };
        receiver: {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
            fullname: string;
        };
    }>>;
    fetchRecentChat(user: users): Promise<{
        last_chat: import(".prisma/client").chat_message & {
            media_chat_messages: (import(".prisma/client").media_chat_message & {
                media: import(".prisma/client").media;
            })[];
        };
        unseen_count: number;
        id: number;
        doctor_id: number;
        customer_id: number;
        code: string;
        ended: boolean;
        created_by: number;
        updated_by: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        customer: users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        consultation: import(".prisma/client").consultation & {
            transaction_consultation: import(".prisma/client").transaction_consultation;
        };
        doctor: users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        chat: (import(".prisma/client").chat_message & {
            media_chat_messages: (import(".prisma/client").media_chat_message & {
                media: import(".prisma/client").media;
            })[];
        })[];
    }[]>;
    searchRecentChat(user: users, pageOptionsDto: PageOptionsSearchRecentChatDto): Promise<import("../decorators/page.dto").PageDto<{
        chat: import(".prisma/client").chat_message & {
            media_chat_messages: (import(".prisma/client").media_chat_message & {
                media: import(".prisma/client").media;
            })[];
        };
        id: number;
        doctor_id: number;
        customer_id: number;
        code: string;
        ended: boolean;
        created_by: number;
        updated_by: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        customer: users;
        consultation: {
            id: number;
        };
        doctor: users;
    }>>;
}
