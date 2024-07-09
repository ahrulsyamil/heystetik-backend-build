"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8d5feddd-f6cc-5cbd-89d2-93d1a679e7d8")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestBudgetSkinGoalsModule = void 0;
const common_1 = require("@nestjs/common");
const interest_budget_skin_goals_service_1 = require("./interest_budget_skin_goals.service");
const interest_budget_skin_goals_controller_1 = require("./interest_budget_skin_goals.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let InterestBudgetSkinGoalsModule = class InterestBudgetSkinGoalsModule {
};
InterestBudgetSkinGoalsModule = __decorate([
    (0, common_1.Module)({
        controllers: [interest_budget_skin_goals_controller_1.InterestBudgetSkinGoalsController],
        providers: [interest_budget_skin_goals_service_1.InterestBudgetSkinGoalsService],
        imports: [prisma_module_1.PrismaModule],
    })
], InterestBudgetSkinGoalsModule);
exports.InterestBudgetSkinGoalsModule = InterestBudgetSkinGoalsModule;
//# sourceMappingURL=interest_budget_skin_goals.module.js.map
//# debugId=8d5feddd-f6cc-5cbd-89d2-93d1a679e7d8
