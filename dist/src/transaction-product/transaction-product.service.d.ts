import { Prisma } from '@prisma/client';
import { PaymentStatus } from 'src/globals/constant/enum';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TransactionProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    find(id: string): Promise<import(".prisma/client").transaction_product & {
        payment_method: import(".prisma/client").payment_method & {
            media_payment_method: import(".prisma/client").media_payment_method & {
                media: import(".prisma/client").media;
            };
        };
        product_invoice: import(".prisma/client").product_invoice & {
            product_invoice_items: import(".prisma/client").product_invoice_item[];
        };
        shipping_product: import(".prisma/client").shipping_product & {
            shipping_method: import(".prisma/client").shipping_method;
            shipper: import(".prisma/client").shipper;
        };
        transaction_product_voucher_applieds: (import(".prisma/client").transaction_product_voucher_applied & {
            voucher: import(".prisma/client").voucher;
        })[];
        user: import(".prisma/client").users;
        transaction_product_items: (import(".prisma/client").transaction_product_item & {
            product: import(".prisma/client").product & {
                media_products: (import(".prisma/client").media_product & {
                    media: import(".prisma/client").media;
                })[];
                skincare_detail: import(".prisma/client").skincare_details;
                drug_detail: import(".prisma/client").drug_details;
            };
            product_review: import(".prisma/client").product_review;
        })[];
    }>;
    update(id: string, data: Prisma.transaction_productUpdateInput): Promise<import(".prisma/client").transaction_product>;
    findTransactionItemBy(where: Prisma.transaction_product_itemWhereInput): Promise<import(".prisma/client").transaction_product_item & {
        product: import(".prisma/client").product & {
            media_products: (import(".prisma/client").media_product & {
                media: import(".prisma/client").media;
            })[];
            skincare_detail: import(".prisma/client").skincare_details;
            drug_detail: import(".prisma/client").drug_details;
        };
        product_review: import(".prisma/client").product_review;
    }>;
    findManyBy(where: Prisma.productWhereInput): Promise<(import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    })[]>;
    createManyTransactionVoucherApplied(data: Prisma.transaction_product_voucher_appliedCreateManyInput[]): Promise<Prisma.BatchPayload>;
    countProductSalesById(product_id: number): Promise<Prisma.GetTransaction_product_itemAggregateType<{
        _sum: {
            qty: true;
        };
        where: {
            product_id: number;
            transaction_product: {
                payment_status: PaymentStatus;
            };
        };
    }>>;
}
