import { DoctorScheduleStatus } from 'src/globals/constant/enum';
export declare class UpdateScheduleStatusDto {
    status: DoctorScheduleStatus;
    duration: string;
    start_date: Date;
    end_date: Date;
}
