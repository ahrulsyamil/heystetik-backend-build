import { CreateDoctorCustomerSchedulesDto } from './dto/create-doctor_customer_schedules.dto';
import { UpdateDoctorCustomerSchedulesDto } from './dto/update-doctor_customer_schedules.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DoctorCustomerSchedulesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDoctorCustomerSchedulesDto: CreateDoctorCustomerSchedulesDto): Promise<import(".prisma/client").doctor_customer_schedules>;
    findAll(): Promise<(import(".prisma/client").doctor_customer_schedules & {
        customer: import(".prisma/client").users;
        doctor: import(".prisma/client").users;
        doctor_schedule: import(".prisma/client").doctor_schedules;
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").doctor_customer_schedules & {
        customer: import(".prisma/client").users;
        doctor: import(".prisma/client").users;
        doctor_schedule: import(".prisma/client").doctor_schedules;
    }>;
    update(id: number, updateDoctorCustomerSchedulesDto: UpdateDoctorCustomerSchedulesDto): Promise<import(".prisma/client").doctor_customer_schedules>;
    remove(id: number): Promise<import(".prisma/client").doctor_customer_schedules>;
}
