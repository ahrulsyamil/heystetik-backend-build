import { CreateChargeDto } from 'src/midtrans/dto/create-charge.dto';
import { ICustomExpiry, ICustomerDetails, IItemDetails, ITransactionDetails } from '../interfaces/midtrans';
import { payment_method } from '@prisma/client';
export declare const midtransChargeTransformer: ({ transaction_id, transaction_type, selected_payment, transaction_details, customer_details, item_details, custom_expiry, }: {
    transaction_id: string;
    transaction_type: string;
    selected_payment: payment_method;
    transaction_details?: ITransactionDetails;
    customer_details?: ICustomerDetails;
    item_details?: IItemDetails;
    custom_expiry?: ICustomExpiry;
}) => CreateChargeDto;
