import { Prisma, pharmacy } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePharmacistDto } from './dto/create-pharmacist.dto';
import { PageOptionsPharmacistDto } from './dto/page-options-pharmacist.dto';
import { PageOptionsPharmacyDto } from './dto/page-options-pharmacy.dto';
import { UpdatePharmacistDto } from './dto/update-pharmacist.dto';
export declare class PharmacyService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    psefPharmacy(): Promise<pharmacy[]>;
    findAll(pageOptionsDto: PageOptionsPharmacyDto): Promise<PageDto<pharmacy & {
        media_pharmacy_npwp: import(".prisma/client").media_pharmacy_npwp & {
            media: import(".prisma/client").media;
        };
        pharmacy_operation_hours: import(".prisma/client").pharmacy_operation_hours[];
        pharmacists: import(".prisma/client").pharmacist[];
    }>>;
    create(data: Prisma.pharmacyCreateInput): Promise<pharmacy>;
    update(id: number, data: Prisma.pharmacyUpdateInput): Promise<pharmacy>;
    find(id: number): Promise<pharmacy & {
        media_pharmacy_npwp: import(".prisma/client").media_pharmacy_npwp & {
            media: import(".prisma/client").media;
        };
        pharmacy_operation_hours: import(".prisma/client").pharmacy_operation_hours[];
        pharmacists: import(".prisma/client").pharmacist[];
    }>;
    delete(id: number): Promise<pharmacy>;
    findAllPharmacist(pharmacy_id: number, pageOptionsDto: PageOptionsPharmacistDto): Promise<PageDto<import(".prisma/client").pharmacist & {
        pharmacist_schedule: import(".prisma/client").pharmacist_schedule[];
    }>>;
    findPharmacist(id: number): Promise<import(".prisma/client").pharmacist>;
    createPharmacist(data: CreatePharmacistDto): Promise<import(".prisma/client").pharmacist>;
    updatePharmacist(id: number, data: UpdatePharmacistDto): Promise<import(".prisma/client").pharmacist>;
    deletePharmacist(id: number): Promise<import(".prisma/client").pharmacist>;
}
