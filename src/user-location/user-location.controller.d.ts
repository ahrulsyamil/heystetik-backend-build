import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserLocationDto } from './dto/create-user-location.dto';
import { UserLocationService } from './user-location.service';
export declare class UserLocationController {
    private readonly userLocationService;
    constructor(userLocationService: UserLocationService);
    createOrUpdate(user: UserEntity, data: CreateUserLocationDto): Promise<import(".prisma/client").user_location>;
    find(user: UserEntity): Promise<import(".prisma/client").user_location>;
}
