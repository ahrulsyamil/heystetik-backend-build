import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { VoucherDiscountType, VoucherPromotionType, VoucherTargetBuyer, VoucherType, VourcherTarget } from 'src/globals/constant/enum';
export declare class PageOptionsVoucherDto extends PageOptionsDto {
    voucher_type: VoucherType[];
    target_voucher: VourcherTarget[];
    promotion_type: VoucherPromotionType[];
    discount_type: VoucherDiscountType[];
    target_buyer: VoucherTargetBuyer[];
}
