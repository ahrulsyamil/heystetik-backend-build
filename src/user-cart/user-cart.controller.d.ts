import { UserCartService } from './user-cart.service';
import { PageOptionUserCartDto } from './dto/page-options-user-cart.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserCartDto } from './dto/create-user-cart.dto';
import { DeleteManyUserCartDto } from './dto/delete-many-user-cart.dto';
import { UpdateUserCartDto } from './dto/update-user-cart.dto';
export declare class UserCartController {
    private readonly userCartService;
    constructor(userCartService: UserCartService);
    findAll(user: UserEntity, pageOptionsDto: PageOptionUserCartDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").user_cart & {
        product: import(".prisma/client").product & {
            media_products: (import(".prisma/client").media_product & {
                media: import(".prisma/client").media;
            })[];
            consultation_recipe_drugs: import(".prisma/client").consultation_recipe_drug[];
            skincare_detail: import(".prisma/client").skincare_details;
            drug_detail: import(".prisma/client").drug_details;
        };
    }>>;
    create(user: UserEntity, data: CreateUserCartDto): Promise<import(".prisma/client").user_cart>;
    update(user: UserEntity, id: number, data: UpdateUserCartDto): Promise<import(".prisma/client").user_cart>;
    delete(user: UserEntity, id: number): Promise<import(".prisma/client").user_cart>;
    deleteMany(user: UserEntity, data: DeleteManyUserCartDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
