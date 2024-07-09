import { StreamMentionDto } from './stream-mention.dto';
export declare class CreateStreamCommentDto {
    stream_id: number;
    user_id: number;
    content: string;
    mentions: StreamMentionDto[];
}
