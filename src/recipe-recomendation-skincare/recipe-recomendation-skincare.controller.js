"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2b30990f-5394-5881-8923-721774f6addb")}catch(e){}}();

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
exports.RecipeRecomendationSkincareController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const page_options_dto_1 = require("../decorators/page-options.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const user_entity_1 = require("../users/entities/user.entity");
const create_recipe_recomendation_skincare_dto_1 = require("./dto/create-recipe-recomendation-skincare.dto");
const update_recipe_recomendation_skincare_dto_1 = require("./dto/update-recipe-recomendation-skincare.dto");
const recipe_recomendation_skincare_entity_1 = require("./entities/recipe-recomendation-skincare.entity");
const recipe_recomendation_skincare_service_1 = require("./recipe-recomendation-skincare.service");
let RecipeRecomendationSkincareController = class RecipeRecomendationSkincareController {
    constructor(recipeRecomendationSkincareService) {
        this.recipeRecomendationSkincareService = recipeRecomendationSkincareService;
    }
    async create(user, createRecipeRecomendationSkincareDto) {
        createRecipeRecomendationSkincareDto.doctor_id = user.id;
        return await this.recipeRecomendationSkincareService.create(createRecipeRecomendationSkincareDto);
    }
    async findAll(user, pageOptionsDto) {
        return await this.recipeRecomendationSkincareService.findAll(user.id, pageOptionsDto);
    }
    async findOne(user, id) {
        const find = await this.recipeRecomendationSkincareService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        return find;
    }
    async update(user, id, updateRecipeRecomendationSkincareDto) {
        const find = await this.recipeRecomendationSkincareService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.recipeRecomendationSkincareService.update(id, updateRecipeRecomendationSkincareDto);
    }
    async remove(user, id) {
        const find = await this.recipeRecomendationSkincareService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.recipeRecomendationSkincareService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: recipe_recomendation_skincare_entity_1.RecipeRecomendationSkincareEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_recipe_recomendation_skincare_dto_1.CreateRecipeRecomendationSkincareDto]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationSkincareController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: recipe_recomendation_skincare_entity_1.RecipeRecomendationSkincareEntity, isArray: true }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationSkincareController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: recipe_recomendation_skincare_entity_1.RecipeRecomendationSkincareEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationSkincareController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: recipe_recomendation_skincare_entity_1.RecipeRecomendationSkincareEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, update_recipe_recomendation_skincare_dto_1.UpdateRecipeRecomendationSkincareDto]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationSkincareController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: recipe_recomendation_skincare_entity_1.RecipeRecomendationSkincareEntity }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], RecipeRecomendationSkincareController.prototype, "remove", null);
RecipeRecomendationSkincareController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('recipe/recomendation/skincare'),
    (0, swagger_1.ApiTags)('Recipe Recomendation Skincare'),
    __metadata("design:paramtypes", [recipe_recomendation_skincare_service_1.RecipeRecomendationSkincareService])
], RecipeRecomendationSkincareController);
exports.RecipeRecomendationSkincareController = RecipeRecomendationSkincareController;
//# sourceMappingURL=recipe-recomendation-skincare.controller.js.map
//# debugId=2b30990f-5394-5881-8923-721774f6addb
