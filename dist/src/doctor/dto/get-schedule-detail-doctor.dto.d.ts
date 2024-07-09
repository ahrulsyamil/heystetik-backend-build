export declare class GetScheduleDetailDoctorDto {
    status: 'ACTIVE' | 'ONLEAVE' | 'UPCOMING';
    date: Date;
    start_time: Date;
    end_time: Date;
    search: string;
}
