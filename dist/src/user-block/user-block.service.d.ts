import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlockUnblockUserDto } from './dto/block-unblock-user.dto';
import { PageOptionsUserBlockDto } from './dto/page-options-user-block.dto';
import { PageDto } from 'src/decorators/page.dto';
export declare class UserBlockService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionsUserBlockDto): Promise<PageDto<import(".prisma/client").user_block & {
        blocked_user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
    }>>;
    block(data: BlockUnblockUserDto): Promise<import(".prisma/client").user_block>;
    unblock(data: BlockUnblockUserDto): Promise<import(".prisma/client").user_block>;
    find(where: Prisma.user_blockWhereInput): Promise<import(".prisma/client").user_block>;
}
