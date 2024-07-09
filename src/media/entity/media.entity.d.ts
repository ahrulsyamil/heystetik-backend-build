import { BaseEntity } from 'src/globals/entities/base.entity';
export declare class MediaEntity extends BaseEntity {
    filename: string;
    ext: string;
    size: number;
    mime: string;
    path: string;
}
