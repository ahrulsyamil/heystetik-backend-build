import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import { OrderManagementService } from 'src/order-management/order-management.service';
import { ProductService } from 'src/product/product.service';
import { ShipmentGosendService } from 'src/shipment-gosend/shipment-gosend.service';
import { ShipmentSicepatService } from 'src/shipment-sicepat/shipment-sicepat.service';
import { UserAddressService } from 'src/user-address/user-address.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { ShippingMethodDto } from './dto/method.dto';
import { ShippingEntity } from './entities/shipping.entity';
import { ShippingService } from './shipping.service';
export declare class ShippingController {
    private readonly shippingService;
    private readonly userAddressService;
    private readonly sicepatService;
    private readonly gosendService;
    private readonly productService;
    private readonly configService;
    private readonly orderManagementService;
    constructor(shippingService: ShippingService, userAddressService: UserAddressService, sicepatService: ShipmentSicepatService, gosendService: ShipmentGosendService, productService: ProductService, configService: ConfigService, orderManagementService: OrderManagementService);
    findAll(): Promise<import(".prisma/client").shipping_method[]>;
    generateShippingMethod(user: UserEntity, shippingMethodDto: ShippingMethodDto): Promise<ShippingEntity[]>;
    getShippingInfo(ref_no: string): Promise<import(".prisma/client").shipping_product & {
        transaction_product: import(".prisma/client").transaction_product;
        shipping_method: import(".prisma/client").shipping_method;
        shipper: import(".prisma/client").shipper;
    }>;
    trackByReferenceNumber(ref_no: string): Promise<Prisma.shipping_product_historyUncheckedCreateInput[]>;
}
