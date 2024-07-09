export declare class ShipmentGosendWebhookDto {
    entity_id: string;
    type: string;
    event_date: string;
    event_id: string;
    partner_id: string;
    booking_id: string;
    status: string;
    cancelled_by: string;
    booking_type: string;
    driver_name: string;
    driver_phone: string;
    driver_phone2: string;
    driver_phone3: string;
    driver_photo_url: string;
    receiver_name: string;
    total_distance_in_kms: number;
    total_driver_distance_in_kms: number;
    pickup_eta: string;
    delivery_eta: string;
    price: number;
    cancellation_reason: string;
    attributes: Attributes;
    live_tracking_url: string;
    pop_document_ids: string;
    pod_document_ids: string;
    pop_url: string;
    pod_url: string;
    booking_status: string;
    store_order_id: string;
}
declare class Attributes {
    [key: string]: string;
}
export {};
