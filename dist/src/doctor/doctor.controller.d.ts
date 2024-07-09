/// <reference types="multer" />
import { MediaService } from 'src/media/media.service';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { GetScheduleDetailDoctorDto } from './dto/get-schedule-detail-doctor.dto';
import { GetScheduleDoctorDto } from './dto/get-schedule-doctor.dto';
import { PageOptionsDoctorDto } from './dto/page-options-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
export declare class DoctorController {
    private readonly doctorService;
    private readonly mediaService;
    constructor(doctorService: DoctorService, mediaService: MediaService);
    findAllSchedule(getScheduleDoctor: GetScheduleDoctorDto): Promise<any[]>;
    findAllScheduleDetail(getScheduleDetailDoctor: GetScheduleDetailDoctorDto): Promise<(import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
    })[]>;
    findAll(pageOptions: PageOptionsDoctorDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").users & {
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
        doctor_schedules: (import(".prisma/client").doctor_schedules & {
            doctor_schedule_times: import(".prisma/client").doctor_schedule_time[];
        })[];
    }>>;
    create(files: {
        image_profile: Express.Multer.File[];
        image_id_card: Express.Multer.File[];
        image_npwp: Express.Multer.File[];
    }, data: CreateDoctorDto): Promise<import(".prisma/client").users>;
    find(id: string): Promise<import(".prisma/client").users & {
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
    update(files: {
        image_profile: Express.Multer.File[];
        image_id_card: Express.Multer.File[];
        image_npwp: Express.Multer.File[];
    }, id: string, data: UpdateDoctorDto): Promise<import(".prisma/client").users>;
    delete(id: string): Promise<any>;
}
