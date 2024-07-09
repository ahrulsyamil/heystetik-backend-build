import { Response } from 'express';
import { UserEntity } from 'src/users/entities/user.entity';
import { InvoiceService } from './invoice.service';
import { ConfigService } from '@nestjs/config';
export declare class InvoiceController {
    private readonly invoiceService;
    private readonly configService;
    constructor(invoiceService: InvoiceService, configService: ConfigService);
    consultation(user: UserEntity, transactionId: string): Promise<import(".prisma/client").consultation_invoice>;
    consultationPreview(transactionId: string): Promise<any>;
    downloadConsultation(user: UserEntity, transactionId: string, res: Response): Promise<void>;
    product(user: UserEntity, transactionId: string): Promise<import(".prisma/client").product_invoice & {
        product_invoice_items: import(".prisma/client").product_invoice_item[];
    }>;
    productPreview(transactionId: string): Promise<any>;
    downloadProduct(user: UserEntity, transactionId: string, res: Response): Promise<void>;
}
