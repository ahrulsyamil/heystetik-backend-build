import { Job } from 'bull';
import { WhatsappCloudService } from 'src/whatsapp-cloud/whatsapp-cloud.service';
export declare class QueueWhatsappCloudProcessor {
    private readonly whatsappCloudService;
    constructor(whatsappCloudService: WhatsappCloudService);
    sendVerificationCode(job: Job<{
        mobileNumber: string;
        code: string;
    }>): Promise<void>;
}
