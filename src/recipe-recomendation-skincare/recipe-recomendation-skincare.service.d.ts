import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecipeRecomendationSkincareDto } from './dto/create-recipe-recomendation-skincare.dto';
import { UpdateRecipeRecomendationSkincareDto } from './dto/update-recipe-recomendation-skincare.dto';
export declare class RecipeRecomendationSkincareService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(doctor_id: number, pageOptionsDto: PageOptionsDto): Promise<PageDto<import(".prisma/client").recipe_recomendation_skincare & {
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
    create(createRecipeRecomendationSkincareDto: CreateRecipeRecomendationSkincareDto): Promise<import(".prisma/client").recipe_recomendation_skincare>;
    findOne(id: number): Promise<import(".prisma/client").recipe_recomendation_skincare & {
        recipe_recomendation_skincare_items: (import(".prisma/client").recipe_recomendation_skincare_item & {
            skincare: import(".prisma/client").product & {
                media_products: (import(".prisma/client").media_product & {
                    media: import(".prisma/client").media;
                })[];
                skincare_detail: import(".prisma/client").skincare_details;
            };
        })[];
    }>;
    update(id: number, updateRecipeRecomendationSkincareDto: UpdateRecipeRecomendationSkincareDto): Promise<import(".prisma/client").recipe_recomendation_skincare>;
    remove(id: number): Promise<import(".prisma/client").recipe_recomendation_skincare>;
}
