import { CreateInterestBudgetSkinGoalsDto } from './dto/create-interest_budget_skin_goals.dto';
import { UpdateInterestBudgetSkinGoalsDto } from './dto/update-interest_budget_skin_goals.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class InterestBudgetSkinGoalsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createInterestBudgetSkinGoalsDto: CreateInterestBudgetSkinGoalsDto): Promise<import(".prisma/client").interest_budget_skin_goals>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_budget_skin_goals & {
        user_id: import(".prisma/client").users;
    })[]>;
    findOne(id: number): Prisma.Prisma__interest_budget_skin_goalsClient<import(".prisma/client").interest_budget_skin_goals & {
        user_id: import(".prisma/client").users;
    }>;
    update(id: number, updateInterestBudgetSkinGoalsDto: UpdateInterestBudgetSkinGoalsDto): Prisma.Prisma__interest_budget_skin_goalsClient<import(".prisma/client").interest_budget_skin_goals>;
    remove(id: number): Prisma.Prisma__interest_budget_skin_goalsClient<import(".prisma/client").interest_budget_skin_goals>;
    findBy(where: Prisma.interest_budget_skin_goalsWhereInput): Prisma.Prisma__interest_budget_skin_goalsClient<import(".prisma/client").interest_budget_skin_goals>;
}
