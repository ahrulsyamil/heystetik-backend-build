import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsLookupDto } from './dto/page-options-lookup.dto';
import { Prisma } from '@prisma/client';
import { CreateLookupDto } from './dto/create-lookup.dto';
export declare class LookupService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionsLookupDto): Promise<PageDto<import(".prisma/client").lookup>>;
    create(createDto: CreateLookupDto): Promise<import(".prisma/client").lookup>;
    findBy(where: Prisma.lookupWhereInput): Promise<import(".prisma/client").lookup>;
}
