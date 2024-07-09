import { NotificationUserActivityType } from 'src/globals/constant/enum';
export declare class NotificationUserActivityDto {
    user_id: number;
    follower_id: number;
    type: NotificationUserActivityType;
    is_enabled: boolean;
}
export declare class StoreNotificationUserActivityDto {
    data: NotificationUserActivityDto[];
}
