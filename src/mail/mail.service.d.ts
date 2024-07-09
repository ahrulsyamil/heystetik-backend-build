import { MailerService } from '@nestjs-modules/mailer';
import { RegistrationDataEmailDto } from './dto/registration-data.dto';
import { ChangeEmailDataDto } from './dto/change-email-data.dto';
import { ChangePhoneNumberDataDto } from './dto/chage-phone-number-data.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ReportStreamDataDto } from './dto/report-stream-data.dto';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendEmail(email: string, subject: string, message: string): Promise<void>;
    sendMail(email: string, message: number): Promise<void>;
    sendEmailVerifyRegistration(email: string, data: RegistrationDataEmailDto): Promise<void>;
    sendEmailVerifyChangeEmail(email: string, data: ChangeEmailDataDto): Promise<void>;
    sendEmailVerifyChangePhoneNumber(email: string, data: ChangePhoneNumberDataDto): Promise<void>;
    sendEmailVerifyChangePassword(email: string, data: ChangePasswordDto): Promise<void>;
    sendEmailResetPassword(email: string, data: ResetPasswordDto): Promise<void>;
    sendEmailReportStream(email: string, data: ReportStreamDataDto): Promise<void>;
}
