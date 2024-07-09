/// <reference types="multer" />
import { MediaService } from 'src/media/media.service';
import { CreateSlideshowBannerDto } from './dto/create-slideshow_banner.dto';
import { GetPosition } from './dto/get-slidehow_banner.dto';
import { PageOptionsBannerDto } from './dto/page-options-banner.dto';
import { UpdateSlideshowBannerDto } from './dto/update-slideshow_banner.dto';
import { SlideshowBannerService } from './slideshow_banner.service';
export declare class SlideshowBannerController {
    private readonly slideshowBannerService;
    private readonly mediaService;
    constructor(slideshowBannerService: SlideshowBannerService, mediaService: MediaService);
    create(images: Express.Multer.File[], createSlideshowBannerDto: CreateSlideshowBannerDto): Promise<import(".prisma/client").banner>;
    getAllPosition(query: GetPosition): Promise<{
        position: number;
    }[]>;
    findAll(pageOptionsDto: PageOptionsBannerDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").banner & {
        media_banner: import(".prisma/client").media_banner & {
            media: import(".prisma/client").media;
        };
    }>>;
    findOne(id: string): Promise<import(".prisma/client").banner & {
        media_banner: import(".prisma/client").media_banner & {
            media: import(".prisma/client").media;
        };
    }>;
    update(id: string, images: Express.Multer.File[], updateSlideshowBannerDto: UpdateSlideshowBannerDto): Promise<import(".prisma/client").banner>;
    remove(id: string): Promise<any>;
}
