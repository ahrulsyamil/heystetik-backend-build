import { OrderManagementService } from './order-management.service';
import { PageOptionsOrderManagementDto } from './dto/page-options-order-management.dto';
import { PageOptionsGetProductDto } from './dto/page-options-get-products.dto';
import { ShipmentSicepatService } from 'src/shipment-sicepat/shipment-sicepat.service';
import { ShipmentGosendService } from 'src/shipment-gosend/shipment-gosend.service';
import { ConfigService } from '@nestjs/config';
import { UserAddressService } from 'src/user-address/user-address.service';
import { ShippingService } from 'src/shipping/shipping.service';
export declare class OrderManagementController {
    private readonly orderManagementService;
    private readonly sicepatService;
    private readonly gosendService;
    private readonly configService;
    private readonly userAddressService;
    private readonly shippingService;
    constructor(orderManagementService: OrderManagementService, sicepatService: ShipmentSicepatService, gosendService: ShipmentGosendService, configService: ConfigService, userAddressService: UserAddressService, shippingService: ShippingService);
    findAll(pageOptionOrderManagementDto: PageOptionsOrderManagementDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").transaction_product & {
        payment_method: import(".prisma/client").payment_method;
        shipping_product: import(".prisma/client").shipping_product & {
            shipping_method: import(".prisma/client").shipping_method;
            shipper: import(".prisma/client").shipper;
        };
        user: import(".prisma/client").users;
    }>>;
    getProductsByTransactionId(id: string, pageOptionsGetProductsDto: PageOptionsGetProductDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").transaction_product_item & {
        product: import(".prisma/client").product & {
            media_products: (import(".prisma/client").media_product & {
                media: import(".prisma/client").media;
            })[];
        };
    }>>;
    processOrder(id: string): Promise<import(".prisma/client").transaction_product>;
    requestPickupOrder(id: string): Promise<import(".prisma/client").transaction_product>;
    retryRequestPickupOrder(id: string): Promise<void>;
}
