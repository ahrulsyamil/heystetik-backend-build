"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2bd50e1f-0a79-52dd-a187-bc6dfeedc343")}catch(e){}}();

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
exports.InterestBudgetSkinGoalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InterestBudgetSkinGoalsService = class InterestBudgetSkinGoalsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInterestBudgetSkinGoalsDto) {
        return await this.prisma.interest_budget_skin_goals.upsert({
            where: {
                userId: createInterestBudgetSkinGoalsDto.userId,
            },
            create: createInterestBudgetSkinGoalsDto,
            update: createInterestBudgetSkinGoalsDto,
        });
    }
    findAll() {
        return this.prisma.interest_budget_skin_goals.findMany({
            include: {
                user_id: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.interest_budget_skin_goals.findUnique({
            where: { id },
            include: {
                user_id: true,
            },
        });
    }
    update(id, updateInterestBudgetSkinGoalsDto) {
        return this.prisma.interest_budget_skin_goals.update({
            where: { id },
            data: updateInterestBudgetSkinGoalsDto,
        });
    }
    remove(id) {
        return this.prisma.interest_budget_skin_goals.delete({ where: { id } });
    }
    findBy(where) {
        return this.prisma.interest_budget_skin_goals.findFirst({
            where,
        });
    }
};
InterestBudgetSkinGoalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InterestBudgetSkinGoalsService);
exports.InterestBudgetSkinGoalsService = InterestBudgetSkinGoalsService;
//# sourceMappingURL=interest_budget_skin_goals.service.js.map
//# debugId=2bd50e1f-0a79-52dd-a187-bc6dfeedc343
