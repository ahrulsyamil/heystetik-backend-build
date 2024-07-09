import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsProductDto } from './dto/page-options-product.dto';
import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
export declare class ProductService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(pageOptionsDto: PageOptionsProductDto): Promise<PageDto<any>>;
    create(data: Prisma.productUncheckedCreateInput): Promise<import(".prisma/client").product>;
    update(id: number, data: Prisma.productUncheckedUpdateInput): Promise<import(".prisma/client").product>;
    updateSkincareDetail(id: number, data: Prisma.skincare_detailsUncheckedUpdateInput): Promise<import(".prisma/client").skincare_details>;
    updateDrugDetail(id: number, data: Prisma.drug_detailsUncheckedUpdateInput): Promise<import(".prisma/client").drug_details>;
    delete(id: number): Promise<import(".prisma/client").product>;
    find(id: number): Promise<import(".prisma/client").product & {
        media_products: (import(".prisma/client").media_product & {
            media: import(".prisma/client").media;
        })[];
        product_concerns: import(".prisma/client").product_concern[];
        product_reviews: import(".prisma/client").product_review[];
        tags: import(".prisma/client").product_tags[];
        skincare_detail: import(".prisma/client").skincare_details;
        drug_detail: import(".prisma/client").drug_details;
        product_variants: import(".prisma/client").product_variant[];
    }>;
    updateRating(id: number, rating: number): Promise<import(".prisma/client").product>;
    getProducts(ids: number[]): Promise<import(".prisma/client").product[]>;
    getDistinctSkincareBrand(): Promise<(Prisma.PickArray<Prisma.Skincare_detailsGroupByOutputType, "brand"[]> & {})[]>;
    getDistinctDrugManufacture(): Promise<(Prisma.PickArray<Prisma.Drug_detailsGroupByOutputType, "manufacture"[]> & {})[]>;
}
