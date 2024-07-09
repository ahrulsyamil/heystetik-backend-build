/// <reference types="multer" />
export declare class CreateMedicalHistoryDto {
    interest_condition_id: number;
    medical_history_item: MedicalHistoryItemDto[];
    files?: Express.Multer.File[];
}
declare class MedicalHistoryItemDto {
    interest_condition_question_id: number;
    interest_condition_answer_id: number;
    answer_description: string;
}
export {};
