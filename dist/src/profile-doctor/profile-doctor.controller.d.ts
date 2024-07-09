/// <reference types="multer" />
import { users } from '@prisma/client';
import { MediaService } from 'src/media/media.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { PageOptionsDoctorReviewDto } from './dto/page-options-doctor-review.dto';
import { ProfileDoctorFilterDto } from './dto/profile-doctor-filter.dto';
import { UpdateProfileDoctorDto } from './dto/update-profile-doctor.dto';
import { UpdateScheduleStatusDto } from './dto/update-schedule-status.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ProfileDoctorService } from './profile-doctor.service';
import { Queue } from 'bull';
export declare class ProfileDoctorController {
    private readonly profileDoctorService;
    private readonly mediaService;
    private readonly usersService;
    private queueTaskSchedule;
    constructor(profileDoctorService: ProfileDoctorService, mediaService: MediaService, usersService: UsersService, queueTaskSchedule: Queue);
    statistic(user: UserEntity, filter: ProfileDoctorFilterDto): Promise<{
        consultation: number;
        active_day: any;
        likes: number;
        rating: any;
    }>;
    profile(user: UserEntity): Promise<{
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
        email: string;
        no_phone: string;
        fullname: string;
        gender: string;
        dob: Date;
        education: string;
        practice_location: string;
        sip: string;
        str: string;
        specialist: string;
    }>;
    update(user: UserEntity, files: Express.Multer.File[], data: UpdateProfileDoctorDto): Promise<users>;
    getReview(user: UserEntity, pageOptionsDto: PageOptionsDoctorReviewDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").consultation_review & {
        customer: users;
    }>>;
    getOverviewReview(user: UserEntity): Promise<any>;
    getDetailOverviewReview(user: UserEntity): Promise<any>;
    getScheduleStatus(user: users): Promise<{
        status: string;
        start_date: Date;
        end_date: Date;
        today_consultation_schedule: any;
        resting_duration: any;
        resting_duration_time: string;
    }>;
    updateScheduleStatus(user: users, data: UpdateScheduleStatusDto): Promise<void>;
    customSort(a: {
        day_number: number;
    }, b: {
        day_number: number;
    }): number;
    getSchedule(user: users): Promise<any>;
    updateSchedule(user: users, data: UpdateScheduleDto): Promise<void>;
}
