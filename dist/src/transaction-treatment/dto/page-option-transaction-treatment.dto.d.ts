import { transaction_treatment_status } from '@prisma/client';
import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { PaymentStatus } from 'src/globals/constant/enum';
export declare class PageOptionTransactionTreatmentDto extends PageOptionsDto {
    status?: transaction_treatment_status[];
    payment_status?: PaymentStatus[];
}
