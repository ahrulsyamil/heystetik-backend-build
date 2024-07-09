import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserRegistrationStep } from './dto/create-user-registration-step.dto';
import { UpdateUserRegistrationStep } from './dto/update-user-registration-step.dto';
import { Prisma } from '@prisma/client';
export declare class RegistrationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.usersUncheckedCreateInput): Promise<import(".prisma/client").users>;
    updateUser(id: number, data: Prisma.usersUncheckedUpdateInput, media?: {
        media_id: number;
    }): Promise<import(".prisma/client").users>;
    createUserRegistrationStep(data: CreateUserRegistrationStep): Promise<import(".prisma/client").user_registration_step>;
    updateUserRegistrationStep(data: UpdateUserRegistrationStep): Promise<import(".prisma/client").user_registration_step>;
}
