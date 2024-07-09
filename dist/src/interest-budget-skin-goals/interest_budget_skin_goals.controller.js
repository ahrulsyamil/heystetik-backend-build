"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5a14e36f-9e8b-59c0-bf5d-fee47742fce7")}catch(e){}}();

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
exports.InterestBudgetSkinGoalsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_interest_budget_skin_goals_dto_1 = require("./dto/create-interest_budget_skin_goals.dto");
const update_interest_budget_skin_goals_dto_1 = require("./dto/update-interest_budget_skin_goals.dto");
const interest_budget_skin_goals_entity_1 = require("./entities/interest_budget_skin_goals.entity");
const interest_budget_skin_goals_service_1 = require("./interest_budget_skin_goals.service");
let InterestBudgetSkinGoalsController = class InterestBudgetSkinGoalsController {
    constructor(interestBudgetSkinGoalsService) {
        this.interestBudgetSkinGoalsService = interestBudgetSkinGoalsService;
    }
    create(createInterestBudgetSkinGoalsDto) {
        return this.interestBudgetSkinGoalsService.create(createInterestBudgetSkinGoalsDto);
    }
    findAll() {
        return this.interestBudgetSkinGoalsService.findAll();
    }
    findOne(id) {
        return this.interestBudgetSkinGoalsService.findOne(+id);
    }
    update(id, updateInterestBudgetSkinGoalsDto) {
        return this.interestBudgetSkinGoalsService.update(+id, updateInterestBudgetSkinGoalsDto);
    }
    remove(id) {
        return this.interestBudgetSkinGoalsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: interest_budget_skin_goals_entity_1.InterestBudgetSkinGoalsEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_interest_budget_skin_goals_dto_1.CreateInterestBudgetSkinGoalsDto]),
    __metadata("design:returntype", void 0)
], InterestBudgetSkinGoalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: interest_budget_skin_goals_entity_1.InterestBudgetSkinGoalsEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InterestBudgetSkinGoalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_budget_skin_goals_entity_1.InterestBudgetSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestBudgetSkinGoalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_budget_skin_goals_entity_1.InterestBudgetSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_interest_budget_skin_goals_dto_1.UpdateInterestBudgetSkinGoalsDto]),
    __metadata("design:returntype", void 0)
], InterestBudgetSkinGoalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_budget_skin_goals_entity_1.InterestBudgetSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestBudgetSkinGoalsController.prototype, "remove", null);
InterestBudgetSkinGoalsController = __decorate([
    (0, common_1.Controller)('interest_budget_skin_goals'),
    (0, swagger_1.ApiTags)('Interest Budget Skin Goals'),
    __metadata("design:paramtypes", [interest_budget_skin_goals_service_1.InterestBudgetSkinGoalsService])
], InterestBudgetSkinGoalsController);
exports.InterestBudgetSkinGoalsController = InterestBudgetSkinGoalsController;
//# sourceMappingURL=interest_budget_skin_goals.controller.js.map
//# debugId=5a14e36f-9e8b-59c0-bf5d-fee47742fce7
