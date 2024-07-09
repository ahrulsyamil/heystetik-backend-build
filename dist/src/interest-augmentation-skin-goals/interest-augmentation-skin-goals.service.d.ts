import { CreateInterestAugmentationSkinGoalsDto } from './dto/create-interest_augmentation_skin_goals.dto';
import { UpdateInterestAugmentationSkinGoalsDto } from './dto/update-interest_augmentation_skin_goals.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class InterestAugmentationSkinGoalsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createInterestAugmentationSkinGoalsDto: CreateInterestAugmentationSkinGoalsDto): Promise<void>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_augmentation_skin_goals & {
        user_id: import(".prisma/client").users;
    })[]>;
    findOne(id: number): Prisma.Prisma__interest_augmentation_skin_goalsClient<import(".prisma/client").interest_augmentation_skin_goals & {
        user_id: import(".prisma/client").users;
    }>;
    update(id: number, updateInterestAugmentationSkinGoalsDto: UpdateInterestAugmentationSkinGoalsDto): Prisma.Prisma__interest_augmentation_skin_goalsClient<import(".prisma/client").interest_augmentation_skin_goals>;
    remove(id: number): Prisma.Prisma__interest_augmentation_skin_goalsClient<import(".prisma/client").interest_augmentation_skin_goals>;
    findAllBy(where: Prisma.interest_augmentation_skin_goalsWhereInput): import(".prisma/client").PrismaPromise<import(".prisma/client").interest_augmentation_skin_goals[]>;
}
