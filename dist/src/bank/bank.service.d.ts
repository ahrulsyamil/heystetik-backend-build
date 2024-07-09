import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BankService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<import(".prisma/client").bank>>;
}
