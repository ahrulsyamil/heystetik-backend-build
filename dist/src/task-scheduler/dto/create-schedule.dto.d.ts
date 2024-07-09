import { status_scheduled_task } from '@prisma/client';
export declare class CreateScheduleDto {
    task_name: string;
    schedule_time: Date;
    status?: status_scheduled_task;
    data?: object;
}
