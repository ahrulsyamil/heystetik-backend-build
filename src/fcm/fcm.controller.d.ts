import { FcmService } from './fcm.service';
import { SaveUserNotificationSettingDto } from './dto/save-user-notification-setting.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { SubscribeTopicDto } from './dto/subscribe-topic.dto';
import { PushToTokenDto } from './dto/push-to-token.dto';
import { PushToTopicDto } from './dto/push-to-topic.dto';
export declare class FcmController {
    private readonly fcmService;
    constructor(fcmService: FcmService);
    create(user: UserEntity, data: SaveUserNotificationSettingDto): Promise<import(".prisma/client").user_notification_setting>;
    find(user: UserEntity): Promise<import(".prisma/client").user_notification_setting>;
    subscribeToTopic(user: UserEntity, data: SubscribeTopicDto): Promise<void>;
    unsubscribeFromTopic(user: UserEntity, data: SubscribeTopicDto): Promise<void>;
    pushToToken(data: PushToTokenDto): Promise<void>;
    pushToTopic(data: PushToTopicDto): Promise<void>;
}
