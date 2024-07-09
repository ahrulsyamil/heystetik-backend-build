/// <reference types="multer" />
export declare class CreateTreatmentDto {
    name: string;
    clinic_id: number;
    category: string;
    description: string;
    duration: string;
    downtime: string;
    treatment_type: string;
    treatment_method: string;
    treatment_step: string;
    price: number;
    image_photos: Express.Multer.File[];
}
