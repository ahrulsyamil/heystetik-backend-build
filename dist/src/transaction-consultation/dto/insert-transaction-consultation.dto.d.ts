import { transaction_consultation_status } from '@prisma/client';
import { PaymentStatus } from 'src/globals/constant/enum';
export declare class InsertTransactionConsultationDto {
    customer_id: number;
    medical_history_id: number;
    duration: number;
    total_fee: number;
    total_discount: number;
    transaction_fee: number;
    tax: number;
    total_paid: number;
    payment_method_id: number;
    order_id: string;
    payment_status: PaymentStatus;
    status: transaction_consultation_status;
}
