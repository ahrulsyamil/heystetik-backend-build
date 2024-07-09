"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3c082c9b-2422-52e4-98b8-03fbfb3550b4")}catch(e){}}();

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
exports.InterestBodyCorrectiveSkinGoalsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_interest_body_corrective_skin_goals_dto_1 = require("./dto/create-interest_body_corrective_skin_goals.dto");
const update_interest_body_corrective_skin_goals_dto_1 = require("./dto/update-interest_body_corrective_skin_goals.dto");
const interest_body_corrective_skin_goals_entity_1 = require("./entities/interest_body_corrective_skin_goals.entity");
const interest_body_corrective_skin_goals_service_1 = require("./interest_body_corrective_skin_goals.service");
let InterestBodyCorrectiveSkinGoalsController = class InterestBodyCorrectiveSkinGoalsController {
    constructor(interestBodyCorrectiveSkinGoalsService) {
        this.interestBodyCorrectiveSkinGoalsService = interestBodyCorrectiveSkinGoalsService;
    }
    create(response, createInterestBodyCorrectiveSkinGoalsDto) {
        this.interestBodyCorrectiveSkinGoalsService.create(createInterestBodyCorrectiveSkinGoalsDto);
        return response.status(201).json({
            data: null,
            message: 'Success Create Interest Body Corrective Skin Goals',
        });
    }
    findAll() {
        return this.interestBodyCorrectiveSkinGoalsService.findAll();
    }
    findOne(id) {
        return this.interestBodyCorrectiveSkinGoalsService.findOne(+id);
    }
    update(id, updateInterestBodyCorrectiveSkinGoalsDto) {
        return this.interestBodyCorrectiveSkinGoalsService.update(+id, updateInterestBodyCorrectiveSkinGoalsDto);
    }
    remove(id) {
        return this.interestBodyCorrectiveSkinGoalsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: interest_body_corrective_skin_goals_entity_1.InterestBodyCorrectiveSkinGoalsEntity }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_interest_body_corrective_skin_goals_dto_1.CreateInterestBodyCorrectiveSkinGoalsDto]),
    __metadata("design:returntype", void 0)
], InterestBodyCorrectiveSkinGoalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: interest_body_corrective_skin_goals_entity_1.InterestBodyCorrectiveSkinGoalsEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InterestBodyCorrectiveSkinGoalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_body_corrective_skin_goals_entity_1.InterestBodyCorrectiveSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestBodyCorrectiveSkinGoalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_body_corrective_skin_goals_entity_1.InterestBodyCorrectiveSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_interest_body_corrective_skin_goals_dto_1.UpdateInterestBodyCorrectiveSkinGoalsDto]),
    __metadata("design:returntype", void 0)
], InterestBodyCorrectiveSkinGoalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_body_corrective_skin_goals_entity_1.InterestBodyCorrectiveSkinGoalsEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestBodyCorrectiveSkinGoalsController.prototype, "remove", null);
InterestBodyCorrectiveSkinGoalsController = __decorate([
    (0, common_1.Controller)('interest_body_corrective_skin_goals'),
    (0, swagger_1.ApiTags)('Interest Body Corrective Skin Goals'),
    __metadata("design:paramtypes", [interest_body_corrective_skin_goals_service_1.InterestBodyCorrectiveSkinGoalsService])
], InterestBodyCorrectiveSkinGoalsController);
exports.InterestBodyCorrectiveSkinGoalsController = InterestBodyCorrectiveSkinGoalsController;
//# sourceMappingURL=interest_body_corrective_skin_goals.controller.js.map
//# debugId=3c082c9b-2422-52e4-98b8-03fbfb3550b4
