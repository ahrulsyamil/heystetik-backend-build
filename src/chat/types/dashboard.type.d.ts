export type TDashboard = {
    monthly_revenue: TMonthlyRevenue[];
    market_share: TMarketShare[];
    total_order: TTotalOrder[];
    top_five_sales: TTopFiveSales[];
    active_consultan_doctor: TActiveConsultanDoctor[];
    new_user: TNewUser[];
    partner_sales: TPartnerSales[];
};
export type TMonthlyRevenue = {
    id: number;
    year: string;
    value: number;
    percentage: number;
};
export type TMarketShare = {
    type: string;
    value: number;
    nominal: number;
};
export type TTotalOrder = {
    id: number;
    type: string;
    sales: number;
    percentage: number;
};
export type TTopFiveSales = {
    id: number;
    name: string;
    filename: string;
    remaining_stock: number;
    revenue: number;
    percentage: number;
};
export type TActiveConsultanDoctor = {
    id: number;
    name: string;
    title: string;
    customer_request: number;
    filename: string;
    interaction: number;
};
export type TNewUser = {
    id: number;
    year: string;
    value: number;
};
export type TPartnerSales = {
    id: number;
    name: string;
    city: string;
    percentage: number;
};
