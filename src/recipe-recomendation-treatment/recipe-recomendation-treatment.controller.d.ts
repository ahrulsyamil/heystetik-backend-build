import { RecipeRecomendationTreatmentService } from './recipe-recomendation-treatment.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateRecipeRecomendationTreatmentDto } from './dto/create-recipe-recomendation-treatment.dto';
import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { UpdateRecipeRecomendationTreatmentDto } from './dto/update-recipe-recomendation-treatment.dto';
export declare class RecipeRecomendationTreatmentController {
    private readonly recipeRecomendationTreatmentService;
    constructor(recipeRecomendationTreatmentService: RecipeRecomendationTreatmentService);
    create(user: UserEntity, createRecipeRecomendationTreatmentDto: CreateRecipeRecomendationTreatmentDto): Promise<import(".prisma/client").recipe_recomendation_treatment>;
    findAll(user: UserEntity, pageOptionsDto: PageOptionsDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").recipe_recomendation_treatment & {
        recipe_recomendation_treatment_items: import(".prisma/client").recipe_recomendation_treatment_item[];
    }>>;
    findOne(user: UserEntity, id: number): Promise<import(".prisma/client").recipe_recomendation_treatment & {
        recipe_recomendation_treatment_items: import(".prisma/client").recipe_recomendation_treatment_item[];
    }>;
    update(user: UserEntity, id: number, updateRecipeRecomendationTreatmentDto: UpdateRecipeRecomendationTreatmentDto): Promise<import(".prisma/client").recipe_recomendation_treatment>;
    remove(user: UserEntity, id: number): Promise<import(".prisma/client").recipe_recomendation_treatment>;
}
