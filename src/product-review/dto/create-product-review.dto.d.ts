/// <reference types="multer" />
export declare class CreateProductReviewDto {
    user_id: number;
    transaction_product_id: string;
    transaction_product_item_id: number;
    product_id: number;
    review?: string;
    effectiveness_rating: number;
    texture_rating: number;
    packaging_rating: number;
    usage_duration: string;
    would_recommend: string;
    would_repurchase: string;
    avg_rating: number;
    before_conditions: Express.Multer.File[];
    after_conditions: Express.Multer.File[];
}
