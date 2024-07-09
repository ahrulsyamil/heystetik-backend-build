declare class Errors {
    constructor(partial: Partial<Errors>);
    title: string;
    message: string;
}
declare class Price {
    constructor(partial: Partial<Price>);
    total_price: number;
    go_pay_total_price: number;
    go_pay_discount: number;
    go_pay_message: number;
}
export declare class Estimate {
    constructor(partial: Partial<Estimate>);
    price: Price;
    shipment_method: string;
    shipment_method_description: string;
    serviceable: boolean;
    active: boolean;
    distance: number;
    route_polyline: string;
    errors?: Errors[];
}
export declare class EstimateEntity {
    constructor(partial: Partial<EstimateEntity>);
    Instant: Estimate;
    SameDay: Estimate;
}
export {};
