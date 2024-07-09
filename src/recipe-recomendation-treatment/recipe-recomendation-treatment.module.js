"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1568c20e-c094-5e20-aad0-2f6cd1c21571")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRecomendationTreatmentModule = void 0;
const common_1 = require("@nestjs/common");
const recipe_recomendation_treatment_controller_1 = require("./recipe-recomendation-treatment.controller");
const recipe_recomendation_treatment_service_1 = require("./recipe-recomendation-treatment.service");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let RecipeRecomendationTreatmentModule = class RecipeRecomendationTreatmentModule {
};
RecipeRecomendationTreatmentModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [recipe_recomendation_treatment_controller_1.RecipeRecomendationTreatmentController],
        providers: [recipe_recomendation_treatment_service_1.RecipeRecomendationTreatmentService, user_service_1.UserService],
    })
], RecipeRecomendationTreatmentModule);
exports.RecipeRecomendationTreatmentModule = RecipeRecomendationTreatmentModule;
//# sourceMappingURL=recipe-recomendation-treatment.module.js.map
//# debugId=1568c20e-c094-5e20-aad0-2f6cd1c21571
