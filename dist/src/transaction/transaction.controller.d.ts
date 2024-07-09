import { payment_method, transaction_consultation, transaction_product, transaction_treatment } from '@prisma/client';
import { Queue } from 'bull';
import { InvoiceService } from 'src/invoice/invoice.service';
import { MidtransService } from 'src/midtrans/midtrans.service';
import { NotificationService } from 'src/notification/notification.service';
import { TransactionConsultationService } from 'src/transaction-consultation/transaction-consultation.service';
import { TransactionProductService } from 'src/transaction-product/transaction-product.service';
import { TransactionTreatmentService } from 'src/transaction-treatment/transaction-treatment.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { XenditService } from 'src/xendit/xendit.service';
import { PageOptionsTransactionDto } from './dto/page-options-transaction.dto';
import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly midtransService;
    private readonly transactionConsultationService;
    private readonly transactionTreatmentService;
    private readonly transactionProductService;
    private readonly transactioService;
    private readonly notificationService;
    private readonly invoiceService;
    private readonly xenditService;
    private queueFcm;
    constructor(midtransService: MidtransService, transactionConsultationService: TransactionConsultationService, transactionTreatmentService: TransactionTreatmentService, transactionProductService: TransactionProductService, transactioService: TransactionService, notificationService: NotificationService, invoiceService: InvoiceService, xenditService: XenditService, queueFcm: Queue);
    getStatus(user: UserEntity, id: string): Promise<{
        transaction: (transaction_consultation & {
            payment_method: payment_method;
        }) | (transaction_treatment & {
            payment_method: payment_method;
        }) | (transaction_product & {
            payment_method: payment_method;
        });
        payment: any;
        payment_status: any;
        payment_method: any;
        payment_type: any;
        expiry_time: any;
        va_number: any;
        bill_key: any;
        bill_code: any;
        qr_string: any;
        actions: any[];
    }>;
    findAll(user: UserEntity, pageOptionsDto: PageOptionsTransactionDto): Promise<any>;
    findTransactionProduct(order_id: string): Promise<transaction_product & {
        payment_method: payment_method & {
            media_payment_method: import(".prisma/client").media_payment_method & {
                media: import(".prisma/client").media;
            };
        };
        product_invoice: import(".prisma/client").product_invoice & {
            product_invoice_items: import(".prisma/client").product_invoice_item[];
        };
        shipping_product: import(".prisma/client").shipping_product & {
            shipping_method: import(".prisma/client").shipping_method;
            shipper: import(".prisma/client").shipper;
        };
        transaction_product_voucher_applieds: (import(".prisma/client").transaction_product_voucher_applied & {
            voucher: import(".prisma/client").voucher;
        })[];
        user: import(".prisma/client").users;
        transaction_product_items: (import(".prisma/client").transaction_product_item & {
            product: import(".prisma/client").product & {
                media_products: (import(".prisma/client").media_product & {
                    media: import(".prisma/client").media;
                })[];
                skincare_detail: import(".prisma/client").skincare_details;
                drug_detail: import(".prisma/client").drug_details;
            };
            product_review: import(".prisma/client").product_review;
        })[];
    }>;
    findTransactionTreatment(order_id: string): Promise<transaction_treatment & {
        payment_method: payment_method & {
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
    findTransactionConsultation(order_id: string): Promise<transaction_consultation & {
        customer: import(".prisma/client").users;
        payment_method: payment_method & {
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
}
