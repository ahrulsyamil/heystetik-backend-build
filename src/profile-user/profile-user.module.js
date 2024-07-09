"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="627897a5-11f9-50fa-9b4e-f2851d760e14")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../auth/user/user.service");
const prisma_module_1 = require("../prisma/prisma.module");
const users_service_1 = require("../users/users.service");
const profile_user_controller_1 = require("./profile-user.controller");
const profile_user_service_1 = require("./profile-user.service");
const media_service_1 = require("../media/media.service");
const verification_service_1 = require("../verification/verification.service");
const interest_beauty_profile_service_1 = require("../interest-beauty-profile/interest_beauty_profile.service");
const interest_face_corrective_skin_goals_service_1 = require("../interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service");
const interest_body_corrective_skin_goals_service_1 = require("../interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service");
const interest_augmentation_skin_goals_service_1 = require("../interest-augmentation-skin-goals/interest-augmentation-skin-goals.service");
const interest_budget_skin_goals_service_1 = require("../interest-budget-skin-goals/interest_budget_skin_goals.service");
const interest_history_treatment_skin_goals_service_1 = require("../interest-history-treatment-skin-goals/interest_history_treatment_skin_goals.service");
const interest_sexually_and_skin_diseases_skin_goals_service_1 = require("../interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service");
let ProfileUserModule = class ProfileUserModule {
};
ProfileUserModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [profile_user_controller_1.ProfileUserController],
        providers: [
            profile_user_service_1.ProfileUserService,
            user_service_1.UserService,
            users_service_1.UsersService,
            media_service_1.MediaService,
            verification_service_1.VerificationService,
            interest_beauty_profile_service_1.InterestBeautyProfileService,
            interest_face_corrective_skin_goals_service_1.InterestFaceCorrectiveSkinGoalsService,
            interest_body_corrective_skin_goals_service_1.InterestBodyCorrectiveSkinGoalsService,
            interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService,
            interest_sexually_and_skin_diseases_skin_goals_service_1.InterestSexuallyAndSkinDiseasesSkinGoalsService,
            interest_history_treatment_skin_goals_service_1.InterestHistoryTreatmentSkinGoalsService,
            interest_budget_skin_goals_service_1.InterestBudgetSkinGoalsService,
        ],
    })
], ProfileUserModule);
exports.ProfileUserModule = ProfileUserModule;
//# sourceMappingURL=profile-user.module.js.map
//# debugId=627897a5-11f9-50fa-9b4e-f2851d760e14
