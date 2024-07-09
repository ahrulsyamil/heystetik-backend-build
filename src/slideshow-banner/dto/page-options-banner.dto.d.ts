import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { BannerStatus, BannerType } from 'src/globals/constant/enum';
export declare class PageOptionsBannerDto extends PageOptionsDto {
    type: BannerType[];
    status: BannerStatus[];
}
