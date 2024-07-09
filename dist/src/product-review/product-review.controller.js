"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e0a4b74e-3f3f-5f73-ba1d-4a000f691c9f")}catch(e){}}();

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
exports.ProductReviewController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const media_1 = require("../globals/constant/media");
const roles_guard_1 = require("../globals/guards/roles.guard");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
const user_entity_1 = require("../users/entities/user.entity");
const create_product_review_dto_1 = require("./dto/create-product-review.dto");
const product_review_service_1 = require("./product-review.service");
const product_service_1 = require("../product/product.service");
const page_options_product_review_dto_1 = require("./dto/page-options-product-review.dto");
const helpful_product_review_dto_1 = require("./dto/helpful-product-review.dto");
const reply_product_review_dto_1 = require("./dto/reply-product-review.dto");
const media_service_1 = require("../media/media.service");
const skip_guard_decorator_1 = require("../decorators/skip-guard.decorator");
let ProductReviewController = class ProductReviewController {
    constructor(productReviewService, transactionProductService, productService, mediaService) {
        this.productReviewService = productReviewService;
        this.transactionProductService = transactionProductService;
        this.productService = productService;
        this.mediaService = mediaService;
    }
    async Create(user, files, data) {
        if (files.before_conditions.length > 0 &&
            files.after_conditions.length == 0)
            throw new common_1.BadRequestException('After condition is required');
        if (files.after_conditions.length > 0 &&
            files.before_conditions.length == 0)
            throw new common_1.BadRequestException('Before condition is required');
        let mediaBeforeConditions = [];
        let mediaAfterConditions = [];
        if (files.before_conditions.length > 0 &&
            files.after_conditions.length > 0) {
            mediaBeforeConditions = await this.mediaService.insertMediaData(files.before_conditions);
            mediaAfterConditions = await this.mediaService.insertMediaData(files.after_conditions);
        }
        const findTransaction = await this.transactionProductService.find(data.transaction_product_id);
        if (!findTransaction)
            throw new common_1.BadRequestException('Transaction not found');
        if (findTransaction.status != 'SELESAI')
            throw new common_1.BadRequestException('Invalid request on transaction status not SELESAI');
        if (findTransaction.user_id != user.id) {
            throw new common_1.ForbiddenException();
        }
        if (!findTransaction.transaction_product_items.find((x) => x.id == data.transaction_product_item_id))
            throw new common_1.BadRequestException('Invalid transaction item id from transaction id');
        const findReview = await this.productReviewService.findBy({
            transaction_product_item_id: data.transaction_product_item_id,
        });
        if (findReview)
            throw new common_1.BadRequestException('You have given a review');
        const avg_rating = (data.effectiveness_rating +
            data.texture_rating +
            data.packaging_rating) /
            3;
        const product_id = findTransaction.transaction_product_items.find((x) => x.id == data.transaction_product_item_id).product_id;
        data.avg_rating = Number(avg_rating.toFixed(1));
        data.product_id = product_id;
        data.user_id = user.id;
        const prevRating = await this.productReviewService.countSumBy({
            product_id: product_id,
        });
        const newRating = (prevRating._sum.avg_rating ?? 0 + avg_rating) /
            ((prevRating._count.avg_rating ?? 0) + 1);
        await this.productService.updateRating(product_id, Number(newRating.toFixed(1)));
        return await this.productReviewService.create(data, mediaBeforeConditions, mediaAfterConditions);
    }
    async findAll(user, pageOptions) {
        const result = await this.productReviewService.findAll(pageOptions);
        result.data = await Promise.all(result.data.map(async (item) => {
            const helped = await this.productReviewService.findHelpfulBy({
                product_review_id: item.id,
                user_id: user?.id,
            });
            return {
                ...item,
                helped: helped ? true : false,
            };
        }));
        return result;
    }
    async createHelpful(user, data) {
        const find = await this.productReviewService.findHelpfulBy(data);
        if (find) {
            return find;
        }
        data.user_id = user.id;
        return await this.productReviewService.createHelpful(data);
    }
    async deleteHelpful(user, data) {
        const find = await this.productReviewService.findHelpfulBy(data);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        data.user_id = user.id;
        return await this.productReviewService.deleteHelpful(data);
    }
    async reply(user, data) {
        return await this.productReviewService.createReplyReview(data);
    }
    async overview(id) {
        const find = await this.productService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        const result = await this.productReviewService.overview(id);
        return result[0];
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [{ name: 'before_conditions' }, { name: 'after_conditions' }],
        dirPath: media_1.MEDIA_PRODUCT_REVIEW_DIR,
        prefixName: 'product-review',
    })),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Object, create_product_review_dto_1.CreateProductReviewDto]),
    __metadata("design:returntype", Promise)
], ProductReviewController.prototype, "Create", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_product_review_dto_1.PageOptionsProductReviewDto]),
    __metadata("design:returntype", Promise)
], ProductReviewController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/helpful'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        helpful_product_review_dto_1.HelpfulProductReviewDto]),
    __metadata("design:returntype", Promise)
], ProductReviewController.prototype, "createHelpful", null);
__decorate([
    (0, common_1.Delete)('/helpful'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        helpful_product_review_dto_1.HelpfulProductReviewDto]),
    __metadata("design:returntype", Promise)
], ProductReviewController.prototype, "deleteHelpful", null);
__decorate([
    (0, common_1.Post)('/reply'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, reply_product_review_dto_1.ReplyProductReviewDto]),
    __metadata("design:returntype", Promise)
], ProductReviewController.prototype, "reply", null);
__decorate([
    (0, common_1.Get)(':id/overview'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductReviewController.prototype, "overview", null);
ProductReviewController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('solution/product-review'),
    __metadata("design:paramtypes", [product_review_service_1.ProductReviewService,
        transaction_product_service_1.TransactionProductService,
        product_service_1.ProductService,
        media_service_1.MediaService])
], ProductReviewController);
exports.ProductReviewController = ProductReviewController;
//# sourceMappingURL=product-review.controller.js.map
//# debugId=e0a4b74e-3f3f-5f73-ba1d-4a000f691c9f
