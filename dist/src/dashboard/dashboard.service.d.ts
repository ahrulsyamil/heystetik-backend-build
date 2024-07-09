import { PrismaService } from 'src/prisma/prisma.service';
import { GetDashboardTopFiveSalesDto } from './dto/get-dashboard-top-five-sales.dto';
import { ActiveDoctorConsultationEntity, DeliveryOptionEntity, MarketShareEntity, MonthlyRevenueEntity, NewUserEntity, PartnerSalesEntity, TopFiveSalesEntity, TotalOrderEntity } from './entity/dashboard.entity';
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    monthlyRevenue(): Promise<MonthlyRevenueEntity[]>;
    deliveryOption(year: number, month: number): Promise<DeliveryOptionEntity[]>;
    marketShare(year: number, month: number): Promise<MarketShareEntity[]>;
    totalOrder(): Promise<TotalOrderEntity[]>;
    topFiveSales(data: GetDashboardTopFiveSalesDto): Promise<TopFiveSalesEntity[]>;
    activeDoctorConsultation(): Promise<ActiveDoctorConsultationEntity[]>;
    newUser(): Promise<NewUserEntity[]>;
    partnerSales(): Promise<PartnerSalesEntity[]>;
}
