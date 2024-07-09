import { method_otp } from '@prisma/client';
export declare class CreateOtpDto {
    user_id: number;
    method: method_otp;
    code: number;
    expired_at: Date;
}
