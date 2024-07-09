import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsMinheyTransactionDto } from './dto/page-options-minhey-transaction-dto';
import { PageDto } from 'src/decorators/page.dto';
export declare class MinheyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllTransaction(pageOptionsDto: PageOptionsMinheyTransactionDto): Promise<PageDto<unknown>>;
}
