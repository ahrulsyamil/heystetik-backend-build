/// <reference types="multer" />
import { MediaService } from 'src/media/media.service';
import { CreatePharmacistDto } from './dto/create-pharmacist.dto';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { PageOptionsPharmacistDto } from './dto/page-options-pharmacist.dto';
import { PageOptionsPharmacyDto } from './dto/page-options-pharmacy.dto';
import { UpdatePharmacistDto } from './dto/update-pharmacist.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { PharmacyService } from './pharmacy.service';
export declare class PharmacyController {
    private readonly pharmacyService;
    private readonly mediaService;
    constructor(pharmacyService: PharmacyService, mediaService: MediaService);
    getAll(pageOptions: PageOptionsPharmacyDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").pharmacy & {
        media_pharmacy_npwp: import(".prisma/client").media_pharmacy_npwp & {
            media: import(".prisma/client").media;
        };
        pharmacy_operation_hours: import(".prisma/client").pharmacy_operation_hours[];
        pharmacists: import(".prisma/client").pharmacist[];
    }>>;
    create(npwp_picture: Express.Multer.File[], data: CreatePharmacyDto): Promise<import(".prisma/client").pharmacy>;
    find(id: number): Promise<import(".prisma/client").pharmacy & {
        media_pharmacy_npwp: import(".prisma/client").media_pharmacy_npwp & {
            media: import(".prisma/client").media;
        };
        pharmacy_operation_hours: import(".prisma/client").pharmacy_operation_hours[];
        pharmacists: import(".prisma/client").pharmacist[];
    }>;
    update(id: number, npwp_picture: Express.Multer.File[], data: UpdatePharmacyDto): Promise<import(".prisma/client").pharmacy>;
    delete(id: number): Promise<import(".prisma/client").pharmacy>;
    getAllPharmacist(pharmacy_id: number, pageOptions: PageOptionsPharmacistDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").pharmacist & {
        pharmacist_schedule: import(".prisma/client").pharmacist_schedule[];
    }>>;
    createPharmacist(pharmacy_id: number, data: CreatePharmacistDto): Promise<import(".prisma/client").pharmacist>;
    findPharmacist(pharmacy_id: number, pharmacist_id: number): Promise<import(".prisma/client").pharmacist>;
    updatePharmacist(pharmacy_id: number, pharmacist_id: number, data: UpdatePharmacistDto): Promise<import(".prisma/client").pharmacist>;
    deletePharmacist(pharmacy_id: number, pharmacist_id: number): Promise<import(".prisma/client").pharmacist>;
}
