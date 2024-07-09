import { CreateInterestBodyCorrectiveSkinGoalsDto } from './dto/create-interest_body_corrective_skin_goals.dto';
import { UpdateInterestBodyCorrectiveSkinGoalsDto } from './dto/update-interest_body_corrective_skin_goals.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class InterestBodyCorrectiveSkinGoalsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createInterestBodyCorrectiveSkinGoalsDto: CreateInterestBodyCorrectiveSkinGoalsDto): Promise<void>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_face_corrective_skin_goals & {
        user_id: import(".prisma/client").users;
    })[]>;
    findOne(id: number): Prisma.Prisma__interest_face_corrective_skin_goalsClient<import(".prisma/client").interest_face_corrective_skin_goals & {
        user_id: import(".prisma/client").users;
    }>;
    update(id: number, updateInterestBodyCorrectiveSkinGoalsDto: UpdateInterestBodyCorrectiveSkinGoalsDto): Prisma.Prisma__interest_face_corrective_skin_goalsClient<import(".prisma/client").interest_face_corrective_skin_goals>;
    remove(id: number): Prisma.Prisma__interest_face_corrective_skin_goalsClient<import(".prisma/client").interest_face_corrective_skin_goals>;
    findAllBy(where: Prisma.interest_body_corrective_skin_goalsWhereInput): import(".prisma/client").PrismaPromise<import(".prisma/client").interest_body_corrective_skin_goals[]>;
}
