import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { UserService } from './user/user.service';
export declare class AuthService {
    private readonly prisma;
    private readonly userService;
    private readonly configService;
    constructor(prisma: PrismaService, userService: UserService, configService: ConfigService);
    validateToken(token: string): jwt.JwtPayload;
    authenticate(email: string, password: string): Promise<{
        token: string;
        data: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
    }>;
    changePassword(user_id: number, data: ChangePasswordDto): Promise<import(".prisma/client").users>;
    findResetPassword(where: Prisma.reset_passwordWhereInput): Promise<import(".prisma/client").reset_password>;
    forgotPassword(data: ForgotPasswordDto): Promise<import(".prisma/client").reset_password>;
    updateResetPassword(id: number, data: Prisma.reset_passwordUpdateInput): Promise<import(".prisma/client").reset_password>;
    userSession(id: number): Promise<{
        username: string;
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
        id: number;
        email: string;
        role: import(".prisma/client").roles;
        no_phone: string;
        fullname: string;
        gender: string;
    }>;
}
export declare class UserAlreadyExist extends Error {
    name: string;
    message: string;
}
