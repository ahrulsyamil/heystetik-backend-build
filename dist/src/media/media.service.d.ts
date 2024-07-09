/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
/// <reference types="multer" />
import { PrismaService } from '../../src/prisma/prisma.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { CreateMediaChatMessageDto } from './dto/create-media-chat-message.dto';
import { Prisma } from '@prisma/client';
export declare class MediaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createMedia(createMediaDto: CreateMediaDto): Promise<import(".prisma/client").media>;
    createManyMedia(createMediaDto: CreateMediaDto[]): Promise<Prisma.BatchPayload>;
    findMediaById(id: number): Promise<import(".prisma/client").media>;
    createMediaChatMessage(createMediaChatMessageDto: CreateMediaChatMessageDto): Promise<import(".prisma/client").media_chat_message>;
    deleteMediaMyJourney(where: Prisma.media_my_journeyWhereInput): Promise<Prisma.BatchPayload>;
    createMediaMyJourney(data: Prisma.media_my_journeyUncheckedCreateInput): Promise<import(".prisma/client").media_my_journey>;
    insertMediaData: (files: Express.Multer.File[]) => Promise<{
        media_id: number;
    }[]>;
}
