/// <reference types="multer" />
declare class ScheduleTimeDto {
    start_time: string;
    end_time: string;
}
declare class ConsultationSchedule {
    day_number: number;
    is_active: true;
    schedule_times: ScheduleTimeDto[];
}
export declare class CreateDoctorDto {
    fullname: string;
    email: string;
    phone: string;
    address: string;
    province_id: number;
    city_id: number;
    education: string;
    practice_location: string;
    join_date: Date;
    title: string;
    sip: string;
    str: string;
    schedules: ConsultationSchedule[];
    image_profile: Express.Multer.File;
    image_id_card: Express.Multer.File;
    image_npwp: Express.Multer.File;
}
export {};
