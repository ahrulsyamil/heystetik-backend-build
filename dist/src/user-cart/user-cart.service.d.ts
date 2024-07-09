import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionUserCartDto } from './dto/page-options-user-cart.dto';
import { PageDto } from 'src/decorators/page.dto';
import { Prisma } from '@prisma/client';
import { CreateUserCartDto } from './dto/create-user-cart.dto';
import { UpdateUserCartDto } from './dto/update-user-cart.dto';
export declare class UserCartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionUserCartDto): Promise<PageDto<import(".prisma/client").user_cart & {
        product: import(".prisma/client").product & {
            media_products: (import(".prisma/client").media_product & {
                media: import(".prisma/client").media;
            })[];
            consultation_recipe_drugs: import(".prisma/client").consultation_recipe_drug[];
            skincare_detail: import(".prisma/client").skincare_details;
            drug_detail: import(".prisma/client").drug_details;
        };
    }>>;
    find(id: number): Promise<import(".prisma/client").user_cart>;
    findBy(filter: Prisma.user_cartWhereInput): Promise<import(".prisma/client").user_cart>;
    findManyBy(filter: Prisma.user_cartWhereInput): Promise<import(".prisma/client").user_cart[]>;
    create(data: CreateUserCartDto): Promise<import(".prisma/client").user_cart>;
    update(id: number, data: UpdateUserCartDto): Promise<import(".prisma/client").user_cart>;
    delete(id: number): Promise<import(".prisma/client").user_cart>;
    deleteMany(ids: number[]): Promise<Prisma.BatchPayload>;
}
