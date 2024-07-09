import { VoucherDiscountType, VoucherPromotionType, VoucherTargetBuyer, VoucherType, VourcherTarget } from 'src/globals/constant/enum';
export declare class CreateVoucherDto {
    type: VoucherType;
    name: string;
    period_start: Date;
    period_end: Date;
    repeat_next_month: boolean;
    repeat_throughout: number;
    target_voucher: VourcherTarget;
    code: string;
    promotion_type: VoucherPromotionType;
    free_shipping_amount: number;
    discount_type: VoucherDiscountType;
    discount_fix_amount: number;
    discount_percentage: number;
    discount_percentage_maximum_amount: number;
    minimum_purchase: number;
    quota: number;
    target_buyer: VoucherTargetBuyer;
}
