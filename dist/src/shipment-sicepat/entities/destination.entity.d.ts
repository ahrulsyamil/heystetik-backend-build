import { SicepatEntity } from './sicepat.entity';
declare class Origin {
    constructor(partial: Partial<Origin>);
    destination_code: string;
    subdistrict: string;
    city: string;
    province: string;
}
export declare class DestinationEntity {
    constructor(partial: Partial<DestinationEntity>);
    sicepat: SicepatEntity<Origin>;
}
export {};
