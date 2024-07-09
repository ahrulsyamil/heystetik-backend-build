"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aab1d55d-0b15-54b2-829f-9a6ddaa57c7a")}catch(e){}}();

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
exports.RecipeRecomendationTreatmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const recipe_recomendation_treatment_service_1 = require("./recipe-recomendation-treatment.service");
const recipe_recomendation_treatment_entity_1 = require("./entity/recipe-recomendation-treatment.entity");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const create_recipe_recomendation_treatment_dto_1 = require("./dto/create-recipe-recomendation-treatment.dto");
const page_options_dto_1 = require("../decorators/page-options.dto");
const update_recipe_recomendation_treatment_dto_1 = require("./dto/update-recipe-recomendation-treatment.dto");
let RecipeRecomendationTreatmentController = class RecipeRecomendationTreatmentController {
    constructor(recipeRecomendationTreatmentService) {
        this.recipeRecomendationTreatmentService = recipeRecomendationTreatmentService;
    }
    async create(user, createRecipeRecomendationTreatmentDto) {
        createRecipeRecomendationTreatmentDto.doctor_id = user.id;
        return await this.recipeRecomendationTreatmentService.create(createRecipeRecomendationTreatmentDto);
    }
    async findAll(user, pageOptionsDto) {
        return await this.recipeRecomendationTreatmentService.findAll(user.id, pageOptionsDto);
    }
    async findOne(user, id) {
        const find = await this.recipeRecomendationTreatmentService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        return find;
    }
    async update(user, id, updateRecipeRecomendationTreatmentDto) {
        const find = await this.recipeRecomendationTreatmentService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.recipeRecomendationTreatmentService.update(id, updateRecipeRecomendationTreatmentDto);
    }
    async remove(user, id) {
        const find = await this.recipeRecomendationTreatmentService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.recipeRecomendationTreatmentService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: recipe_recomendation_treatment_entity_1.RecipeRecomendationTreatmentEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_recipe_recomendation_treatment_dto_1.CreateRecipeRecomendationTreatmentDto]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationTreatmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: recipe_recomendation_treatment_entity_1.RecipeRecomendationTreatmentEntity, isArray: true }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationTreatmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: recipe_recomendation_treatment_entity_1.RecipeRecomendationTreatmentEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationTreatmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: recipe_recomendation_treatment_entity_1.RecipeRecomendationTreatmentEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, update_recipe_recomendation_treatment_dto_1.UpdateRecipeRecomendationTreatmentDto]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationTreatmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: recipe_recomendation_treatment_entity_1.RecipeRecomendationTreatmentEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationTreatmentController.prototype, "remove", null);
RecipeRecomendationTreatmentController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('recipe/recomendation/treatment'),
    (0, swagger_1.ApiTags)('Recipe Recomendation Treatment'),
    __metadata("design:paramtypes", [recipe_recomendation_treatment_service_1.RecipeRecomendationTreatmentService])
], RecipeRecomendationTreatmentController);
exports.RecipeRecomendationTreatmentController = RecipeRecomendationTreatmentController;
//# sourceMappingURL=recipe-recomendation-treatment.controller.js.map
//# debugId=aab1d55d-0b15-54b2-829f-9a6ddaa57c7a
