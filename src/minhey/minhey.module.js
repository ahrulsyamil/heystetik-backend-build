"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5a776129-73d8-5411-bdcc-e3ca3a8a6295")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinheyModule = void 0;
const common_1 = require("@nestjs/common");
const minhey_service_1 = require("./minhey.service");
const minhey_controller_1 = require("./minhey.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
let MinheyModule = class MinheyModule {
};
MinheyModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [minhey_controller_1.MinheyController],
        providers: [
            minhey_service_1.MinheyService,
            user_service_1.UserService,
            transaction_consultation_service_1.TransactionConsultationService,
            transaction_product_service_1.TransactionProductService,
            transaction_treatment_service_1.TransactionTreatmentService,
        ],
    })
], MinheyModule);
exports.MinheyModule = MinheyModule;
//# sourceMappingURL=minhey.module.js.map
//# debugId=5a776129-73d8-5411-bdcc-e3ca3a8a6295
