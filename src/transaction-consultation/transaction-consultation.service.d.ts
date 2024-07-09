import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertTransactionConsultationDto } from './dto/insert-transaction-consultation.dto';
import { PageOptionTransactionConsultationDto } from './dto/page-option-transaction-consultation.dto';
import { UpdateTransactionConsultationDto } from './dto/update-transaction-consultation.dto';
import { Prisma } from '@prisma/client';
export declare class TransactionConsultationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(insertTransactionConsultationDto: InsertTransactionConsultationDto): Promise<import(".prisma/client").transaction_consultation>;
    find(id: string): Promise<import(".prisma/client").transaction_consultation & {
        customer: import(".prisma/client").users;
        payment_method: import(".prisma/client").payment_method & {
            media_payment_method: import(".prisma/client").media_payment_method & {
                media: import(".prisma/client").media;
            };
        };
        consultation: import(".prisma/client").consultation & {
            medical_history: import(".prisma/client").medical_history & {
                interest_condition: import(".prisma/client").interest_conditions;
            };
            doctor: import(".prisma/client").users & {
                media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                    media: import(".prisma/client").media;
                };
            };
        };
        medical_history: import(".prisma/client").medical_history & {
            interest_condition: import(".prisma/client").interest_conditions & {
                concern: import(".prisma/client").concern;
            };
        };
        consultation_review: import(".prisma/client").consultation_review;
        consultation_invoice: import(".prisma/client").consultation_invoice;
    }>;
    update(id: string, updateTransactionConsultationDto: UpdateTransactionConsultationDto): Promise<import(".prisma/client").transaction_consultation>;
    findAll(customer_id: number, pageOptionsDto: PageOptionTransactionConsultationDto): Promise<PageDto<{
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
            doctor: import(".prisma/client").users & {
                media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                    media: import(".prisma/client").media;
                };
            };
        };
        consultation_review: import(".prisma/client").consultation_review;
    }>>;
    createManyTransactionVoucer(data: Prisma.transaction_consultation_voucher_appliedCreateManyInput[]): Promise<Prisma.BatchPayload>;
}
