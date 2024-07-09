/// <reference types="multer" />
export declare class CreatePharmacyDto {
    name: string;
    permit_no: string;
    telp: string;
    province: string;
    city: string;
    subdistrict: string;
    village: string;
    address: string;
    address_gmap_url: string;
    email: string;
    npwp_no: string;
    npwp_name: string;
    npwp_picture: Express.Multer.File[];
    is_active: boolean;
    operating_hours: OperatingHourDto[];
}
declare class OperatingHourDto {
    day_number: number;
    is_active: true;
    start_time: string;
    end_time: string;
}
export {};
