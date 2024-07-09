"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="df0266b5-aaec-56ba-b93a-f754d095132b")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileModule = void 0;
const common_1 = require("@nestjs/common");
const user_profile_service_1 = require("./user-profile.service");
const user_profile_controller_1 = require("./user-profile.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const users_service_1 = require("../users/users.service");
const user_location_service_1 = require("../user-location/user-location.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const stream_like_service_1 = require("../stream-like/stream-like.service");
const stream_save_service_1 = require("../stream-save/stream-save.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
const stream_service_1 = require("../stream/stream.service");
const notification_service_1 = require("../notification/notification.service");
const user_block_service_1 = require("../user-block/user-block.service");
const interest_beauty_profile_service_1 = require("../interest-beauty-profile/interest_beauty_profile.service");
const interest_face_corrective_skin_goals_service_1 = require("../interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service");
const interest_body_corrective_skin_goals_service_1 = require("../interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service");
const interest_augmentation_skin_goals_service_1 = require("../interest-augmentation-skin-goals/interest-augmentation-skin-goals.service");
const interest_sexually_and_skin_diseases_skin_goals_service_1 = require("../interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service");
const interest_history_treatment_skin_goals_service_1 = require("../interest-history-treatment-skin-goals/interest_history_treatment_skin_goals.service");
const interest_budget_skin_goals_service_1 = require("../interest-budget-skin-goals/interest_budget_skin_goals.service");
let UserProfileModule = class UserProfileModule {
};
UserProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_profile_controller_1.UserProfileController],
        providers: [
            user_profile_service_1.UserProfileService,
            user_service_1.UserService,
            users_service_1.UsersService,
            user_location_service_1.UserLocationService,
            transaction_consultation_service_1.TransactionConsultationService,
            transaction_treatment_service_1.TransactionTreatmentService,
            stream_like_service_1.StreamLikeService,
            stream_save_service_1.StreamSaveService,
            transaction_product_service_1.TransactionProductService,
            stream_service_1.StreamService,
            notification_service_1.NotificationService,
            user_block_service_1.UserBlockService,
            interest_beauty_profile_service_1.InterestBeautyProfileService,
            interest_face_corrective_skin_goals_service_1.InterestFaceCorrectiveSkinGoalsService,
            interest_body_corrective_skin_goals_service_1.InterestBodyCorrectiveSkinGoalsService,
            interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService,
            interest_sexually_and_skin_diseases_skin_goals_service_1.InterestSexuallyAndSkinDiseasesSkinGoalsService,
            interest_history_treatment_skin_goals_service_1.InterestHistoryTreatmentSkinGoalsService,
            interest_budget_skin_goals_service_1.InterestBudgetSkinGoalsService,
        ],
    })
], UserProfileModule);
exports.UserProfileModule = UserProfileModule;
//# sourceMappingURL=user-profile.module.js.map
//# debugId=df0266b5-aaec-56ba-b93a-f754d095132b
