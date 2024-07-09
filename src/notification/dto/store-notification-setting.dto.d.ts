import { NotificationSettingType } from 'src/globals/constant/enum';
export declare class NotificationSettingDto {
    user_id: number;
    type: NotificationSettingType;
    is_enabled: boolean;
}
export declare class StoreNotificationSettingDto {
    data: NotificationSettingDto[];
}
