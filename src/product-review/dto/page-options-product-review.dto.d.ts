import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { SortingTypeReview, TopicProductReview } from 'src/globals/constant/enum';
export declare class PageOptionsProductReviewDto extends PageOptionsDto {
    product_id: number;
    has_photo: boolean;
    rating: number[];
    sorting_type: SortingTypeReview;
    topic: TopicProductReview[];
}
