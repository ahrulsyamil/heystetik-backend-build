/// <reference types="multer" />
declare class OperationHourDto {
    day_number: number;
    is_active: true;
    start_time: string;
    end_time: string;
}
export declare class CreateClinicDto {
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
    company_province_id: number;
    company_city_id: number;
    company_postal_code: number;
    npwp: string;
    pic_name: string;
    pic_phone: string;
    contract_expired_date: Date;
    operation_hours: OperationHourDto[];
    image_photos: Express.Multer.File[];
    image_logo: Express.Multer.File;
}
export {};
