import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserLocationDto } from './dto/create-user-location.dto';
export declare class UserLocationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    find(user_id: number): Promise<import(".prisma/client").user_location>;
    createOrUpdate(data: CreateUserLocationDto): Promise<import(".prisma/client").user_location>;
}
