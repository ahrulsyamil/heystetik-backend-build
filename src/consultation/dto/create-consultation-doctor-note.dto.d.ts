import { RecipeRecomendationSkincareItemsDto } from 'src/recipe-recomendation-skincare/dto/create-recipe-recomendation-skincare.dto';
import { RecipeDrugDto } from './recipe_drug.dto';
export declare class CreateConsultationDoctorNoteDto {
    consultation_id: number;
    customer_id: number;
    profile_verified: boolean;
    name: string;
    gender: string;
    age: number;
    indication: string;
    diagnosis_possibility: string[];
    diagnosis_secondary: string[];
    suggestion: string;
    recomendation_skincare_items: RecipeRecomendationSkincareItemsDto[];
    recomendation_treatment_types: string[];
    recipe_drug_items: RecipeDrugDto[];
}
