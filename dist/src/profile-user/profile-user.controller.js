"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="105fee62-0bb6-56ce-b44a-4324fc0bab19")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const update_profile_user_dto_1 = require("./dto/update-profile-user.dto");
const profile_user_service_1 = require("./profile-user.service");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_1 = require("../globals/constant/media");
const media_service_1 = require("../media/media.service");
const verification_service_1 = require("../verification/verification.service");
const dayjs = require("dayjs");
const interest_beauty_profile_service_1 = require("../interest-beauty-profile/interest_beauty_profile.service");
const interest_face_corrective_skin_goals_service_1 = require("../interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service");
const interest_body_corrective_skin_goals_service_1 = require("../interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service");
const interest_augmentation_skin_goals_service_1 = require("../interest-augmentation-skin-goals/interest-augmentation-skin-goals.service");
const interest_budget_skin_goals_service_1 = require("../interest-budget-skin-goals/interest_budget_skin_goals.service");
const interest_history_treatment_skin_goals_service_1 = require("../interest-history-treatment-skin-goals/interest_history_treatment_skin_goals.service");
const interest_sexually_and_skin_diseases_skin_goals_service_1 = require("../interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service");
let ProfileUserController = class ProfileUserController {
    constructor(profileUserService, usersService, mediaService, verificationService, interestBeautyProfileService, interestFaceCorrectiveSkinGoalService, interestBodyCorrectiveSkinGoalService, interestAugmentationSkinGoalService, interestSexuallyAndSkinDiseasesSkinGoalService, interestHistoryTreatmentSkinGoalsService, interestBudgetSkinGoalService) {
        this.profileUserService = profileUserService;
        this.usersService = usersService;
        this.mediaService = mediaService;
        this.verificationService = verificationService;
        this.interestBeautyProfileService = interestBeautyProfileService;
        this.interestFaceCorrectiveSkinGoalService = interestFaceCorrectiveSkinGoalService;
        this.interestBodyCorrectiveSkinGoalService = interestBodyCorrectiveSkinGoalService;
        this.interestAugmentationSkinGoalService = interestAugmentationSkinGoalService;
        this.interestSexuallyAndSkinDiseasesSkinGoalService = interestSexuallyAndSkinDiseasesSkinGoalService;
        this.interestHistoryTreatmentSkinGoalsService = interestHistoryTreatmentSkinGoalsService;
        this.interestBudgetSkinGoalService = interestBudgetSkinGoalService;
    }
    async profile(user) {
        const data = await this.profileUserService.getProfile(user.id);
        return {
            ...data,
            age: data.dob
                ? dayjs().diff(dayjs(data.dob, 'YYYY-MM-DD'), 'year')
                : null,
        };
    }
    async update(user, files, data) {
        if (files && files.length > 1) {
            throw new common_1.BadRequestException('Only one file is allowed');
        }
        let media = [];
        if (files && files.length == 1) {
            media = await this.mediaService.insertMediaData(files);
        }
        if (data.hasOwnProperty('username')) {
            const findUser = await this.usersService.findBy({
                username: data.username,
            });
            if (findUser && findUser.id != user.id) {
                throw new common_1.BadRequestException('Sorry, this username is already taken.  Please choose a different and unique username.');
            }
        }
        if (data.hasOwnProperty('email')) {
            const findUser = await this.usersService.findByEmail(data.email);
            if (findUser && findUser.id != user.id) {
                throw new common_1.BadRequestException('Sorry, this email is already taken.  Please choose a different and unique email.');
            }
            const userOtp = await this.verificationService.findBy({
                code: data.verification_code,
                type: 'CHANGE_EMAIL',
            });
            if (!userOtp || !userOtp.is_valid || userOtp.used_at != null)
                throw new common_1.BadRequestException('Invalid verification code');
            if (dayjs().isAfter(userOtp.expired_at))
                throw new common_1.BadRequestException('Verification code expired');
            await this.verificationService.update(userOtp.id, {
                is_valid: false,
                used_at: new Date(),
            });
        }
        if (data.hasOwnProperty('no_phone')) {
            const findUser = await this.usersService.findBy({
                no_phone: data.no_phone,
            });
            if (findUser && findUser.id != user.id) {
                throw new common_1.BadRequestException('Sorry, this phone number is already taken.  Please choose a different and unique phone number.');
            }
            const userOtp = await this.verificationService.findBy({
                code: data.verification_code,
                type: 'CHANGE_PHONE_NUMBER',
            });
            if (!userOtp || !userOtp.is_valid || userOtp.used_at != null)
                throw new common_1.BadRequestException('Invalid verification code');
            if (dayjs().isAfter(userOtp.expired_at))
                throw new common_1.BadRequestException('Verification code expired');
            await this.verificationService.update(userOtp.id, {
                is_valid: false,
                used_at: new Date(),
            });
        }
        delete data.verification_code;
        return await this.profileUserService.update(user.id, data, media[0]);
    }
    async interest(user) {
        const beautyProfile = await this.interestBeautyProfileService.findByUser(user.id);
        const skinGoalsFaceCorrective = await this.interestFaceCorrectiveSkinGoalService.findAllBy({
            userId: user.id,
        });
        const skinGoalsBodyCorrective = await this.interestBodyCorrectiveSkinGoalService.findAllBy({
            userId: user.id,
        });
        const skinGoalsAugmentation = await this.interestAugmentationSkinGoalService.findAllBy({
            userId: user.id,
        });
        const skinGoalsSexuallyAndSkinDiseases = await this.interestSexuallyAndSkinDiseasesSkinGoalService.findAllBy({
            userId: user.id,
        });
        const skinGoalsBudget = await this.interestBudgetSkinGoalService.findBy({
            userId: user.id,
        });
        const skinGoalsHistoryTreatment = await this.interestHistoryTreatmentSkinGoalsService.findAllBy({
            userId: user.id,
        });
        return {
            beauty_profile: beautyProfile ?? null,
            skin_goals_face_corrective: skinGoalsFaceCorrective ?? [],
            skin_goals_body_corrective: skinGoalsBodyCorrective ?? [],
            skin_goals_augmentation: skinGoalsAugmentation ?? [],
            skin_goals_sexually_and_skin_diseases: skinGoalsSexuallyAndSkinDiseases ?? [],
            skin_goals_history_treatment: skinGoalsHistoryTreatment ?? [],
            skin_goals_budget: skinGoalsBudget ?? null,
        };
    }
    async completion(user) {
        let completion = 0;
        let title = null;
        let subtitle = null;
        const skinGoalsBudget = !!(await this.interestBudgetSkinGoalService.findBy({
            userId: user.id,
        }));
        if (skinGoalsBudget) {
            completion++;
        }
        else {
            title = 'Skin Goals';
            subtitle = 'Anggaran Untuk Skincare & Treatment';
        }
        const skinGoalsHistoryTreatment = (await this.interestHistoryTreatmentSkinGoalsService.findAllBy({
            userId: user.id,
        })).length > 0;
        if (skinGoalsHistoryTreatment) {
            completion++;
        }
        else {
            title = 'Skin Goals';
            subtitle = 'Treatment yang pernah dilakukan';
        }
        const skinGoalsSexuallyAndSkinDiseases = (await this.interestSexuallyAndSkinDiseasesSkinGoalService.findAllBy({
            userId: user.id,
        })).length > 0;
        if (skinGoalsSexuallyAndSkinDiseases) {
            completion++;
        }
        else {
            title = 'Skin Goals';
            subtitle = 'Penyakit Menular Seksual dan Masalah Kulit Lainnya';
        }
        const skinGoalsAugmentation = (await this.interestAugmentationSkinGoalService.findAllBy({
            userId: user.id,
        })).length > 0;
        if (skinGoalsAugmentation) {
            completion++;
        }
        else {
            title = 'Skin Goals';
            subtitle = 'Skin Goals Augmentation Wajah & Tubuh';
        }
        const skinGoalsBodyCorrective = (await this.interestBodyCorrectiveSkinGoalService.findAllBy({
            userId: user.id,
        })).length > 0;
        if (skinGoalsBodyCorrective) {
            completion++;
        }
        else {
            title = 'Skin Goals';
            subtitle = 'Skin Goals Korektif Tubuh';
        }
        const skinGoalsFaceCorrective = (await this.interestFaceCorrectiveSkinGoalService.findAllBy({
            userId: user.id,
        })).length > 0;
        if (skinGoalsFaceCorrective) {
            completion++;
        }
        else {
            title = 'Skin Goals';
            subtitle = 'Skin Goals Korektif Wajah';
        }
        const beautyProfile = !!(await this.interestBeautyProfileService.findByUser(user.id));
        if (beautyProfile) {
            completion++;
        }
        else {
            title = 'Beauty Profile';
            subtitle = 'Beauty Profile';
        }
        const findUser = await this.usersService.findOne(user.id);
        const emailVerification = !!findUser.verified_email_at;
        if (emailVerification) {
            completion++;
        }
        else {
            title = 'Verifikasi Email';
            subtitle = 'Verifikasi Email';
        }
        const phoneVerification = !!findUser.verified_phone_at;
        if (phoneVerification) {
            completion++;
        }
        else {
            title = 'Verifikasi No. Handphone';
            subtitle = 'Verifikasi No. Handphone';
        }
        return {
            percentage: Math.floor((completion / 9) * 100),
            title,
            subtitle,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ProfileUserController.prototype, "profile", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'file',
        dirPath: media_1.MEDIA_PROFILE_PICTURE_DIR,
        prefixName: 'profile-picture',
    })),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Array, update_profile_user_dto_1.UpdateProfileUserDto]),
    __metadata("design:returntype", Promise)
], ProfileUserController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('interest'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ProfileUserController.prototype, "interest", null);
__decorate([
    (0, common_1.Get)('completion'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ProfileUserController.prototype, "completion", null);
ProfileUserController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('profile/user'),
    __metadata("design:paramtypes", [profile_user_service_1.ProfileUserService,
        users_service_1.UsersService,
        media_service_1.MediaService,
        verification_service_1.VerificationService,
        interest_beauty_profile_service_1.InterestBeautyProfileService,
        interest_face_corrective_skin_goals_service_1.InterestFaceCorrectiveSkinGoalsService,
        interest_body_corrective_skin_goals_service_1.InterestBodyCorrectiveSkinGoalsService,
        interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService,
        interest_sexually_and_skin_diseases_skin_goals_service_1.InterestSexuallyAndSkinDiseasesSkinGoalsService,
        interest_history_treatment_skin_goals_service_1.InterestHistoryTreatmentSkinGoalsService,
        interest_budget_skin_goals_service_1.InterestBudgetSkinGoalsService])
], ProfileUserController);
exports.ProfileUserController = ProfileUserController;
//# sourceMappingURL=profile-user.controller.js.map
//# debugId=105fee62-0bb6-56ce-b44a-4324fc0bab19
