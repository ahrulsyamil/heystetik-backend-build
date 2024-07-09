import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsUserReviewDto } from './dto/page-options-user-review.dto';
import { PageDto } from 'src/decorators/page.dto';
export declare class UserReviewService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllWaitingReview(pageOptionsDto: PageOptionsUserReviewDto): Promise<PageDto<unknown>>;
    findAllFinishedReview(pageOptionsDto: PageOptionsUserReviewDto): Promise<PageDto<unknown>>;
}
