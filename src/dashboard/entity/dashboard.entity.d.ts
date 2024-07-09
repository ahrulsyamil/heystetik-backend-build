export declare class MonthlyRevenueEntity {
    year: string;
    month: string;
    month_name: string;
    date: Date;
    value: number;
    percentage: number;
}
export declare class MarketShareEntity {
    type: string;
    current: number;
    previous: number;
}
export declare class DeliveryOptionEntity {
    option: string;
    value: number;
}
export declare class TotalOrderEntity {
    year: string;
    month: string;
    month_name: string;
    date: Date;
    value: number;
    percentage: number;
}
export declare class TopFiveSalesEntity {
    id: number;
    product_name: string;
    remaining_stock: number;
    current_revenue: number;
    previous_revenue: number;
    percentage: number;
}
export declare class ActiveDoctorConsultationEntity {
    id: number;
    doctor_name: string;
    customer_request: number;
    interaction: number;
}
export declare class NewUserEntity {
    year: string;
    month: string;
    month_name: string;
    date: Date;
    value: number;
}
export declare class PartnerSalesEntity {
    id: number;
    clinic_name: string;
    city: string;
    current_sales: number;
    previous_sales: number;
    percentage: number;
}
