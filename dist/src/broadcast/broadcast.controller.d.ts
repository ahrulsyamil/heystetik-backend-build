/// <reference types="multer" />
import { MediaService } from 'src/media/media.service';
import { BroadcastService } from './broadcast.service';
import { CreateBroadcastDto } from './dto/create-broadcast.dto';
import { GetCountUserReachBroadcastDto } from './dto/get-count-user-reach-broadcast.dto';
import { PageOptionsBroadcastDto } from './dto/page-options-broadcast.dto';
import { Queue } from 'bull';
import { UpdateBroadcastDto } from './dto/update-broadcast.dto';
export declare class BroadcastController {
    private readonly broadcastService;
    private readonly mediaService;
    private queueTaskSchedule;
    constructor(broadcastService: BroadcastService, mediaService: MediaService, queueTaskSchedule: Queue);
    create(images: Express.Multer.File[], data: CreateBroadcastDto): Promise<import(".prisma/client").broadcast & {
        media_broadcast: import(".prisma/client").media_broadcast & {
            media: import(".prisma/client").media;
        };
        broadcast_targets: (import(".prisma/client").broadcast_target & {
            role: import(".prisma/client").roles;
        })[];
        broadcast_interests: import(".prisma/client").broadcast_interest[];
        broadcast_provinces: (import(".prisma/client").broadcast_province & {
            province: import(".prisma/client").provinces;
        })[];
        broadcast_cities: (import(".prisma/client").broadcast_city & {
            city: import(".prisma/client").kota_kabupatens;
        })[];
    }>;
    findAll(pageOptionsDto: PageOptionsBroadcastDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").broadcast & {
        media_broadcast: import(".prisma/client").media_broadcast & {
            media: import(".prisma/client").media;
        };
        broadcast_targets: (import(".prisma/client").broadcast_target & {
            role: import(".prisma/client").roles;
        })[];
        broadcast_interests: import(".prisma/client").broadcast_interest[];
        broadcast_provinces: (import(".prisma/client").broadcast_province & {
            province: import(".prisma/client").provinces;
        })[];
        broadcast_cities: (import(".prisma/client").broadcast_city & {
            city: import(".prisma/client").kota_kabupatens;
        })[];
    }>>;
    findOne(id: string): Promise<import(".prisma/client").broadcast & {
        media_broadcast: import(".prisma/client").media_broadcast & {
            media: import(".prisma/client").media;
        };
        broadcast_targets: (import(".prisma/client").broadcast_target & {
            role: import(".prisma/client").roles;
        })[];
        broadcast_interests: import(".prisma/client").broadcast_interest[];
        broadcast_provinces: (import(".prisma/client").broadcast_province & {
            province: import(".prisma/client").provinces;
        })[];
        broadcast_cities: (import(".prisma/client").broadcast_city & {
            city: import(".prisma/client").kota_kabupatens;
        })[];
    }>;
    remove(id: string): Promise<any>;
    getUserReach(data: GetCountUserReachBroadcastDto): Promise<number>;
    update(id: string, images: Express.Multer.File[], data: UpdateBroadcastDto): Promise<import(".prisma/client").broadcast>;
}
