import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsBroadcastDto } from './dto/page-options-broadcast.dto';
import { PageDto } from 'src/decorators/page.dto';
import { GetCountUserReachBroadcastDto } from './dto/get-count-user-reach-broadcast.dto';
export declare class BroadcastService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(pageOptionsDto: PageOptionsBroadcastDto): Promise<PageDto<import(".prisma/client").broadcast & {
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
    create(data: Prisma.broadcastUncheckedCreateInput): Promise<import(".prisma/client").broadcast & {
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
    find(id: number): Promise<import(".prisma/client").broadcast & {
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
    update(id: number, data: Prisma.broadcastUncheckedUpdateInput, media?: {
        media_id: number;
    }): Promise<import(".prisma/client").broadcast>;
    delete(id: number): Promise<import(".prisma/client").broadcast>;
    getUserReach(where: GetCountUserReachBroadcastDto): Promise<number>;
}
