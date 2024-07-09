import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { BroadcastStatus } from 'src/globals/constant/enum';
export declare class PageOptionsBroadcastDto extends PageOptionsDto {
    status: BroadcastStatus[];
}
