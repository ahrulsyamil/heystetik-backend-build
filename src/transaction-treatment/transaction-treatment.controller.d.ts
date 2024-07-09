import { users } from '@prisma/client';
import { MidtransService } from 'src/midtrans/midtrans.service';
import { PaymentMethodService } from 'src/payment-method/payment-method.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionService } from 'src/transaction/transaction.service';
import { TreatmentService } from 'src/treatment/treatment.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { VoucherService } from 'src/voucher/voucher.service';
import { XenditService } from 'src/xendit/xendit.service';
import { CreateTransactionTreatmentDto } from './dto/create-transaction-treatment.dto';
import { PageOptionTransactionTreatmentDto } from './dto/page-option-transaction-treatment.dto';
import { TransactionTreatmentService } from './transaction-treatment.service';
export declare class TransactionTreatmentController {
    private readonly paymentMethodService;
    private readonly treatmentService;
    private readonly midtransService;
    private readonly transactionTreatmentService;
    private readonly prisma;
    private readonly voucherService;
    private readonly transactionService;
    private readonly xenditService;
    constructor(paymentMethodService: PaymentMethodService, treatmentService: TreatmentService, midtransService: MidtransService, transactionTreatmentService: TransactionTreatmentService, prisma: PrismaService, voucherService: VoucherService, transactionService: TransactionService, xenditService: XenditService);
    create(user: users, data: CreateTransactionTreatmentDto): Promise<{
        transaction: any;
        payment: any;
    }>;
    findAll(user: UserEntity, pageOptionsDto: PageOptionTransactionTreatmentDto): Promise<import("../decorators/page.dto").PageDto<{
        transaction_type: string;
        id: string;
        user_id: number;
        total_price: number;
        transaction_fee: number;
        tax: number;
        total_discount: number;
        total_paid: number;
        payment_method_id: number;
        order_id: string;
        payment_external_id: string;
        payment_status: string;
        payment_expiry_time: Date;
        payment_settlement_time: Date;
        va_number: string;
        bill_key: string;
        biller_code: string;
        qr_string: string;
        status: import(".prisma/client").transaction_treatment_status;
        created_by: number;
        updated_by: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        payment_method: import(".prisma/client").payment_method;
        transaction_treatment_items: (import(".prisma/client").transaction_treatment_item & {
            treatment: import(".prisma/client").treatment & {
                media_treatments: (import(".prisma/client").media_treatment & {
                    media: import(".prisma/client").media;
                })[];
                clinic: import(".prisma/client").clinic;
            };
            treatment_review: import(".prisma/client").treatment_review;
        })[];
    }>>;
}
