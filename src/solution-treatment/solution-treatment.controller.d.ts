import { ClinicService } from 'src/clinic/clinic.service';
import { UserLocationService } from 'src/user-location/user-location.service';
import { UserWishlistTreatmentService } from 'src/user-wishlist-treatment/user-wishlist-treatment.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsSolutionTreatmentDoctorRecomendationDto } from './dto/page-options-solution-treatment-doctor-recomendation.dto';
import { PageOptionsSolutionTreatmentDto } from './dto/page-options-solution-treatment.dto';
import { SolutionTreatmentService } from './solution-treatment.service';
export declare class SolutionTreatmentController {
    private readonly solutionTreatmentService;
    private readonly userLocationService;
    private readonly clinicService;
    private readonly userWishlistTreatmentService;
    constructor(solutionTreatmentService: SolutionTreatmentService, userLocationService: UserLocationService, clinicService: ClinicService, userWishlistTreatmentService: UserWishlistTreatmentService);
    getRecomendationTreatment(): Promise<unknown>;
    getTopTreatment(): Promise<unknown>;
    findAll(user: UserEntity, pageOptions: PageOptionsSolutionTreatmentDto): Promise<any>;
    findAllNearMe(user: UserEntity, pageOptions: PageOptionsSolutionTreatmentDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").treatment & {
        distance: any;
    }>>;
    calculateAveragePrice: (treatments: any) => number;
    findAllClinicOld(user: UserEntity, pageOptions: PageOptionsSolutionTreatmentDto): Promise<any>;
    findAllClinic(user: UserEntity, pageOptions: PageOptionsSolutionTreatmentDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").clinic & {
        distance: any;
    }>>;
    findAllTopRating(user: UserEntity, pageOptions: PageOptionsSolutionTreatmentDto): Promise<any>;
    findAllTrending(user: UserEntity, pageOptions: PageOptionsSolutionTreatmentDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").treatment & {
        distance: any;
    }>>;
    findAllClinicTreatment(user: UserEntity, id: number, pageOptions: PageOptionsSolutionTreatmentDto): Promise<any>;
    find(user: UserEntity, id: number): Promise<any>;
    findClinic(user: UserEntity, id: number): Promise<any>;
    findAllDoctorRecomendation(user: UserEntity, pageOptions: PageOptionsSolutionTreatmentDoctorRecomendationDto): Promise<any>;
}
