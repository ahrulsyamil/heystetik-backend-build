import { StreamMentionDto } from './stream-mention.dto';
export declare class CreateStreamCommentReplyDto {
    stream_id: number;
    stream_comment_id: number;
    user_id: number;
    content: string;
    mentions: StreamMentionDto[];
}
