import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsClinicDto } from './dto/page-options-clinic.dto';
export declare class ClinicService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAllOld(pageOptionsDto: PageOptionsClinicDto): Promise<PageDto<import(".prisma/client").clinic & {
        media_clinics: (import(".prisma/client").media_clinic & {
            media: import(".prisma/client").media;
        })[];
        media_clinic_logo: import(".prisma/client").media_clinic_logo & {
            media: import(".prisma/client").media;
        };
        province: import(".prisma/client").provinces;
        city: import(".prisma/client").kota_kabupatens;
    }>>;
    findAll(pageOptionsDto: PageOptionsClinicDto): Promise<PageDto<any>>;
    create(data: Prisma.clinicUncheckedCreateInput): Promise<import(".prisma/client").clinic>;
    findOne(id: number): Promise<import(".prisma/client").clinic & {
        media_clinics: (import(".prisma/client").media_clinic & {
            media: import(".prisma/client").media;
        })[];
        media_clinic_logo: import(".prisma/client").media_clinic_logo & {
            media: import(".prisma/client").media;
        };
        clinic_operation_hours: import(".prisma/client").clinic_operation_hours[];
        province: import(".prisma/client").provinces;
        city: import(".prisma/client").kota_kabupatens;
        province_company: import(".prisma/client").provinces;
        city_company: import(".prisma/client").kota_kabupatens;
    }>;
    update(id: number, data: Prisma.clinicUncheckedUpdateInput): Promise<import(".prisma/client").clinic>;
    deleteManyOperationHourBy(where: Prisma.clinic_operation_hoursWhereInput): Promise<Prisma.BatchPayload>;
    delete(id: number): Promise<import(".prisma/client").clinic>;
}
