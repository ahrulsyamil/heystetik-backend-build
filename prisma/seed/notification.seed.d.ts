export declare const NotificationSeed: ({
    targetRole: number;
    type: string;
    title: string;
    body: string;
    data: string;
} | {
    targetRole: number;
    type: string;
    title: string;
    body: string;
    data: {
        consultation_doctor_schedule_id: number;
        schedule_date: string;
        customer_name: string;
        category: string;
        topic: string;
        consultation_review_id?: undefined;
        chat_room?: undefined;
        consultation_id?: undefined;
        transaction_id?: undefined;
    };
} | {
    targetRole: number;
    type: string;
    title: string;
    body: string;
    data: {
        consultation_review_id: number;
        consultation_doctor_schedule_id?: undefined;
        schedule_date?: undefined;
        customer_name?: undefined;
        category?: undefined;
        topic?: undefined;
        chat_room?: undefined;
        consultation_id?: undefined;
        transaction_id?: undefined;
    };
} | {
    targetRole: number;
    type: string;
    title: string;
    body: string;
    data: {
        chat_room: string;
        consultation_id: number;
        consultation_doctor_schedule_id?: undefined;
        schedule_date?: undefined;
        customer_name?: undefined;
        category?: undefined;
        topic?: undefined;
        consultation_review_id?: undefined;
        transaction_id?: undefined;
    };
} | {
    targetRole: number;
    type: string;
    title: string;
    body: string;
    data: {
        transaction_id: string;
        consultation_doctor_schedule_id?: undefined;
        schedule_date?: undefined;
        customer_name?: undefined;
        category?: undefined;
        topic?: undefined;
        consultation_review_id?: undefined;
        chat_room?: undefined;
        consultation_id?: undefined;
    };
})[];
