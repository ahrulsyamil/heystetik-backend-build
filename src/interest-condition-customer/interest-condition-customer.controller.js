"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6f70fd93-869e-5fa9-9556-69215676e6fc")}catch(e){}}();

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
exports.InterestConditionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_interest_condition_answers_dto_1 = require("./dto/create-interest_condition_answers.dto");
const interest_condition_customer_service_1 = require("./interest-condition-customer.service");
let InterestConditionsController = class InterestConditionsController {
    constructor(snipsTipsService) {
        this.snipsTipsService = snipsTipsService;
    }
    async create(response, createInterestConditionCustomerDto) {
        const result = await this.snipsTipsService.create(createInterestConditionCustomerDto);
        return response.status(201).json({
            data: result,
            message: 'Success Create Interest Condition',
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: create_interest_condition_answers_dto_1.CreateInterestConditionCustomerDto }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_interest_condition_answers_dto_1.CreateInterestConditionCustomerDto]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "create", null);
InterestConditionsController = __decorate([
    (0, common_1.Controller)('interest_condition_customer'),
    (0, swagger_1.ApiTags)('Interest Conditions Customer'),
    __metadata("design:paramtypes", [interest_condition_customer_service_1.InterestConditionsService])
], InterestConditionsController);
exports.InterestConditionsController = InterestConditionsController;
//# sourceMappingURL=interest-condition-customer.controller.js.map
//# debugId=6f70fd93-869e-5fa9-9556-69215676e6fc
