"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cc0a50f2-bbf9-583b-be52-0a6e9e10a67d")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestConditionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InterestConditionsService = class InterestConditionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInterestConditionCustomerDto) {
        if (createInterestConditionCustomerDto.lists.length) {
            createInterestConditionCustomerDto.lists.map(async (value) => {
                await this.prisma.interest_condition_customer.create({
                    data: {
                        interest_conditions_id: createInterestConditionCustomerDto.interest_conditions_id,
                        interest_conditions_answer_id: value.interest_conditions_answer_id,
                        interest_conditions_question_id: value.interest_conditions_question_id,
                        answer_description: value.answer_description,
                        userId: createInterestConditionCustomerDto.userId,
                    },
                });
            });
        }
    }
};
InterestConditionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InterestConditionsService);
exports.InterestConditionsService = InterestConditionsService;
//# sourceMappingURL=interest-condition-customer.service.js.map
//# debugId=cc0a50f2-bbf9-583b-be52-0a6e9e10a67d
