import { UserCartTreatmentService } from './user-cart-treatment.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionUserCartTreatmentDto } from './dto/page-options-user-cart-treatment.dto';
import { CreateUserCartTreatmentDto } from './dto/create-user-cart-treatment.dto';
import { DeleteManyUserCartTreatmentDto } from './dto/delete-many-user-cart-treatment.dto';
import { TreatmentService } from 'src/treatment/treatment.service';
export declare class UserCartTreatmentController {
    private readonly userCartTreatmentService;
    private readonly treatmentService;
    constructor(userCartTreatmentService: UserCartTreatmentService, treatmentService: TreatmentService);
    findAll(user: UserEntity, pageOptionsDto: PageOptionUserCartTreatmentDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").user_cart_treatment & {
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
    create(user: UserEntity, data: CreateUserCartTreatmentDto): Promise<import(".prisma/client").user_cart_treatment>;
    delete(user: UserEntity, id: number): Promise<import(".prisma/client").user_cart_treatment>;
    deleteMany(user: UserEntity, data: DeleteManyUserCartTreatmentDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
