import { ChatRoomEntity } from './chat-room';
import { ChatMessageEntity } from './chat-message.entity';
export declare class ChatRecentEntity extends ChatRoomEntity {
    last_chat: ChatMessageEntity;
    unseen_count: number;
}
