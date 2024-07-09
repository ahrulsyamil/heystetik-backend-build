import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStreamLikeDto } from './dto/create-stream-like.dto';
import { PageOptionsLikeStreamDto } from './dto/page-options-stream.dto';
export declare class StreamLikeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateStreamLikeDto): Promise<import(".prisma/client").stream_like>;
    findBy(where: Prisma.stream_likeWhereInput): Promise<import(".prisma/client").stream_like>;
    findAllByStream(pageOptionsDto: PageOptionsLikeStreamDto): Promise<PageDto<import(".prisma/client").stream_like & {
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
    }>>;
    delete(data: CreateStreamLikeDto): Promise<import(".prisma/client").stream_like>;
}
