/// <reference types="multer" />
import { ConfigService } from '@nestjs/config';
import { InterestAugmentationSkinGoalsService } from 'src/interest-augmentation-skin-goals/interest-augmentation-skin-goals.service';
import { InterestBeautyProfileService } from 'src/interest-beauty-profile/interest_beauty_profile.service';
import { InterestBodyCorrectiveSkinGoalsService } from 'src/interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service';
import { InterestBudgetSkinGoalsService } from 'src/interest-budget-skin-goals/interest_budget_skin_goals.service';
import { InterestFaceCorrectiveSkinGoalsService } from 'src/interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service';
import { InterestHistoryTreatmentSkinGoalsService } from 'src/interest-history-treatment-skin-goals/interest_history_treatment_skin_goals.service';
import { InterestSexuallyAndSkinDiseasesSkinGoalsService } from 'src/interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service';
import { MediaService } from 'src/media/media.service';
import { UsersService } from 'src/users/users.service';
import { VerificationService } from 'src/verification/verification.service';
import { RegistrationUserBeautyProfileDto } from './dto/registration-beauty-profile.dto';
import { RegistrationUserEmailDto } from './dto/registration-email.dto';
import { RegistrationUserInterestAugmentationSkinGoalsDto } from './dto/registration-interest-augmentation-skin-goals.dto';
import { RegistrationUserInterestBodyCorrectiveSkinGoalsDto } from './dto/registration-interest-body-corrective-skin-goals.dto';
import { RegistrationUserInterestBudgetSkinGoalsDto } from './dto/registration-interest-budget-skin-goals.dto';
import { RegistrationUserInterestFaceCorrectiveSkinGoalsDto } from './dto/registration-interest-face-corrective-skin-goals.dto';
import { RegistrationUserInterestHistoryTreatmentSkinGoalsDto } from './dto/registration-interest-history-treatment-skin-goals.dto';
import { RegistrationUserInterestSexuallyAndSkinDiseasesSkinGoalsDto } from './dto/registration-interest-sexually-and-skin-diseases-skin-goals.dto';
import { RegistrationUserPersonalInfoDto } from './dto/registration-personal-info.dto';
import { RegistrationUserPhoneDto } from './dto/registration-phone.dto';
import { RegistrationService } from './registration.service';
export declare class RegistrationController {
    private readonly configService;
    private readonly registrationService;
    private readonly usersService;
    private readonly verificationService;
    private readonly mediaService;
    private readonly interestBeautyProfileService;
    private readonly interestFaceCorrectiveSkinGoalService;
    private readonly interestBodyCorrectiveSkinGoalService;
    private readonly interestAugmentationSkinGoalService;
    private readonly interestSexuallyAndSkinDiseasesService;
    private readonly interestHistoryTreatmentSkinGoalService;
    private readonly interestBudgetSkinGoalService;
    constructor(configService: ConfigService, registrationService: RegistrationService, usersService: UsersService, verificationService: VerificationService, mediaService: MediaService, interestBeautyProfileService: InterestBeautyProfileService, interestFaceCorrectiveSkinGoalService: InterestFaceCorrectiveSkinGoalsService, interestBodyCorrectiveSkinGoalService: InterestBodyCorrectiveSkinGoalsService, interestAugmentationSkinGoalService: InterestAugmentationSkinGoalsService, interestSexuallyAndSkinDiseasesService: InterestSexuallyAndSkinDiseasesSkinGoalsService, interestHistoryTreatmentSkinGoalService: InterestHistoryTreatmentSkinGoalsService, interestBudgetSkinGoalService: InterestBudgetSkinGoalsService);
    registerPhone(data: RegistrationUserPhoneDto): Promise<import(".prisma/client").users>;
    registerEmail(data: RegistrationUserEmailDto): Promise<import(".prisma/client").users>;
    registerPersonalInfo(files: Express.Multer.File[], data: RegistrationUserPersonalInfoDto): Promise<import(".prisma/client").users>;
    registerBeautyProfile(data: RegistrationUserBeautyProfileDto): Promise<import(".prisma/client").interest_beauty_profile>;
    registerInterestFaceCorrectiveSkinGoals(data: RegistrationUserInterestFaceCorrectiveSkinGoalsDto): Promise<void>;
    registerInterestBodyCorrectiveSkinGoals(data: RegistrationUserInterestBodyCorrectiveSkinGoalsDto): Promise<void>;
    registerInterestAugmentationSkinGoals(data: RegistrationUserInterestAugmentationSkinGoalsDto): Promise<void>;
    registerInterestSexuallyAndSkinDiseaseskinGoals(data: RegistrationUserInterestSexuallyAndSkinDiseasesSkinGoalsDto): Promise<void>;
    registerInterestHistoryTreatmentSkinGoals(data: RegistrationUserInterestHistoryTreatmentSkinGoalsDto): Promise<void>;
    registerInterestBudgetSkinGoals(data: RegistrationUserInterestBudgetSkinGoalsDto): Promise<{
        token: string;
        user: import(".prisma/client").users & {
            doctor_schedules: import(".prisma/client").doctor_schedules[];
            role: import(".prisma/client").roles;
            province: import(".prisma/client").provinces;
            city: import(".prisma/client").kota_kabupatens;
        };
    }>;
}
