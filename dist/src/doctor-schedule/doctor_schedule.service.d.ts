import { CreateDoctorScheduleDto } from './dto/create-doctor_schedule.dto';
import { UpdateDoctorScheduleDto } from './dto/update-doctor_schedule.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DoctorScheduleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDoctorScheduleDto: CreateDoctorScheduleDto): Promise<import(".prisma/client").doctor_schedules>;
    findAll(): Promise<(import(".prisma/client").doctor_schedules & {
        user: import(".prisma/client").users;
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").doctor_schedules & {
        user: import(".prisma/client").users;
    }>;
    update(id: number, updateDoctorScheduleDto: UpdateDoctorScheduleDto): Promise<import(".prisma/client").doctor_schedules>;
    remove(id: number): Promise<import(".prisma/client").doctor_schedules>;
    findScheduleByUser(id: number, day_number: number): Promise<import(".prisma/client").doctor_schedules & {
        doctor_schedule_times: import(".prisma/client").doctor_schedule_time[];
    }>;
}
