import { transaction_consultation_status } from '@prisma/client';
import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { PaymentStatus } from 'src/globals/constant/enum';
export declare class PageOptionTransactionConsultationDto extends PageOptionsDto {
    status?: transaction_consultation_status[];
    payment_status?: PaymentStatus[];
}
