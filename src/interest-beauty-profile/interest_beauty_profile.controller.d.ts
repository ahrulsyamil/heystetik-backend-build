import { CreateInterestBeautyProfileDto } from './dto/create-interest_beauty_profile.dto';
import { UpdateInterestBeautyProfileDto } from './dto/update-interest_beauty_profile.dto';
import { InterestBeautyProfileService } from './interest_beauty_profile.service';
export declare class InterestBeautyProfileController {
    private readonly interestBeautyProfileService;
    constructor(interestBeautyProfileService: InterestBeautyProfileService);
    create(createInterestBeautyProfileDto: CreateInterestBeautyProfileDto): import(".prisma/client").Prisma.Prisma__interest_beauty_profileClient<import(".prisma/client").interest_beauty_profile>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_beauty_profile & {
        user: import(".prisma/client").users;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__interest_beauty_profileClient<import(".prisma/client").interest_beauty_profile & {
        user: import(".prisma/client").users;
    }>;
    update(id: string, updateInterestBeautyProfileDto: UpdateInterestBeautyProfileDto): import(".prisma/client").Prisma.Prisma__interest_beauty_profileClient<import(".prisma/client").interest_beauty_profile>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__interest_beauty_profileClient<import(".prisma/client").interest_beauty_profile>;
}
