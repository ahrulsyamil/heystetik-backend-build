import { MediaService } from 'src/media/media.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PageOptionsUserDto } from './dto/page-options-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    private readonly mediaService;
    constructor(usersService: UsersService, mediaService: MediaService);
    findAll(pageOptionsDto: PageOptionsUserDto): Promise<import("../decorators/page.dto").PageDto<{
        username: string;
        is_active: boolean;
        id: number;
        email: string;
        role: import(".prisma/client").roles;
        no_phone: string;
        fullname: string;
        department: string;
    }>>;
    create(data: CreateUserDto): Promise<import(".prisma/client").users & {
        role: import(".prisma/client").roles;
    }>;
    find(id: string): Promise<import(".prisma/client").users & {
        doctor_schedules: import(".prisma/client").doctor_schedules[];
        role: import(".prisma/client").roles;
        province: import(".prisma/client").provinces;
        city: import(".prisma/client").kota_kabupatens;
    }>;
    update(id: string, data: UpdateUserDto): Promise<import(".prisma/client").users>;
    delete(id: string): Promise<any>;
}
