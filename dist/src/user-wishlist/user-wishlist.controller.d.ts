import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserWishlistDto } from './dto/create-user-wishlist.dto';
import { PageOptionUserWishlistDto } from './dto/page-options-user-wishlist.dto';
import { UserWishlistService } from './user-wishlist.service';
export declare class UserWishlistController {
    private readonly userWishlistService;
    constructor(userWishlistService: UserWishlistService);
    findAll(user: UserEntity, pageOptionsDto: PageOptionUserWishlistDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").user_wishlist & {
        product: import(".prisma/client").product & {
            media_products: (import(".prisma/client").media_product & {
                media: import(".prisma/client").media;
            })[];
            consultation_recipe_drugs: import(".prisma/client").consultation_recipe_drug[];
            skincare_detail: import(".prisma/client").skincare_details;
            drug_detail: import(".prisma/client").drug_details;
        };
    }>>;
    create(user: UserEntity, data: CreateUserWishlistDto): Promise<import(".prisma/client").user_wishlist>;
    delete(user: UserEntity, id: number): Promise<import(".prisma/client").user_wishlist>;
}
