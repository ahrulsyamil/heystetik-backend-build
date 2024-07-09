import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTreatmentReviewDto } from './dto/create-treatment-review.dto';
import { HelpfulTreatmentReviewDto } from './dto/helpful-treatment-review.dto';
import { PageOptionsTreatmentReviewDto } from './dto/page-options-treatment-review.dto';
import { ReplyTreatmentReviewDto } from './dto/reply-treatment-review.dto';
export declare class TreatmentReviewService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionsTreatmentReviewDto): Promise<PageDto<import(".prisma/client").treatment_review & {
        media_treatment_reviews: (import(".prisma/client").media_treatment_review & {
            media: import(".prisma/client").media;
        })[];
        transaction_treatment_item: import(".prisma/client").transaction_treatment_item & {
            treatment: import(".prisma/client").treatment;
        };
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        _count: {
            treatment_review_helpfuls: number;
        };
    }>>;
    create(data: CreateTreatmentReviewDto, media?: {
        media_id: number;
    }[]): Promise<import(".prisma/client").treatment_review>;
    createHelpful(data: HelpfulTreatmentReviewDto): Promise<import(".prisma/client").treatment_review_helpful>;
    findHelpfulBy(where: Prisma.treatment_review_helpfulWhereInput): Promise<import(".prisma/client").treatment_review_helpful>;
    deleteHelpful(data: HelpfulTreatmentReviewDto): Promise<import(".prisma/client").treatment_review_helpful>;
    createReplyReview(data: ReplyTreatmentReviewDto): Promise<import(".prisma/client").treatment_review>;
    findBy(where: Prisma.treatment_reviewWhereInput): Promise<import(".prisma/client").treatment_review>;
    countSumBy(where?: Prisma.treatment_reviewWhereInput): Promise<Prisma.GetTreatment_reviewAggregateType<{
        _count: {
            avg_rating: true;
        };
        _sum: {
            avg_rating: true;
        };
        where: Prisma.treatment_reviewWhereInput;
    }>>;
    overview(id: number): Promise<unknown>;
}
