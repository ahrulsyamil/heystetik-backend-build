/// <reference types="multer" />
import { ConcernService } from 'src/concern/concern.service';
import { MediaService } from 'src/media/media.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsMyJourneyConsultationDto } from './dto/page-options-my-journey-consultation.dto';
import { PageOptionsMyJourneyGaleryConcernList } from './dto/page-options-my-journey-galery-concern-list.dto';
import { PageOptionsMyJourneyTreatmentDto } from './dto/page-options-my-journey-treatment.dto';
import { PageOptionsMyJourneyDto } from './dto/page-options-my-journey.dto';
import { UpdateMyJourneyDto } from './dto/update-my-journey.dto';
import { MyJourneyService } from './my-journey.service';
import { CreateMyJourneyDto } from './dto/create-my-journey.dto';
export declare class MyJourneyController {
    private readonly myJourneyService;
    private readonly mediaService;
    private readonly concernService;
    constructor(myJourneyService: MyJourneyService, mediaService: MediaService, concernService: ConcernService);
    findAll(user: UserEntity, pageOptionsDto: PageOptionsMyJourneyDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").my_journey & {
        media_my_journeys: (import(".prisma/client").media_my_journey & {
            media: import(".prisma/client").media;
        })[];
        consultation: import(".prisma/client").consultation & {
            doctor: import(".prisma/client").users & {
                media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                    media: import(".prisma/client").media;
                };
            };
        };
        concern: import(".prisma/client").concern;
    }>>;
    galery(user: UserEntity, pageOptionsDto: PageOptionsMyJourneyGaleryConcernList): Promise<any[]>;
    galeryByConcern(user: UserEntity, pageOptionsDto: PageOptionsMyJourneyGaleryConcernList): Promise<any>;
    create(user: UserEntity, files: Express.Multer.File[], data: CreateMyJourneyDto): Promise<import(".prisma/client").my_journey>;
    update(user: UserEntity, id: string, files: Express.Multer.File[], data: UpdateMyJourneyDto): Promise<import(".prisma/client").media_my_journey>;
    findAllConsultation(user: UserEntity, id: number, pageOptionsDto: PageOptionsMyJourneyConsultationDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").consultation & {
        transaction_consultation: import(".prisma/client").transaction_consultation & {
            payment_method: import(".prisma/client").payment_method;
        };
        medical_history: import(".prisma/client").medical_history & {
            interest_condition: import(".prisma/client").interest_conditions;
        };
        doctor: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
    }>>;
    findAllTreatment(user: UserEntity, pageOptionsDto: PageOptionsMyJourneyTreatmentDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").transaction_treatment_item & {
        treatment: import(".prisma/client").treatment & {
            media_treatments: (import(".prisma/client").media_treatment & {
                media: import(".prisma/client").media;
            })[];
            clinic: import(".prisma/client").clinic & {
                media_clinics: (import(".prisma/client").media_clinic & {
                    media: import(".prisma/client").media;
                })[];
                media_clinic_logo: import(".prisma/client").media_clinic_logo & {
                    media: import(".prisma/client").media;
                };
                province: import(".prisma/client").provinces;
                city: import(".prisma/client").kota_kabupatens;
            };
        };
        transaction_treatment: import(".prisma/client").transaction_treatment & {
            payment_method: import(".prisma/client").payment_method;
        };
    }>>;
    findByConsultation(user: UserEntity, id: string, consultationId: string): Promise<import(".prisma/client").my_journey & {
        media_my_journeys: (import(".prisma/client").media_my_journey & {
            media: import(".prisma/client").media;
        })[];
        consultation: import(".prisma/client").consultation & {
            doctor: import(".prisma/client").users & {
                media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                    media: import(".prisma/client").media;
                };
            };
        };
        concern: import(".prisma/client").concern;
    }>;
    findByConcern(user: UserEntity, concern_id: string): Promise<import(".prisma/client").my_journey & {
        media_my_journeys: (import(".prisma/client").media_my_journey & {
            media: import(".prisma/client").media;
        })[];
        consultation: import(".prisma/client").consultation & {
            doctor: import(".prisma/client").users & {
                media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                    media: import(".prisma/client").media;
                };
            };
        };
        concern: import(".prisma/client").concern;
    }>;
    find(user: UserEntity, id: string): Promise<import(".prisma/client").my_journey & {
        media_my_journeys: (import(".prisma/client").media_my_journey & {
            media: import(".prisma/client").media;
        })[];
        consultation: import(".prisma/client").consultation & {
            doctor: import(".prisma/client").users & {
                media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                    media: import(".prisma/client").media;
                };
            };
        };
        concern: import(".prisma/client").concern;
    }>;
}
