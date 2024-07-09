import { Prisma } from '@prisma/client';
import { Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/auth/user/user.service';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetMessageRoomDto } from './dto/get-message-room.dto';
import { PageOptionsSearchRecentChatDto } from './dto/page-options-search-recent-chat.dto';
import { ERole, TClient } from './types/client.type';
export declare class ChatService {
    private readonly prisma;
    private readonly authService;
    private readonly userService;
    private connectedClients;
    constructor(prisma: PrismaService, authService: AuthService, userService: UserService);
    getUserFromSocket(socket: Socket): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: import("../users/entities/user.entity").UserEntity;
        message?: undefined;
    }>;
    addClient(client: TClient): void;
    removeClient(id: string): void;
    getClient(id: string): TClient;
    getClientByUserId(user_id: number): TClient;
    replaceClientByUserId(user_id: number, client: TClient): void;
    getOnlineClients(): TClient[];
    defineUserRole(roleId: number): ERole;
    findRoom(code: string): Promise<import(".prisma/client").chat_room & {
        customer: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        consultation: import(".prisma/client").consultation & {
            transaction_consultation: import(".prisma/client").transaction_consultation;
        };
        doctor: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        chat: (import(".prisma/client").chat_message & {
            media_chat_messages: (import(".prisma/client").media_chat_message & {
                media: import(".prisma/client").media;
            })[];
        })[];
    }>;
    createRoom(payload: {
        doctor_id: number;
        customer_id: number;
        code?: string;
        ended?: boolean;
    }): Promise<import(".prisma/client").chat_room>;
    createMessage(payload: CreateMessageDto, mediaChatMessage?: {
        media_id: number;
    }[]): Promise<import(".prisma/client").chat_message & {
        media_chat_messages: (import(".prisma/client").media_chat_message & {
            media: import(".prisma/client").media;
        })[];
        sender: {
            fullname: string;
        };
        receiver: {
            fullname: string;
        };
    }>;
    fetchChatMessageByRoom(pageOptionsDto: GetMessageRoomDto, code: string): Promise<PageDto<import(".prisma/client").chat_message & {
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
    fetchRecentChat(user_id: number): Promise<{
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
        customer: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        consultation: import(".prisma/client").consultation & {
            transaction_consultation: import(".prisma/client").transaction_consultation;
        };
        doctor: import(".prisma/client").users & {
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
    fetchRecentChatOld(user_id: number): Promise<{
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
        customer: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        consultation: {
            id: number;
        };
        doctor: import(".prisma/client").users & {
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
    searchRecentChat(pageOptionsDto: PageOptionsSearchRecentChatDto): Promise<PageDto<{
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
        customer: import(".prisma/client").users;
        consultation: {
            id: number;
        };
        doctor: import(".prisma/client").users;
    }>>;
    getActiveRoomByUser(user_id: number): Promise<import(".prisma/client").chat_room[]>;
    findRecentChatByRoom(user_id: number, code: string): Promise<{
        last_chat: import(".prisma/client").chat_message;
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
        customer: import(".prisma/client").users;
        doctor: import(".prisma/client").users;
        chat: import(".prisma/client").chat_message[];
    }>;
    readChatMessageRoom(user_id: number, code: string): Promise<Prisma.BatchPayload>;
    createChatRoom(data: CreateChatRoomDto): Promise<import(".prisma/client").chat_room>;
}
