import { CreateInterestBeautyProfileDto } from './dto/create-interest_beauty_profile.dto';
import { UpdateInterestBeautyProfileDto } from './dto/update-interest_beauty_profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class InterestBeautyProfileService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createInterestBeautyProfileDto: CreateInterestBeautyProfileDto): import(".prisma/client").Prisma.Prisma__interest_beauty_profileClient<import(".prisma/client").interest_beauty_profile>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").interest_beauty_profile & {
        user: import(".prisma/client").users;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__interest_beauty_profileClient<import(".prisma/client").interest_beauty_profile & {
        user: import(".prisma/client").users;
    }>;
    update(id: number, updateInterestBeautyProfileDto: UpdateInterestBeautyProfileDto): import(".prisma/client").Prisma.Prisma__interest_beauty_profileClient<import(".prisma/client").interest_beauty_profile>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__interest_beauty_profileClient<import(".prisma/client").interest_beauty_profile>;
    findByUser(user_id: number): import(".prisma/client").Prisma.Prisma__interest_beauty_profileClient<import(".prisma/client").interest_beauty_profile>;
}
