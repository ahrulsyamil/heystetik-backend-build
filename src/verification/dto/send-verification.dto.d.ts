import { method_otp, type_verify } from '@prisma/client';
export declare class SendVerificationDto {
    method: method_otp;
    type: type_verify;
    user_id: number;
    no_phone?: string;
    email?: string;
    code: string;
    identifier: string;
    expired_at: Date;
}
