/// <reference types="multer" />
import { ConfigService } from '@nestjs/config';
import { Queue } from 'bull';
import { InterestAugmentationSkinGoalsService } from 'src/interest-augmentation-skin-goals/interest-augmentation-skin-goals.service';
import { InterestBodyCorrectiveSkinGoalsService } from 'src/interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service';
import { InterestFaceCorrectiveSkinGoalsService } from 'src/interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service';
import { InterestSexuallyAndSkinDiseasesSkinGoalsService } from 'src/interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service';
import { LookupService } from 'src/lookup/lookup.service';
import { MediaService } from 'src/media/media.service';
import { NotificationService } from 'src/notification/notification.service';
import { StreamLikeService } from 'src/stream-like/stream-like.service';
import { StreamSaveService } from 'src/stream-save/stream-save.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreatePollingDto } from './dto/create-polling.dto';
import { CreateStreamReportDto } from './dto/create-stream-report.dto';
import { CreateStreamDto } from './dto/create-stream.dto';
import { DeletePollingDto } from './dto/delete-polling.dto';
import { PageOptionsStreamFollowedDto } from './dto/page-options-stream-followed.dto';
import { PageOptionsStreamHashtagSuggestionDto } from './dto/page-options-stream-hashtag-suggestion.dto';
import { PageOptionsStreamHashtagDto } from './dto/page-options-stream-hashtag.dto';
import { PageOptionsStreamHomeDto } from './dto/page-options-stream-home.dto';
import { PageOptionsStreamInterestDto } from './dto/page-options-stream-interest.dto';
import { PageOptionsStreamMentionDto } from './dto/page-options-stream-mention.dto';
import { PageOptionsStreamRecentDto } from './dto/page-options-stream-recent.dto';
import { PageOptionsStreamReportReasonDto } from './dto/page-options-stream-report-reason.dto';
import { PageOptionsStreamTrendingDto } from './dto/page-options-stream-trending.dto';
import { StreamService } from './stream.service';
import { UserService } from 'src/auth/user/user.service';
export declare class StreamController {
    private readonly streamService;
    private readonly streamSaveService;
    private readonly streamLikeService;
    private readonly mediaService;
    private readonly interestFaceCorrectiveSkinGoalService;
    private readonly interestBodyCorrectiveSkinGoalService;
    private readonly interestAugmentationSkinGoalService;
    private readonly interestSexuallyAndSkinDiseasesSkinGoalService;
    private readonly notificationService;
    private readonly configService;
    private readonly lookupService;
    private readonly userService;
    private queueFcm;
    private queueEmail;
    constructor(streamService: StreamService, streamSaveService: StreamSaveService, streamLikeService: StreamLikeService, mediaService: MediaService, interestFaceCorrectiveSkinGoalService: InterestFaceCorrectiveSkinGoalsService, interestBodyCorrectiveSkinGoalService: InterestBodyCorrectiveSkinGoalsService, interestAugmentationSkinGoalService: InterestAugmentationSkinGoalsService, interestSexuallyAndSkinDiseasesSkinGoalService: InterestSexuallyAndSkinDiseasesSkinGoalsService, notificationService: NotificationService, configService: ConfigService, lookupService: LookupService, userService: UserService, queueFcm: Queue, queueEmail: Queue);
    isInCircle(streamer_id: number, user_id: number): Promise<boolean>;
    findAllHome(user: UserEntity, pageOptionsDto: PageOptionsStreamHomeDto): Promise<any>;
    findAllInterest(user: UserEntity, pageOptionsDto: PageOptionsStreamInterestDto): Promise<any>;
    findAllTrending(user: UserEntity, pageOptionsDto: PageOptionsStreamTrendingDto): Promise<any>;
    findAllFollowed(user: UserEntity, pageOptionsDto: PageOptionsStreamFollowedDto): Promise<any>;
    create(user: UserEntity, files: Express.Multer.File[], data: CreateStreamDto): Promise<import(".prisma/client").stream>;
    createPolling(user: UserEntity, data: CreatePollingDto): Promise<import(".prisma/client").stream_polling>;
    deletePolling(user: UserEntity, data: DeletePollingDto): Promise<import(".prisma/client").stream_polling>;
    findAllMention(user: UserEntity, pageOptionsDto: PageOptionsStreamMentionDto): Promise<import("../decorators/page.dto").PageDto<unknown>>;
    delete(user: UserEntity, id: number): Promise<import(".prisma/client").stream>;
    streamRecent(user: UserEntity, pageOptionsDto: PageOptionsStreamRecentDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").media_stream & {
        media: import(".prisma/client").media;
    }>>;
    streamTag(pageOptionsDto: PageOptionsStreamHashtagSuggestionDto): Promise<import("../decorators/page.dto").PageDto<unknown>>;
    streamHashtag(user: UserEntity, hashtag: string, pageOptionsDto: PageOptionsStreamHashtagDto): Promise<any>;
    findAllReportReason(pageOptionsDto: PageOptionsStreamReportReasonDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").report_reason & {
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
    streamReportOld(user: UserEntity, data: CreateStreamReportDto): Promise<import(".prisma/client").stream_report>;
    followThisPost(user: UserEntity, id: number): Promise<import(".prisma/client").stream_follower>;
    unfollowThisPost(user: UserEntity, id: number): Promise<import(".prisma/client").stream_follower>;
    find(user: UserEntity, id: number): Promise<{
        saved: boolean;
        like: boolean;
        follow: boolean;
        id: number;
        user_id: number;
        content: string;
        visibility: import(".prisma/client").visibility_stream;
        created_by: number;
        updated_by: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
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
}
