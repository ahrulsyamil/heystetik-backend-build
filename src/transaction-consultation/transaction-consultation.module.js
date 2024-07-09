"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="929421de-c865-58fe-a447-fbe0a1e6059b")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionConsultationModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_consultation_service_1 = require("./transaction-consultation.service");
const transaction_consultation_controller_1 = require("./transaction-consultation.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const medical_history_service_1 = require("../medical-history/medical-history.service");
const payment_method_service_1 = require("../payment-method/payment-method.service");
const midtrans_service_1 = require("../midtrans/midtrans.service");
const media_service_1 = require("../media/media.service");
const voucher_service_1 = require("../voucher/voucher.service");
const transaction_service_1 = require("../transaction/transaction.service");
const xendit_service_1 = require("../xendit/xendit.service");
let TransactionConsultationModule = class TransactionConsultationModule {
};
TransactionConsultationModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [transaction_consultation_controller_1.TransactionConsultationController],
        providers: [
            transaction_consultation_service_1.TransactionConsultationService,
            user_service_1.UserService,
            medical_history_service_1.MedicalHistoryService,
            payment_method_service_1.PaymentMethodService,
            midtrans_service_1.MidtransService,
            media_service_1.MediaService,
            voucher_service_1.VoucherService,
            transaction_service_1.TransactionService,
            xendit_service_1.XenditService,
        ],
    })
], TransactionConsultationModule);
exports.TransactionConsultationModule = TransactionConsultationModule;
//# sourceMappingURL=transaction-consultation.module.js.map
//# debugId=929421de-c865-58fe-a447-fbe0a1e6059b
