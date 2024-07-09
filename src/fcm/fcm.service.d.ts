import { PrismaService } from 'src/prisma/prisma.service';
import { SaveUserNotificationSettingDto } from './dto/save-user-notification-setting.dto';
import { PushToTopicDto } from './dto/push-to-topic.dto';
import { PushToTokenDto } from './dto/push-to-token.dto';
export declare class FcmService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    save(data: SaveUserNotificationSettingDto): Promise<import(".prisma/client").user_notification_setting>;
    find(user_id: number): Promise<import(".prisma/client").user_notification_setting>;
    verifyToken(token: string): Promise<boolean>;
    sendNotificationToUser(data: PushToTokenDto): Promise<void>;
    sendNotificationToTopic(data: PushToTopicDto): Promise<void>;
    subscribeToTopic(token: string[], topic: string): Promise<void>;
    unsubscribeFromTopic(token: string[], topic: string): Promise<void>;
    cleanupInvalidTokens(): Promise<void>;
}
