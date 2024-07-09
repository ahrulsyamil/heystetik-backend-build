"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="abbdfda0-5869-511f-95b7-a2101d14bd8a")}catch(e){}}();

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
exports.MinheyController = void 0;
const common_1 = require("@nestjs/common");
const minhey_service_1 = require("./minhey.service");
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../globals/guards/roles.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_minhey_transaction_dto_1 = require("./dto/page-options-minhey-transaction-dto");
const user_decorator_1 = require("../decorators/user.decorator");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const transaction_treatment_service_1 = require("../transaction-treatment/transaction-treatment.service");
const transaction_product_service_1 = require("../transaction-product/transaction-product.service");
let MinheyController = class MinheyController {
    constructor(minheyService, transactionConsultationService, transactionTreatmentService, transactionProductService) {
        this.minheyService = minheyService;
        this.transactionConsultationService = transactionConsultationService;
        this.transactionTreatmentService = transactionTreatmentService;
        this.transactionProductService = transactionProductService;
    }
    async findAllTransaction(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        const data = await this.minheyService.findAllTransaction(pageOptionsDto);
        data.data = await Promise.all(data.data.map(async (item) => {
            let detail = null;
            if (item.transaction_type == 'TREATMENT') {
                detail = await this.transactionTreatmentService.find(item.transaction_id);
            }
            if (item.transaction_type == 'CONSULTATION') {
                detail = await this.transactionConsultationService.find(item.transaction_id);
            }
            if (item.transaction_type == 'PRODUCT') {
                detail = await this.transactionProductService.find(item.transaction_id);
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
    (0, common_1.Get)('transaction'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_minhey_transaction_dto_1.PageOptionsMinheyTransactionDto]),
    __metadata("design:returntype", Promise)
], MinheyController.prototype, "findAllTransaction", null);
MinheyController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('minhey'),
    __metadata("design:paramtypes", [minhey_service_1.MinheyService,
        transaction_consultation_service_1.TransactionConsultationService,
        transaction_treatment_service_1.TransactionTreatmentService,
        transaction_product_service_1.TransactionProductService])
], MinheyController);
exports.MinheyController = MinheyController;
//# sourceMappingURL=minhey.controller.js.map
//# debugId=abbdfda0-5869-511f-95b7-a2101d14bd8a
