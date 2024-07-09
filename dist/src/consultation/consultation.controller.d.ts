import { ConfigService } from '@nestjs/config';
import { Queue } from 'bull';
import { Response } from 'express';
import { ChatOpeningService } from 'src/chat-opening/chat-opening.service';
import { ChatService } from 'src/chat/chat.service';
import { DoctorScheduleService } from 'src/doctor-schedule/doctor_schedule.service';
import { InvoiceService } from 'src/invoice/invoice.service';
import { MediaService } from 'src/media/media.service';
import { MedicalHistoryService } from 'src/medical-history/medical-history.service';
import { MyJourneyService } from 'src/my-journey/my-journey.service';
import { NotificationService } from 'src/notification/notification.service';
import { ProductService } from 'src/product/product.service';
import { SocketGateway } from 'src/socket/socket.gateway';
import { SocketService } from 'src/socket/socket.service';
import { TaskSchedulerService } from 'src/task-scheduler/task-scheduler.service';
import { TransactionConsultationService } from 'src/transaction-consultation/transaction-consultation.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { ConsultationService } from './consultation.service';
import { CreateConsultationDoctorNoteDto } from './dto/create-consultation-doctor-note.dto';
import { PageOptionConsultationDoctorScheduleDto } from './dto/page-option-consultation-schedule.dto';
import { PageOptionsGaleryFileDto } from './dto/page-options-galery-file.dto';
export declare class ConsultationController {
    private readonly consultationService;
    private readonly transactionConsultationService;
    private readonly socketService;
    private readonly chatService;
    private readonly chatOpeningService;
    private readonly doctorScheduleService;
    private readonly taskScheduleService;
    private readonly productService;
    private readonly notificationService;
    private readonly invoiceService;
    private readonly configService;
    private readonly medicalHistoryService;
    private readonly mediaService;
    private readonly myJourneyService;
    private readonly socketGateway;
    private queueFcm;
    private queueTaskSchedule;
    constructor(consultationService: ConsultationService, transactionConsultationService: TransactionConsultationService, socketService: SocketService, chatService: ChatService, chatOpeningService: ChatOpeningService, doctorScheduleService: DoctorScheduleService, taskScheduleService: TaskSchedulerService, productService: ProductService, notificationService: NotificationService, invoiceService: InvoiceService, configService: ConfigService, medicalHistoryService: MedicalHistoryService, mediaService: MediaService, myJourneyService: MyJourneyService, socketGateway: SocketGateway, queueFcm: Queue, queueTaskSchedule: Queue);
    initiateChat(user: UserEntity, transaction_id: string): Promise<import(".prisma/client").consultation_doctor_schedule & {
        doctor: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
    }>;
    findAllConsultationDoctorSchedule(user: UserEntity, id: number, pageOptionsDto: PageOptionConsultationDoctorScheduleDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").consultation_doctor_schedule & {
        customer: import(".prisma/client").users;
        transaction_consultation: import(".prisma/client").transaction_consultation & {
            medical_history: import(".prisma/client").medical_history & {
                interest_condition: import(".prisma/client").interest_conditions & {
                    concern: import(".prisma/client").concern;
                };
            };
        };
    }>>;
    approveConsultationDoctorSchedule(user: UserEntity, id: number): Promise<import(".prisma/client").consultation_doctor_schedule>;
    finishReviewConsultation(user: UserEntity, id: number): Promise<import(".prisma/client").consultation>;
    DoctorSchedule(user: UserEntity): Promise<any>;
    consultationDetail(user: UserEntity, id: number): Promise<import(".prisma/client").consultation & {
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
    createDoctorNote(user: UserEntity, id: number, data: CreateConsultationDoctorNoteDto): Promise<import(".prisma/client").consultation>;
    findDoctorNote(user: UserEntity, id: number): Promise<import(".prisma/client").consultation & {
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
    finishConsultation(user: UserEntity, id: number): Promise<import(".prisma/client").consultation>;
    galeryFiles(user: UserEntity, id: number, pageOptionsDto: PageOptionsGaleryFileDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").media_chat_message & {
        media: import(".prisma/client").media;
    }>>;
    medicalPrescription(transactionId: string): Promise<any>;
    medicalPrescriptionPreview(transactionId: string): Promise<any>;
    medicalPrescriptionDownload(user: UserEntity, transactionId: string, res: Response): Promise<void>;
}
