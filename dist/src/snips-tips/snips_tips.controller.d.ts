import { CreateSnipsTipsDto } from './dto/create-snips_tips.dto';
import { PageOptionsSnipTipsDto } from './dto/page-options-snip-tips.dto';
import { UpdateSnipsTipsDto } from './dto/update-snips_tips.dto';
import { SnipsTipsService } from './snips_tips.service';
export declare class SnipsTipsController {
    private readonly snipsTipsService;
    constructor(snipsTipsService: SnipsTipsService);
    create(createSnipsTipsDto: CreateSnipsTipsDto): Promise<import(".prisma/client").snips_tips>;
    findAll(): Promise<(import(".prisma/client").snips_tips & {
        doctor: {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
            fullname: string;
        };
    })[]>;
    findAllCms(pageOptionsDto: PageOptionsSnipTipsDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").snips_tips & {
        doctor: {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
            fullname: string;
        };
    }>>;
    getAllPosition(): Promise<{
        position: number;
    }[]>;
    findOne(id: string): Promise<import(".prisma/client").snips_tips & {
        doctor: import(".prisma/client").users;
    }>;
    update(id: string, updateSnipsTipsDto: UpdateSnipsTipsDto): Promise<import(".prisma/client").snips_tips>;
    remove(id: string): Promise<any>;
}
