import { UserService } from 'src/auth/user/user.service';
import { ClinicService } from 'src/clinic/clinic.service';
import { ProductService } from 'src/product/product.service';
import { DashboardService } from './dashboard.service';
import { GetDashboardMarketshareDto } from './dto/get-dashboard-marketshare.dto';
import { GetDashboardTopFiveSalesDto } from './dto/get-dashboard-top-five-sales.dto';
export declare class DashboardController {
    private readonly dashboardService;
    private readonly productService;
    private readonly userService;
    private readonly clinicService;
    constructor(dashboardService: DashboardService, productService: ProductService, userService: UserService, clinicService: ClinicService);
    getMonthlyRevenue(): Promise<any[]>;
    getMarketShare(query: GetDashboardMarketshareDto): Promise<{
        percentage: number;
        ratio: number;
        type: string;
        current: number;
        previous: number;
    }[]>;
    getDeliveryOption(query: GetDashboardMarketshareDto): Promise<{
        percentage: string | number;
        option: string;
        value: number;
    }[]>;
    totalOrder(): Promise<any[]>;
    getTopFiveSales(query: GetDashboardTopFiveSalesDto): Promise<{
        percentage: number;
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        id: number;
        product_name: string;
        remaining_stock: number;
        current_revenue: number;
        previous_revenue: number;
    }[]>;
    getActiveConsultationDoctor(): Promise<{
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
        id: number;
        doctor_name: string;
        customer_request: number;
        interaction: number;
    }[]>;
    getNewUser(): Promise<any[]>;
    getPartnerSales(): Promise<{
        percentage: number;
        media_clinic_logo: import(".prisma/client").media_clinic_logo & {
            media: import(".prisma/client").media;
        };
        id: number;
        clinic_name: string;
        city: string;
        current_sales: number;
        previous_sales: number;
    }[]>;
}
