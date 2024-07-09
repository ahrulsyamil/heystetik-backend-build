import { status_consultation } from '@prisma/client';
export declare class CreateConsultationDto {
    doctor_id: number;
    customer_id: number;
    transaction_consultation_id: string;
    consultation_doctor_schedule_id: number;
    medical_history_id: number;
    code: string;
    duration: number;
    end_date?: Date;
    status?: status_consultation;
}
