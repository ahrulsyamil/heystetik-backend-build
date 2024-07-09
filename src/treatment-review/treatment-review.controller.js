"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fe90f26f-fe2e-5f5a-8704-bd66a1890414")}catch(e){}}();

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
exports.TreatmentReviewController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const media_1 = require("../globals/constant/media");
const roles_guard_1 = require("../globals/guards/roles.guard");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_service_1 = require("../media/media.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const treatment_service_1 = require("../treatment/treatment.service");
const user_entity_1 = require("../users/entities/user.entity");
const create_treatment_review_dto_1 = require("./dto/create-treatment-review.dto");
const helpful_treatment_review_dto_1 = require("./dto/helpful-treatment-review.dto");
const page_options_treatment_review_dto_1 = require("./dto/page-options-treatment-review.dto");
const reply_treatment_review_dto_1 = require("./dto/reply-treatment-review.dto");
const treatment_review_service_1 = require("./treatment-review.service");
let TreatmentReviewController = class TreatmentReviewController {
    constructor(treatmentReviewService, transactionTreatmentService, treatmentService, mediaService) {
        this.treatmentReviewService = treatmentReviewService;
        this.transactionTreatmentService = transactionTreatmentService;
        this.treatmentService = treatmentService;
        this.mediaService = mediaService;
    }
    async create(user, files, data) {
        let media = [];
        if (files.length > 0) {
            media = await this.mediaService.insertMediaData(files);
        }
        const findTransaction = await this.transactionTreatmentService.find(data.transaction_treatment_id);
        if (!findTransaction)
            throw new common_1.BadRequestException('Transaction not found');
        if (findTransaction.status != 'SELESAI')
            throw new common_1.BadRequestException('Invalid request on transaction status not SELESAI');
        if (findTransaction.user_id != user.id) {
            throw new common_1.ForbiddenException();
        }
        if (!findTransaction.transaction_treatment_items.find((x) => x.id == data.transaction_treatment_item_id))
            throw new common_1.BadRequestException('Invalid transaction item id from transaction id');
        const findReview = await this.treatmentReviewService.findBy({
            transaction_treatment_item_id: data.transaction_treatment_item_id,
        });
        if (findReview)
            throw new common_1.BadRequestException('You have given a review');
        const avg_rating = (data.care_rating + data.service_rating + data.management_rating) / 3;
        const treatment_id = findTransaction.transaction_treatment_items.find((x) => x.id == data.transaction_treatment_item_id).treatment_id;
        data.avg_rating = Number(avg_rating.toFixed(1));
        data.treatment_id = treatment_id;
        data.user_id = user.id;
        const prevRating = await this.treatmentReviewService.countSumBy({
            treatment_id: treatment_id,
        });
        const newRating = (prevRating._sum.avg_rating ?? 0 + avg_rating) /
            ((prevRating._count.avg_rating ?? 0) + 1);
        await this.treatmentService.updateRating(treatment_id, Number(newRating.toFixed(1)));
        return await this.treatmentReviewService.create(data, media);
    }
    async findAll(user, pageOptions) {
        const result = await this.treatmentReviewService.findAll(pageOptions);
        result.data = await Promise.all(result.data.map(async (item) => {
            const helped = await this.treatmentReviewService.findHelpfulBy({
                treatment_review_id: item.id,
                user_id: user.id,
            });
            return {
                ...item,
                helped: helped ? true : false,
            };
        }));
        return result;
    }
    async createHelpful(user, data) {
        data.user_id = user.id;
        const find = await this.treatmentReviewService.findHelpfulBy(data);
        if (find) {
            return find;
        }
        return await this.treatmentReviewService.createHelpful(data);
    }
    async deleteHelpful(user, data) {
        data.user_id = user.id;
        const find = await this.treatmentReviewService.findHelpfulBy(data);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return await this.treatmentReviewService.deleteHelpful(data);
    }
    async reply(user, data) {
        return await this.treatmentReviewService.createReplyReview(data);
    }
    async overview(id) {
        const find = await this.treatmentService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        const result = await this.treatmentReviewService.overview(id);
        return result[0];
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'files',
        dirPath: media_1.MEDIA_TREATMENT_REVIEW_DIR,
        prefixName: 'treatment-review',
    })),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Array, create_treatment_review_dto_1.CreateTreatmentReviewDto]),
    __metadata("design:returntype", Promise)
], TreatmentReviewController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_treatment_review_dto_1.PageOptionsTreatmentReviewDto]),
    __metadata("design:returntype", Promise)
], TreatmentReviewController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/helpful'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        helpful_treatment_review_dto_1.HelpfulTreatmentReviewDto]),
    __metadata("design:returntype", Promise)
], TreatmentReviewController.prototype, "createHelpful", null);
__decorate([
    (0, common_1.Delete)('/helpful'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        helpful_treatment_review_dto_1.HelpfulTreatmentReviewDto]),
    __metadata("design:returntype", Promise)
], TreatmentReviewController.prototype, "deleteHelpful", null);
__decorate([
    (0, common_1.Post)('/reply'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, reply_treatment_review_dto_1.ReplyTreatmentReviewDto]),
    __metadata("design:returntype", Promise)
], TreatmentReviewController.prototype, "reply", null);
__decorate([
    (0, common_1.Get)(':id/overview'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TreatmentReviewController.prototype, "overview", null);
TreatmentReviewController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('solution/treatment-review'),
    __metadata("design:paramtypes", [treatment_review_service_1.TreatmentReviewService,
        transaction_treatment_service_1.TransactionTreatmentService,
        treatment_service_1.TreatmentService,
        media_service_1.MediaService])
], TreatmentReviewController);
exports.TreatmentReviewController = TreatmentReviewController;
//# sourceMappingURL=treatment-review.controller.js.map
//# debugId=fe90f26f-fe2e-5f5a-8704-bd66a1890414
