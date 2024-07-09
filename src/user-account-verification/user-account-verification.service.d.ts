import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserAccountVerificationDto } from './dto/create-user-account-verification.dto';
import { type_user_account_verification } from '@prisma/client';
export declare class UserAccountVerificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserAccountVerificationDto, media: {
        media_id: number;
        type: type_user_account_verification;
    }[]): Promise<import(".prisma/client").user_account_verification>;
    find(id: number): Promise<import(".prisma/client").user_account_verification & {
        media_user_account_verification: (import(".prisma/client").media_user_account_verification & {
            media: import(".prisma/client").media;
        })[];
    }>;
}
