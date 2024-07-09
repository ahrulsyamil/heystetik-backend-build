import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { RegistrationUserEmailDto } from '../dto/registration-email.dto';
import { RegistrationUserInfoPersonalDto } from '../dto/registration-info-personal.dto';
import { RegistrationUserPhoneDto } from '../dto/registration-phone.dto';
import { RegistrationUserVerify } from '../dto/registration-verify.dto';
export declare class UserService {
    private prismaClient;
    constructor(prismaClient: PrismaService);
    create(user: Prisma.usersCreateInput): Promise<import(".prisma/client").users>;
    createByUserPhone(user: RegistrationUserPhoneDto): Promise<import(".prisma/client").users>;
    updateUserEmail(user: RegistrationUserEmailDto): Promise<import(".prisma/client").users>;
    updateInfoPersonal(user: RegistrationUserInfoPersonalDto, media?: {
        media_id: number;
    }): Promise<RegistrationUserInfoPersonalDto>;
    findOne(user: {
        id?: number;
        email?: string;
    }): Promise<import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
    }>;
    findBy(where: Prisma.usersWhereInput): Promise<import(".prisma/client").users & {
        role: import(".prisma/client").roles;
    }>;
    validateUser(email: string, password: string): Promise<import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
    }>;
    findByPhoneNumber(data: RegistrationUserPhoneDto): Promise<UserEntity>;
    findByEmailUnique(data: RegistrationUserEmailDto): Promise<UserEntity>;
    findByEmail(data: RegistrationUserEmailDto): Promise<UserEntity[]>;
    findById(id: number): Promise<UserEntity>;
    verifyUser(data: RegistrationUserVerify): Promise<void>;
    find(id: number): Promise<import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
        role: import(".prisma/client").roles;
        interest_beauty_profile: import(".prisma/client").interest_beauty_profile;
        interest_face_corrective_skin_goals: import(".prisma/client").interest_face_corrective_skin_goals[];
        interest_body_corrective_skin_goals: import(".prisma/client").interest_body_corrective_skin_goals[];
        interest_augmentation_skin_goals: import(".prisma/client").interest_augmentation_skin_goals[];
        interest_history_treatment_skin_goals: import(".prisma/client").interest_history_treatment_skin_goals[];
        interest_budget_skin_goals: import(".prisma/client").interest_budget_skin_goals[];
    }>;
    findAllBy(where: Prisma.usersWhereInput): Promise<import(".prisma/client").users[]>;
}
