import { PageOptionsDto } from 'src/decorators/page-options.dto';
export declare class PageOptionsClinicDto extends PageOptionsDto {
    is_active: boolean;
    rating: number[];
    treatment_type: string[];
    dollar_rating: number;
    sort_by: 'created_at' | 'updated_at' | 'rating' | 'dollar_rating' | 'popularity';
}
