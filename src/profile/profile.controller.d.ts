import { ProfileService } from './profile.service';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    closeAccount(user: UserEntity): Promise<void>;
}
