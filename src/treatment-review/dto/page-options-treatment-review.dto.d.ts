import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { SortingTypeReview, TopicTreatmentReview } from 'src/globals/constant/enum';
export declare class PageOptionsTreatmentReviewDto extends PageOptionsDto {
    treatment_id: number;
    has_photo: boolean;
    rating: number[];
    sorting_type: SortingTypeReview;
    topic: TopicTreatmentReview[];
}
