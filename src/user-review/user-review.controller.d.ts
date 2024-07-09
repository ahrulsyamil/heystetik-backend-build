import { UserReviewService } from './user-review.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsUserReviewDto } from './dto/page-options-user-review.dto';
import { TransactionTreatmentService } from 'src/transaction-treatment/transaction-treatment.service';
import { TransactionConsultationService } from 'src/transaction-consultation/transaction-consultation.service';
import { TransactionProductService } from 'src/transaction-product/transaction-product.service';
export declare class UserReviewController {
    private readonly userReviewService;
    private readonly transactionTreatmentService;
    private readonly transactionProductService;
    private readonly transactionConsultationService;
    constructor(userReviewService: UserReviewService, transactionTreatmentService: TransactionTreatmentService, transactionProductService: TransactionProductService, transactionConsultationService: TransactionConsultationService);
    findAllWaitingReview(user: UserEntity, pageOptionsDto: PageOptionsUserReviewDto): Promise<any>;
    findAllFinishedReview(user: UserEntity, pageOptionsDto: PageOptionsUserReviewDto): Promise<any>;
}
