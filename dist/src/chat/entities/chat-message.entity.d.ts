import { BaseEntity } from 'src/globals/entities/base.entity';
import { MediaChatMessageEntity } from 'src/media/entity/media-chat-message.entity';
export declare class ChatMessageEntity extends BaseEntity {
    chat_room_id: number;
    sender_id: number;
    receiver_id: number;
    message: string;
    seen: boolean;
    sender: {
        fullname: string;
    };
    receiver: {
        fullname: string;
    };
    media_chat_messages: MediaChatMessageEntity[];
}
