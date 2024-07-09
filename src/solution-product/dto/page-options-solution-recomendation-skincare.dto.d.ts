import { PageOptionsDto } from 'src/decorators/page-options.dto';
export declare class PageOptionsSolutionRecomendationSkincareDto extends PageOptionsDto {
    user_id: number;
    product_id: number;
    interest_face_corrective_skin_goals: string[];
    interest_body_corrective_skin_goals: string[];
    interest_augmentation_skin_goals: string[];
    category: string[];
    display: string[];
}
