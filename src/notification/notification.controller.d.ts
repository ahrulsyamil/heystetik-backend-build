import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsNotificationDto } from './dto/page-options-notification.dto';
import { StoreNotificationSettingDto } from './dto/store-notification-setting.dto';
import { NotificationService } from './notification.service';
import { UserService } from 'src/auth/user/user.service';
import { UserProfileService } from 'src/user-profile/user-profile.service';
import { StoreNotificationUserActivityDto } from './dto/store-notification-user-activity.dto';
export declare class NotificationController {
    private readonly notificationService;
    private readonly userService;
    private readonly userProfileService;
    constructor(notificationService: NotificationService, userService: UserService, userProfileService: UserProfileService);
    findAll(user: UserEntity, pageOptions: PageOptionsNotificationDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").notification & {
        sender: import(".prisma/client").users;
        media_notification: import(".prisma/client").media_notification & {
            media: import(".prisma/client").media;
        };
    }>>;
    getSetting(user: UserEntity): Promise<{
        is_enabled: boolean;
        name: string;
        type: string;
        group: string;
    }[]>;
    markAsRead(user: UserEntity, id: string): Promise<import(".prisma/client").notification>;
    markAllAsRead(user: UserEntity): Promise<import(".prisma/client").Prisma.BatchPayload>;
    storeSetting(user: UserEntity, body: StoreNotificationSettingDto): Promise<void>;
    getNotificationUserActifity(user: UserEntity, user_id: number): Promise<{
        is_enabled: boolean;
        name: string;
        type: string;
    }[]>;
    storeNotificationUserActivity(user: UserEntity, user_id: number, body: StoreNotificationUserActivityDto): Promise<void>;
    unreadCount(user: UserEntity): Promise<number>;
}
