import { broadcast, broadcast_city, broadcast_interest, broadcast_province, broadcast_target, kota_kabupatens, media, media_broadcast, provinces, roles, scheduled_task } from '@prisma/client';
import { Job, Queue } from 'bull';
import { BroadcastService } from 'src/broadcast/broadcast.service';
import { NotificationService } from 'src/notification/notification.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskSchedulerService } from 'src/task-scheduler/task-scheduler.service';
export declare class QueueTaskScheduleProcessor {
    private readonly taskSchedulerService;
    private readonly prismaService;
    private readonly notificationService;
    private readonly broadcastService;
    private queueFcm;
    constructor(taskSchedulerService: TaskSchedulerService, prismaService: PrismaService, notificationService: NotificationService, broadcastService: BroadcastService, queueFcm: Queue);
    expireConsultationSchedule(job: Job<scheduled_task>): Promise<void>;
    doctorScheduleStatus(job: Job<{
        doctor_schedule_status: string;
        doctor_schedule_start_date: Date;
        doctor_schedule_end_date: Date;
    }>): Promise<void>;
    scheduledBroadcast(job: Job<broadcast & {
        media_broadcast: media_broadcast & {
            media: media;
        };
        broadcast_interests: broadcast_interest[];
        broadcast_targets: (broadcast_target & {
            role: roles;
        })[];
        broadcast_provinces: (broadcast_province & {
            province: provinces;
        })[];
        broadcast_cities: (broadcast_city & {
            city: kota_kabupatens;
        })[];
    }>): Promise<void>;
}
