import { CreateInterestBudgetSkinGoalsDto } from './dto/create-interest_budget_skin_goals.dto';
import { UpdateInterestBudgetSkinGoalsDto } from './dto/update-interest_budget_skin_goals.dto';
import { InterestBudgetSkinGoalsService } from './interest_budget_skin_goals.service';
export declare class InterestBudgetSkinGoalsController {
    private readonly interestBudgetSkinGoalsService;
    constructor(interestBudgetSkinGoalsService: InterestBudgetSkinGoalsService);
    create(createInterestBudgetSkinGoalsDto: CreateInterestBudgetSkinGoalsDto): Promise<import(".prisma/client").interest_budget_skin_goals>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_budget_skin_goals & {
        user_id: import(".prisma/client").users;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__interest_budget_skin_goalsClient<import(".prisma/client").interest_budget_skin_goals & {
        user_id: import(".prisma/client").users;
    }>;
    update(id: string, updateInterestBudgetSkinGoalsDto: UpdateInterestBudgetSkinGoalsDto): import(".prisma/client").Prisma.Prisma__interest_budget_skin_goalsClient<import(".prisma/client").interest_budget_skin_goals>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__interest_budget_skin_goalsClient<import(".prisma/client").interest_budget_skin_goals>;
}
