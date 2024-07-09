import { PassportSerializer } from '@nestjs/passport';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
export declare class OauthSessionSerializer extends PassportSerializer {
    private readonly userService;
    constructor(userService: UsersService);
    serializeUser(user: UserEntity, done: Function): void;
    deserializeUser(payload: any, done: Function): Promise<any>;
}
