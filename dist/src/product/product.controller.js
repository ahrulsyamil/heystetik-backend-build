"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9ce710ce-d210-501c-b2bc-23c7a3d21698")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const enum_1 = require("../globals/constant/enum");
const media_1 = require("../globals/constant/media");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_service_1 = require("../media/media.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const page_options_product_dto_1 = require("./dto/page-options-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto.");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService, mediaService) {
        this.productService = productService;
        this.mediaService = mediaService;
    }
    async findAll(pageOptions) {
        const result = await this.productService.findAll(pageOptions);
        result.data = await Promise.all(result.data.map(async (item) => {
            const find = await this.productService.find(item.id);
            return find;
        }));
        return result;
    }
    async create(files, data) {
        if (!files?.image_photos) {
            throw new common_1.BadRequestException('All files are required');
        }
        const mediaPhotos = await this.mediaService.insertMediaData(files.image_photos);
        let productDetail = {};
        if (data.type == enum_1.ProductType.SKINCARE) {
            productDetail = {
                skincare_detail: {
                    create: {
                        ...data.skincare_detail,
                    },
                },
            };
        }
        if (data.type == enum_1.ProductType.DRUGS) {
            productDetail = {
                drug_detail: {
                    create: {
                        ...data.drug_detail,
                    },
                },
            };
        }
        return await this.productService.create({
            name: data.name,
            type: data.type,
            category: data.category,
            display: data.display,
            min_order: data.min_order,
            price: data.price,
            discount_is_active: data.product_is_active,
            discount_type: data.discount_type,
            discount_percentage: data.discount_percentage,
            discount_fix_amount: data.discount_fix_amount,
            product_is_active: data.product_is_active,
            product_stock: data.product_stock,
            product_threshold: data.product_threshold,
            product_sku: data.product_sku,
            shipping_product_weight: data.shipping_product_weight,
            shipping_product_weight_type: data.shipping_product_weight_type,
            shipping_product_size_length: data.shipping_product_size_length,
            shipping_product_size_length_type: data.shipping_product_size_length_type,
            shipping_product_size_width: data.shipping_product_size_width,
            shipping_product_size_width_type: data.shipping_product_size_width_type,
            shipping_product_size_height: data.shipping_product_size_height,
            shipping_product_size_height_type: data.shipping_product_size_height_type,
            shipping: 'none',
            ...productDetail,
            tags: {
                create: data.product_tags.map((tag) => ({
                    tag,
                })),
            },
            media_products: {
                create: mediaPhotos,
            },
        });
    }
    async update(id, files, data) {
        const find = await this.productService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        const mediaPhotos = files?.image_photos
            ? await this.mediaService.insertMediaData(files.image_photos)
            : null;
        const deleteMediaPhotos = files?.image_photos ? { deleteMany: {} } : {};
        const mediaProductPhotos = mediaPhotos
            ? {
                media_products: {
                    ...deleteMediaPhotos,
                    create: mediaPhotos,
                },
            }
            : {};
        let productDetail = {};
        if (data.type == enum_1.ProductType.SKINCARE) {
            productDetail = {
                skincare_detail: {
                    update: {
                        ...data.skincare_detail,
                    },
                },
            };
        }
        if (data.type == enum_1.ProductType.DRUGS) {
            productDetail = {
                drug_detail: {
                    update: {
                        ...data.drug_detail,
                    },
                },
            };
        }
        const productTags = data.product_tags
            ? {
                tags: {
                    deleteMany: {},
                    create: data.product_tags.map((tag) => ({
                        tag,
                    })),
                },
            }
            : {};
        return await this.productService.update(+id, {
            name: data.name,
            type: data.type,
            category: data.category,
            display: data.display,
            min_order: data.min_order,
            price: data.price,
            discount_is_active: data.product_is_active,
            discount_type: data.discount_type,
            discount_percentage: data.discount_percentage,
            discount_fix_amount: data.discount_fix_amount,
            product_is_active: data.product_is_active,
            product_stock: data.product_stock,
            product_threshold: data.product_threshold,
            product_sku: data.product_sku,
            shipping_product_weight: data.shipping_product_weight,
            shipping_product_weight_type: data.shipping_product_weight_type,
            shipping_product_size_length: data.shipping_product_size_length,
            shipping_product_size_length_type: data.shipping_product_size_length_type,
            shipping_product_size_width: data.shipping_product_size_width,
            shipping_product_size_width_type: data.shipping_product_size_width_type,
            shipping_product_size_height: data.shipping_product_size_height,
            shipping_product_size_height_type: data.shipping_product_size_height_type,
            shipping: 'none',
            ...productDetail,
            ...productTags,
            ...mediaProductPhotos,
        });
    }
    async delete(id) {
        const find = await this.productService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        await this.productService.delete(+id);
        return null;
    }
    async getBrandManufacture() {
        const [brands, manufactures] = await Promise.all([
            this.productService.getDistinctSkincareBrand(),
            this.productService.getDistinctDrugManufacture(),
        ]);
        return [...brands, ...manufactures].map((item) => ({
            brand_manufacture: item.brand ?? item.manufacture,
        }));
    }
    async find(id) {
        const find = await this.productService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_product_dto_1.PageOptionsProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [
            {
                name: 'image_photos',
                maxCount: 6,
                dirPath: media_1.MEDIA_PRODUCT_DIR,
            },
        ],
        dirPath: './uploads',
        prefixName: 'product',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [
            {
                name: 'image_photos',
                maxCount: 6,
                dirPath: media_1.MEDIA_PRODUCT_DIR,
            },
        ],
        dirPath: './uploads',
        prefixName: 'product',
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('brand-manufacture'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getBrandManufacture", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "find", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        media_service_1.MediaService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map
//# debugId=9ce710ce-d210-501c-b2bc-23c7a3d21698
