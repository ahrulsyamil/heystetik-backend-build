export declare class CreateTransactionProductDto {
    product_item: ProductItemDto[];
    payment_method: string;
    payment_type: string;
    shipping_method_id: number;
    user_address_id: number;
    voucher_id: number;
    total_price: number;
    total_discount: number;
    delivery_fee: number;
    transaction_fee: number;
    tax: number;
    total_paid: number;
}
declare class ProductItemDto {
    product_id: number;
    qty: number;
    note?: string;
}
export {};
