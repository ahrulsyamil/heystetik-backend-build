import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsTransactionDto } from './dto/page-options-transaction.dto';
import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
export declare class TransactionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionsTransactionDto): Promise<PageDto<unknown>>;
    createTransactionLog(data: Prisma.transaction_logCreateInput): Promise<import(".prisma/client").transaction_log>;
    findTransactionLogBy(where: Prisma.transaction_logWhereInput): Promise<import(".prisma/client").transaction_log>;
}
