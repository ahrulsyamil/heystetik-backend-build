"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7601533c-c5b8-51a7-b7ec-8b026e81c420")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReviewModule = void 0;
const common_1 = require("@nestjs/common");
const product_review_service_1 = require("./product-review.service");
const product_review_controller_1 = require("./product-review.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
const product_service_1 = require("../product/product.service");
const media_service_1 = require("../media/media.service");
let ProductReviewModule = class ProductReviewModule {
};
ProductReviewModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [product_review_controller_1.ProductReviewController],
        providers: [
            product_review_service_1.ProductReviewService,
            user_service_1.UserService,
            transaction_product_service_1.TransactionProductService,
            product_service_1.ProductService,
            media_service_1.MediaService,
        ],
    })
], ProductReviewModule);
exports.ProductReviewModule = ProductReviewModule;
//# sourceMappingURL=product-review.module.js.map
//# debugId=7601533c-c5b8-51a7-b7ec-8b026e81c420
