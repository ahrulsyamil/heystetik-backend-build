"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b67b7584-d174-5ec7-ba37-3e72b7d8d49b")}catch(e){}}();

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
const create_interest_condition_questions_dto_1 = require("./dto/create-interest_condition_questions.dto");
const create_interest_conditions_dto_1 = require("./dto/create-interest_conditions.dto");
const update_interest_conditions_dto_1 = require("./dto/update-interest_conditions.dto");
const interest_condition_service_1 = require("./interest-condition.service");
let InterestConditionsController = class InterestConditionsController {
    constructor(snipsTipsService) {
        this.snipsTipsService = snipsTipsService;
    }
    async create(response, createInterestConditionsDto) {
        const result = await this.snipsTipsService.create(createInterestConditionsDto);
        return response.status(201).json({
            data: result,
            message: 'Success Create Interest Condition Customer',
        });
    }
    async createQuestion(response, req) {
        const result = await this.snipsTipsService.createQuestion(req);
        return response.status(201).json({
            data: result,
            message: 'Success Create Interest Condition Customer',
        });
    }
    async createAnswer(response, req) {
        const result = await this.snipsTipsService.createAnswer(req);
        return response.status(201).json({
            data: result,
            message: 'Success Create Interest Condition Customer',
        });
    }
    async findAll(response) {
        let result = await this.snipsTipsService.findAll();
        result = await Promise.all(result.map(async (item) => {
            const find = await this.snipsTipsService.findOne(item.id);
            return {
                ...find,
            };
        }));
        return response.status(200).json({
            data: result,
            message: 'Success Get Interest Condition Customer',
        });
    }
    async findAllQuestion(response) {
        const result = await this.snipsTipsService.findAllQuestion();
        return response.status(200).json({
            data: result,
            message: 'Success Get Interest Condition Customer Question',
        });
    }
    async findAllAnswer(response) {
        const result = await this.snipsTipsService.findAllAnswer();
        return response.status(200).json({
            data: result,
            message: 'Success Get Interest Condition Customer Answer',
        });
    }
    async findOne(response, id) {
        const result = await this.snipsTipsService.findOne(+id);
        return response.status(200).json({
            data: result,
            message: 'Success Get Detail Interest Condition Customer',
        });
    }
    async update(response, id, updateInterestConditionsDto) {
        const reslut = this.snipsTipsService.update(+id, updateInterestConditionsDto);
        return response.status(200).json({
            data: reslut,
            message: 'Success Update Interest Condition Customer',
        });
    }
    async remove(response, id) {
        const result = await this.snipsTipsService.remove(+id);
        return response.status(200).json({
            data: result,
            message: 'Success Delete Interest Condition Customer',
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: create_interest_conditions_dto_1.CreateInterestConditionsDto }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_interest_conditions_dto_1.CreateInterestConditionsDto]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: create_interest_condition_questions_dto_1.CreateInterestConditionQuestionsDto }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_interest_condition_questions_dto_1.CreateInterestConditionQuestionsDto]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "createQuestion", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: create_interest_condition_answers_dto_1.CreateInterestConditionAnswersDto }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_interest_condition_answers_dto_1.CreateInterestConditionAnswersDto]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "createAnswer", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "findAllQuestion", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "findAllAnswer", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: create_interest_conditions_dto_1.CreateInterestConditionsDto }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_interest_conditions_dto_1.UpdateInterestConditionsDto]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], InterestConditionsController.prototype, "remove", null);
InterestConditionsController = __decorate([
    (0, common_1.Controller)('interest_conditions'),
    (0, swagger_1.ApiTags)('Interest Condition Customers'),
    __metadata("design:paramtypes", [interest_condition_service_1.InterestConditionsService])
], InterestConditionsController);
exports.InterestConditionsController = InterestConditionsController;
//# sourceMappingURL=interest-condition.controller.js.map
//# debugId=b67b7584-d174-5ec7-ba37-3e72b7d8d49b
