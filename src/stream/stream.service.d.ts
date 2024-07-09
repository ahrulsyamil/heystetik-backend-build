import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePollingDto } from './dto/create-polling.dto';
import { CreateStreamDto, StreamPoll } from './dto/create-stream.dto';
import { DeletePollingDto } from './dto/delete-polling.dto';
import { PageOptionsStreamFollowedDto } from './dto/page-options-stream-followed.dto';
import { PageOptionsStreamHomeDto } from './dto/page-options-stream-home.dto';
import { PageOptionsStreamMentionDto } from './dto/page-options-stream-mention.dto';
import { PageOptionsStreamTrendingDto } from './dto/page-options-stream-trending.dto';
import { PageOptionsStreamInterestDto } from './dto/page-options-stream-interest.dto';
import { PageOptionsStreamRecentDto } from './dto/page-options-stream-recent.dto';
import { PageOptionsStreamHashtagSuggestionDto } from './dto/page-options-stream-hashtag-suggestion.dto';
import { PageOptionsStreamHashtagDto } from './dto/page-options-stream-hashtag.dto';
import { CreateStreamReportDto } from './dto/create-stream-report.dto';
import { PageOptionsStreamReportReasonDto } from './dto/page-options-stream-report-reason.dto';
import { CreateStreamFollowUnfollowDto } from './dto/create-stream-follow-unfollow.dto';
export declare class StreamService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllHomeOld(pageOptionsDto: PageOptionsStreamHomeDto): Promise<PageDto<import(".prisma/client").stream & {
        media_streams: (import(".prisma/client").media_stream & {
            media: import(".prisma/client").media;
        })[];
        stream_poll: import(".prisma/client").stream_poll & {
            stream_pollings: import(".prisma/client").stream_polling[];
            stream_poll_options: import(".prisma/client").stream_poll_option[];
        };
        stream_mentions: import(".prisma/client").stream_mention[];
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        _count: {
            stream_likes: number;
            stream_comments: number;
            stream_saves: number;
            stream_comment_replies: number;
        };
        stream_hastags: (import(".prisma/client").stream_hashtag & {
            hashtag: import(".prisma/client").hashtag_stream;
        })[];
    }>>;
    findAllHome(pageOptionsDto: PageOptionsStreamHomeDto): Promise<PageDto<unknown>>;
    findAllTrending(pageOptionsDto: PageOptionsStreamTrendingDto): Promise<PageDto<unknown>>;
    findAllFollowedOld(pageOptionsDto: PageOptionsStreamFollowedDto): Promise<PageDto<import(".prisma/client").stream & {
        media_streams: (import(".prisma/client").media_stream & {
            media: import(".prisma/client").media;
        })[];
        stream_poll: import(".prisma/client").stream_poll & {
            stream_pollings: import(".prisma/client").stream_polling[];
            stream_poll_options: import(".prisma/client").stream_poll_option[];
        };
        stream_mentions: import(".prisma/client").stream_mention[];
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        _count: {
            stream_likes: number;
            stream_comments: number;
            stream_saves: number;
            stream_comment_replies: number;
        };
        stream_hastags: (import(".prisma/client").stream_hashtag & {
            hashtag: import(".prisma/client").hashtag_stream;
        })[];
    }>>;
    findAllFollowed(pageOptionsDto: PageOptionsStreamFollowedDto): Promise<PageDto<unknown>>;
    findAllInterest(pageOptionsDto: PageOptionsStreamInterestDto): Promise<PageDto<import(".prisma/client").stream & {
        media_streams: (import(".prisma/client").media_stream & {
            media: import(".prisma/client").media;
        })[];
        stream_poll: import(".prisma/client").stream_poll & {
            stream_pollings: import(".prisma/client").stream_polling[];
            stream_poll_options: import(".prisma/client").stream_poll_option[];
        };
        stream_mentions: import(".prisma/client").stream_mention[];
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        _count: {
            stream_likes: number;
            stream_comments: number;
            stream_saves: number;
            stream_comment_replies: number;
        };
        stream_hastags: (import(".prisma/client").stream_hashtag & {
            hashtag: import(".prisma/client").hashtag_stream;
        })[];
    }>>;
    create(data: CreateStreamDto, media?: {
        media_id: number;
    }[]): Promise<import(".prisma/client").stream>;
    find(stream_id: number): Promise<import(".prisma/client").stream & {
        media_streams: (import(".prisma/client").media_stream & {
            media: import(".prisma/client").media;
        })[];
        stream_poll: import(".prisma/client").stream_poll & {
            stream_pollings: import(".prisma/client").stream_polling[];
            stream_poll_options: import(".prisma/client").stream_poll_option[];
        };
        stream_mentions: import(".prisma/client").stream_mention[];
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        _count: {
            stream_likes: number;
            stream_comments: number;
            stream_saves: number;
            stream_comment_replies: number;
        };
        stream_hastags: (import(".prisma/client").stream_hashtag & {
            hashtag: import(".prisma/client").hashtag_stream;
        })[];
    }>;
    findBy(where: Prisma.streamWhereInput): Promise<import(".prisma/client").stream>;
    createStreamPoll(stream_id: number, data: StreamPoll): Promise<import(".prisma/client").stream_poll>;
    streamPolling(data: CreatePollingDto): Promise<import(".prisma/client").stream_polling>;
    findStreamPoll(id: number): Promise<import(".prisma/client").stream_poll>;
    findStreamPollBy(where: Prisma.stream_pollWhereInput): Promise<import(".prisma/client").stream_poll>;
    findUserInCircle(streamer_id: number, user_id: number): Promise<import(".prisma/client").user_follower[]>;
    deletePolling(data: DeletePollingDto): Promise<import(".prisma/client").stream_polling>;
    findStreamPollingBy(where: Prisma.stream_pollingWhereInput): Promise<import(".prisma/client").stream_polling>;
    findStreamPolling(data: DeletePollingDto): Promise<import(".prisma/client").stream_polling>;
    findAllMention(pageOptionsDto: PageOptionsStreamMentionDto): Promise<PageDto<unknown>>;
    delete(id: number): Promise<import(".prisma/client").stream>;
    findAllRecentFile(pageOptionsDto: PageOptionsStreamRecentDto): Promise<PageDto<import(".prisma/client").media_stream & {
        media: import(".prisma/client").media;
    }>>;
    findAllSuggestionHashtag(pageOptionsDto: PageOptionsStreamHashtagSuggestionDto): Promise<PageDto<unknown>>;
    findAllStreamHashtagByTag(hashtag: string, pageOptionsDto: PageOptionsStreamHashtagDto): Promise<PageDto<unknown>>;
    findAllReportStream(pageOptionsDto: PageOptionsStreamReportReasonDto): Promise<PageDto<import(".prisma/client").report_reason & {
        parent: import(".prisma/client").report_reason;
        sub_reports: {
            id: number;
            name: string;
            description: string;
        }[];
        _count: {
            sub_reports: number;
        };
    }>>;
    createReportStream(data: CreateStreamReportDto): Promise<import(".prisma/client").stream_report>;
    createStreamFollower(data: CreateStreamFollowUnfollowDto): Promise<import(".prisma/client").stream_follower>;
    findAllStreamFollower(stream_id: number): Promise<(import(".prisma/client").stream_follower & {
        user: import(".prisma/client").users & {
            notification_settings: import(".prisma/client").notification_setting[];
        };
    })[]>;
    findStreamFollower(id: number): Promise<import(".prisma/client").stream_follower & {
        stream: import(".prisma/client").stream;
        user: import(".prisma/client").users;
    }>;
    findStreamFollowerBy(where: Prisma.stream_followerWhereInput): Promise<import(".prisma/client").stream_follower>;
    deleteStreamFollower(id: number): Promise<import(".prisma/client").stream_follower>;
}
