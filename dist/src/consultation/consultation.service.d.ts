import { Prisma, status_consultation_doctor_schedule } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConsultationDoctorNoteDto } from './dto/create-consultation-doctor-note.dto';
import { CreateConsultationDoctorScheduleDto } from './dto/create-consultation-doctor-schedule.dto';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { PageOptionConsultationDoctorScheduleDto } from './dto/page-option-consultation-schedule.dto';
import { PageOptionsGaleryFileDto } from './dto/page-options-galery-file.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
export declare class ConsultationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findDoctorForConsultationOld(): Promise<{
        doctor_id: number;
        doctor_schedule_id: number;
        schedule_expired: number;
        chat_over: number;
        rating: number;
    }[]>;
    findDoctorForConsultation(): Promise<{
        doctor_id: number;
        doctor_name: string;
        doctor_schedule_id: number;
        schedule_expired: number;
        chat_over: number;
        rating: number;
    }[]>;
    findCustomConsultationDoctorSchedule(where: Prisma.consultation_doctor_scheduleWhereInput): Promise<import(".prisma/client").consultation_doctor_schedule[]>;
    createConsultationDoctorSchedule(data: CreateConsultationDoctorScheduleDto): Promise<import(".prisma/client").consultation_doctor_schedule & {
        doctor: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
    }>;
    updateStatusConsultationDoctorSchedule(id: number, status: status_consultation_doctor_schedule): Promise<import(".prisma/client").consultation_doctor_schedule>;
    findConsultationDoctorScheduleTime(schedule_id: number, doctor_id: number, pageOptionsDto: PageOptionConsultationDoctorScheduleDto): Promise<PageDto<import(".prisma/client").consultation_doctor_schedule & {
        customer: import(".prisma/client").users;
        transaction_consultation: import(".prisma/client").transaction_consultation & {
            medical_history: import(".prisma/client").medical_history & {
                interest_condition: import(".prisma/client").interest_conditions & {
                    concern: import(".prisma/client").concern;
                };
            };
        };
    }>>;
    findConsultationDoctorSchedule(id: number): Promise<import(".prisma/client").consultation_doctor_schedule & {
        customer: import(".prisma/client").users;
        transaction_consultation: import(".prisma/client").transaction_consultation & {
            medical_history: import(".prisma/client").medical_history & {
                interest_condition: import(".prisma/client").interest_conditions & {
                    concern: import(".prisma/client").concern;
                };
            };
        };
    }>;
    createConsultation(data: CreateConsultationDto): Promise<import(".prisma/client").consultation & {
        transaction_consultation: import(".prisma/client").transaction_consultation;
        doctor: import(".prisma/client").users;
    }>;
    updateConsultation(id: number, data: UpdateConsultationDto): Promise<import(".prisma/client").consultation>;
    findConsultation(id: number): Promise<import(".prisma/client").consultation & {
        customer: import(".prisma/client").users;
        transaction_consultation: import(".prisma/client").transaction_consultation & {
            consultation_invoice: import(".prisma/client").consultation_invoice;
        };
        medical_history: import(".prisma/client").medical_history & {
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
        };
        doctor: import(".prisma/client").users;
        chat_room: import(".prisma/client").chat_room;
        consultation_recipe_drug: (import(".prisma/client").consultation_recipe_drug & {
            product: import(".prisma/client").product & {
                media_products: (import(".prisma/client").media_product & {
                    media: import(".prisma/client").media;
                })[];
                skincare_detail: import(".prisma/client").skincare_details;
                drug_detail: import(".prisma/client").drug_details;
            };
        })[];
        consultation_recomendation_skincare: (import(".prisma/client").consultation_recomendation_skincare & {
            product: import(".prisma/client").product & {
                media_products: (import(".prisma/client").media_product & {
                    media: import(".prisma/client").media;
                })[];
                skincare_detail: import(".prisma/client").skincare_details;
                drug_detail: import(".prisma/client").drug_details;
            };
        })[];
        consultation_recomendation_treatment: import(".prisma/client").consultation_recomendation_treatment[];
        consultation_doctor_note: import(".prisma/client").consultation_doctor_note;
    }>;
    createDoctorNote(data: CreateConsultationDoctorNoteDto): Promise<import(".prisma/client").consultation>;
    findDoctorNote(consultation_id: number): Promise<import(".prisma/client").consultation_doctor_note & {
        consultation: import(".prisma/client").consultation & {
            consultation_recipe_drug: (import(".prisma/client").consultation_recipe_drug & {
                product: import(".prisma/client").product & {
                    media_products: (import(".prisma/client").media_product & {
                        media: import(".prisma/client").media;
                    })[];
                    skincare_detail: import(".prisma/client").skincare_details;
                    drug_detail: import(".prisma/client").drug_details;
                };
            })[];
            consultation_recomendation_skincare: (import(".prisma/client").consultation_recomendation_skincare & {
                product: import(".prisma/client").product & {
                    media_products: (import(".prisma/client").media_product & {
                        media: import(".prisma/client").media;
                    })[];
                    skincare_detail: import(".prisma/client").skincare_details;
                    drug_detail: import(".prisma/client").drug_details;
                };
            })[];
            consultation_recomendation_treatment: import(".prisma/client").consultation_recomendation_treatment[];
            consultation_doctor_note: import(".prisma/client").consultation_doctor_note;
        };
    }>;
    findManyRecipeDrugBy(where: Prisma.consultation_recipe_drugWhereInput, orderBy?: Prisma.consultation_recipe_drugOrderByWithRelationInput | undefined): Promise<import(".prisma/client").consultation_recipe_drug[]>;
    findRecipeDrugBy(where: Prisma.consultation_recipe_drugWhereInput, orderBy?: Prisma.consultation_recipe_drugOrderByWithRelationInput | undefined): Promise<import(".prisma/client").consultation_recipe_drug>;
    findAllGaleryFile(pageOptionsDto: PageOptionsGaleryFileDto): Promise<PageDto<import(".prisma/client").media_chat_message & {
        media: import(".prisma/client").media;
    }>>;
    updateChatRoom(code: string, data: Prisma.chat_roomUpdateInput): Promise<import(".prisma/client").chat_room>;
}
