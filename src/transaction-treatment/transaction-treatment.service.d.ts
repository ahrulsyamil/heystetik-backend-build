import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionTransactionTreatmentDto } from './dto/page-option-transaction-treatment.dto';
export declare class TransactionTreatmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    find(id: string): Promise<import(".prisma/client").transaction_treatment & {
        payment_method: import(".prisma/client").payment_method & {
            media_payment_method: import(".prisma/client").media_payment_method & {
                media: import(".prisma/client").media;
            };
        };
        transaction_treatment_items: (import(".prisma/client").transaction_treatment_item & {
            treatment: import(".prisma/client").treatment & {
                media_treatments: (import(".prisma/client").media_treatment & {
                    media: import(".prisma/client").media;
                })[];
                clinic: import(".prisma/client").clinic;
            };
            treatment_review: import(".prisma/client").treatment_review;
        })[];
    }>;
    update(id: string, data: Prisma.transaction_treatmentUpdateInput): Promise<import(".prisma/client").transaction_treatment>;
    findAll(user_id: number, pageOptionsDto: PageOptionTransactionTreatmentDto): Promise<PageDto<{
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
    findTransactionItemBy(where: Prisma.transaction_treatment_itemWhereInput): Promise<import(".prisma/client").transaction_treatment_item & {
        treatment: import(".prisma/client").treatment & {
            media_treatments: (import(".prisma/client").media_treatment & {
                media: import(".prisma/client").media;
            })[];
            clinic: import(".prisma/client").clinic;
        };
        treatment_review: import(".prisma/client").treatment_review & {
            media_treatment_reviews: (import(".prisma/client").media_treatment_review & {
                media: import(".prisma/client").media;
            })[];
        };
    }>;
    createManyTransactionVoucer(data: Prisma.transaction_treatment_voucher_appliedCreateManyInput[]): Promise<Prisma.BatchPayload>;
}
