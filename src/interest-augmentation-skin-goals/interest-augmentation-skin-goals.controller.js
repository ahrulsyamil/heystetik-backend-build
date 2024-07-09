"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f94af589-b72c-57a7-9a39-cb6d2ebab3ad")}catch(e){}}();

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
exports.InterestAugmentationSkinGoalsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_interest_augmentation_skin_goals_dto_1 = require("./dto/create-interest_augmentation_skin_goals.dto");
const update_interest_augmentation_skin_goals_dto_1 = require("./dto/update-interest_augmentation_skin_goals.dto");
const interest_augmentation_skin_goals_entity_1 = require("./entities/interest-augmentation-skin-goals.entity");
const interest_augmentation_skin_goals_service_1 = require("./interest-augmentation-skin-goals.service");
let InterestAugmentationSkinGoalsController = class InterestAugmentationSkinGoalsController {
    constructor(interestAugmentationSkinGoalsService) {
        this.interestAugmentationSkinGoalsService = interestAugmentationSkinGoalsService;
    }
    create(response, createInterestAugmentationSkinGoalsDto) {
        this.interestAugmentationSkinGoalsService.create(createInterestAugmentationSkinGoalsDto);
        return response.status(201).json({
            data: null,
            message: 'Success Create Interest Face Corrective Skin Goals',
        });
    }
    findAll() {
        return this.interestAugmentationSkinGoalsService.findAll();
    }
    findOne(id) {
        return this.interestAugmentationSkinGoalsService.findOne(+id);
    }
    update(id, updateInterestAugmentationSkinGoalsDto) {
        return this.interestAugmentationSkinGoalsService.update(+id, updateInterestAugmentationSkinGoalsDto);
    }
    remove(id) {
        return this.interestAugmentationSkinGoalsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: interest_augmentation_skin_goals_entity_1.InterestAugmentationSkinGoalsEntity }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_interest_augmentation_skin_goals_dto_1.CreateInterestAugmentationSkinGoalsDto]),
    __metadata("design:returntype", void 0)
], InterestAugmentationSkinGoalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: interest_augmentation_skin_goals_entity_1.InterestAugmentationSkinGoalsEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InterestAugmentationSkinGoalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_augmentation_skin_goals_entity_1.InterestAugmentationSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestAugmentationSkinGoalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_augmentation_skin_goals_entity_1.InterestAugmentationSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_interest_augmentation_skin_goals_dto_1.UpdateInterestAugmentationSkinGoalsDto]),
    __metadata("design:returntype", void 0)
], InterestAugmentationSkinGoalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_augmentation_skin_goals_entity_1.InterestAugmentationSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestAugmentationSkinGoalsController.prototype, "remove", null);
InterestAugmentationSkinGoalsController = __decorate([
    (0, common_1.Controller)('interest_augmentation_skin_goals'),
    (0, swagger_1.ApiTags)('Interest Augmentation Skin Goals'),
    __metadata("design:paramtypes", [interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService])
], InterestAugmentationSkinGoalsController);
exports.InterestAugmentationSkinGoalsController = InterestAugmentationSkinGoalsController;
//# sourceMappingURL=interest-augmentation-skin-goals.controller.js.map
//# debugId=f94af589-b72c-57a7-9a39-cb6d2ebab3ad
