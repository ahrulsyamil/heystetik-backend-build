/// <reference types="multer" />
export declare class CreateTreatmentReviewDto {
    user_id: number;
    transaction_treatment_id: string;
    transaction_treatment_item_id: number;
    treatment_id: number;
    review: string;
    care_rating: number;
    service_rating: number;
    management_rating: number;
    avg_rating: number;
    files?: Express.Multer.File[];
}
