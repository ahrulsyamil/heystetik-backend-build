import { Job } from 'bull';
import { PushToTopicDto } from 'src/fcm/dto/push-to-topic.dto';
import { FcmService } from 'src/fcm/fcm.service';
export declare class QueueFcmProcessor {
    private readonly fcmService;
    constructor(fcmService: FcmService);
    sendNotificationToTopic(job: Job<PushToTopicDto>): Promise<void>;
}
