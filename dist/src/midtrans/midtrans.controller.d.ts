import { Queue } from 'bull';
import { NotificationService } from 'src/notification/notification.service';
import { TransactionConsultationService } from 'src/transaction-consultation/transaction-consultation.service';
import { TransactionProductService } from 'src/transaction-product/transaction-product.service';
import { TransactionTreatmentService } from 'src/transaction-treatment/transaction-treatment.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { MidtransService } from './midtrans.service';
import { InvoiceService } from 'src/invoice/invoice.service';
export declare class MidtransController {
    private readonly midtransService;
    private readonly transactionConsultationService;
    private readonly transactionTreatmentService;
    private readonly transactionProductService;
    private readonly notificationService;
    private readonly invoiceService;
    private queueFcm;
    constructor(midtransService: MidtransService, transactionConsultationService: TransactionConsultationService, transactionTreatmentService: TransactionTreatmentService, transactionProductService: TransactionProductService, notificationService: NotificationService, invoiceService: InvoiceService, queueFcm: Queue);
    handlePaymentStatusUpdate(user: UserEntity, payload: any): Promise<string>;
}
