"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c0975cc5-2dd4-5fd0-9809-7ad4c1cc3d62")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestConditionsModule = void 0;
const common_1 = require("@nestjs/common");
const interest_condition_service_1 = require("./interest-condition.service");
const interest_condition_controller_1 = require("./interest-condition.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let InterestConditionsModule = class InterestConditionsModule {
};
InterestConditionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [interest_condition_controller_1.InterestConditionsController],
        providers: [interest_condition_service_1.InterestConditionsService],
        imports: [prisma_module_1.PrismaModule],
    })
], InterestConditionsModule);
exports.InterestConditionsModule = InterestConditionsModule;
//# sourceMappingURL=interest-condition.module.js.map
//# debugId=c0975cc5-2dd4-5fd0-9809-7ad4c1cc3d62
