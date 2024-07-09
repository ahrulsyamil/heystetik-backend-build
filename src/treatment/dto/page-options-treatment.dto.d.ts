import { PageOptionsDto } from 'src/decorators/page-options.dto';
export declare class PageOptionsTreatmentDto extends PageOptionsDto {
    is_active: boolean;
    rating: number[];
    category: string[];
    treatment_type: string[];
    clinic_id: number[];
    dollar_rating: number;
    sort_by: 'created_at' | 'updated_at' | 'rating' | 'dollar_rating' | 'popularity';
}
