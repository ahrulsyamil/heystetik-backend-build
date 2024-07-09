import { Response } from 'express';
import { CreateInterestHistoryTreatmentSkinGoalsDto } from './dto/create-interest_history_treatment_skin_goals.dto';
import { UpdateInterestHistoryTreatmentSkinGoalsDto } from './dto/update-interest_history_treatment_skin_goals.dto';
import { InterestHistoryTreatmentSkinGoalsService } from './interest_history_treatment_skin_goals.service';
export declare class InterestHistoryTreatmentSkinGoalsController {
    private readonly interestHistoryTreatmentSkinGoalsService;
    constructor(interestHistoryTreatmentSkinGoalsService: InterestHistoryTreatmentSkinGoalsService);
    create(response: Response, createInterestHistoryTreatmentSkinGoalsDto: CreateInterestHistoryTreatmentSkinGoalsDto): Response<any, Record<string, any>>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_history_treatment_skin_goals & {
        user_id: import(".prisma/client").users;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__interest_history_treatment_skin_goalsClient<import(".prisma/client").interest_history_treatment_skin_goals & {
        user_id: import(".prisma/client").users;
    }>;
    update(id: string, updateInterestHistoryTreatmentSkinGoalsDto: UpdateInterestHistoryTreatmentSkinGoalsDto): import(".prisma/client").Prisma.Prisma__interest_history_treatment_skin_goalsClient<import(".prisma/client").interest_history_treatment_skin_goals>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__interest_history_treatment_skin_goalsClient<import(".prisma/client").interest_history_treatment_skin_goals>;
}
