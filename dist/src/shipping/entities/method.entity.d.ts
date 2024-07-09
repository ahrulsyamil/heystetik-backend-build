import { shipping_method } from '@prisma/client';
export declare class ShippingMethodEntity implements shipping_method {
    constructor(partial: Partial<ShippingMethodEntity>);
    id: number;
    name: string;
    provider: string;
    description: string;
    type: 'Instant' | 'Same_Day' | 'Regular' | 'Next_Day' | 'Economy';
    provider_service_code: string;
    created_by: number;
    updated_by: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
