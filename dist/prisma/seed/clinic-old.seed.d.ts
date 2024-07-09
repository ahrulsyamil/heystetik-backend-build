export declare const clinicSeed: () => Promise<{
    treatments: {
        create: {
            media_treatments: {
                create: {
                    media_id: number;
                }[];
            };
            name: string;
            category: string;
            description: string;
            duration: string;
            downtime: string;
            treatment_type: string;
            treatment_step: string;
            price: number;
            is_active: boolean;
        }[];
    };
    media_clinics: {
        create: {
            media_id: number;
        }[];
    };
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
    company_postal_code: string;
    npwp: string;
    pic_name: string;
    pic_phone: string;
    contract_expired_date: Date;
    clinic_operation_hours: {
        create: {
            day: string;
            start_time: string;
            end_time: string;
            is_active: boolean;
        }[];
    };
}[]>;
