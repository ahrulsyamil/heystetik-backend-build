import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecipeRecomendationTreatmentDto } from './dto/create-recipe-recomendation-treatment.dto';
import { UpdateRecipeRecomendationTreatmentDto } from './dto/update-recipe-recomendation-treatment.dto';
export declare class RecipeRecomendationTreatmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(doctor_id: number, pageOptionsDto: PageOptionsDto): Promise<PageDto<import(".prisma/client").recipe_recomendation_treatment & {
        recipe_recomendation_treatment_items: import(".prisma/client").recipe_recomendation_treatment_item[];
    }>>;
    create(createRecipeRecomendationTreatmentDto: CreateRecipeRecomendationTreatmentDto): Promise<import(".prisma/client").recipe_recomendation_treatment>;
    findOne(id: number): Promise<import(".prisma/client").recipe_recomendation_treatment & {
        recipe_recomendation_treatment_items: import(".prisma/client").recipe_recomendation_treatment_item[];
    }>;
    update(id: number, updateRecipeRecomendationSkincareDto: UpdateRecipeRecomendationTreatmentDto): Promise<import(".prisma/client").recipe_recomendation_treatment>;
    remove(id: number): Promise<import(".prisma/client").recipe_recomendation_treatment>;
}
