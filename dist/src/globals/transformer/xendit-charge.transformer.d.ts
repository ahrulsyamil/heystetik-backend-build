import { payment_method } from '@prisma/client';
import { CreateChargeDto } from 'src/xendit/dto/create-charge.dto';
import { XenditCustomerType } from '../constant/enum';
export declare const xenditChargeTransformer: ({ transaction_id, transaction_type, selected_payment, customer, payload, }: {
    transaction_id: string;
    transaction_type: string;
    selected_payment: payment_method;
    customer: {
        id: string;
        fullname: string;
        phone: string;
        type: XenditCustomerType;
        email?: string;
        dob?: any;
        gender?: string;
    };
    payload: CreateChargeDto;
}) => CreateChargeDto;
