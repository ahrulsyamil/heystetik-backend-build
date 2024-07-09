import { UserEntity } from 'src/users/entities/user.entity';
import { ChatOpeningService } from './chat-opening.service';
import { CreateChatOpeningDto } from './dto/create-chat-opening.dto';
export declare class ChatOpeningController {
    private readonly chatOpeningService;
    constructor(chatOpeningService: ChatOpeningService);
    create(user: UserEntity, createChatOpeningDto: CreateChatOpeningDto): Promise<import(".prisma/client").chat_opening>;
    findOne(user: UserEntity): Promise<import(".prisma/client").chat_opening>;
}
