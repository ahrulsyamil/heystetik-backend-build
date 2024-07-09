"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c7d47f73-d093-5846-958a-557e7e9e11d2")}catch(e){}}();

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
exports.RegistrationController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bcrypt_1 = require("bcrypt");
const dayjs = require("dayjs");
const jwt = require("jsonwebtoken");
const media_1 = require("../globals/constant/media");
const string_1 = require("../globals/helpers/string");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const interest_augmentation_skin_goals_service_1 = require("../interest-augmentation-skin-goals/interest-augmentation-skin-goals.service");
const interest_beauty_profile_service_1 = require("../interest-beauty-profile/interest_beauty_profile.service");
const interest_body_corrective_skin_goals_service_1 = require("../interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service");
const interest_budget_skin_goals_service_1 = require("../interest-budget-skin-goals/interest_budget_skin_goals.service");
const interest_face_corrective_skin_goals_service_1 = require("../interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service");
const interest_history_treatment_skin_goals_service_1 = require("../interest-history-treatment-skin-goals/interest_history_treatment_skin_goals.service");
const interest_sexually_and_skin_diseases_skin_goals_service_1 = require("../interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service");
const media_service_1 = require("../media/media.service");
const users_service_1 = require("../users/users.service");
const verification_service_1 = require("../verification/verification.service");
const registration_beauty_profile_dto_1 = require("./dto/registration-beauty-profile.dto");
const registration_email_dto_1 = require("./dto/registration-email.dto");
const registration_interest_augmentation_skin_goals_dto_1 = require("./dto/registration-interest-augmentation-skin-goals.dto");
const registration_interest_body_corrective_skin_goals_dto_1 = require("./dto/registration-interest-body-corrective-skin-goals.dto");
const registration_interest_budget_skin_goals_dto_1 = require("./dto/registration-interest-budget-skin-goals.dto");
const registration_interest_face_corrective_skin_goals_dto_1 = require("./dto/registration-interest-face-corrective-skin-goals.dto");
const registration_interest_history_treatment_skin_goals_dto_1 = require("./dto/registration-interest-history-treatment-skin-goals.dto");
const registration_interest_sexually_and_skin_diseases_skin_goals_dto_1 = require("./dto/registration-interest-sexually-and-skin-diseases-skin-goals.dto");
const registration_personal_info_dto_1 = require("./dto/registration-personal-info.dto");
const registration_phone_dto_1 = require("./dto/registration-phone.dto");
const registration_service_1 = require("./registration.service");
let RegistrationController = class RegistrationController {
    constructor(configService, registrationService, usersService, verificationService, mediaService, interestBeautyProfileService, interestFaceCorrectiveSkinGoalService, interestBodyCorrectiveSkinGoalService, interestAugmentationSkinGoalService, interestSexuallyAndSkinDiseasesService, interestHistoryTreatmentSkinGoalService, interestBudgetSkinGoalService) {
        this.configService = configService;
        this.registrationService = registrationService;
        this.usersService = usersService;
        this.verificationService = verificationService;
        this.mediaService = mediaService;
        this.interestBeautyProfileService = interestBeautyProfileService;
        this.interestFaceCorrectiveSkinGoalService = interestFaceCorrectiveSkinGoalService;
        this.interestBodyCorrectiveSkinGoalService = interestBodyCorrectiveSkinGoalService;
        this.interestAugmentationSkinGoalService = interestAugmentationSkinGoalService;
        this.interestSexuallyAndSkinDiseasesService = interestSexuallyAndSkinDiseasesService;
        this.interestHistoryTreatmentSkinGoalService = interestHistoryTreatmentSkinGoalService;
        this.interestBudgetSkinGoalService = interestBudgetSkinGoalService;
    }
    async registerPhone(data) {
        const findRegistered = await this.usersService.findBy({
            no_phone: data.phone_number,
            finish_register: true,
        });
        if (findRegistered) {
            throw new common_1.BadRequestException('Phone number has been registered');
        }
        if (data.user_id) {
            const user = await this.usersService.findOne(data.user_id);
            if (user.no_phone)
                throw new common_1.BadRequestException('Invalid request');
        }
        let find = await this.usersService.findBy({
            no_phone: data.phone_number,
            finish_register: false,
        });
        if (find && find.id != data.user_id) {
            throw new common_1.BadRequestException('Invalid request');
        }
        if (!find) {
            const userOtp = await this.verificationService.findBy({
                code: data.verification_code,
                type: 'REGISTRATION',
                method: 'WHATSAPP',
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
        if (!find && !data.user_id) {
            find = await this.registrationService.createUser({
                no_phone: data.phone_number,
                roleId: 3,
                verified_phone_at: new Date(),
            });
        }
        if (data.user_id) {
            find = await this.usersService.updateUser(data.user_id, {
                no_phone: data.phone_number,
                verified_phone_at: new Date(),
            });
        }
        return find;
    }
    async registerEmail(data) {
        const findRegistered = await this.usersService.findBy({
            email: data.email,
            finish_register: true,
        });
        if (findRegistered) {
            throw new common_1.BadRequestException('Email has been registered');
        }
        const find = await this.usersService.findOne(data.user_id);
        if (!find)
            throw new common_1.BadRequestException('User not found');
        if (find.finish_register)
            throw new common_1.BadRequestException('Invalid request');
        if (data.verification_code) {
            const userOtp = await this.verificationService.findBy({
                code: data.verification_code,
                type: 'REGISTRATION',
                method: 'EMAIL',
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
        return await this.registrationService.updateUser(find.id, {
            email: data.email,
            verified_email_at: data.verification_code ? new Date() : null,
        });
    }
    async registerPersonalInfo(files, data) {
        const find = await this.usersService.findOne(data.user_id);
        if (!find)
            throw new common_1.BadRequestException('User not found');
        if (find.finish_register)
            throw new common_1.BadRequestException('Invalid request');
        if (files && files.length > 1) {
            throw new common_1.BadRequestException('Only one file is allowed');
        }
        let media = [];
        if (files && files.length == 1) {
            media = await this.mediaService.insertMediaData(files);
        }
        let username = (0, string_1.generateRandomUsernameFromFullname)(data.fullname);
        if (find.email) {
            const existUsername = await this.usersService.findBy({
                username: find.email.split('@')[0],
            });
            if (!existUsername)
                username = find.email.split('@')[0];
        }
        return await this.registrationService.updateUser(find.id, {
            gender: data.gender,
            fullname: data.fullname,
            password: await (0, bcrypt_1.hash)(data.password, 12),
            provinceId: data.province_id,
            cityId: data.city_id,
            finish_register: true,
            username,
        }, media[0]);
    }
    async registerBeautyProfile(data) {
        const find = await this.usersService.findOne(data.user_id);
        if (!find || !find?.finish_register)
            throw new common_1.BadRequestException('User not found');
        return this.interestBeautyProfileService.create(data);
    }
    async registerInterestFaceCorrectiveSkinGoals(data) {
        const find = await this.usersService.findOne(data.user_id);
        if (!find || !find?.finish_register)
            throw new common_1.BadRequestException('User not found');
        return this.interestFaceCorrectiveSkinGoalService.create({
            userId: data.user_id,
            lists: data.lists,
        });
    }
    async registerInterestBodyCorrectiveSkinGoals(data) {
        const find = await this.usersService.findOne(data.user_id);
        if (!find || !find?.finish_register)
            throw new common_1.BadRequestException('User not found');
        return this.interestBodyCorrectiveSkinGoalService.create({
            userId: data.user_id,
            lists: data.lists,
        });
    }
    async registerInterestAugmentationSkinGoals(data) {
        const find = await this.usersService.findOne(data.user_id);
        if (!find || !find?.finish_register)
            throw new common_1.BadRequestException('User not found');
        return this.interestAugmentationSkinGoalService.create({
            userId: data.user_id,
            lists: data.lists,
        });
    }
    async registerInterestSexuallyAndSkinDiseaseskinGoals(data) {
        const find = await this.usersService.findOne(data.user_id);
        if (!find || !find?.finish_register)
            throw new common_1.BadRequestException('User not found');
        return this.interestSexuallyAndSkinDiseasesService.create({
            userId: data.user_id,
            lists: data.lists,
        });
    }
    async registerInterestHistoryTreatmentSkinGoals(data) {
        const find = await this.usersService.findOne(data.user_id);
        if (!find)
            throw new common_1.BadRequestException('User not found');
        return this.interestHistoryTreatmentSkinGoalService.create({
            userId: data.user_id,
            lists: data.lists,
        });
    }
    async registerInterestBudgetSkinGoals(data) {
        const find = await this.usersService.findOne(data.user_id);
        if (!find || !find?.finish_register)
            throw new common_1.BadRequestException('User not found');
        await this.interestBudgetSkinGoalService.create({
            userId: data.user_id,
            budget_for_skincare: data.budget_for_skincare,
            budget_for_treatment: data.budget_for_treatment,
        });
        const token = jwt.sign({
            sub: find.id,
        }, this.configService.get('jwt').secret, {
            expiresIn: '7d',
        });
        return {
            token,
            user: find,
        };
    }
};
__decorate([
    (0, common_1.Post)('step/phone-number'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_phone_dto_1.RegistrationUserPhoneDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerPhone", null);
__decorate([
    (0, common_1.Post)('step/email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_email_dto_1.RegistrationUserEmailDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerEmail", null);
__decorate([
    (0, common_1.Post)('step/personal-info'),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'file',
        dirPath: media_1.MEDIA_PROFILE_PICTURE_DIR,
        prefixName: 'profile-picture',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, registration_personal_info_dto_1.RegistrationUserPersonalInfoDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerPersonalInfo", null);
__decorate([
    (0, common_1.Post)('step/beauty-profile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_beauty_profile_dto_1.RegistrationUserBeautyProfileDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerBeautyProfile", null);
__decorate([
    (0, common_1.Post)('step/interest-face-corrective-skin-goals'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_interest_face_corrective_skin_goals_dto_1.RegistrationUserInterestFaceCorrectiveSkinGoalsDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerInterestFaceCorrectiveSkinGoals", null);
__decorate([
    (0, common_1.Post)('step/interest-body-corrective-skin-goals'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_interest_body_corrective_skin_goals_dto_1.RegistrationUserInterestBodyCorrectiveSkinGoalsDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerInterestBodyCorrectiveSkinGoals", null);
__decorate([
    (0, common_1.Post)('step/interest-augmentation-skin-goals'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_interest_augmentation_skin_goals_dto_1.RegistrationUserInterestAugmentationSkinGoalsDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerInterestAugmentationSkinGoals", null);
__decorate([
    (0, common_1.Post)('step/interest-sexually-and-skin-diseases-skin-goals'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_interest_sexually_and_skin_diseases_skin_goals_dto_1.RegistrationUserInterestSexuallyAndSkinDiseasesSkinGoalsDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerInterestSexuallyAndSkinDiseaseskinGoals", null);
__decorate([
    (0, common_1.Post)('step/interest-history-treatment-skin-goals'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_interest_history_treatment_skin_goals_dto_1.RegistrationUserInterestHistoryTreatmentSkinGoalsDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerInterestHistoryTreatmentSkinGoals", null);
__decorate([
    (0, common_1.Post)('step/interest-budget-skin-goals'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_interest_budget_skin_goals_dto_1.RegistrationUserInterestBudgetSkinGoalsDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerInterestBudgetSkinGoals", null);
RegistrationController = __decorate([
    (0, common_1.Controller)('registration'),
    __metadata("design:paramtypes", [config_1.ConfigService,
        registration_service_1.RegistrationService,
        users_service_1.UsersService,
        verification_service_1.VerificationService,
        media_service_1.MediaService,
        interest_beauty_profile_service_1.InterestBeautyProfileService,
        interest_face_corrective_skin_goals_service_1.InterestFaceCorrectiveSkinGoalsService,
        interest_body_corrective_skin_goals_service_1.InterestBodyCorrectiveSkinGoalsService,
        interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService,
        interest_sexually_and_skin_diseases_skin_goals_service_1.InterestSexuallyAndSkinDiseasesSkinGoalsService,
        interest_history_treatment_skin_goals_service_1.InterestHistoryTreatmentSkinGoalsService,
        interest_budget_skin_goals_service_1.InterestBudgetSkinGoalsService])
], RegistrationController);
exports.RegistrationController = RegistrationController;
//# sourceMappingURL=registration.controller.js.map
//# debugId=c7d47f73-d093-5846-958a-557e7e9e11d2
