import { PageOptionsDto } from 'src/decorators/page-options.dto';
export declare class PageOptionsSolutionRecomendationDrugDto extends PageOptionsDto {
    user_id: number;
    product_id: number;
    concern_ids: number[];
    category: string[];
    display: string[];
}
