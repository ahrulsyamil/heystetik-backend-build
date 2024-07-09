"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b83ea368-b8c3-514f-90ee-7378c8478fbc")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MidtransModule = void 0;
const common_1 = require("@nestjs/common");
const midtrans_service_1 = require("./midtrans.service");
const midtrans_controller_1 = require("./midtrans.controller");
const notification_service_1 = require("../notification/notification.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
const prisma_module_1 = require("../prisma/prisma.module");
const invoice_service_1 = require("../invoice/invoice.service");
let MidtransModule = class MidtransModule {
};
MidtransModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [midtrans_controller_1.MidtransController],
        providers: [
            midtrans_service_1.MidtransService,
            notification_service_1.NotificationService,
            transaction_consultation_service_1.TransactionConsultationService,
            transaction_treatment_service_1.TransactionTreatmentService,
            transaction_product_service_1.TransactionProductService,
            invoice_service_1.InvoiceService,
        ],
    })
], MidtransModule);
exports.MidtransModule = MidtransModule;
//# sourceMappingURL=midtrans.module.js.map
//# debugId=b83ea368-b8c3-514f-90ee-7378c8478fbc
