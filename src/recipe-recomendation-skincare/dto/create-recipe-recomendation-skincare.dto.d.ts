export declare class CreateRecipeRecomendationSkincareDto {
    doctor_id: number;
    title: string;
    subtitle: string;
    is_active?: boolean;
    recipe_recomendation_skincare_items: RecipeRecomendationSkincareItemsDto[];
}
export declare class RecipeRecomendationSkincareItemsDto {
    skincare_id: number;
    notes?: string;
    qty: number;
}
