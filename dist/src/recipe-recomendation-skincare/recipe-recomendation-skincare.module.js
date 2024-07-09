"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="97b94bc0-e2b8-5f8c-ae60-23c45573ea2c")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRecomendationSkincareModule = void 0;
const common_1 = require("@nestjs/common");
const recipe_recomendation_skincare_controller_1 = require("./recipe-recomendation-skincare.controller");
const recipe_recomendation_skincare_service_1 = require("./recipe-recomendation-skincare.service");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let RecipeRecomendationSkincareModule = class RecipeRecomendationSkincareModule {
};
RecipeRecomendationSkincareModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [recipe_recomendation_skincare_controller_1.RecipeRecomendationSkincareController],
        providers: [recipe_recomendation_skincare_service_1.RecipeRecomendationSkincareService, user_service_1.UserService],
    })
], RecipeRecomendationSkincareModule);
exports.RecipeRecomendationSkincareModule = RecipeRecomendationSkincareModule;
//# sourceMappingURL=recipe-recomendation-skincare.module.js.map
//# debugId=97b94bc0-e2b8-5f8c-ae60-23c45573ea2c
