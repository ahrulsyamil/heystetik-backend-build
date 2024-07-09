import { CreateInterestHistoryTreatmentSkinGoalsDto } from './dto/create-interest_history_treatment_skin_goals.dto';
import { UpdateInterestHistoryTreatmentSkinGoalsDto } from './dto/update-interest_history_treatment_skin_goals.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class InterestHistoryTreatmentSkinGoalsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createInterestHistoryTreatmentSkinGoalsDto: CreateInterestHistoryTreatmentSkinGoalsDto): Promise<void>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_history_treatment_skin_goals & {
        user_id: import(".prisma/client").users;
    })[]>;
    findOne(id: number): Prisma.Prisma__interest_history_treatment_skin_goalsClient<import(".prisma/client").interest_history_treatment_skin_goals & {
        user_id: import(".prisma/client").users;
    }>;
    update(id: number, updateInterestHistoryTreatmentSkinGoalsDto: UpdateInterestHistoryTreatmentSkinGoalsDto): Prisma.Prisma__interest_history_treatment_skin_goalsClient<import(".prisma/client").interest_history_treatment_skin_goals>;
    remove(id: number): Prisma.Prisma__interest_history_treatment_skin_goalsClient<import(".prisma/client").interest_history_treatment_skin_goals>;
    findAllBy(where: Prisma.interest_history_treatment_skin_goalsWhereInput): import(".prisma/client").PrismaPromise<import(".prisma/client").interest_history_treatment_skin_goals[]>;
}
