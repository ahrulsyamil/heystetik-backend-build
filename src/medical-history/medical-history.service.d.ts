import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { Prisma } from '@prisma/client';
export declare class MedicalHistoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(customer_id: number, createMedicalHistoryDto: CreateMedicalHistoryDto, media: {
        media_id: number;
    }[]): Promise<import(".prisma/client").medical_history>;
    findOne(id: number): Promise<import(".prisma/client").medical_history & {
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
    findBy(where: Prisma.medical_historyWhereInput): Promise<import(".prisma/client").medical_history & {
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
