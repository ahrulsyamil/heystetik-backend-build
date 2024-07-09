import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateRecipeRecomendationSkincareDto } from './dto/create-recipe-recomendation-skincare.dto';
import { UpdateRecipeRecomendationSkincareDto } from './dto/update-recipe-recomendation-skincare.dto';
import { RecipeRecomendationSkincareService } from './recipe-recomendation-skincare.service';
export declare class RecipeRecomendationSkincareController {
    private readonly recipeRecomendationSkincareService;
    constructor(recipeRecomendationSkincareService: RecipeRecomendationSkincareService);
    create(user: UserEntity, createRecipeRecomendationSkincareDto: CreateRecipeRecomendationSkincareDto): Promise<import(".prisma/client").recipe_recomendation_skincare>;
    findAll(user: UserEntity, pageOptionsDto: PageOptionsDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").recipe_recomendation_skincare & {
        recipe_recomendation_skincare_items: (import(".prisma/client").recipe_recomendation_skincare_item & {
            skincare: import(".prisma/client").product & {
                media_products: (import(".prisma/client").media_product & {
                    media: import(".prisma/client").media;
                })[];
                skincare_detail: import(".prisma/client").skincare_details;
                drug_detail: import(".prisma/client").drug_details;
            };
        })[];
    }>>;
    findOne(user: UserEntity, id: number): Promise<import(".prisma/client").recipe_recomendation_skincare & {
        recipe_recomendation_skincare_items: (import(".prisma/client").recipe_recomendation_skincare_item & {
            skincare: import(".prisma/client").product & {
                media_products: (import(".prisma/client").media_product & {
                    media: import(".prisma/client").media;
                })[];
                skincare_detail: import(".prisma/client").skincare_details;
            };
        })[];
    }>;
    update(user: UserEntity, id: number, updateRecipeRecomendationSkincareDto: UpdateRecipeRecomendationSkincareDto): Promise<import(".prisma/client").recipe_recomendation_skincare>;
    remove(user: UserEntity, id: number): Promise<import(".prisma/client").recipe_recomendation_skincare>;
}
