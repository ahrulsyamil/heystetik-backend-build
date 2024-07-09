import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { TransactionStatus, TransactionType } from 'src/globals/constant/enum';
export declare class PageOptionsTransactionDto extends PageOptionsDto {
    user_id: number;
    transaction_status: TransactionStatus[];
    transaction_type: TransactionType[];
    start_date: Date;
    end_date: Date;
}
