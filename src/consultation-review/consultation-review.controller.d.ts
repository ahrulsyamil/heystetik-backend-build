import { FcmService } from 'src/fcm/fcm.service';
import { NotificationService } from 'src/notification/notification.service';
import { TransactionConsultationService } from 'src/transaction-consultation/transaction-consultation.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { ConsultationReviewService } from './consultation-review.service';
import { CreateConsultationReviewDto } from './dto/create-consultation-review.dto';
export declare class ConsultationReviewController {
    private readonly consultationReviewService;
    private readonly transactionConsultationService;
    private readonly userService;
    private readonly notificationService;
    private readonly fcmService;
    constructor(consultationReviewService: ConsultationReviewService, transactionConsultationService: TransactionConsultationService, userService: UsersService, notificationService: NotificationService, fcmService: FcmService);
    create(user: UserEntity, data: CreateConsultationReviewDto): Promise<import(".prisma/client").consultation_review>;
}
