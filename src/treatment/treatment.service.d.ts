import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsTreatmentDto } from './dto/page-options-treatment.dto';
export declare class TreatmentService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(pageOptionsDto: PageOptionsTreatmentDto): Promise<PageDto<any>>;
    create(data: Prisma.treatmentUncheckedCreateInput): Promise<import(".prisma/client").treatment>;
    findOne(id: number): Promise<import(".prisma/client").treatment & {
        media_treatments: (import(".prisma/client").media_treatment & {
            media: import(".prisma/client").media;
        })[];
        clinic: import(".prisma/client").clinic;
    }>;
    update(id: number, data: Prisma.treatmentUncheckedUpdateInput): Promise<import(".prisma/client").treatment>;
    delete(id: number): Promise<import(".prisma/client").treatment>;
    findManyBy(where: Prisma.treatmentWhereInput): Promise<(import(".prisma/client").treatment & {
        media_treatments: (import(".prisma/client").media_treatment & {
            media: import(".prisma/client").media;
        })[];
        clinic: import(".prisma/client").clinic;
    })[]>;
    updateRating(id: number, rating: number): Promise<import(".prisma/client").treatment>;
}
