"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="822168a4-5d00-5737-a967-c9c01b9be47b")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../auth/user/user.service");
const midtrans_service_1 = require("../midtrans/midtrans.service");
const prisma_module_1 = require("../prisma/prisma.module");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const transaction_controller_1 = require("./transaction.controller");
const transaction_service_1 = require("./transaction.service");
const notification_service_1 = require("../notification/notification.service");
const fcm_service_1 = require("../fcm/fcm.service");
const invoice_service_1 = require("../invoice/invoice.service");
const xendit_service_1 = require("../xendit/xendit.service");
let TransactionModule = class TransactionModule {
};
TransactionModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [transaction_controller_1.TransactionController],
        providers: [
            user_service_1.UserService,
            midtrans_service_1.MidtransService,
            transaction_consultation_service_1.TransactionConsultationService,
            transaction_treatment_service_1.TransactionTreatmentService,
            transaction_product_service_1.TransactionProductService,
            transaction_service_1.TransactionService,
            notification_service_1.NotificationService,
            fcm_service_1.FcmService,
            transaction_service_1.TransactionService,
            invoice_service_1.InvoiceService,
            xendit_service_1.XenditService,
        ],
    })
], TransactionModule);
exports.TransactionModule = TransactionModule;
//# sourceMappingURL=transaction.module.js.map
//# debugId=822168a4-5d00-5737-a967-c9c01b9be47b
