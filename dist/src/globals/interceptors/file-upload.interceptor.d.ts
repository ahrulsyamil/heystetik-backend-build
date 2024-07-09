import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
export declare const FileUploadInterceptor: ({ name, dirPath, prefixName, maxSize, maxCount, }: {
    name: string;
    dirPath: string;
    prefixName?: string;
    maxSize?: number;
    maxCount?: number;
}) => import("@nestjs/common").Type<import("@nestjs/common").NestInterceptor<any, any>>;
export declare const FileUploadFieldsInterceptor: ({ fields, dirPath, prefixName, maxSize, }: {
    fields: (MulterField & {
        dirPath?: string;
    })[];
    dirPath: string;
    prefixName?: string;
    maxSize?: number;
}) => import("@nestjs/common").Type<import("@nestjs/common").NestInterceptor<any, any>>;
