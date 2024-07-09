declare class ScheduleTimeDto {
    start_time: string;
    end_time: string;
}
declare class ConsultationSchedule {
    day_number: number;
    is_active: true;
    schedule_times: ScheduleTimeDto[];
}
export declare class UpdateScheduleDto {
    schedules: ConsultationSchedule[];
}
export {};
