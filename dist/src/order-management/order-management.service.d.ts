import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsGetProductDto } from './dto/page-options-get-products.dto';
import { PageOptionsOrderManagementDto } from './dto/page-options-order-management.dto';
export declare class OrderManagementService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(pageOptionsDto: PageOptionsOrderManagementDto): Promise<PageDto<import(".prisma/client").transaction_product & {
        payment_method: import(".prisma/client").payment_method;
        shipping_product: import(".prisma/client").shipping_product & {
            shipping_method: import(".prisma/client").shipping_method;
            shipper: import(".prisma/client").shipper;
        };
        user: import(".prisma/client").users;
    }>>;
    getProductsByTransactionId(pageOptionsGetProduct: PageOptionsGetProductDto): Promise<PageDto<import(".prisma/client").transaction_product_item & {
        product: import(".prisma/client").product & {
            media_products: (import(".prisma/client").media_product & {
                media: import(".prisma/client").media;
            })[];
        };
    }>>;
    updateTransaction(id: string, data: Prisma.transaction_productUpdateInput): Promise<import(".prisma/client").transaction_product>;
    findTransaction(id: string): Promise<import(".prisma/client").transaction_product & {
        shipping_product: import(".prisma/client").shipping_product & {
            shipping_method: import(".prisma/client").shipping_method;
            shipper: import(".prisma/client").shipper;
        };
        user: import(".prisma/client").users;
        transaction_product_items: (import(".prisma/client").transaction_product_item & {
            product: import(".prisma/client").product;
        })[];
    }>;
    createTransactionOrderStatusHistory(data: Prisma.transaction_product_order_status_historyUncheckedCreateInput): Promise<import(".prisma/client").transaction_product_order_status_history>;
}
