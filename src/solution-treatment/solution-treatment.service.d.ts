import { Prisma, clinic, treatment } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsSolutionTreatmentDto } from './dto/page-options-solution-treatment.dto';
import { PageOptionsSolutionTreatmentDoctorRecomendationDto } from './dto/page-options-solution-treatment-doctor-recomendation.dto';
export declare class SolutionTreatmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    recomendationTreatment(): Promise<unknown>;
    topTreatment(): Promise<unknown>;
    findAllOld(pageOptionsDto: PageOptionsSolutionTreatmentDto): Promise<PageDto<treatment & {
        media_treatments: (import(".prisma/client").media_treatment & {
            media: import(".prisma/client").media;
        })[];
        clinic: clinic & {
            province: import(".prisma/client").provinces;
            city: import(".prisma/client").kota_kabupatens;
        };
    }>>;
    findAll(pageOptionsDto: PageOptionsSolutionTreatmentDto, latitude: number, longitude: number): Promise<PageDto<treatment & {
        distance: any;
    }>>;
    findAllNearMe(pageOptionsDto: PageOptionsSolutionTreatmentDto, latitude: number, longitude: number): Promise<PageDto<treatment & {
        distance: any;
    }>>;
    findAllClinicOld(pageOptionsDto: PageOptionsSolutionTreatmentDto): Promise<PageDto<clinic & {
        media_clinics: (import(".prisma/client").media_clinic & {
            media: import(".prisma/client").media;
        })[];
        media_clinic_logo: import(".prisma/client").media_clinic_logo & {
            media: import(".prisma/client").media;
        };
        treatments: treatment[];
        province: import(".prisma/client").provinces;
        city: import(".prisma/client").kota_kabupatens;
    }>>;
    findAllClinic(pageOptionsDto: PageOptionsSolutionTreatmentDto, latitude: number, longitude: number): Promise<PageDto<clinic & {
        distance: any;
    }>>;
    findAllTopRating(pageOptionsDto: PageOptionsSolutionTreatmentDto): Promise<PageDto<treatment & {
        media_treatments: (import(".prisma/client").media_treatment & {
            media: import(".prisma/client").media;
        })[];
        clinic: clinic & {
            province: import(".prisma/client").provinces;
            city: import(".prisma/client").kota_kabupatens;
        };
        treatment_concerns: (import(".prisma/client").treatment_concern & {
            concern: import(".prisma/client").concern;
        })[];
    }>>;
    findAllTrending(pageOptionsDto: PageOptionsSolutionTreatmentDto, latitude: number, longitude: number): Promise<PageDto<treatment & {
        distance: any;
    }>>;
    findAllClinicTreatment(clinic_id: number, pageOptionsDto: PageOptionsSolutionTreatmentDto): Promise<PageDto<treatment & {
        media_treatments: (import(".prisma/client").media_treatment & {
            media: import(".prisma/client").media;
        })[];
        clinic: clinic & {
            province: import(".prisma/client").provinces;
            city: import(".prisma/client").kota_kabupatens;
        };
        treatment_concerns: (import(".prisma/client").treatment_concern & {
            concern: import(".prisma/client").concern;
        })[];
    }>>;
    find(id: number): Promise<treatment & {
        media_treatments: (import(".prisma/client").media_treatment & {
            media: import(".prisma/client").media;
        })[];
        clinic: clinic & {
            province: import(".prisma/client").provinces;
            city: import(".prisma/client").kota_kabupatens;
        };
        treatment_concerns: (import(".prisma/client").treatment_concern & {
            concern: import(".prisma/client").concern;
        })[];
    }>;
    findClinic(id: number): Promise<clinic & {
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
    findAllDoctorRecomendation(pageOptionsDto: PageOptionsSolutionTreatmentDoctorRecomendationDto): Promise<PageDto<{
        treatment_type: string;
    }>>;
    findAllBy(where: Prisma.treatmentWhereInput): Promise<(treatment & {
        clinic: clinic & {
            media_clinics: (import(".prisma/client").media_clinic & {
                media: import(".prisma/client").media;
            })[];
            media_clinic_logo: import(".prisma/client").media_clinic_logo & {
                media: import(".prisma/client").media;
            };
            clinic_operation_hours: import(".prisma/client").clinic_operation_hours[];
            province: import(".prisma/client").provinces;
            city: import(".prisma/client").kota_kabupatens;
        };
    })[]>;
    findAllClinicBy(where: Prisma.clinicWhereInput): Promise<(clinic & {
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
    })[]>;
}
