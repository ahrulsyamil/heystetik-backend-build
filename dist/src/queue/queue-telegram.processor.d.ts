import { Job } from 'bull';
import { SendOtpDto } from 'src/telegram-mock-otp/dto/send-otp.dto';
import { TelegramMockOtpService } from 'src/telegram-mock-otp/telegram-mock-otp.service';
export declare class QueueTelegramProcessor {
    private readonly telegramMockOtpService;
    constructor(telegramMockOtpService: TelegramMockOtpService);
    sendOtp(job: Job<SendOtpDto>): Promise<void>;
}
