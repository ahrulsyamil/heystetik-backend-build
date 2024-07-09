import { CreateDoctorDto } from './create-doctor.dto';
declare const UpdateDoctorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDoctorDto>>;
export declare class UpdateDoctorDto extends UpdateDoctorDto_base {
    is_active: boolean;
    password: string;
}
export {};
