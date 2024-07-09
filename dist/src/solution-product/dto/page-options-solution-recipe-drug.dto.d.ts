import { product_type } from '@prisma/client';
import { PageOptionsDto } from 'src/decorators/page-options.dto';
export declare class PageOptionsSolutionRecipeDrugDto extends PageOptionsDto {
    user_id: number;
    category: string[];
    display: string[];
    type: product_type;
}
