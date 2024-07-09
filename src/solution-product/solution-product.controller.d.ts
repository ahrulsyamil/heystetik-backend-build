import { ProductService } from 'src/product/product.service';
import { UserWishlistService } from 'src/user-wishlist/user-wishlist.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsSolutionProductDto } from './dto/page-options-solution-product.dto';
import { PageOptionsSolutionRecentlyViewedDto } from './dto/page-options-solution-recently-viewed.dto';
import { PageOptionsSolutionRecipeDrugDto } from './dto/page-options-solution-recipe-drug.dto';
import { PageOptionsSolutionRelatedSkincareDto } from './dto/page-options-solution-related-skincare.dto';
import { SolutionProductService } from './solution-product.service';
import { PageOptionsSolutionRecomendationSkincareDto } from './dto/page-options-solution-recomendation-skincare.dto';
import { InterestFaceCorrectiveSkinGoalsService } from 'src/interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service';
import { InterestBodyCorrectiveSkinGoalsService } from 'src/interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service';
import { InterestAugmentationSkinGoalsService } from 'src/interest-augmentation-skin-goals/interest-augmentation-skin-goals.service';
import { PageOptionsSolutionDermatologistsChoiceSkincareDto } from './dto/page-options-solution-dermatologists-choice-skincare.dto';
import { PageOptionsSolutionRecomendationDrugDto } from './dto/page-options-solution-recomendation-drug.dto';
import { TransactionProductService } from 'src/transaction-product/transaction-product.service';
export declare class SolutionProductController {
    private readonly solutionProductService;
    private readonly userWishlistService;
    private readonly productService;
    private readonly interestFaceCorrectiveSkinGoalService;
    private readonly interestBodyCorrectiveSkinGoalService;
    private readonly interestAugmentationSkinGoalService;
    private readonly transactionProductService;
    constructor(solutionProductService: SolutionProductService, userWishlistService: UserWishlistService, productService: ProductService, interestFaceCorrectiveSkinGoalService: InterestFaceCorrectiveSkinGoalsService, interestBodyCorrectiveSkinGoalService: InterestBodyCorrectiveSkinGoalsService, interestAugmentationSkinGoalService: InterestAugmentationSkinGoalsService, transactionProductService: TransactionProductService);
    findAllProduct(pageOptions: PageOptionsSolutionProductDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllRecentlyViewed(user: UserEntity, pageOptions: PageOptionsSolutionRecentlyViewedDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllRelatedSkincare(user: UserEntity, id: number, pageOptions: PageOptionsSolutionRelatedSkincareDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllRecomendationSkincare(user: UserEntity, id: number, pageOptions: PageOptionsSolutionRecomendationSkincareDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllSkincare(pageOptions: PageOptionsSolutionProductDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllSkincareDermatologistsChoice(user: UserEntity, pageOptions: PageOptionsSolutionDermatologistsChoiceSkincareDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findSkincare(user: UserEntity, id: number): Promise<any>;
    findAllDrug(user: UserEntity, pageOptions: PageOptionsSolutionProductDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        consultation_recipe_drugs: import(".prisma/client").consultation_recipe_drug[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findDrug(user: UserEntity, id: number): Promise<any>;
    findAllDrugRecipe(user: UserEntity, pageOptions: PageOptionsSolutionRecipeDrugDto): Promise<any>;
    findAllRecomendationDrug(user: UserEntity, id: number, pageOptions: PageOptionsSolutionRecomendationDrugDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: (import(".prisma/client").product_concern & {
            concern: import(".prisma/client").concern;
        })[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
    }>>;
    findAllProductCategory(): Promise<{
        brand: string;
    }[]>;
}
