import { StreamSaveService } from './stream-save.service';
import { StreamService } from 'src/stream/stream.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsSaveStreamDto } from './dto/page-options-save.dto';
import { StreamLikeService } from 'src/stream-like/stream-like.service';
export declare class StreamSaveController {
    private readonly streamSaveService;
    private readonly streamService;
    private readonly streamLikeService;
    constructor(streamSaveService: StreamSaveService, streamService: StreamService, streamLikeService: StreamLikeService);
    isInCircle(streamer_id: number, user_id: number): Promise<boolean>;
    saved(user: UserEntity, pageOptions: PageOptionsSaveStreamDto): Promise<any>;
    save(user: UserEntity, id: number): Promise<import(".prisma/client").stream_save>;
    unsave(user: UserEntity, id: number): Promise<import(".prisma/client").stream_save>;
}
