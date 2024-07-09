import { Job } from 'bull';
import { ChangePhoneNumberDataDto } from 'src/mail/dto/chage-phone-number-data.dto';
import { ChangeEmailDataDto } from 'src/mail/dto/change-email-data.dto';
import { ChangePasswordDto } from 'src/mail/dto/change-password.dto';
import { RegistrationDataEmailDto } from 'src/mail/dto/registration-data.dto';
import { ReportStreamDataDto } from 'src/mail/dto/report-stream-data.dto';
import { MailService } from 'src/mail/mail.service';
export declare class QueueEmailProcessor {
    private readonly mailService;
    constructor(mailService: MailService);
    sendEmailVerifyRegistration(job: Job<{
        email: string;
        data: RegistrationDataEmailDto;
    }>): Promise<void>;
    sendEmailVerifyChangeEmail(job: Job<{
        email: string;
        data: ChangeEmailDataDto;
    }>): Promise<void>;
    sendEmailVerifyChangePhoneNumber(job: Job<{
        email: string;
        data: ChangePhoneNumberDataDto;
    }>): Promise<void>;
    sendEmailVerifyChangePassword(job: Job<{
        email: string;
        data: ChangePasswordDto;
    }>): Promise<void>;
    sendEmailReportStream(job: Job<{
        email: string;
        data: ReportStreamDataDto;
    }>): Promise<void>;
}
