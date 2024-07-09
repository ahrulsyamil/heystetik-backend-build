export declare class CreateNotificationDto {
    recipient_id: number;
    sender_id: number;
    type: string;
    title: string;
    body?: string;
    data?: object;
}
