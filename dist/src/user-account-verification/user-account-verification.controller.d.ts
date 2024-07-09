/// <reference types="multer" />
import { UserAccountVerificationService } from './user-account-verification.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserAccountVerificationDto } from './dto/create-user-account-verification.dto';
import { MediaService } from 'src/media/media.service';
import { UsersService } from 'src/users/users.service';
export declare class UserAccountVerificationController {
    private readonly userAccountVerificationService;
    private readonly mediaService;
    private readonly usersService;
    constructor(userAccountVerificationService: UserAccountVerificationService, mediaService: MediaService, usersService: UsersService);
    create(user: UserEntity, files: {
        face_photo: Express.Multer.File[];
        id_card_photo: Express.Multer.File[];
    }, data: CreateUserAccountVerificationDto): Promise<import(".prisma/client").user_account_verification>;
}
