import { Prisma, shipper, shipping_method } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ShippingService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAllShippingMethod(): Promise<shipping_method[]>;
    findOneShippingMethod(id: number): Promise<shipping_method>;
    findOneShipperByName(name: string): Prisma.Prisma__shipperClient<shipper>;
    findOneShipperBy(where: Prisma.shipperWhereInput): Promise<shipper>;
    create(data: Prisma.shipping_productUncheckedCreateInput): Prisma.Prisma__shipping_productClient<import(".prisma/client").shipping_product>;
    updateByTransactionId(id: string, data: Prisma.shipping_productUpdateInput): Promise<import(".prisma/client").shipping_product>;
    createLog(data: Prisma.shipping_logCreateInput): Promise<import(".prisma/client").shipping_log>;
    findShippingProductByTransactionId(id: string): Promise<import(".prisma/client").shipping_product & {
        transaction_product: import(".prisma/client").transaction_product;
        shipping_method: shipping_method;
        shipper: shipper;
    }>;
    createShippingHistory(data: Prisma.shipping_product_historyUncheckedCreateInput): Promise<import(".prisma/client").shipping_product_history>;
    getShippingHistoryByTransactionId(id: string): Promise<import(".prisma/client").shipping_product_history[]>;
    findAllShippingProduct(where: Prisma.shipping_productWhereInput): Promise<import(".prisma/client").shipping_product[]>;
}
