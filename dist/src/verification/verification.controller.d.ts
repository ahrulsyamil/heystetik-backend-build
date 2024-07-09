import { ConfigService } from '@nestjs/config';
import { Queue } from 'bull';
import { UsersService } from 'src/users/users.service';
import { SendVerificationDto } from './dto/send-verification.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { VerificationService } from './verification.service';
export declare class VerificationController {
    private readonly configService;
    private readonly verificationService;
    private readonly usersService;
    private queueEmail;
    private queueTelegram;
    private queueVerification;
    constructor(configService: ConfigService, verificationService: VerificationService, usersService: UsersService, queueEmail: Queue, queueTelegram: Queue, queueVerification: Queue);
    send(data: SendVerificationDto): Promise<import(".prisma/client").verification_code>;
    verify(data: VerifyOtpDto): Promise<import(".prisma/client").verification_code>;
}
