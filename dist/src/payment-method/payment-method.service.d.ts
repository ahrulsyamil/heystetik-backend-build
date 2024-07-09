import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsPaymentMethodDto } from './dto/page-options-payment-method.dto';
export declare class PaymentMethodService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptions?: PageOptionsPaymentMethodDto): Promise<(import(".prisma/client").payment_method & {
        media_payment_method: import(".prisma/client").media_payment_method & {
            media: import(".prisma/client").media;
        };
        how_to_pays: import(".prisma/client").how_to_pay[];
    })[]>;
    find(id: number): Promise<import(".prisma/client").payment_method & {
        media_payment_method: import(".prisma/client").media_payment_method & {
            media: import(".prisma/client").media;
        };
        how_to_pays: import(".prisma/client").how_to_pay[];
    }>;
}
