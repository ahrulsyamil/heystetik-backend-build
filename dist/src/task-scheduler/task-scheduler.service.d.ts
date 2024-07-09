import { Prisma, scheduled_task } from '@prisma/client';
import { Queue } from 'bull';
import { ConsultationService } from 'src/consultation/consultation.service';
import { NotificationService } from 'src/notification/notification.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SocketGateway } from 'src/socket/socket.gateway';
import { SocketService } from 'src/socket/socket.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
export declare class TaskSchedulerService {
    private readonly prisma;
    private readonly consultationService;
    private readonly socketService;
    private readonly notificationService;
    private readonly socketGateway;
    private queueTaskSchedule;
    private queueFcm;
    constructor(prisma: PrismaService, consultationService: ConsultationService, socketService: SocketService, notificationService: NotificationService, socketGateway: SocketGateway, queueTaskSchedule: Queue, queueFcm: Queue);
    createSchedule(data: CreateScheduleDto): Promise<scheduled_task>;
    findManyBy(filter: Prisma.scheduled_taskWhereInput): Promise<scheduled_task[]>;
    updateSchedule(id: number, data: Prisma.scheduled_taskUpdateInput): Promise<scheduled_task>;
    runScheduleTimeOld(scheduleTask: scheduled_task): Promise<void>;
    runScheduleTime(scheduleTask: scheduled_task): Promise<void>;
    runScheduledTask(scheduledTask: scheduled_task): Promise<void>;
    consultationDoctorScheduleExpire(scheduledTask: scheduled_task): Promise<void>;
}
