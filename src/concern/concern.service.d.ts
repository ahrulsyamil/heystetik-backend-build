import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsConcernDto } from './dto/page-options-concern.dto';
import { PageDto } from 'src/decorators/page.dto';
export declare class ConcernService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllOld(pageOptionsDto: PageOptionsConcernDto): Promise<PageDto<import(".prisma/client").concern & {
        media_concern: import(".prisma/client").media_concern & {
            media: import(".prisma/client").media;
        };
    }>>;
    findAll(pageOptionsDto: PageOptionsConcernDto): Promise<PageDto<unknown>>;
    find(id: number): Promise<import(".prisma/client").concern & {
        media_concern: import(".prisma/client").media_concern & {
            media: import(".prisma/client").media;
        };
    }>;
}
