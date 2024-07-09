import { Prisma, user_balance } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileDoctorFilterDto } from './dto/profile-doctor-filter.dto';
import { UpdateProfileDoctorDto } from './dto/update-profile-doctor.dto';
import { PageOptionsDoctorReviewDto } from './dto/page-options-doctor-review.dto';
import { PageDto } from 'src/decorators/page.dto';
export declare class ProfileDoctorService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getTotalConsultation(doctor_id: number, filter: ProfileDoctorFilterDto): Promise<number>;
    getTotalActiveDay(doctor_id: number, filter: ProfileDoctorFilterDto): Promise<unknown>;
    getTotalLike(doctor_id: number, filter: ProfileDoctorFilterDto): Promise<Prisma.GetConsultation_reviewAggregateType<{
        where: {
            AND?: Prisma.Enumerable<Prisma.consultationWhereInput>;
            OR?: Prisma.Enumerable<Prisma.consultationWhereInput>;
            NOT?: Prisma.Enumerable<Prisma.consultationWhereInput>;
            id?: number | Prisma.IntFilter;
            doctor_id: number | Prisma.IntFilter;
            customer_id?: number | Prisma.IntFilter;
            transaction_consultation_id?: string | Prisma.StringFilter;
            consultation_doctor_schedule_id?: number | Prisma.IntFilter;
            medical_history_id?: number | Prisma.IntFilter;
            code?: string | Prisma.StringFilter;
            duration?: number | Prisma.IntFilter;
            end_date?: string | Date | Prisma.DateTimeNullableFilter;
            status?: import(".prisma/client").status_consultation | Prisma.Enumstatus_consultationFilter;
            created_by?: number | Prisma.IntNullableFilter;
            updated_by?: number | Prisma.IntNullableFilter;
            created_at?: string | Date | Prisma.DateTimeFilter;
            updated_at?: string | Date | Prisma.DateTimeFilter;
            deleted_at?: string | Date | Prisma.DateTimeNullableFilter;
            doctor?: (Prisma.Without<Prisma.UsersRelationFilter, Prisma.usersWhereInput> & Prisma.usersWhereInput) | (Prisma.Without<Prisma.usersWhereInput, Prisma.UsersRelationFilter> & Prisma.UsersRelationFilter);
            customer?: (Prisma.Without<Prisma.UsersRelationFilter, Prisma.usersWhereInput> & Prisma.usersWhereInput) | (Prisma.Without<Prisma.usersWhereInput, Prisma.UsersRelationFilter> & Prisma.UsersRelationFilter);
            consultation_doctor_schedule?: (Prisma.Without<Prisma.Consultation_doctor_scheduleRelationFilter, Prisma.consultation_doctor_scheduleWhereInput> & Prisma.consultation_doctor_scheduleWhereInput) | (Prisma.Without<Prisma.consultation_doctor_scheduleWhereInput, Prisma.Consultation_doctor_scheduleRelationFilter> & Prisma.Consultation_doctor_scheduleRelationFilter);
            medical_history?: (Prisma.Without<Prisma.Medical_historyRelationFilter, Prisma.medical_historyWhereInput> & Prisma.medical_historyWhereInput) | (Prisma.Without<Prisma.medical_historyWhereInput, Prisma.Medical_historyRelationFilter> & Prisma.Medical_historyRelationFilter);
            chat_room?: (Prisma.Without<Prisma.Chat_roomRelationFilter, Prisma.chat_roomWhereInput> & Prisma.chat_roomWhereInput) | (Prisma.Without<Prisma.chat_roomWhereInput, Prisma.Chat_roomRelationFilter> & Prisma.Chat_roomRelationFilter);
            consultation_recipe_drug?: Prisma.Consultation_recipe_drugListRelationFilter;
            consultation_recomendation_skincare?: Prisma.Consultation_recomendation_skincareListRelationFilter;
            consultation_recomendation_treatment?: Prisma.Consultation_recomendation_treatmentListRelationFilter;
            transaction_consultation?: (Prisma.Without<Prisma.Transaction_consultationRelationFilter, Prisma.transaction_consultationWhereInput> & Prisma.transaction_consultationWhereInput) | (Prisma.Without<Prisma.transaction_consultationWhereInput, Prisma.Transaction_consultationRelationFilter> & Prisma.Transaction_consultationRelationFilter);
            consultation_reviews?: Prisma.Consultation_reviewListRelationFilter;
            consultation_doctor_note?: (Prisma.Without<Prisma.Consultation_doctor_noteRelationFilter, Prisma.consultation_doctor_noteWhereInput> & Prisma.consultation_doctor_noteWhereInput) | (Prisma.Without<Prisma.consultation_doctor_noteWhereInput, Prisma.Consultation_doctor_noteRelationFilter> & Prisma.Consultation_doctor_noteRelationFilter);
            my_journey?: Prisma.My_journeyListRelationFilter;
        };
        _sum: {
            rating: true;
        };
    }>>;
    getSatisfiedRating(doctor_id: number, filter: ProfileDoctorFilterDto): Promise<unknown>;
    getBalance(user_id: number): Promise<user_balance>;
    getProfile(user_id: number): Promise<{
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
    update(user_id: number, data: UpdateProfileDoctorDto, media_user_profile_picture?: {
        media_id: number;
    }): Promise<import(".prisma/client").users>;
    findAllReview(pageOptionsDto: PageOptionsDoctorReviewDto): Promise<PageDto<import(".prisma/client").consultation_review & {
        customer: import(".prisma/client").users;
    }>>;
    getOverviewReview(doctor_id: number): Promise<unknown>;
    getDetailOverviewReview(doctor_id: number): Promise<unknown>;
    findAllDoctorScheduleBy(where: Prisma.doctor_schedulesWhereInput): Promise<(import(".prisma/client").doctor_schedules & {
        doctor_schedule_times: import(".prisma/client").doctor_schedule_time[];
    })[]>;
    findDoctorScheduleBy(where: Prisma.doctor_schedulesWhereInput): Promise<import(".prisma/client").doctor_schedules & {
        doctor_schedule_times: import(".prisma/client").doctor_schedule_time[];
    }>;
    createDoctorSchedule(data: Prisma.doctor_schedulesUncheckedCreateInput): Promise<import(".prisma/client").doctor_schedules>;
    deleteManyDoctorScheduleBy(where: Prisma.doctor_schedulesWhereInput): Promise<Prisma.BatchPayload>;
    upsertDoctorScheduleBy(args: Prisma.doctor_schedulesUpsertArgs): Promise<import(".prisma/client").doctor_schedules>;
}
