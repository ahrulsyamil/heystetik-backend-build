import { PrismaService } from 'src/prisma/prisma.service';
import { SendVerificationDto } from './dto/send-verification.dto';
import { Prisma } from '@prisma/client';
export declare class VerificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: SendVerificationDto): Promise<import(".prisma/client").verification_code>;
    updateManyBy(where: Prisma.verification_codeWhereInput, data: Prisma.verification_codeUpdateInput): Promise<Prisma.BatchPayload>;
    findBy(where: Prisma.verification_codeWhereInput): Promise<import(".prisma/client").verification_code>;
    update(id: number, data: Prisma.verification_codeUpdateInput): Promise<import(".prisma/client").verification_code>;
}
