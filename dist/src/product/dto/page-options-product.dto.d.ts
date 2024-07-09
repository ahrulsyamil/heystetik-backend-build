import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { ProductType } from 'src/globals/constant/enum';
export declare class PageOptionsProductDto extends PageOptionsDto {
    category: string[];
    display: string[];
    type: ProductType;
    is_active: boolean;
    brand_manufacture: string[];
    rating: number[];
    dollar_rating: number;
    sort_by: 'created_at' | 'updated_at' | 'rating' | 'dollar_rating' | 'popularity';
}
