import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSnipsTipsDto } from './dto/create-snips_tips.dto';
import { PageOptionsSnipTipsDto } from './dto/page-options-snip-tips.dto';
import { UpdateSnipsTipsDto } from './dto/update-snips_tips.dto';
export declare class SnipsTipsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSnipsTipsDto: CreateSnipsTipsDto): Prisma.Prisma__snips_tipsClient<import(".prisma/client").snips_tips>;
    findAll(): Promise<(import(".prisma/client").snips_tips & {
        doctor: {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
            fullname: string;
        };
    })[]>;
    findAllCms(pageOptionsDto: PageOptionsSnipTipsDto): Promise<PageDto<import(".prisma/client").snips_tips & {
        doctor: {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
            fullname: string;
        };
    }>>;
    findOne(id: number): Prisma.Prisma__snips_tipsClient<import(".prisma/client").snips_tips & {
        doctor: import(".prisma/client").users;
    }>;
    getAllPosition(): import(".prisma/client").PrismaPromise<{
        position: number;
    }[]>;
    update(id: number, updateSnipsTipsDto: UpdateSnipsTipsDto): Prisma.Prisma__snips_tipsClient<import(".prisma/client").snips_tips>;
    delete(id: number): Prisma.Prisma__snips_tipsClient<import(".prisma/client").snips_tips>;
}
