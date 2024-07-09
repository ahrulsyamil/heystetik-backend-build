export interface ITransactionDetails {
    gross_amount: number;
    order_id: string;
}
export interface ICustomerDetails {
    email: string;
    first_name: string;
    phone: string;
    shipping_address?: IShippingAddress;
}
export interface IShippingAddress {
    first_name: string;
    phone: string;
    address: string;
    city: string;
    postal_code: string;
    country_code: string;
}
export interface IItemDetails {
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
export interface ICustomExpiry {
    expiry_duration: number;
    unit: 'second' | 'minute' | 'hour' | 'day';
}
