import { ConfigService } from '@nestjs/config';
export declare class WhatsappCloudService {
    private readonly configService;
    private axios;
    constructor(configService: ConfigService);
    sendTextMessage(mobileNumber: string, message: string): Promise<any>;
    sendVerificationCode(mobileNumber: string, code: string): Promise<any>;
}
