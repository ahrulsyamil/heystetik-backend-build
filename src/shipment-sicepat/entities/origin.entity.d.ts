import { SicepatEntity } from './sicepat.entity';
declare class Origin {
    constructor(partial: Partial<Origin>);
    origin_code: string;
    origin_name: string;
}
export declare class OriginEntity {
    constructor(partial: Partial<OriginEntity>);
    sicepat: SicepatEntity<Origin>;
}
export {};
