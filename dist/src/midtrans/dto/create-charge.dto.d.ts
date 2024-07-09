export declare class CreateChargeDto {
    payment_type: string;
    transaction_details: TransactionDetails;
    customer_details: CustomerDetails;
    item_details?: ItemDetails;
    bank_transfer?: BankTransfer;
    echannel?: Echannel;
    custom_expiry?: CustomExpiry;
}
declare class TransactionDetails {
    gross_amount: number;
    order_id: string;
}
declare class CustomerDetails {
    email: string;
    first_name: string;
    phone: string;
    shipping_address?: ShippingAddress;
}
declare class ItemDetails {
    id?: string;
    price: number;
    quantity: number;
    name: string;
    brand?: string;
    category?: string;
    merchant_name?: string;
    tenor?: string;
    code_plan?: string;
    mid?: string;
    url?: string;
}
declare class BankTransfer {
    bank?: string;
}
declare class ShippingAddress {
    first_name: string;
    phone: string;
    address: string;
    city: string;
    postal_code: string;
    country_code: string;
}
declare class Echannel {
    bill_info1?: string;
    bill_info2?: string;
}
declare class CustomExpiry {
    expiry_duration: number;
    unit: 'second' | 'minute' | 'hour' | 'day';
}
export {};
