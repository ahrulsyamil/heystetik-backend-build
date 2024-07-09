import { Response } from 'express';
import { CreateInterestFaceCorrectiveSkinGoalsDto } from './dto/create-interest_face_corrective_skin_goals.dto';
import { UpdateInterestFaceCorrectiveSkinGoalsDto } from './dto/update-interest_face_corrective_skin_goals.dto';
import { InterestFaceCorrectiveSkinGoalsService } from './interest_face_corrective_skin_goals.service';
export declare class InterestFaceCorrectiveSkinGoalsController {
    private readonly interestFaceCorrectiveSkinGoalsService;
    constructor(interestFaceCorrectiveSkinGoalsService: InterestFaceCorrectiveSkinGoalsService);
    create(response: Response, createInterestFaceCorrectiveSkinGoalsDto: CreateInterestFaceCorrectiveSkinGoalsDto): Response<any, Record<string, any>>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_face_corrective_skin_goals & {
        user_id: import(".prisma/client").users;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__interest_face_corrective_skin_goalsClient<import(".prisma/client").interest_face_corrective_skin_goals & {
        user_id: import(".prisma/client").users;
    }>;
    update(id: string, updateInterestFaceCorrectiveSkinGoalsDto: UpdateInterestFaceCorrectiveSkinGoalsDto): import(".prisma/client").Prisma.Prisma__interest_face_corrective_skin_goalsClient<import(".prisma/client").interest_face_corrective_skin_goals>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__interest_face_corrective_skin_goalsClient<import(".prisma/client").interest_face_corrective_skin_goals>;
}
