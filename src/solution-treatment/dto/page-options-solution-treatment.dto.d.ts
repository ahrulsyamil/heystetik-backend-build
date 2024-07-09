import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { OrderByTreatment } from 'src/globals/constant/enum';
export declare class PageOptionsSolutionTreatmentDto extends PageOptionsDto {
    treatment_type: string[];
    rating: number[];
    min_price: number;
    max_price: number;
    order_by: OrderByTreatment;
    open_now: boolean;
    concern_ids: number[];
}
