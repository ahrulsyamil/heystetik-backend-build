import { SicepatEntity } from './sicepat.entity';
declare class Tariff {
    constructor(partial: Partial<Tariff>);
    service: string;
    description: string;
    tariff: number;
    minPrice: number;
    unitPrice: number;
    etd: string;
}
export declare class TariffEntity {
    constructor(partial: Partial<TariffEntity>);
    sicepat: SicepatEntity<Tariff[]>;
}
export {};
