import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserWishlistTreatmentDto } from './dto/create-user-wishlist-treatment.dto';
import { PageOptionUserWishlistTreatmentDto } from './dto/page-options-user-wishlist-treatment.dto';
export declare class UserWishlistTreatmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionUserWishlistTreatmentDto): Promise<PageDto<import(".prisma/client").user_wishlist_treatment & {
        treatment: import(".prisma/client").treatment & {
            media_treatments: (import(".prisma/client").media_treatment & {
                media: import(".prisma/client").media;
            })[];
            clinic: import(".prisma/client").clinic & {
                clinic_operation_hours: import(".prisma/client").clinic_operation_hours[];
                province: import(".prisma/client").provinces;
                city: import(".prisma/client").kota_kabupatens;
            };
            treatment_concerns: (import(".prisma/client").treatment_concern & {
                concern: import(".prisma/client").concern;
            })[];
        };
    }>>;
    find(id: number): Promise<import(".prisma/client").user_wishlist_treatment>;
    findBy(filter: Prisma.user_wishlist_treatmentWhereInput): Promise<import(".prisma/client").user_wishlist_treatment>;
    create(data: CreateUserWishlistTreatmentDto): Promise<import(".prisma/client").user_wishlist_treatment>;
    delete(user_id: number, id: number): Promise<import(".prisma/client").user_wishlist_treatment>;
}
