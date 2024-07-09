import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductReviewDto } from './dto/create-product-review.dto';
import { HelpfulProductReviewDto } from './dto/helpful-product-review.dto';
import { PageOptionsProductReviewDto } from './dto/page-options-product-review.dto';
import { ReplyProductReviewDto } from './dto/reply-product-review.dto';
export declare class ProductReviewService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionsProductReviewDto): Promise<PageDto<import(".prisma/client").product_review & {
        media_before_condition_product_reviews: (import(".prisma/client").media_before_condition_product_review & {
            media: import(".prisma/client").media;
        })[];
        transaction_product_item: import(".prisma/client").transaction_product_item & {
            product: import(".prisma/client").product;
        };
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        _count: {
            product_review_helpfuls: number;
        };
        media_after_condition_product_reviews: (import(".prisma/client").media_after_condition_product_review & {
            media: import(".prisma/client").media;
        })[];
    }>>;
    create(data: CreateProductReviewDto, mediaBeforeConditions?: {
        media_id: number;
    }[], mediaAfterConditions?: {
        media_id: number;
    }[]): Promise<import(".prisma/client").product_review>;
    createHelpful(data: HelpfulProductReviewDto): Promise<import(".prisma/client").product_review_helpful>;
    findHelpfulBy(where: Prisma.product_review_helpfulWhereInput): Promise<import(".prisma/client").product_review_helpful>;
    deleteHelpful(data: HelpfulProductReviewDto): Promise<import(".prisma/client").product_review_helpful>;
    createReplyReview(data: ReplyProductReviewDto): Promise<import(".prisma/client").product_review>;
    findBy(where: Prisma.product_reviewWhereInput): Promise<import(".prisma/client").product_review>;
    countSumBy(where?: Prisma.product_reviewWhereInput): Promise<Prisma.GetProduct_reviewAggregateType<{
        _count: {
            avg_rating: true;
        };
        _sum: {
            avg_rating: true;
        };
        where: Prisma.product_reviewWhereInput;
    }>>;
    overview(id: number): Promise<unknown>;
}
