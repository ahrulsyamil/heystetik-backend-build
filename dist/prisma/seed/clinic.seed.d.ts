export declare const ClinicSeed: {
    name: string;
    address: string;
    pinpoint_latitude: number;
    pinpoint_longitude: number;
    pinpoint_address: string;
    province_id: number;
    city_id: number;
    postal_code: number;
    registration_number: number;
    phone: string;
    email: string;
    description: string;
    company_name: string;
    company_address: string;
    company_city_id: number;
    company_province_id: number;
    company_postal_code: number;
    npwp: string;
    pic_name: string;
    pic_phone: string;
    contract_expired_date: Date;
    clinic_operation_hours: {
        create: {
            day: string;
            day_number: number;
            start_time: Date;
            end_time: Date;
            is_active: boolean;
        }[];
    };
    treatments: {
        create: {
            name: string;
            category: string;
            description: string;
            duration: string;
            downtime: string;
            treatment_type: string;
            treatment_step: string;
            price: number;
            method: string;
        }[];
    };
}[];
