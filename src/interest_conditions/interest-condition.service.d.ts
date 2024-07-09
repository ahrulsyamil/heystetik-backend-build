import { CreateInterestConditionsDto } from './dto/create-interest_conditions.dto';
import { UpdateInterestConditionsDto } from './dto/update-interest_conditions.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInterestConditionQuestionsDto } from './dto/create-interest_condition_questions.dto';
import { CreateInterestConditionAnswersDto } from './dto/create-interest_condition_answers.dto';
export declare class InterestConditionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createInterestConditionsDto: CreateInterestConditionsDto): Promise<import(".prisma/client").interest_conditions>;
    createQuestion(requset: CreateInterestConditionQuestionsDto): Promise<import(".prisma/client").interest_conditions_question>;
    createAnswer(request: CreateInterestConditionAnswersDto): Promise<import(".prisma/client").interest_conditions_answer>;
    findAllOld(): Promise<(import(".prisma/client").interest_conditions & {
        media_interest_conditions_characteristics: (import(".prisma/client").media_interest_conditions_characteristics & {
            media: import(".prisma/client").media;
        })[];
        interest_conditions_question: (import(".prisma/client").interest_conditions_question & {
            interest_conditions_answer: import(".prisma/client").interest_conditions_answer[];
        })[];
        concern: import(".prisma/client").concern;
    })[]>;
    findAll(): Promise<any>;
    findAllQuestion(): Promise<(import(".prisma/client").interest_conditions_question & {
        interest_conditions_answer: import(".prisma/client").interest_conditions_answer[];
        interest_conditions: import(".prisma/client").interest_conditions;
    })[]>;
    findAllAnswer(): Promise<(import(".prisma/client").interest_conditions_answer & {
        interest_conditions_question: import(".prisma/client").interest_conditions_question & {
            interest_conditions: import(".prisma/client").interest_conditions;
        };
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").interest_conditions & {
        media_interest_conditions_characteristics: (import(".prisma/client").media_interest_conditions_characteristics & {
            media: import(".prisma/client").media;
        })[];
        interest_conditions_question: (import(".prisma/client").interest_conditions_question & {
            interest_conditions_answer: import(".prisma/client").interest_conditions_answer[];
        })[];
        interest_conditions_characteristics: import(".prisma/client").interest_conditions_characteristics[];
        concern: import(".prisma/client").concern & {
            media_concern: import(".prisma/client").media_concern & {
                media: import(".prisma/client").media;
            };
        };
    }>;
    update(id: number, updateInterestConditionsDto: UpdateInterestConditionsDto): Promise<import(".prisma/client").interest_conditions>;
    remove(id: number): Promise<import(".prisma/client").interest_conditions>;
}
