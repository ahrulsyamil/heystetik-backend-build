import { type_verify } from '@prisma/client';
export declare class VerifyOtpDto {
    type: type_verify;
    verification_code: string;
}
