/// <reference types="multer" />
export declare class CreateChatQuickReplyDto {
    doctor_id: number;
    shortcut: string;
    message: string;
    is_active?: boolean;
    files?: Express.Multer.File[];
}
