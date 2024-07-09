"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ff2ea7c9-27e6-5eae-ade8-bc8504676366")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnipsTipsModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const snips_tips_controller_1 = require("./snips_tips.controller");
const snips_tips_service_1 = require("./snips_tips.service");
let SnipsTipsModule = class SnipsTipsModule {
};
SnipsTipsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [snips_tips_controller_1.SnipsTipsController],
        providers: [snips_tips_service_1.SnipsTipsService],
    })
], SnipsTipsModule);
exports.SnipsTipsModule = SnipsTipsModule;
//# sourceMappingURL=snips_tips.module.js.map
//# debugId=ff2ea7c9-27e6-5eae-ade8-bc8504676366
