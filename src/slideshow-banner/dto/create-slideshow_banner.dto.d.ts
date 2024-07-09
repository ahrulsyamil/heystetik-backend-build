/// <reference types="multer" />
export declare class CreateSlideshowBannerDto {
    title: string;
    type: string;
    link: string;
    position: number;
    status: string;
    image: Express.Multer.File;
}
