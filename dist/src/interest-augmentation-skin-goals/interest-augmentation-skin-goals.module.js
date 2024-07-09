"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c4062d13-34d4-55ad-acc6-20f1004debe4")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestAugmentationSkinGoalsModule = void 0;
const common_1 = require("@nestjs/common");
const interest_augmentation_skin_goals_service_1 = require("./interest-augmentation-skin-goals.service");
const interest_augmentation_skin_goals_controller_1 = require("./interest-augmentation-skin-goals.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let InterestAugmentationSkinGoalsModule = class InterestAugmentationSkinGoalsModule {
};
InterestAugmentationSkinGoalsModule = __decorate([
    (0, common_1.Module)({
        controllers: [interest_augmentation_skin_goals_controller_1.InterestAugmentationSkinGoalsController],
        providers: [interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService],
        imports: [prisma_module_1.PrismaModule],
    })
], InterestAugmentationSkinGoalsModule);
exports.InterestAugmentationSkinGoalsModule = InterestAugmentationSkinGoalsModule;
//# sourceMappingURL=interest-augmentation-skin-goals.module.js.map
//# debugId=c4062d13-34d4-55ad-acc6-20f1004debe4
