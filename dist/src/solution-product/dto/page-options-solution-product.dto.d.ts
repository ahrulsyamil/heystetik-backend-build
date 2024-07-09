import { product_type } from '@prisma/client';
import { PageOptionsDto } from 'src/decorators/page-options.dto';
export declare class PageOptionsSolutionProductDto extends PageOptionsDto {
    customer_id: number;
    tag: string[];
    display: string[];
    type: product_type;
    concern_ids: number[];
    packaging: string[];
    min_price: number;
    max_price: number;
    category: string[];
    brand: string[];
    classification: string[];
    form: string[];
}
