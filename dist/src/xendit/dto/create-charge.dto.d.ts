import { MethodOfPayment, XenditCustomerType, XenditPaymentMethodReusability } from 'src/globals/constant/enum';
declare class CustomerIndividualDetail {
    given_names: string;
    surname?: string;
    nationality?: string;
    place_of_birth?: string;
    date_of_birth?: string;
    gender?: string;
}
declare class Customer {
    reference_id: string;
    type: XenditCustomerType;
    individual_detail: CustomerIndividualDetail;
    email?: string;
    mobile_number?: string;
}
declare class XenditVirtualAccountChannelProperties {
    customer_name: string;
    virtual_account_number?: string;
    suggested_amount?: number;
    expires_at?: string;
}
declare class XenditVirtualAccount {
    channel_code: string;
    channel_properties: XenditVirtualAccountChannelProperties;
}
declare class XenditEwalletChannelPropertiesOvo {
    mobile_number: string;
}
declare class XenditEwalletChannelPropertiesShopeePay {
    success_return_url: string;
}
declare class XenditEwallet {
    channel_code: string;
    channel_properties: XenditEwalletChannelPropertiesOvo | XenditEwalletChannelPropertiesShopeePay;
}
declare class XenditQrCodeChannelProperties {
    expires_at: string;
}
declare class XenditQrCode {
    channel_code?: string;
    channel_properties: XenditQrCodeChannelProperties;
}
export declare class XenditPaymentMethod {
    type: MethodOfPayment;
    reusability: XenditPaymentMethodReusability;
    reference_id?: string;
    virtual_account?: XenditVirtualAccount;
    ewallet?: XenditEwallet;
    qr_code?: XenditQrCode;
}
export declare class CreateChargeDto {
    reference_id: string;
    country: string;
    currency: string;
    amount: number;
    customer?: Customer;
    payment_method?: XenditPaymentMethod;
}
export {};
