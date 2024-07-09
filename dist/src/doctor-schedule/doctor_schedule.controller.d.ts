import { Response } from 'express';
import { DoctorScheduleService } from './doctor_schedule.service';
import { CreateDoctorScheduleDto } from './dto/create-doctor_schedule.dto';
import { UpdateDoctorScheduleDto } from './dto/update-doctor_schedule.dto';
export declare class DoctorScheduleController {
    private readonly doctorScheduleService;
    constructor(doctorScheduleService: DoctorScheduleService);
    create(response: Response, createDoctorScheduleDto: CreateDoctorScheduleDto): Promise<Response<any, Record<string, any>>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, id: string, updateDoctorScheduleDto: UpdateDoctorScheduleDto): Promise<Response<any, Record<string, any>>>;
    remove(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
