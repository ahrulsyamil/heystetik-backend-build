import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class InvoiceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createConsultationInvoice(data: Prisma.consultation_invoiceUncheckedCreateInput): Promise<import(".prisma/client").consultation_invoice>;
    findConsultationInvoice(id: number): Promise<import(".prisma/client").consultation_invoice>;
    findConsultationInvoiceBy(where: Prisma.consultation_invoiceWhereInput): Promise<import(".prisma/client").consultation_invoice>;
    findUniqueConsultationInvoice(where: Prisma.consultation_invoiceWhereUniqueInput): Promise<import(".prisma/client").consultation_invoice>;
    generateConsultationInvoiceNumber(): Promise<string>;
    createProductInvoice(data: Prisma.product_invoiceUncheckedCreateInput): Promise<import(".prisma/client").product_invoice>;
    createProductItemInvoice(data: Prisma.product_invoice_itemCreateManyInput[]): Promise<Prisma.BatchPayload>;
    findProductInvoice(id: number): Promise<import(".prisma/client").product_invoice>;
    findProductInvoiceBy(where: Prisma.product_invoiceWhereUniqueInput): Promise<import(".prisma/client").product_invoice & {
        product_invoice_items: import(".prisma/client").product_invoice_item[];
    }>;
    findUniqueProductInvoice(where: Prisma.product_invoiceWhereUniqueInput): Promise<import(".prisma/client").product_invoice>;
    generateProductInvoiceNumber(): Promise<string>;
}
