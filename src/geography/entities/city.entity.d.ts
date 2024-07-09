import { sicepat_destination } from '@prisma/client';
export declare class CityEntity implements sicepat_destination {
    constructor(partial: Partial<CityEntity>);
    id: number;
    province: string;
    city: string;
    subdistrict: string;
    zip_code: string;
    village: string;
    destination_code: string;
    created_by: number;
    updated_by: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
