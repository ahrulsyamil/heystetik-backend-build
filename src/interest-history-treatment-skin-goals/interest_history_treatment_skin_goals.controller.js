"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="312e76f9-339d-59a7-aff4-89f2afbfb9b6")}catch(e){}}();

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
exports.InterestHistoryTreatmentSkinGoalsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_interest_history_treatment_skin_goals_dto_1 = require("./dto/create-interest_history_treatment_skin_goals.dto");
const update_interest_history_treatment_skin_goals_dto_1 = require("./dto/update-interest_history_treatment_skin_goals.dto");
const interest_history_treatment_skin_goals_entity_1 = require("./entities/interest_history_treatment_skin_goals.entity");
const interest_history_treatment_skin_goals_service_1 = require("./interest_history_treatment_skin_goals.service");
let InterestHistoryTreatmentSkinGoalsController = class InterestHistoryTreatmentSkinGoalsController {
    constructor(interestHistoryTreatmentSkinGoalsService) {
        this.interestHistoryTreatmentSkinGoalsService = interestHistoryTreatmentSkinGoalsService;
    }
    create(response, createInterestHistoryTreatmentSkinGoalsDto) {
        this.interestHistoryTreatmentSkinGoalsService.create(createInterestHistoryTreatmentSkinGoalsDto);
        return response.status(201).json({
            data: null,
            message: 'Success Create Interest History Treatment Skin Goals',
        });
    }
    findAll() {
        return this.interestHistoryTreatmentSkinGoalsService.findAll();
    }
    findOne(id) {
        return this.interestHistoryTreatmentSkinGoalsService.findOne(+id);
    }
    update(id, updateInterestHistoryTreatmentSkinGoalsDto) {
        return this.interestHistoryTreatmentSkinGoalsService.update(+id, updateInterestHistoryTreatmentSkinGoalsDto);
    }
    remove(id) {
        return this.interestHistoryTreatmentSkinGoalsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: interest_history_treatment_skin_goals_entity_1.InterestHistoryTreatmentSkinGoalsEntity }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_interest_history_treatment_skin_goals_dto_1.CreateInterestHistoryTreatmentSkinGoalsDto]),
    __metadata("design:returntype", void 0)
], InterestHistoryTreatmentSkinGoalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        type: interest_history_treatment_skin_goals_entity_1.InterestHistoryTreatmentSkinGoalsEntity,
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InterestHistoryTreatmentSkinGoalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_history_treatment_skin_goals_entity_1.InterestHistoryTreatmentSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestHistoryTreatmentSkinGoalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_history_treatment_skin_goals_entity_1.InterestHistoryTreatmentSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_interest_history_treatment_skin_goals_dto_1.UpdateInterestHistoryTreatmentSkinGoalsDto]),
    __metadata("design:returntype", void 0)
], InterestHistoryTreatmentSkinGoalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_history_treatment_skin_goals_entity_1.InterestHistoryTreatmentSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestHistoryTreatmentSkinGoalsController.prototype, "remove", null);
InterestHistoryTreatmentSkinGoalsController = __decorate([
    (0, common_1.Controller)('interest_history_treatment_skin_goals'),
    (0, swagger_1.ApiTags)('Interest History Treatment Skin Goals'),
    __metadata("design:paramtypes", [interest_history_treatment_skin_goals_service_1.InterestHistoryTreatmentSkinGoalsService])
], InterestHistoryTreatmentSkinGoalsController);
exports.InterestHistoryTreatmentSkinGoalsController = InterestHistoryTreatmentSkinGoalsController;
//# sourceMappingURL=interest_history_treatment_skin_goals.controller.js.map
//# debugId=312e76f9-339d-59a7-aff4-89f2afbfb9b6
