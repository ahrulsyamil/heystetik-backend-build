import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionUserCartTreatmentDto } from './dto/page-options-user-cart-treatment.dto';
import { PageDto } from 'src/decorators/page.dto';
import { Prisma } from '@prisma/client';
import { CreateUserCartTreatmentDto } from './dto/create-user-cart-treatment.dto';
import { UpdateUserCartTreatmentDto } from './dto/update-user-cart-treatment.dto';
export declare class UserCartTreatmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionUserCartTreatmentDto): Promise<PageDto<import(".prisma/client").user_cart_treatment & {
        clinic: import(".prisma/client").clinic & {
            media_clinics: (import(".prisma/client").media_clinic & {
                media: import(".prisma/client").media;
            })[];
            media_clinic_logo: import(".prisma/client").media_clinic_logo & {
                media: import(".prisma/client").media;
            };
        };
        treatement: import(".prisma/client").treatment & {
            media_treatments: (import(".prisma/client").media_treatment & {
                media: import(".prisma/client").media;
            })[];
        };
    }>>;
    find(id: number): Promise<import(".prisma/client").user_cart_treatment>;
    findBy(filter: Prisma.user_cart_treatmentWhereInput): Promise<import(".prisma/client").user_cart_treatment>;
    findManyBy(filter: Prisma.user_cartWhereInput): Promise<import(".prisma/client").user_cart_treatment[]>;
    create(data: CreateUserCartTreatmentDto): Promise<import(".prisma/client").user_cart_treatment>;
    update(id: number, data: UpdateUserCartTreatmentDto): Promise<import(".prisma/client").user_cart_treatment>;
    delete(id: number): Promise<import(".prisma/client").user_cart_treatment>;
    deleteMany(ids: number[]): Promise<Prisma.BatchPayload>;
}
