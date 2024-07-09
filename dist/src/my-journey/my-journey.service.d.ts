import { Prisma, category_media_journey } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsMyJourneyConsultationDto } from './dto/page-options-my-journey-consultation.dto';
import { PageOptionsMyJourneyGaleryConcernList } from './dto/page-options-my-journey-galery-concern-list.dto';
import { PageOptionsMyJourneyTreatmentDto } from './dto/page-options-my-journey-treatment.dto';
import { PageOptionsMyJourneyDto } from './dto/page-options-my-journey.dto';
export declare class MyJourneyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pageOptionsDto: PageOptionsMyJourneyDto): Promise<PageDto<import(".prisma/client").my_journey & {
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
    galeryConcernList(pageOptions: PageOptionsMyJourneyGaleryConcernList): Promise<unknown>;
    findAllMediaJourneyBy(where: Prisma.media_my_journeyWhereInput): Promise<(import(".prisma/client").media_my_journey & {
        media: import(".prisma/client").media;
    })[]>;
    create(data: Prisma.my_journeyUncheckedCreateInput, media: {
        media_id: number;
        key: string;
        category: category_media_journey;
    }[]): Promise<import(".prisma/client").my_journey>;
    findAllGalery(where: Prisma.my_journeyWhereInput): Promise<(import(".prisma/client").my_journey & {
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
    })[]>;
    find(id: number): Promise<import(".prisma/client").my_journey & {
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
    findBy(where: Prisma.my_journeyWhereInput): Promise<import(".prisma/client").my_journey & {
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
    deleteByConcern(user_id: number, concern_id: number, consultation_id: number): Promise<import(".prisma/client").my_journey>;
    delete(id: number): Promise<import(".prisma/client").my_journey>;
    findAllConsultation(pageOptionsDto: PageOptionsMyJourneyConsultationDto): Promise<PageDto<import(".prisma/client").consultation & {
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
    findAllTreatment(pageOptionsDto: PageOptionsMyJourneyTreatmentDto): Promise<PageDto<import(".prisma/client").transaction_treatment_item & {
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
}
