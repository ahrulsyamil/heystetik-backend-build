/// <reference types="multer" />
import { MediaService } from 'src/media/media.service';
import { CreateProductDto } from './dto/create-product.dto';
import { PageOptionsProductDto } from './dto/page-options-product.dto';
import { UpdateProductDto } from './dto/update-product.dto.';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    private readonly mediaService;
    constructor(productService: ProductService, mediaService: MediaService);
    findAll(pageOptions: PageOptionsProductDto): Promise<any>;
    create(files: {
        image_photos: Express.Multer.File[];
    }, data: CreateProductDto): Promise<import(".prisma/client").product>;
    update(id: string, files: {
        image_photos: Express.Multer.File[];
    }, data: UpdateProductDto): Promise<import(".prisma/client").product>;
    delete(id: string): Promise<any>;
    getBrandManufacture(): Promise<{
        brand_manufacture: any;
    }[]>;
    find(id: string): Promise<import(".prisma/client").product & {
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
}
