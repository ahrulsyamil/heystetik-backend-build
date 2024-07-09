import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { VoucherType } from 'src/globals/constant/enum';
export declare class PageOptionsAvailableVoucherDto extends PageOptionsDto {
    user_id: number;
    type: VoucherType[];
}
