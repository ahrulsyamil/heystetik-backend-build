"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="27a39078-3acb-5d37-81c7-2c25feb5d110")}catch(e){}}();

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
exports.ConsultationReviewController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const fcm_service_1 = require("../fcm/fcm.service");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const notification_service_1 = require("../notification/notification.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const consultation_review_service_1 = require("./consultation-review.service");
const create_consultation_review_dto_1 = require("./dto/create-consultation-review.dto");
let ConsultationReviewController = class ConsultationReviewController {
    constructor(consultationReviewService, transactionConsultationService, userService, notificationService, fcmService) {
        this.consultationReviewService = consultationReviewService;
        this.transactionConsultationService = transactionConsultationService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.fcmService = fcmService;
    }
    async create(user, data) {
        const findTransaction = await this.transactionConsultationService.find(data.transaction_consultation_id);
        if (!findTransaction)
            throw new common_1.BadRequestException('Transaction not found');
        if (findTransaction.status != 'SELESAI')
            throw new common_1.BadRequestException('Invalid request on transaction status not SELESAI');
        if (findTransaction.customer_id != user.id) {
            throw new common_1.ForbiddenException();
        }
        const findReview = await this.consultationReviewService.findBy({
            transaction_consultation_id: data.transaction_consultation_id,
        });
        if (findReview)
            throw new common_1.BadRequestException('You have given a review');
        const prevRating = await this.consultationReviewService.countSumBy({
            consultation_id: findTransaction.consultation.id,
        });
        const newRating = (prevRating._sum.rating ?? 0 + data.rating) /
            ((prevRating._count.rating ?? 0) + 1);
        await this.userService.updateDoctorRating(findTransaction.consultation.doctor_id, Number(newRating.toFixed(1)));
        data.consultation_id = findTransaction.consultation.id;
        data.customer_id = user.id;
        data.doctor_id = findTransaction.consultation.doctor_id;
        const review = await this.consultationReviewService.create(data);
        const notification = await this.notificationService.create({
            type: 'CONSULTATION_REVIEW',
            sender_id: 0,
            recipient_id: review.doctor_id,
            title: `Yeay, ${findTransaction.customer.fullname} telah memberikan rating & ulasan untuk Anda 🎉🎉`,
            body: 'Lihat rating & ulasannya, yuk!',
            data: {
                consultation_review_id: review.id,
            },
        });
        await this.fcmService.sendNotificationToTopic({
            topic: review.doctor_id.toString(),
            title: notification.title,
            body: notification.body,
            data: {
                type: notification.type,
                consultation_review_id: review.id,
            },
        });
        return review;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_consultation_review_dto_1.CreateConsultationReviewDto]),
    __metadata("design:returntype", Promise)
], ConsultationReviewController.prototype, "create", null);
ConsultationReviewController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('consultation-review'),
    __metadata("design:paramtypes", [consultation_review_service_1.ConsultationReviewService,
        transaction_consultation_service_1.TransactionConsultationService,
        users_service_1.UsersService,
        notification_service_1.NotificationService,
        fcm_service_1.FcmService])
], ConsultationReviewController);
exports.ConsultationReviewController = ConsultationReviewController;
//# sourceMappingURL=consultation-review.controller.js.map
//# debugId=27a39078-3acb-5d37-81c7-2c25feb5d110
