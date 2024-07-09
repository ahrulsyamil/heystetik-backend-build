"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5a46dd54-41be-55eb-9c8f-31b700f22a0b")}catch(e){}}();

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
exports.UserReviewController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const user_review_service_1 = require("./user-review.service");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_user_review_dto_1 = require("./dto/page-options-user-review.dto");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
let UserReviewController = class UserReviewController {
    constructor(userReviewService, transactionTreatmentService, transactionProductService, transactionConsultationService) {
        this.userReviewService = userReviewService;
        this.transactionTreatmentService = transactionTreatmentService;
        this.transactionProductService = transactionProductService;
        this.transactionConsultationService = transactionConsultationService;
    }
    async findAllWaitingReview(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        const data = await this.userReviewService.findAllWaitingReview(pageOptionsDto);
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
                detail = await this.transactionProductService.findTransactionItemBy({
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
    async findAllFinishedReview(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        const data = await this.userReviewService.findAllFinishedReview(pageOptionsDto);
        data.data = await Promise.all(data.data.map(async (item) => {
            let detail = null;
            if (item.transaction_type == 'TREATMENT') {
                detail = await this.transactionTreatmentService.findTransactionItemBy({
                    id: Number(item.id),
                });
            }
            if (item.transaction_type == 'PRODUCT') {
                detail = await this.transactionProductService.findTransactionItemBy({
                    id: Number(item.id),
                });
            }
            if (item.transaction_type == 'CONSULTATION') {
                detail = await this.transactionConsultationService.find(item.id);
            }
            return {
                ...item,
                detail,
            };
        }));
        return data;
    }
};
__decorate([
    (0, common_1.Get)('waiting'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_user_review_dto_1.PageOptionsUserReviewDto]),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "findAllWaitingReview", null);
__decorate([
    (0, common_1.Get)('finished'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_user_review_dto_1.PageOptionsUserReviewDto]),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "findAllFinishedReview", null);
UserReviewController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('user-review'),
    __metadata("design:paramtypes", [user_review_service_1.UserReviewService,
        transaction_treatment_service_1.TransactionTreatmentService,
        transaction_product_service_1.TransactionProductService,
        transaction_consultation_service_1.TransactionConsultationService])
], UserReviewController);
exports.UserReviewController = UserReviewController;
//# sourceMappingURL=user-review.controller.js.map
//# debugId=5a46dd54-41be-55eb-9c8f-31b700f22a0b
