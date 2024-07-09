import { sicepat_destination } from '@prisma/client';
export declare class ProvinceEntity implements sicepat_destination {
    constructor(partial: Partial<ProvinceEntity>);
    id: number;
    province: string;
    city: string;
    subdistrict: string;
    village: string;
    zip_code: string;
    destination_code: string;
    created_by: number;
    updated_by: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
