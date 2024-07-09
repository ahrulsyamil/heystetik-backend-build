import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserWishlistDto } from './dto/create-user-wishlist.dto';
import { PageOptionUserWishlistDto } from './dto/page-options-user-wishlist.dto';
export declare class UserWishlistService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionUserWishlistDto): Promise<PageDto<import(".prisma/client").user_wishlist & {
        product: import(".prisma/client").product & {
            media_products: (import(".prisma/client").media_product & {
                media: import(".prisma/client").media;
            })[];
            consultation_recipe_drugs: import(".prisma/client").consultation_recipe_drug[];
            skincare_detail: import(".prisma/client").skincare_details;
            drug_detail: import(".prisma/client").drug_details;
        };
    }>>;
    find(id: number): Promise<import(".prisma/client").user_wishlist>;
    findBy(filter: Prisma.user_wishlistWhereInput): Promise<import(".prisma/client").user_wishlist>;
    create(data: CreateUserWishlistDto): Promise<import(".prisma/client").user_wishlist>;
    delete(user_id: number, id: number): Promise<import(".prisma/client").user_wishlist>;
}
