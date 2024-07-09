import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionUserWishlistTreatmentDto } from './dto/page-options-user-wishlist-treatment.dto';
import { UserWishlistTreatmentService } from './user-wishlist-treatment.service';
import { CreateUserWishlistTreatmentDto } from './dto/create-user-wishlist-treatment.dto';
import { UserLocationService } from 'src/user-location/user-location.service';
export declare class UserWishlistTreatmentController {
    private readonly userWishlistTreatmentService;
    private readonly userLocationService;
    constructor(userWishlistTreatmentService: UserWishlistTreatmentService, userLocationService: UserLocationService);
    findAll(user: UserEntity, pageOptionsDto: PageOptionUserWishlistTreatmentDto): Promise<any>;
    create(user: UserEntity, data: CreateUserWishlistTreatmentDto): Promise<import(".prisma/client").user_wishlist_treatment>;
    delete(user: UserEntity, id: number): Promise<import(".prisma/client").user_wishlist_treatment>;
}
