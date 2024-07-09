import { PageOptionsDto } from 'src/decorators/page-options.dto';
export declare class PageOptionsSolutionTreatmentDoctorRecomendationDto extends PageOptionsDto {
    treatment_type: string[];
    method: string[];
    min_price: number;
    max_price: number;
    concern_ids: number[];
}
