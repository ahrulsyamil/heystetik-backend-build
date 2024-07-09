import { Queue } from 'bull';
import { NotificationService } from 'src/notification/notification.service';
import { StreamService } from 'src/stream/stream.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsLikeStreamDto } from './dto/page-options-stream.dto';
import { StreamLikeService } from './stream-like.service';
export declare class StreamLikeController {
    private readonly streamLikeService;
    private readonly streamService;
    private readonly notificationService;
    private queueFcm;
    constructor(streamLikeService: StreamLikeService, streamService: StreamService, notificationService: NotificationService, queueFcm: Queue);
    isInCircle(streamer_id: number, user_id: number): Promise<boolean>;
    likes(user: UserEntity, id: number, pageOptions: PageOptionsLikeStreamDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").stream_like & {
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
    }>>;
    like(user: UserEntity, id: number): Promise<import(".prisma/client").stream_like>;
    unlike(user: UserEntity, id: number): Promise<import(".prisma/client").stream_like>;
}
