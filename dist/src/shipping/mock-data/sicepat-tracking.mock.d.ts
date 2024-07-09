export declare const SicepatTrackingMockData: {
    sicepat: {
        status: {
            code: number;
            description: string;
        };
        result: {
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
            totalprice: number;
            POD_receiver: string;
            POD_receiver_time: string;
            send_date: string;
            track_history: ({
                date_time: string;
                status: string;
                city: string;
                receiver_name?: undefined;
            } | {
                date_time: string;
                status: string;
                receiver_name: string;
                city?: undefined;
            })[];
            last_status: {
                date_time: string;
                status: string;
                receiver_name: string;
            };
            perwakilan: string;
            pop_sigesit_img_path: any;
            pod_sigesit_img_path: string;
            pod_sign_img_path: string;
            pod_img_path: string;
            pop_img_path: string;
            por_img_path: any;
            por_sign_img_path: any;
            manifested_img_path: string;
        };
    };
};
