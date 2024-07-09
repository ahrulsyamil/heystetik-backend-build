"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4b65ef69-294c-5c55-ae44-d2950b7a904f")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const transaction_consultation_module_1 = require("../transaction-consultation/transaction-consultation.module");
const transaction_product_module_1 = require("../transaction-product/transaction-product.module");
const transaction_treatment_module_1 = require("../transaction-treatment/transaction-treatment.module");
const dashboard_controllers_1 = require("./dashboard.controllers");
const dashboard_service_1 = require("./dashboard.service");
const product_service_1 = require("../product/product.service");
const user_service_1 = require("../auth/user/user.service");
const clinic_service_1 = require("../clinic/clinic.service");
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [dashboard_controllers_1.DashboardController],
        providers: [
            dashboard_service_1.DashboardService,
            transaction_consultation_module_1.TransactionConsultationModule,
            transaction_product_module_1.TransactionProductModule,
            transaction_treatment_module_1.TransactionTreatmentModule,
            product_service_1.ProductService,
            user_service_1.UserService,
            clinic_service_1.ClinicService,
        ],
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map
//# debugId=4b65ef69-294c-5c55-ae44-d2950b7a904f
