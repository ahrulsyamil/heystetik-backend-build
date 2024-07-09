import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    closeAccount(user_id: number): Promise<void>;
}
