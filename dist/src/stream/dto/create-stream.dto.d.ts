import { visibility_stream } from '@prisma/client';
import { StreamMentionDto } from './stream-mention.dto';
export declare class StreamPoll {
    end_time: Date;
    options: string[];
}
export declare class CreateStreamDto {
    user_id: number;
    content: string;
    visibility: visibility_stream;
    hashtags: string[];
    stream_poll: StreamPoll;
    mentions: StreamMentionDto[];
}
