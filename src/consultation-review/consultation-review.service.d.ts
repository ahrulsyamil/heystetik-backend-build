import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConsultationReviewDto } from './dto/create-consultation-review.dto';
import { Prisma } from '@prisma/client';
export declare class ConsultationReviewService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateConsultationReviewDto): Promise<import(".prisma/client").consultation_review>;
    findBy(where: Prisma.consultation_reviewWhereInput): Promise<import(".prisma/client").consultation_review>;
    countSumBy(where?: Prisma.consultation_reviewWhereInput): Promise<Prisma.GetConsultation_reviewAggregateType<{
        _count: {
            rating: true;
        };
        _sum: {
            rating: true;
        };
        where: Prisma.consultation_reviewWhereInput;
    }>>;
}
