import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSlideshowBannerDto } from './dto/create-slideshow_banner.dto';
import { PageOptionsBannerDto } from './dto/page-options-banner.dto';
import { UpdateSlideshowBannerDto } from './dto/update-slideshow_banner.dto';
export declare class SlideshowBannerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSlideshowBannerDto: CreateSlideshowBannerDto, media: {
        media_id: number;
    }): Promise<import(".prisma/client").banner>;
    findAll(pageOptionsDto: PageOptionsBannerDto): Promise<PageDto<import(".prisma/client").banner & {
        media_banner: import(".prisma/client").media_banner & {
            media: import(".prisma/client").media;
        };
    }>>;
    getAllPosition(type: string): Promise<{
        position: number;
    }[]>;
    findOne(id: number): Prisma.Prisma__bannerClient<import(".prisma/client").banner & {
        media_banner: import(".prisma/client").media_banner & {
            media: import(".prisma/client").media;
        };
    }>;
    update(updateSlideshowBannerDto: UpdateSlideshowBannerDto, media?: {
        media_id: number;
    }): Promise<import(".prisma/client").banner>;
    remove(id: number): Prisma.Prisma__bannerClient<import(".prisma/client").banner>;
}
