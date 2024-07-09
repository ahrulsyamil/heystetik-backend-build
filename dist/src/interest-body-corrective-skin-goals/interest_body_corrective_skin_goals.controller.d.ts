import { Response } from 'express';
import { CreateInterestBodyCorrectiveSkinGoalsDto } from './dto/create-interest_body_corrective_skin_goals.dto';
import { UpdateInterestBodyCorrectiveSkinGoalsDto } from './dto/update-interest_body_corrective_skin_goals.dto';
import { InterestBodyCorrectiveSkinGoalsService } from './interest_body_corrective_skin_goals.service';
export declare class InterestBodyCorrectiveSkinGoalsController {
    private readonly interestBodyCorrectiveSkinGoalsService;
    constructor(interestBodyCorrectiveSkinGoalsService: InterestBodyCorrectiveSkinGoalsService);
    create(response: Response, createInterestBodyCorrectiveSkinGoalsDto: CreateInterestBodyCorrectiveSkinGoalsDto): Response<any, Record<string, any>>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_face_corrective_skin_goals & {
        user_id: import(".prisma/client").users;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__interest_face_corrective_skin_goalsClient<import(".prisma/client").interest_face_corrective_skin_goals & {
        user_id: import(".prisma/client").users;
    }>;
    update(id: string, updateInterestBodyCorrectiveSkinGoalsDto: UpdateInterestBodyCorrectiveSkinGoalsDto): import(".prisma/client").Prisma.Prisma__interest_face_corrective_skin_goalsClient<import(".prisma/client").interest_face_corrective_skin_goals>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__interest_face_corrective_skin_goalsClient<import(".prisma/client").interest_face_corrective_skin_goals>;
}
