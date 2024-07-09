/// <reference types="multer" />
import { TransactionProductService } from 'src/transaction-product/transaction-product.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateProductReviewDto } from './dto/create-product-review.dto';
import { ProductReviewService } from './product-review.service';
import { ProductService } from 'src/product/product.service';
import { PageOptionsProductReviewDto } from './dto/page-options-product-review.dto';
import { HelpfulProductReviewDto } from './dto/helpful-product-review.dto';
import { ReplyProductReviewDto } from './dto/reply-product-review.dto';
import { MediaService } from 'src/media/media.service';
export declare class ProductReviewController {
    private readonly productReviewService;
    private readonly transactionProductService;
    private readonly productService;
    private readonly mediaService;
    constructor(productReviewService: ProductReviewService, transactionProductService: TransactionProductService, productService: ProductService, mediaService: MediaService);
    Create(user: UserEntity, files: {
        before_conditions: Express.Multer.File[];
        after_conditions: Express.Multer.File[];
    }, data: CreateProductReviewDto): Promise<import(".prisma/client").product_review>;
    findAll(user: UserEntity, pageOptions: PageOptionsProductReviewDto): Promise<any>;
    createHelpful(user: UserEntity, data: HelpfulProductReviewDto): Promise<import(".prisma/client").product_review_helpful>;
    deleteHelpful(user: UserEntity, data: HelpfulProductReviewDto): Promise<import(".prisma/client").product_review_helpful>;
    reply(user: UserEntity, data: ReplyProductReviewDto): Promise<import(".prisma/client").product_review>;
    overview(id: number): Promise<any>;
}
