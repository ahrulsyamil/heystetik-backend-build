import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsUserDto } from './dto/page-options-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionsUserDto): Promise<PageDto<{
        username: string;
        is_active: boolean;
        id: number;
        email: string;
        role: import(".prisma/client").roles;
        no_phone: string;
        fullname: string;
        department: string;
    }>>;
    create(createUserDto: Prisma.usersUncheckedCreateInput): Promise<import(".prisma/client").users & {
        role: import(".prisma/client").roles;
    }>;
    findOne(id: number): Promise<import(".prisma/client").users & {
        doctor_schedules: import(".prisma/client").doctor_schedules[];
        role: import(".prisma/client").roles;
        province: import(".prisma/client").provinces;
        city: import(".prisma/client").kota_kabupatens;
    }>;
    findBy(where: Prisma.usersWhereInput): Promise<import(".prisma/client").users>;
    findByEmail(email: string): Promise<import(".prisma/client").users & {
        role: import(".prisma/client").roles;
    }>;
    updateDoctorRating(id: number, rating: number): Promise<import(".prisma/client").users>;
    updateUser(id: number, data: Prisma.usersUncheckedUpdateInput): Promise<import(".prisma/client").users>;
    delete(id: number): Promise<import(".prisma/client").users>;
}
