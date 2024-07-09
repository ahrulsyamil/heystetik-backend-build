/// <reference types="multer" />
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UpdateProfileUserDto } from './dto/update-profile-user.dto';
import { ProfileUserService } from './profile-user.service';
import { MediaService } from 'src/media/media.service';
import { VerificationService } from 'src/verification/verification.service';
import { InterestBeautyProfileService } from 'src/interest-beauty-profile/interest_beauty_profile.service';
import { InterestFaceCorrectiveSkinGoalsService } from 'src/interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service';
import { InterestBodyCorrectiveSkinGoalsService } from 'src/interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service';
import { InterestAugmentationSkinGoalsService } from 'src/interest-augmentation-skin-goals/interest-augmentation-skin-goals.service';
import { InterestBudgetSkinGoalsService } from 'src/interest-budget-skin-goals/interest_budget_skin_goals.service';
import { InterestHistoryTreatmentSkinGoalsService } from 'src/interest-history-treatment-skin-goals/interest_history_treatment_skin_goals.service';
import { InterestSexuallyAndSkinDiseasesSkinGoalsService } from 'src/interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service';
export declare class ProfileUserController {
    private readonly profileUserService;
    private readonly usersService;
    private readonly mediaService;
    private readonly verificationService;
    private readonly interestBeautyProfileService;
    private readonly interestFaceCorrectiveSkinGoalService;
    private readonly interestBodyCorrectiveSkinGoalService;
    private readonly interestAugmentationSkinGoalService;
    private readonly interestSexuallyAndSkinDiseasesSkinGoalService;
    private readonly interestHistoryTreatmentSkinGoalsService;
    private readonly interestBudgetSkinGoalService;
    constructor(profileUserService: ProfileUserService, usersService: UsersService, mediaService: MediaService, verificationService: VerificationService, interestBeautyProfileService: InterestBeautyProfileService, interestFaceCorrectiveSkinGoalService: InterestFaceCorrectiveSkinGoalsService, interestBodyCorrectiveSkinGoalService: InterestBodyCorrectiveSkinGoalsService, interestAugmentationSkinGoalService: InterestAugmentationSkinGoalsService, interestSexuallyAndSkinDiseasesSkinGoalService: InterestSexuallyAndSkinDiseasesSkinGoalsService, interestHistoryTreatmentSkinGoalsService: InterestHistoryTreatmentSkinGoalsService, interestBudgetSkinGoalService: InterestBudgetSkinGoalsService);
    profile(user: UserEntity): Promise<{
        age: number;
        username: string;
        media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
            media: import(".prisma/client").media;
        };
        id: number;
        email: string;
        province: import(".prisma/client").provinces;
        city: import(".prisma/client").kota_kabupatens;
        no_phone: string;
        fullname: string;
        gender: string;
        dob: Date;
        bio: string;
        verified_account_at: Date;
    }>;
    update(user: UserEntity, files: Express.Multer.File[], data: UpdateProfileUserDto): Promise<import(".prisma/client").users>;
    interest(user: UserEntity): Promise<{
        beauty_profile: import(".prisma/client").interest_beauty_profile;
        skin_goals_face_corrective: import(".prisma/client").interest_face_corrective_skin_goals[];
        skin_goals_body_corrective: import(".prisma/client").interest_body_corrective_skin_goals[];
        skin_goals_augmentation: import(".prisma/client").interest_augmentation_skin_goals[];
        skin_goals_sexually_and_skin_diseases: import(".prisma/client").interest_sexually_and_skin_diseases_skin_goals[];
        skin_goals_history_treatment: import(".prisma/client").interest_history_treatment_skin_goals[];
        skin_goals_budget: import(".prisma/client").interest_budget_skin_goals;
    }>;
    completion(user: UserEntity): Promise<{
        percentage: number;
        title: any;
        subtitle: any;
    }>;
}
