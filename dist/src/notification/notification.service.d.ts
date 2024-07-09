import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { PageOptionsNotificationDto } from './dto/page-options-notification.dto';
import { NotificationSettingDto } from './dto/store-notification-setting.dto';
import { NotificationUserActivityDto } from './dto/store-notification-user-activity.dto';
export declare class NotificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionsNotificationDto): Promise<PageDto<import(".prisma/client").notification & {
        sender: import(".prisma/client").users;
        media_notification: import(".prisma/client").media_notification & {
            media: import(".prisma/client").media;
        };
    }>>;
    create(data: CreateNotificationDto, media?: {
        media_id: number;
    }): Promise<import(".prisma/client").notification>;
    find(id: number): Promise<import(".prisma/client").notification>;
    update(id: number, data: Prisma.notificationUpdateInput): Promise<import(".prisma/client").notification>;
    updateMany(where: Prisma.notificationWhereInput, data: Prisma.notificationUpdateInput): Promise<Prisma.BatchPayload>;
    findAllNotificationSetting(user_id: number): Promise<import(".prisma/client").notification_setting[]>;
    findAllNotificationSettingBy(where: Prisma.notification_settingWhereInput): Promise<(import(".prisma/client").notification_setting & {
        user: import(".prisma/client").users;
    })[]>;
    storeNotificationSetting(data: NotificationSettingDto): Promise<import(".prisma/client").notification_setting>;
    findAllNotificationUserActivity(user_id: number, follower_id: number): Promise<import(".prisma/client").notification_user_activity[]>;
    findAllNotificationUserActivityBy(where: Prisma.notification_user_activityWhereInput): Promise<import(".prisma/client").notification_user_activity[]>;
    storeNotificationUserActivity(data: NotificationUserActivityDto): Promise<import(".prisma/client").notification_user_activity>;
    unreadCount(userId: number): Promise<number>;
}
