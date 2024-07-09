import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserBlockService } from './user-block.service';
import { PageOptionsUserBlockDto } from './dto/page-options-user-block.dto';
export declare class UserBlockController {
    private readonly userBlockService;
    private readonly usersService;
    constructor(userBlockService: UserBlockService, usersService: UsersService);
    findAll(user: UserEntity, pageOption: PageOptionsUserBlockDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").user_block & {
        blocked_user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
    }>>;
    block(user: UserEntity, username: string): Promise<import(".prisma/client").user_block>;
    unblock(user: UserEntity, username: string): Promise<import(".prisma/client").user_block>;
    find(user: UserEntity, username: string): Promise<import(".prisma/client").user_block>;
}
