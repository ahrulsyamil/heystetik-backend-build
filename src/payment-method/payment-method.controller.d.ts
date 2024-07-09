import { PaymentMethodService } from './payment-method.service';
import { PageOptionsPaymentMethodDto } from './dto/page-options-payment-method.dto';
export declare class PaymentMethodController {
    private readonly paymentMethodService;
    constructor(paymentMethodService: PaymentMethodService);
    findAll(pageOptions: PageOptionsPaymentMethodDto): Promise<any[]>;
    find(id: number): Promise<import(".prisma/client").payment_method & {
        media_payment_method: import(".prisma/client").media_payment_method & {
            media: import(".prisma/client").media;
        };
        how_to_pays: import(".prisma/client").how_to_pay[];
    }>;
}
