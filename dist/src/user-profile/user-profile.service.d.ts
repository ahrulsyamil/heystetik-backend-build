import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FollowUnfollowUserProfileDto } from './dto/follow-unfollow-user-profile.dto';
import { PageOptionsLPostsUserProfileDto } from './dto/page-options-posts-user-profile.dto';
import { PageOptionsReviewsUserProfileDto } from './dto/page-options-reviews-user-profile.dto';
import { PageOptionsUserProfileSearchDto } from './dto/page-options-user-profile-search.dto';
export declare class UserProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    overview(username: string): Promise<unknown>;
    search(pageOptionsDto: PageOptionsUserProfileSearchDto): Promise<PageDto<unknown>>;
    follow(data: FollowUnfollowUserProfileDto): Promise<import(".prisma/client").user_follower>;
    unfollow(data: FollowUnfollowUserProfileDto): Promise<import(".prisma/client").user_follower>;
    posts(pageOptionsDto: PageOptionsLPostsUserProfileDto): Promise<PageDto<import(".prisma/client").stream & {
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
    reviews(pageOptionsDto: PageOptionsReviewsUserProfileDto): Promise<PageDto<unknown>>;
    findUserFollow(user_id: number, follower_id: number): Promise<import(".prisma/client").user_follower>;
}
