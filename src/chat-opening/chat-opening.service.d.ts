import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChatOpeningDto } from './dto/create-chat-opening.dto';
export declare class ChatOpeningService {
    private prisma;
    constructor(prisma: PrismaService);
    create(doctor_id: number, createChatOpeningDto: CreateChatOpeningDto): Promise<import(".prisma/client").chat_opening>;
    findOne(doctor_id: number): Promise<import(".prisma/client").chat_opening>;
}
