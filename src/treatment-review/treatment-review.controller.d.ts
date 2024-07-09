/// <reference types="multer" />
import { MediaService } from 'src/media/media.service';
import { TransactionTreatmentService } from 'src/transaction-treatment/transaction-treatment.service';
import { TreatmentService } from 'src/treatment/treatment.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateTreatmentReviewDto } from './dto/create-treatment-review.dto';
import { HelpfulTreatmentReviewDto } from './dto/helpful-treatment-review.dto';
import { PageOptionsTreatmentReviewDto } from './dto/page-options-treatment-review.dto';
import { ReplyTreatmentReviewDto } from './dto/reply-treatment-review.dto';
import { TreatmentReviewService } from './treatment-review.service';
export declare class TreatmentReviewController {
    private readonly treatmentReviewService;
    private readonly transactionTreatmentService;
    private readonly treatmentService;
    private readonly mediaService;
    constructor(treatmentReviewService: TreatmentReviewService, transactionTreatmentService: TransactionTreatmentService, treatmentService: TreatmentService, mediaService: MediaService);
    create(user: UserEntity, files: Express.Multer.File[], data: CreateTreatmentReviewDto): Promise<import(".prisma/client").treatment_review>;
    findAll(user: UserEntity, pageOptions: PageOptionsTreatmentReviewDto): Promise<any>;
    createHelpful(user: UserEntity, data: HelpfulTreatmentReviewDto): Promise<import(".prisma/client").treatment_review_helpful>;
    deleteHelpful(user: UserEntity, data: HelpfulTreatmentReviewDto): Promise<import(".prisma/client").treatment_review_helpful>;
    reply(user: UserEntity, data: ReplyTreatmentReviewDto): Promise<import(".prisma/client").treatment_review>;
    overview(id: number): Promise<any>;
}
