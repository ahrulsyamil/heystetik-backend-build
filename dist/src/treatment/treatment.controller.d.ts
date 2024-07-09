/// <reference types="multer" />
import { PageOptionsTreatmentDto } from './dto/page-options-treatment.dto';
import { TreatmentService } from './treatment.service';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { MediaService } from 'src/media/media.service';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';
export declare class TreatmentController {
    private readonly treatmentService;
    private readonly mediaService;
    constructor(treatmentService: TreatmentService, mediaService: MediaService);
    findAll(pageOptions: PageOptionsTreatmentDto): Promise<any>;
    create(files: {
        image_photos: Express.Multer.File[];
    }, data: CreateTreatmentDto): Promise<import(".prisma/client").treatment>;
    find(id: string): Promise<import(".prisma/client").treatment & {
        media_treatments: (import(".prisma/client").media_treatment & {
            media: import(".prisma/client").media;
        })[];
        clinic: import(".prisma/client").clinic;
    }>;
    update(files: {
        image_photos: Express.Multer.File[];
    }, id: string, data: UpdateTreatmentDto): Promise<import(".prisma/client").treatment>;
    delete(id: string): Promise<any>;
}
