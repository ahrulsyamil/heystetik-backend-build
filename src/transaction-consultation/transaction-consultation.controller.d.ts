/// <reference types="multer" />
import { users } from '@prisma/client';
import { MediaService } from 'src/media/media.service';
import { MedicalHistoryService } from 'src/medical-history/medical-history.service';
import { MidtransService } from 'src/midtrans/midtrans.service';
import { PaymentMethodService } from 'src/payment-method/payment-method.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionService } from 'src/transaction/transaction.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { VoucherService } from 'src/voucher/voucher.service';
import { XenditService } from 'src/xendit/xendit.service';
import { CreateTransactionConsultationDto } from './dto/create-transaction-consultation.dto';
import { PageOptionTransactionConsultationDto } from './dto/page-option-transaction-consultation.dto';
import { TransactionConsultationService } from './transaction-consultation.service';
export declare class TransactionConsultationController {
    private readonly transactionConsultationService;
    private readonly medicalHistoryService;
    private readonly paymentMethodService;
    private readonly midtransService;
    private readonly prisma;
    private readonly mediaService;
    private readonly voucherService;
    private readonly transactionService;
    private readonly xenditService;
    constructor(transactionConsultationService: TransactionConsultationService, medicalHistoryService: MedicalHistoryService, paymentMethodService: PaymentMethodService, midtransService: MidtransService, prisma: PrismaService, mediaService: MediaService, voucherService: VoucherService, transactionService: TransactionService, xenditService: XenditService);
    create(user: users, files: Express.Multer.File[], data: CreateTransactionConsultationDto): Promise<{
        medical_history: any;
        transaction: any;
        payment: any;
    }>;
    findAll(user: UserEntity, pageOptionsDto: PageOptionTransactionConsultationDto): Promise<import("../decorators/page.dto").PageDto<{
        transaction_type: string;
        id: string;
        customer_id: number;
        medical_history_id: number;
        duration: number;
        total_fee: number;
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
        status: import(".prisma/client").transaction_consultation_status;
        created_by: number;
        updated_by: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        payment_method: import(".prisma/client").payment_method;
        consultation: import(".prisma/client").consultation & {
            medical_history: import(".prisma/client").medical_history & {
                interest_condition: import(".prisma/client").interest_conditions & {
                    concern: import(".prisma/client").concern;
                };
            };
            doctor: users & {
                media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                    media: import(".prisma/client").media;
                };
            };
        };
        consultation_review: import(".prisma/client").consultation_review;
    }>>;
}
