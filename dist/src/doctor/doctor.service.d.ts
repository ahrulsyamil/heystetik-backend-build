import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetScheduleDetailDoctorDto } from './dto/get-schedule-detail-doctor.dto';
import { PageOptionsDoctorDto } from './dto/page-options-doctor.dto';
export declare class DoctorService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAllSchedule(): Promise<(import(".prisma/client").doctor_schedules & {
        doctor_schedule_times: import(".prisma/client").doctor_schedule_time[];
        user: import(".prisma/client").users;
    })[]>;
    findAllScheduleGroupTime(): Promise<(Prisma.PickArray<Prisma.Doctor_schedule_timeGroupByOutputType, ("start_time" | "end_time")[]> & {})[]>;
    findAllOnLeaveSchedule(getScheduleDetailDoctor: GetScheduleDetailDoctorDto): Promise<(import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
    })[]>;
    findAllUpComingLeaveSchedule(getScheduleDetailDoctor: GetScheduleDetailDoctorDto): Promise<(import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
    })[]>;
    findAllOnActiveSchedule(getScheduleDetailDoctor: GetScheduleDetailDoctorDto): Promise<(import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
    })[]>;
    findAll(pageOptionsDto: PageOptionsDoctorDto): Promise<PageDto<import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
        doctor_schedules: (import(".prisma/client").doctor_schedules & {
            doctor_schedule_times: import(".prisma/client").doctor_schedule_time[];
        })[];
    }>>;
    create(data: Prisma.usersUncheckedCreateInput): Promise<import(".prisma/client").users>;
    findOne(id: number): Promise<import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
        media_doctor_id_card: import(".prisma/client").media_doctor_id_card & {
            media: import(".prisma/client").media;
        };
        media_doctor_npwp: import(".prisma/client").media_doctor_npwp & {
            media: import(".prisma/client").media;
        };
        doctor_schedules: (import(".prisma/client").doctor_schedules & {
            doctor_schedule_times: import(".prisma/client").doctor_schedule_time[];
        })[];
        province: import(".prisma/client").provinces;
        city: import(".prisma/client").kota_kabupatens;
    }>;
    update(id: number, data: Prisma.usersUncheckedUpdateInput): Promise<import(".prisma/client").users>;
    deleteManyDoctorScheduleBy(where: Prisma.doctor_schedulesWhereInput): Promise<Prisma.BatchPayload>;
    delete(id: number): Promise<import(".prisma/client").users>;
}
