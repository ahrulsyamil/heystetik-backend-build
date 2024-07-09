/// <reference types="multer" />
import { MedicalHistoryService } from './medical-history.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { MediaService } from 'src/media/media.service';
export declare class MedicalHistoryController {
    private readonly medicalHistoryService;
    private readonly mediaService;
    constructor(medicalHistoryService: MedicalHistoryService, mediaService: MediaService);
    create(user: UserEntity, files: Express.Multer.File[], createMedicalHistoryDto: CreateMedicalHistoryDto): Promise<import(".prisma/client").medical_history>;
    findOne(user: UserEntity, id: number): Promise<import(".prisma/client").medical_history & {
        media_medical_histories: (import(".prisma/client").media_medical_history & {
            media: import(".prisma/client").media;
        })[];
        interest_condition: import(".prisma/client").interest_conditions & {
            concern: import(".prisma/client").concern;
        };
        medical_history_items: (import(".prisma/client").medical_history_item & {
            interest_conditions_question: import(".prisma/client").interest_conditions_question;
            interest_conditions_answer: import(".prisma/client").interest_conditions_answer;
        })[];
    }>;
}
