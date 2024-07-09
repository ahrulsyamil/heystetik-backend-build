/// <reference types="multer" />
export declare class UpdateProfileDoctorDto {
    fullname: string;
    specialist: string;
    email: string;
    no_phone: string;
    gender: string;
    dob: Date;
    sip: string;
    str: string;
    education: string;
    practice_location: string;
    files: Express.Multer.File[];
}
