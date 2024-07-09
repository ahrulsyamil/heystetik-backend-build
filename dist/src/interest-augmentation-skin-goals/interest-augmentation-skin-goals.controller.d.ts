import { Response } from 'express';
import { CreateInterestAugmentationSkinGoalsDto } from './dto/create-interest_augmentation_skin_goals.dto';
import { UpdateInterestAugmentationSkinGoalsDto } from './dto/update-interest_augmentation_skin_goals.dto';
import { InterestAugmentationSkinGoalsService } from './interest-augmentation-skin-goals.service';
export declare class InterestAugmentationSkinGoalsController {
    private readonly interestAugmentationSkinGoalsService;
    constructor(interestAugmentationSkinGoalsService: InterestAugmentationSkinGoalsService);
    create(response: Response, createInterestAugmentationSkinGoalsDto: CreateInterestAugmentationSkinGoalsDto): Response<any, Record<string, any>>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_augmentation_skin_goals & {
        user_id: import(".prisma/client").users;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__interest_augmentation_skin_goalsClient<import(".prisma/client").interest_augmentation_skin_goals & {
        user_id: import(".prisma/client").users;
    }>;
    update(id: string, updateInterestAugmentationSkinGoalsDto: UpdateInterestAugmentationSkinGoalsDto): import(".prisma/client").Prisma.Prisma__interest_augmentation_skin_goalsClient<import(".prisma/client").interest_augmentation_skin_goals>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__interest_augmentation_skin_goalsClient<import(".prisma/client").interest_augmentation_skin_goals>;
}
