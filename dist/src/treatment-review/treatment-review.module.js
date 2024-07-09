"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="48efc0e0-9313-5d0a-99f9-728fe07b2b58")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentReviewModule = void 0;
const common_1 = require("@nestjs/common");
const treatment_review_service_1 = require("./treatment-review.service");
const treatment_review_controller_1 = require("./treatment-review.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const treatment_service_1 = require("../treatment/treatment.service");
const media_service_1 = require("../media/media.service");
let TreatmentReviewModule = class TreatmentReviewModule {
};
TreatmentReviewModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [treatment_review_controller_1.TreatmentReviewController],
        providers: [
            treatment_review_service_1.TreatmentReviewService,
            user_service_1.UserService,
            transaction_treatment_service_1.TransactionTreatmentService,
            treatment_service_1.TreatmentService,
            media_service_1.MediaService,
        ],
    })
], TreatmentReviewModule);
exports.TreatmentReviewModule = TreatmentReviewModule;
//# sourceMappingURL=treatment-review.module.js.map
//# debugId=48efc0e0-9313-5d0a-99f9-728fe07b2b58
