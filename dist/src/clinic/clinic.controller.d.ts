/// <reference types="multer" />
import { MediaService } from 'src/media/media.service';
import { ClinicService } from './clinic.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { PageOptionsClinicDto } from './dto/page-options-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';
export declare class ClinicController {
    private readonly clinicService;
    private readonly mediaService;
    constructor(clinicService: ClinicService, mediaService: MediaService);
    findAll(pageOptions: PageOptionsClinicDto): Promise<any>;
    create(files: {
        image_photos: Express.Multer.File[];
        image_logo: Express.Multer.File[];
    }, data: CreateClinicDto): Promise<import(".prisma/client").clinic>;
    find(id: string): Promise<import(".prisma/client").clinic & {
        media_clinics: (import(".prisma/client").media_clinic & {
            media: import(".prisma/client").media;
        })[];
        media_clinic_logo: import(".prisma/client").media_clinic_logo & {
            media: import(".prisma/client").media;
        };
        clinic_operation_hours: import(".prisma/client").clinic_operation_hours[];
        province: import(".prisma/client").provinces;
        city: import(".prisma/client").kota_kabupatens;
        province_company: import(".prisma/client").provinces;
        city_company: import(".prisma/client").kota_kabupatens;
    }>;
    update(files: {
        image_photos: Express.Multer.File[];
        image_logo: Express.Multer.File[];
    }, id: string, data: UpdateClinicDto): Promise<import(".prisma/client").clinic>;
    delete(id: string): Promise<any>;
}
