import { OrderManagementService } from 'src/order-management/order-management.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShipmentSicepatService } from 'src/shipment-sicepat/shipment-sicepat.service';
import { ShippingService } from 'src/shipping/shipping.service';
export declare class TaskScheduleService {
    private readonly prismaService;
    private readonly shipmentSicepat;
    private readonly shippingService;
    private readonly orderManagementService;
    private readonly logger;
    constructor(prismaService: PrismaService, shipmentSicepat: ShipmentSicepatService, shippingService: ShippingService, orderManagementService: OrderManagementService);
    handleScheduleUpdateSicepatWaybill(): Promise<void>;
    handleScheduleUpdateSicepatDeliveredPackage(): Promise<void>;
}
