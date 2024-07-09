"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dd977274-c122-5b41-8efd-58e27bff8ad6")}catch(e){}}();

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
exports.UserProfileController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const user_service_1 = require("../auth/user/user.service");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const user_location_service_1 = require("../user-location/user-location.service");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const follow_unfollow_user_profile_dto_1 = require("./dto/follow-unfollow-user-profile.dto");
const page_options_posts_user_profile_dto_1 = require("./dto/page-options-posts-user-profile.dto");
const page_options_reviews_user_profile_dto_1 = require("./dto/page-options-reviews-user-profile.dto");
const page_options_user_profile_search_dto_1 = require("./dto/page-options-user-profile-search.dto");
const user_profile_service_1 = require("./user-profile.service");
const stream_save_service_1 = require("../stream-save/stream-save.service");
const stream_like_service_1 = require("../stream-like/stream-like.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
const stream_service_1 = require("../stream/stream.service");
const notification_service_1 = require("../notification/notification.service");
const bull_1 = require("@nestjs/bull");
const user_block_service_1 = require("../user-block/user-block.service");
const interest_beauty_profile_service_1 = require("../interest-beauty-profile/interest_beauty_profile.service");
const interest_face_corrective_skin_goals_service_1 = require("../interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service");
const interest_body_corrective_skin_goals_service_1 = require("../interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service");
const interest_augmentation_skin_goals_service_1 = require("../interest-augmentation-skin-goals/interest-augmentation-skin-goals.service");
const interest_sexually_and_skin_diseases_skin_goals_service_1 = require("../interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service");
const interest_history_treatment_skin_goals_service_1 = require("../interest-history-treatment-skin-goals/interest_history_treatment_skin_goals.service");
const interest_budget_skin_goals_service_1 = require("../interest-budget-skin-goals/interest_budget_skin_goals.service");
let UserProfileController = class UserProfileController {
    constructor(userProfileService, usersService, userService, userLocationService, transactionConsultationService, transactionTreatmentService, streamSaveService, streamLikeService, transactionProduct, streamService, notificationService, userBlockService, interestBeautyProfileService, interestFaceCorrectiveSkinGoalService, interestBodyCorrectiveSkinGoalService, interestAugmentationSkinGoalService, interestSexuallyAndSkinDiseasesSkinGoalService, interestHistoryTreatmentSkinGoalsService, interestBudgetSkinGoalService, queueFcm) {
        this.userProfileService = userProfileService;
        this.usersService = usersService;
        this.userService = userService;
        this.userLocationService = userLocationService;
        this.transactionConsultationService = transactionConsultationService;
        this.transactionTreatmentService = transactionTreatmentService;
        this.streamSaveService = streamSaveService;
        this.streamLikeService = streamLikeService;
        this.transactionProduct = transactionProduct;
        this.streamService = streamService;
        this.notificationService = notificationService;
        this.userBlockService = userBlockService;
        this.interestBeautyProfileService = interestBeautyProfileService;
        this.interestFaceCorrectiveSkinGoalService = interestFaceCorrectiveSkinGoalService;
        this.interestBodyCorrectiveSkinGoalService = interestBodyCorrectiveSkinGoalService;
        this.interestAugmentationSkinGoalService = interestAugmentationSkinGoalService;
        this.interestSexuallyAndSkinDiseasesSkinGoalService = interestSexuallyAndSkinDiseasesSkinGoalService;
        this.interestHistoryTreatmentSkinGoalsService = interestHistoryTreatmentSkinGoalsService;
        this.interestBudgetSkinGoalService = interestBudgetSkinGoalService;
        this.queueFcm = queueFcm;
    }
    async findAllMention(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.userProfileService.search(pageOptionsDto);
    }
    async overview(user, username) {
        const find = await this.usersService.findBy({
            username,
        });
        if (!find || find.roleId != 3)
            throw new common_1.BadRequestException('User not found');
        const data = await this.userProfileService.overview(username);
        const [userLocation, userMediaProfile, follow, blocked] = await Promise.all([
            this.userLocationService.find(find.id),
            this.userService.findById(find.id),
            this.userProfileService.findUserFollow(find.id, user.id),
            this.userBlockService.find({
                user_id: user.id,
                blocked_user_id: find.id,
            }),
        ]);
        return {
            ...data[0],
            user_location: userLocation ?? null,
            media_user_profile_picture: userMediaProfile['media_user_profile_picture'],
            follow: follow ? true : false,
            blocked: blocked ? true : false,
        };
    }
    async follow(user, username, data) {
        const find = await this.usersService.findBy({
            username,
        });
        if (!find || find.roleId != 3)
            throw new common_1.BadRequestException('User not found');
        if (find.id == user.id)
            throw new common_1.BadRequestException('Invalid request');
        const notificationSetting = await this.notificationService.findAllNotificationSetting(find.id);
        if (notificationSetting.find((x) => x.type == 'NOTIF_STREAM_FOLLOWER')
            ?.is_enabled ??
            true) {
            const notification = await this.notificationService.create({
                type: 'STREAM_NEW_FOLLOWER',
                sender_id: 0,
                recipient_id: find.id,
                title: 'Follower',
                body: `${user.username} started following you`,
                data: {
                    follower_fullname: user.fullname,
                    follower_id: user.id,
                    follower_username: user.username,
                },
            });
            this.queueFcm.add('sendNotificationToTopic', {
                topic: find.id.toString(),
                title: notification.title,
                body: notification.body,
                data: {
                    type: notification.type,
                    follower_fullname: user.fullname,
                    follower_id: user.id,
                    follower_username: user.username,
                },
            });
        }
        data.user_id = find.id;
        data.follower_id = user.id;
        return await this.userProfileService.follow(data);
    }
    async unfollow(user, username, data) {
        const find = await this.usersService.findBy({
            username,
        });
        if (!find || find.roleId != 3)
            throw new common_1.BadRequestException('User not found');
        if (find.id == user.id)
            throw new common_1.BadRequestException('Invalid request');
        data.user_id = find.id;
        data.follower_id = user.id;
        return await this.userProfileService.unfollow(data);
    }
    async posts(user, username, pageOptions) {
        const findUser = await this.userService.findBy({
            username,
        });
        if (!findUser)
            throw new common_1.BadRequestException('User not found');
        pageOptions.user_id = findUser.id;
        const result = await this.userProfileService.posts(pageOptions);
        result.data = await Promise.all(result.data.map(async (item) => {
            const [saved, like, follow, votedOption] = await Promise.all([
                this.streamSaveService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamLikeService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamFollowerBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamPollingBy({
                    user_id: user.id,
                    stream_poll: {
                        stream_id: item.id,
                        id: item?.stream_poll?.id,
                    },
                }),
            ]);
            return {
                ...item,
                saved: saved ? true : false,
                like: like ? true : false,
                follow: follow ? true : false,
                voted: votedOption ? true : false,
                voted_option: votedOption,
            };
        }));
        return result;
    }
    async reviews(user, username, pageOptions) {
        const findUser = await this.userService.findBy({
            username,
        });
        if (!findUser)
            throw new common_1.BadRequestException('User not found');
        pageOptions.user_id = findUser.id;
        const data = await this.userProfileService.reviews(pageOptions);
        data.data = await Promise.all(data.data.map(async (item) => {
            let detail = null;
            if (item.transaction_type == 'TREATMENT') {
                detail = await this.transactionTreatmentService.findTransactionItemBy({
                    id: Number(item.id),
                });
            }
            if (item.transaction_type == 'CONSULTATION') {
                detail = await this.transactionConsultationService.find(item.id);
            }
            if (item.transaction_type == 'PRODUCT') {
                detail = await this.transactionProduct.findTransactionItemBy({
                    id: Number(item.id),
                });
            }
            return {
                ...item,
                detail,
            };
        }));
        return data;
    }
    async interest(user, username) {
        const find = await this.usersService.findBy({
            username,
        });
        if (!find || find.roleId != 3)
            throw new common_1.BadRequestException('User not found');
        const beautyProfile = await this.interestBeautyProfileService.findByUser(find.id);
        const skinGoalsFaceCorrective = await this.interestFaceCorrectiveSkinGoalService.findAllBy({
            userId: find.id,
        });
        const skinGoalsBodyCorrective = await this.interestBodyCorrectiveSkinGoalService.findAllBy({
            userId: find.id,
        });
        const skinGoalsAugmentation = await this.interestAugmentationSkinGoalService.findAllBy({
            userId: find.id,
        });
        const skinGoalsSexuallyAndSkinDiseases = await this.interestSexuallyAndSkinDiseasesSkinGoalService.findAllBy({
            userId: find.id,
        });
        const skinGoalsBudget = await this.interestBudgetSkinGoalService.findBy({
            userId: find.id,
        });
        const skinGoalsHistoryTreatment = await this.interestHistoryTreatmentSkinGoalsService.findAllBy({
            userId: find.id,
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
};
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_user_profile_search_dto_1.PageOptionsUserProfileSearchDto]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "findAllMention", null);
__decorate([
    (0, common_1.Get)(':username/overview'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "overview", null);
__decorate([
    (0, common_1.Post)(':username/follow'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('username')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, follow_unfollow_user_profile_dto_1.FollowUnfollowUserProfileDto]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "follow", null);
__decorate([
    (0, common_1.Post)(':username/unfollow'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('username')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, follow_unfollow_user_profile_dto_1.FollowUnfollowUserProfileDto]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "unfollow", null);
__decorate([
    (0, common_1.Get)(':username/posts'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('username')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, page_options_posts_user_profile_dto_1.PageOptionsLPostsUserProfileDto]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "posts", null);
__decorate([
    (0, common_1.Get)(':username/reviews'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('username')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, page_options_reviews_user_profile_dto_1.PageOptionsReviewsUserProfileDto]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "reviews", null);
__decorate([
    (0, common_1.Get)(':username/interest'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "interest", null);
UserProfileController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('user-profile'),
    __param(19, (0, bull_1.InjectQueue)('queueFcm')),
    __metadata("design:paramtypes", [user_profile_service_1.UserProfileService,
        users_service_1.UsersService,
        user_service_1.UserService,
        user_location_service_1.UserLocationService,
        transaction_consultation_service_1.TransactionConsultationService,
        transaction_treatment_service_1.TransactionTreatmentService,
        stream_save_service_1.StreamSaveService,
        stream_like_service_1.StreamLikeService,
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
        interest_budget_skin_goals_service_1.InterestBudgetSkinGoalsService, Object])
], UserProfileController);
exports.UserProfileController = UserProfileController;
//# sourceMappingURL=user-profile.controller.js.map
//# debugId=dd977274-c122-5b41-8efd-58e27bff8ad6
