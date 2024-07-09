import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProfileUserDto } from './dto/update-profile-user.dto';
export declare class ProfileUserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getProfile(user_id: number): Promise<{
        username: string;
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
        id: number;
        email: string;
        province: import(".prisma/client").provinces;
        city: import(".prisma/client").kota_kabupatens;
        no_phone: string;
        fullname: string;
        gender: string;
        dob: Date;
        bio: string;
        verified_account_at: Date;
    }>;
    update(user_id: number, data: UpdateProfileUserDto, media?: {
        media_id: number;
    }): Promise<import(".prisma/client").users>;
}
