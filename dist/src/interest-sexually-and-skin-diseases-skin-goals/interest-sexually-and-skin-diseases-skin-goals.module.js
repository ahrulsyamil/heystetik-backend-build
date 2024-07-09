"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="86989610-27b3-5a8d-b14f-d0d400220f5e")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestSexuallyAndSkinDiseasesSkinGoalsModule = void 0;
const common_1 = require("@nestjs/common");
const interest_sexually_and_skin_diseases_skin_goals_service_1 = require("./interest-sexually-and-skin-diseases-skin-goals.service");
const prisma_module_1 = require("../prisma/prisma.module");
const interest_sexually_and_skin_diseases_skin_goals_controller_1 = require("./interest-sexually-and-skin-diseases-skin-goals.controller");
let InterestSexuallyAndSkinDiseasesSkinGoalsModule = class InterestSexuallyAndSkinDiseasesSkinGoalsModule {
};
InterestSexuallyAndSkinDiseasesSkinGoalsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [interest_sexually_and_skin_diseases_skin_goals_controller_1.InterestSexuallyAndSkinDiseasesSkinGoalsController],
        providers: [interest_sexually_and_skin_diseases_skin_goals_service_1.InterestSexuallyAndSkinDiseasesSkinGoalsService],
    })
], InterestSexuallyAndSkinDiseasesSkinGoalsModule);
exports.InterestSexuallyAndSkinDiseasesSkinGoalsModule = InterestSexuallyAndSkinDiseasesSkinGoalsModule;
//# sourceMappingURL=interest-sexually-and-skin-diseases-skin-goals.module.js.map
//# debugId=86989610-27b3-5a8d-b14f-d0d400220f5e
