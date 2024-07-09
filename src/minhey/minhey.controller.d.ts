import { MinheyService } from './minhey.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsMinheyTransactionDto } from './dto/page-options-minhey-transaction-dto';
import { TransactionConsultationService } from 'src/transaction-consultation/transaction-consultation.service';
import { TransactionTreatmentService } from 'src/transaction-treatment/transaction-treatment.service';
import { TransactionProductService } from 'src/transaction-product/transaction-product.service';
export declare class MinheyController {
    private readonly minheyService;
    private readonly transactionConsultationService;
    private readonly transactionTreatmentService;
    private readonly transactionProductService;
    constructor(minheyService: MinheyService, transactionConsultationService: TransactionConsultationService, transactionTreatmentService: TransactionTreatmentService, transactionProductService: TransactionProductService);
    findAllTransaction(user: UserEntity, pageOptionsDto: PageOptionsMinheyTransactionDto): Promise<any>;
}
