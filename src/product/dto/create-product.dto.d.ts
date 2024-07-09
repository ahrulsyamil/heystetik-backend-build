/// <reference types="multer" />
import { product_shipping_weight_type } from '@prisma/client';
import { ProductType } from 'src/globals/constant/enum';
export declare class SkincareDetail {
    brand?: string;
    description?: string;
    specification_texture: string;
    specification_bpom: string;
    specification_netto: number;
    specification_netto_type: string;
    specification_expired: Date;
    specification_packaging_type: string;
    specification_ingredients: string;
    specification_how_to_use: string;
    specification_storage_advice: string;
}
export declare class DrugDetail {
    manufacture?: string;
    indication: string;
    contradiction: string;
    description: string;
    specification_form: string;
    specification_classification: string;
    specification_type: string;
    specification_packaging: string;
    specification_category: string;
    specification_bpom: string;
    specification_ingredients: string;
    specification_dose: string;
    specification_special_attention: string;
}
export declare class CreateProductDto {
    name: string;
    type: ProductType;
    category: string;
    product_tags: string[];
    display: string;
    skincare_detail?: SkincareDetail;
    drug_detail?: DrugDetail;
    has_variant: boolean;
    min_order?: number;
    price: number;
    discount_is_active: boolean;
    discount_type: string;
    discount_percentage: number;
    discount_fix_amount: number;
    product_is_active: boolean;
    product_stock: number;
    product_threshold: string;
    product_sku: string;
    shipping_product_weight: number;
    shipping_product_weight_type: product_shipping_weight_type;
    shipping_product_size_width_type: 'cm';
    shipping_product_size_width: number;
    shipping_product_size_height_type: 'cm';
    shipping_product_size_height: number;
    shipping_product_size_length_type: 'cm';
    shipping_product_size_length: number;
    image_photos: Express.Multer.File[];
}
