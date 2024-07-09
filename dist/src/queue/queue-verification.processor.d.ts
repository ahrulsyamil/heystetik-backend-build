import { Job } from 'bull';
import { QontakService } from 'src/qontak/qontak.service';
import { TelegramMockOtpService } from 'src/telegram-mock-otp/telegram-mock-otp.service';
import { WhatsappCloudService } from 'src/whatsapp-cloud/whatsapp-cloud.service';
export declare class QueueVerificationProcessor {
    private readonly whatsappCloudService;
    private readonly telegramMockOtpService;
    private readonly qontakService;
    constructor(whatsappCloudService: WhatsappCloudService, telegramMockOtpService: TelegramMockOtpService, qontakService: QontakService);
    sendWhatsappCloudVerificationCode(job: Job<{
        mobileNumber: string;
        code: string;
    }>): Promise<void>;
    sendOtp(job: Job<{
        identifier: string;
        otp: string;
    }>): Promise<void>;
    sendQontakWhatsappVerificationCode(job: Job<{
        name: string;
        mobileNumber: string;
        code: string;
    }>): Promise<void>;
}
