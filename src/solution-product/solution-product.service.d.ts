import { consultation_recipe_drug } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductViewDto } from './dto/create-product-view.dto';
import { PageOptionsSolutionDermatologistsChoiceSkincareDto } from './dto/page-options-solution-dermatologists-choice-skincare.dto';
import { PageOptionsSolutionProductDto } from './dto/page-options-solution-product.dto';
import { PageOptionsSolutionRecentlyViewedDto } from './dto/page-options-solution-recently-viewed.dto';
import { PageOptionsSolutionRecipeDrugDto } from './dto/page-options-solution-recipe-drug.dto';
import { PageOptionsSolutionRecomendationDrugDto } from './dto/page-options-solution-recomendation-drug.dto';
import { PageOptionsSolutionRecomendationSkincareDto } from './dto/page-options-solution-recomendation-skincare.dto';
import { PageOptionsSolutionRelatedSkincareDto } from './dto/page-options-solution-related-skincare.dto';
export declare class SolutionProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllProduct(pageOptionsDto: PageOptionsSolutionProductDto): Promise<PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllSkincare(pageOptionsDto: PageOptionsSolutionProductDto): Promise<PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findSkincare(id: number): Promise<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
    }>;
    findAllDrug(pageOptionsDto: PageOptionsSolutionProductDto): Promise<PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        consultation_recipe_drugs: consultation_recipe_drug[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findDrug(id: number): Promise<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        consultation_recipe_drugs: consultation_recipe_drug[];
        drug_detail: import(".prisma/client").drug_details;
    }>;
    findAllDrugRecipe(pageOptionsDto: PageOptionsSolutionRecipeDrugDto): Promise<PageDto<consultation_recipe_drug>>;
    createProductView(data: ProductViewDto): Promise<import(".prisma/client").product_view>;
    findAllRecentlyViewed(pageOptionsDto: PageOptionsSolutionRecentlyViewedDto): Promise<PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllRelatedSkincare(pageOptionsDto: PageOptionsSolutionRelatedSkincareDto): Promise<PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllRecomendationSkincare(pageOptionsDto: PageOptionsSolutionRecomendationSkincareDto): Promise<PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    getDermatologistsSkincare(customer_id: number): Promise<{
        product_id: number;
    }[]>;
    findAllDermatologistsChoiceSkincare(pageOptionsDto: PageOptionsSolutionDermatologistsChoiceSkincareDto): Promise<PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllRecomendationDrug(pageOptionsDto: PageOptionsSolutionRecomendationDrugDto): Promise<PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllProductSkincareBrand(): Promise<{
        brand: string;
    }[]>;
}
