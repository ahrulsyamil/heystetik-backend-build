import { ConfigService } from '@nestjs/config';
import { SendOtpDto } from './dto/send-otp.dto';
export declare class TelegramMockOtpService {
    private readonly configService;
    private axios;
    constructor(configService: ConfigService);
    sendOtp(data: SendOtpDto): Promise<any>;
}
