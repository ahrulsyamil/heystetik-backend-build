import { Response } from 'express';
import { DoctorCustomerSchedulesService } from './doctor_customer_schedules.service';
import { CreateDoctorCustomerSchedulesDto } from './dto/create-doctor_customer_schedules.dto';
import { UpdateDoctorCustomerSchedulesDto } from './dto/update-doctor_customer_schedules.dto';
export declare class DoctorCustomerSChedulesController {
    private readonly snipsTipsService;
    constructor(snipsTipsService: DoctorCustomerSchedulesService);
    create(response: Response, createDoctorCustomerSChedulesDto: CreateDoctorCustomerSchedulesDto): Response<any, Record<string, any>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Response<any, Record<string, any>>;
    update(response: Response, id: string, updateDoctorCustomerSChedulesDto: UpdateDoctorCustomerSchedulesDto): Response<any, Record<string, any>>;
    remove(response: Response, id: string): Response<any, Record<string, any>>;
}
