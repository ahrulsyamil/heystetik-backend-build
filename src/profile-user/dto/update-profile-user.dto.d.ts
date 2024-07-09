import { Gender } from 'src/globals/constant/enum';
export declare class UpdateProfileUserDto {
    fullname: string;
    username: string;
    bio: string;
    email: string;
    no_phone: string;
    gender: Gender;
    dob: Date;
    verification_code: string;
}
