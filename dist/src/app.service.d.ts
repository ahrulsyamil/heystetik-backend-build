import { OnModuleInit } from '@nestjs/common';
import { TaskSchedulerService } from './task-scheduler/task-scheduler.service';
import { SocketService } from './socket/socket.service';
import { MailerService } from '@nestjs-modules/mailer';
import { Queue } from 'bull';
export declare class AppService implements OnModuleInit {
    private readonly taskScheduleService;
    private readonly socketService;
    private readonly mailerService;
    private queueTaskSchedule;
    constructor(taskScheduleService: TaskSchedulerService, socketService: SocketService, mailerService: MailerService, queueTaskSchedule: Queue);
    private isFirstRun;
    items: string[];
    onModuleInit(): Promise<void>;
    listItem(): any;
    addItem(item: string): any;
    sendMail(to: string, code: number): void;
}
