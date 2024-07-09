import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInterestConditionCustomerDto } from './dto/create-interest_condition_answers.dto';
export declare class InterestConditionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createInterestConditionCustomerDto: CreateInterestConditionCustomerDto): Promise<void>;
}
