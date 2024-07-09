"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ece301a2-9bb1-543b-b645-80e92d7487c1")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionProductModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../auth/user/user.service");
const prisma_module_1 = require("../prisma/prisma.module");
const product_service_1 = require("../product/product.service");
const user_wishlist_service_1 = require("../user-wishlist/user-wishlist.service");
const solution_product_controller_1 = require("./solution-product.controller");
const solution_product_service_1 = require("./solution-product.service");
const product_view_middleware_1 = require("../globals/middleware/product-view.middleware");
const jwt_1 = require("../globals/helpers/jwt");
const interest_face_corrective_skin_goals_service_1 = require("../interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service");
const interest_body_corrective_skin_goals_service_1 = require("../interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service");
const interest_augmentation_skin_goals_service_1 = require("../interest-augmentation-skin-goals/interest-augmentation-skin-goals.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
let SolutionProductModule = class SolutionProductModule {
    configure(consumer) {
        const productViewRoutes = ['solution/skincare/:id', 'solution/drug/:id'];
        consumer
            .apply(product_view_middleware_1.ProductViewMiddleware)
            .exclude('solution/skincare/dermatologists/choice')
            .forRoutes(...productViewRoutes);
    }
};
SolutionProductModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [solution_product_controller_1.SolutionProductController],
        providers: [
            solution_product_service_1.SolutionProductService,
            user_service_1.UserService,
            product_service_1.ProductService,
            user_wishlist_service_1.UserWishlistService,
            jwt_1.JwtHelper,
            interest_face_corrective_skin_goals_service_1.InterestFaceCorrectiveSkinGoalsService,
            interest_body_corrective_skin_goals_service_1.InterestBodyCorrectiveSkinGoalsService,
            interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService,
            transaction_product_service_1.TransactionProductService,
        ],
    })
], SolutionProductModule);
exports.SolutionProductModule = SolutionProductModule;
//# sourceMappingURL=solution-product.module.js.map
//# debugId=ece301a2-9bb1-543b-b645-80e92d7487c1
