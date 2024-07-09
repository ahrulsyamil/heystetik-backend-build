import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { RatingOrder } from 'src/globals/constant/enum';
export declare class PageOptionsDoctorReviewDto extends PageOptionsDto {
    doctor_id: number;
    rating_order: RatingOrder;
    rating: number[];
}
