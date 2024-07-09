import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInterestSexuallyAndSkinDiseasesSkinGoalsDto } from './dto/create-interest-sexually-and-skin-diseases-skin-goals';
import { Prisma } from '@prisma/client';
export declare class InterestSexuallyAndSkinDiseasesSkinGoalsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateInterestSexuallyAndSkinDiseasesSkinGoalsDto): Promise<void>;
    findAllBy(where: Prisma.interest_sexually_and_skin_diseases_skin_goalsWhereInput): import(".prisma/client").PrismaPromise<import(".prisma/client").interest_sexually_and_skin_diseases_skin_goals[]>;
}
