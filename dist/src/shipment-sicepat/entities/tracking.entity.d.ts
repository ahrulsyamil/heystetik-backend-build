import { SicepatEntity } from './sicepat.entity';
declare class LastStatus {
    constructor(partial: Partial<LastStatus>);
    date_time: string;
    status: string;
    receiver_name: string;
}
declare class TrackHistory {
    constructor(partial: Partial<TrackHistory>);
    date_time: string;
    status: string;
    city?: string;
    receiver_name?: string;
}
declare class Track {
    constructor(partial: Partial<Track>);
    waybill_number: string;
    kodeasal: string;
    kodetujuan: string;
    service: string;
    weight: number;
    partner: string;
    sender: string;
    sender_address: string;
    receiver_address: string;
    receiver_name: string;
    realprice: number;
    POD_receiver: string;
    POD_receiver_time: string;
    send_date: string;
    track_history: TrackHistory[];
    last_status: LastStatus;
    perwakilan: string;
    pop_sigesit_img_path: string;
    pod_sigesit_img_path: string;
    pod_sign_img_path: string;
    pod_img_path: string;
}
export declare class TrackingEntity {
    constructor(partial: Partial<TrackingEntity>);
    sicepat: SicepatEntity<Track>;
}
export {};
