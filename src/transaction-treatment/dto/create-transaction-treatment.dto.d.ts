export declare class CreateTransactionTreatmentDto {
    schedule_date: string;
    schedule_time: string;
    treatment_item: TreatmentItemDto[];
    payment_method: string;
    payment_type: string;
    voucher_id: number;
    total_price: number;
    total_discount: number;
    transaction_fee: number;
    tax: number;
    total_paid: number;
}
declare class TreatmentItemDto {
    treatment_id: number;
    pax: number;
}
export {};
