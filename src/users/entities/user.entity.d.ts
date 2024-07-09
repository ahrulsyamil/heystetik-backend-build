export declare class UserEntity {
    id: number;
    fullname: string;
    email: string;
    password: string;
    no_phone: string;
    gender: string;
    address?: string;
    photo_profile?: string;
    referral_code?: string;
    verification_code_phone: number;
    verification_code_email: number;
    roleId: number;
    is_active?: boolean;
    username: string;
    created_at: Date;
    updated_at: Date;
}
