"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2d3cb248-6116-54aa-8901-1d032d3e8cc9")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionProductController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const product_service_1 = require("../product/product.service");
const user_wishlist_service_1 = require("../user-wishlist/user-wishlist.service");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_solution_product_dto_1 = require("./dto/page-options-solution-product.dto");
const page_options_solution_recently_viewed_dto_1 = require("./dto/page-options-solution-recently-viewed.dto");
const page_options_solution_recipe_drug_dto_1 = require("./dto/page-options-solution-recipe-drug.dto");
const page_options_solution_related_skincare_dto_1 = require("./dto/page-options-solution-related-skincare.dto");
const solution_product_service_1 = require("./solution-product.service");
const page_options_solution_recomendation_skincare_dto_1 = require("./dto/page-options-solution-recomendation-skincare.dto");
const interest_face_corrective_skin_goals_service_1 = require("../interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service");
const interest_body_corrective_skin_goals_service_1 = require("../interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service");
const interest_augmentation_skin_goals_service_1 = require("../interest-augmentation-skin-goals/interest-augmentation-skin-goals.service");
const page_options_solution_dermatologists_choice_skincare_dto_1 = require("./dto/page-options-solution-dermatologists-choice-skincare.dto");
const page_options_solution_recomendation_drug_dto_1 = require("./dto/page-options-solution-recomendation-drug.dto");
const skip_guard_decorator_1 = require("../decorators/skip-guard.decorator");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
let SolutionProductController = class SolutionProductController {
    constructor(solutionProductService, userWishlistService, productService, interestFaceCorrectiveSkinGoalService, interestBodyCorrectiveSkinGoalService, interestAugmentationSkinGoalService, transactionProductService) {
        this.solutionProductService = solutionProductService;
        this.userWishlistService = userWishlistService;
        this.productService = productService;
        this.interestFaceCorrectiveSkinGoalService = interestFaceCorrectiveSkinGoalService;
        this.interestBodyCorrectiveSkinGoalService = interestBodyCorrectiveSkinGoalService;
        this.interestAugmentationSkinGoalService = interestAugmentationSkinGoalService;
        this.transactionProductService = transactionProductService;
    }
    async findAllProduct(pageOptions) {
        return await this.solutionProductService.findAllProduct(pageOptions);
    }
    async findAllRecentlyViewed(user, pageOptions) {
        pageOptions.user_id = user.id;
        return await this.solutionProductService.findAllRecentlyViewed(pageOptions);
    }
    async findAllRelatedSkincare(user, id, pageOptions) {
        const find = await this.solutionProductService.findSkincare(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.type != 'SKINCARE')
            throw new common_1.BadRequestException('Invalid product type');
        pageOptions.user_id = user.id;
        pageOptions.product_id = id;
        return await this.solutionProductService.findAllRelatedSkincare(pageOptions);
    }
    async findAllRecomendationSkincare(user, id, pageOptions) {
        const find = await this.solutionProductService.findSkincare(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.type != 'SKINCARE')
            throw new common_1.BadRequestException('Invalid product type');
        const interestFaceCorrectiveSkinGoals = await this.interestFaceCorrectiveSkinGoalService.findAllBy({
            userId: user.id,
        });
        pageOptions.interest_face_corrective_skin_goals =
            interestFaceCorrectiveSkinGoals.map((item) => item.name_face_corrective);
        const interestBodyCorrectiveSkinGoals = await this.interestBodyCorrectiveSkinGoalService.findAllBy({
            userId: user.id,
        });
        pageOptions.interest_body_corrective_skin_goals =
            interestBodyCorrectiveSkinGoals.map((item) => item.name_body_corrective);
        const interestAugmentationSkinGoals = await this.interestAugmentationSkinGoalService.findAllBy({
            userId: user.id,
        });
        pageOptions.interest_augmentation_skin_goals =
            interestAugmentationSkinGoals.map((item) => item.name_augmentation);
        pageOptions.user_id = user.id;
        pageOptions.product_id = id;
        return await this.solutionProductService.findAllRecomendationSkincare(pageOptions);
    }
    async findAllSkincare(pageOptions) {
        return await this.solutionProductService.findAllSkincare(pageOptions);
    }
    async findAllSkincareDermatologistsChoice(user, pageOptions) {
        const productIds = await this.solutionProductService.getDermatologistsSkincare(user.id);
        pageOptions.product_ids = productIds.map((item) => item.product_id);
        return await this.solutionProductService.findAllDermatologistsChoiceSkincare(pageOptions);
    }
    async findSkincare(user, id) {
        const find = await this.solutionProductService.findSkincare(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        const [findWishlist, countProductSales] = await Promise.all([
            this.userWishlistService.findBy({
                product_id: find.id,
                user_id: user.id,
            }),
            this.transactionProductService.countProductSalesById(find.id),
        ]);
        find.wishlist = findWishlist ? true : false;
        find.sales = +countProductSales._sum.qty;
        return find;
    }
    async findAllDrug(user, pageOptions) {
        pageOptions.customer_id = user.id;
        return await this.solutionProductService.findAllDrug(pageOptions);
    }
    async findDrug(user, id) {
        const find = await this.solutionProductService.findDrug(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        const [findWishlist, countProductSales] = await Promise.all([
            this.userWishlistService.findBy({
                product_id: find.id,
                user_id: user.id,
            }),
            this.transactionProductService.countProductSalesById(find.id),
        ]);
        find.wishlist = findWishlist ? true : false;
        find.sales = +countProductSales._sum.qty;
        return find;
    }
    async findAllDrugRecipe(user, pageOptions) {
        pageOptions.user_id = user.id;
        const data = await this.solutionProductService.findAllDrugRecipe(pageOptions);
        data.data = await Promise.all(data.data.map(async (item) => {
            return {
                ...item,
                product: await this.productService.find(item.product_id),
            };
        }));
        return data;
    }
    async findAllRecomendationDrug(user, id, pageOptions) {
        const find = await this.solutionProductService.findDrug(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.type != 'DRUGS')
            throw new common_1.BadRequestException('Invalid product type');
        pageOptions.user_id = user.id;
        pageOptions.product_id = id;
        pageOptions.concern_ids = find.product_concerns.map((item) => item.concern_id);
        return await this.solutionProductService.findAllRecomendationDrug(pageOptions);
    }
    async findAllProductCategory() {
        return await this.solutionProductService.findAllProductSkincareBrand();
    }
};
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('/product'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_solution_product_dto_1.PageOptionsSolutionProductDto]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllProduct", null);
__decorate([
    (0, common_1.Get)('/recently-viewed'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_recently_viewed_dto_1.PageOptionsSolutionRecentlyViewedDto]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllRecentlyViewed", null);
__decorate([
    (0, common_1.Get)('/skincare/:id/related'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, page_options_solution_related_skincare_dto_1.PageOptionsSolutionRelatedSkincareDto]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllRelatedSkincare", null);
__decorate([
    (0, common_1.Get)('/skincare/:id/recomendation'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, page_options_solution_recomendation_skincare_dto_1.PageOptionsSolutionRecomendationSkincareDto]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllRecomendationSkincare", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('/skincare'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_solution_product_dto_1.PageOptionsSolutionProductDto]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllSkincare", null);
__decorate([
    (0, common_1.Get)('skincare/dermatologists/choice'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_dermatologists_choice_skincare_dto_1.PageOptionsSolutionDermatologistsChoiceSkincareDto]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllSkincareDermatologistsChoice", null);
__decorate([
    (0, common_1.Get)('skincare/:id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findSkincare", null);
__decorate([
    (0, common_1.Get)('/drug'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_product_dto_1.PageOptionsSolutionProductDto]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllDrug", null);
__decorate([
    (0, common_1.Get)('drug/:id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findDrug", null);
__decorate([
    (0, common_1.Get)('/drug-recipe'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_recipe_drug_dto_1.PageOptionsSolutionRecipeDrugDto]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllDrugRecipe", null);
__decorate([
    (0, common_1.Get)('/drug/:id/recomendation'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, page_options_solution_recomendation_drug_dto_1.PageOptionsSolutionRecomendationDrugDto]),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllRecomendationDrug", null);
__decorate([
    (0, common_1.Get)('product/skincare-brand'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SolutionProductController.prototype, "findAllProductCategory", null);
SolutionProductController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer, enum_1.Role.Doctor),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('solution'),
    __metadata("design:paramtypes", [solution_product_service_1.SolutionProductService,
        user_wishlist_service_1.UserWishlistService,
        product_service_1.ProductService,
        interest_face_corrective_skin_goals_service_1.InterestFaceCorrectiveSkinGoalsService,
        interest_body_corrective_skin_goals_service_1.InterestBodyCorrectiveSkinGoalsService,
        interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService,
        transaction_product_service_1.TransactionProductService])
], SolutionProductController);
exports.SolutionProductController = SolutionProductController;
//# sourceMappingURL=solution-product.controller.js.map
//# debugId=2d3cb248-6116-54aa-8901-1d032d3e8cc9
