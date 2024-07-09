import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStreamSaveDto } from './dto/create-stream-save.dto';
import { PageOptionsSaveStreamDto } from './dto/page-options-save.dto';
export declare class StreamSaveService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateStreamSaveDto): Promise<import(".prisma/client").stream_save>;
    findBy(where: Prisma.stream_likeWhereInput): Promise<import(".prisma/client").stream_save>;
    findAllByUser(pageOptionsDto: PageOptionsSaveStreamDto): Promise<PageDto<import(".prisma/client").stream_save & {
        stream: import(".prisma/client").stream & {
            media_streams: (import(".prisma/client").media_stream & {
                media: import(".prisma/client").media;
            })[];
            stream_poll: import(".prisma/client").stream_poll & {
                stream_pollings: import(".prisma/client").stream_polling[];
                stream_poll_options: import(".prisma/client").stream_poll_option[];
            };
            stream_mentions: import(".prisma/client").stream_mention[];
            user: import(".prisma/client").users & {
                media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                    media: import(".prisma/client").media;
                };
            };
            _count: {
                stream_likes: number;
                stream_comments: number;
                stream_saves: number;
                stream_comment_replies: number;
            };
            stream_hastags: (import(".prisma/client").stream_hashtag & {
                hashtag: import(".prisma/client").hashtag_stream;
            })[];
        };
    }>>;
    delete(data: CreateStreamSaveDto): Promise<import(".prisma/client").stream_save>;
}
