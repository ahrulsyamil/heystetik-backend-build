import { BaseEntity } from 'src/globals/entities/base.entity';
import { MediaEntity } from './media.entity';
export declare class MediaChatMessageEntity extends BaseEntity {
    media_id: number;
    chat_message_id: number;
    media: MediaEntity;
}
