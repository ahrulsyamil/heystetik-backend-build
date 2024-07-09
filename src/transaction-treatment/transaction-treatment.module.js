"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f0b87ebd-d230-5c6b-8f4a-42ade3deb566")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTreatmentModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_treatment_service_1 = require("./transaction-treatment.service");
const transaction_treatment_controller_1 = require("./transaction-treatment.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const treatment_service_1 = require("../treatment/treatment.service");
const payment_method_service_1 = require("../payment-method/payment-method.service");
const midtrans_service_1 = require("../midtrans/midtrans.service");
const voucher_service_1 = require("../voucher/voucher.service");
const transaction_service_1 = require("../transaction/transaction.service");
const xendit_service_1 = require("../xendit/xendit.service");
let TransactionTreatmentModule = class TransactionTreatmentModule {
};
TransactionTreatmentModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [transaction_treatment_controller_1.TransactionTreatmentController],
        providers: [
            transaction_treatment_service_1.TransactionTreatmentService,
            user_service_1.UserService,
            treatment_service_1.TreatmentService,
            payment_method_service_1.PaymentMethodService,
            midtrans_service_1.MidtransService,
            voucher_service_1.VoucherService,
            transaction_service_1.TransactionService,
            xendit_service_1.XenditService,
        ],
    })
], TransactionTreatmentModule);
exports.TransactionTreatmentModule = TransactionTreatmentModule;
//# sourceMappingURL=transaction-treatment.module.js.map
//# debugId=f0b87ebd-d230-5c6b-8f4a-42ade3deb566
