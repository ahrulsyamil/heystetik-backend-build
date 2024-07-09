"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7f8f6758-92db-53ad-bd0b-9531064e9fb3")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestBeautyProfileModule = void 0;
const common_1 = require("@nestjs/common");
const interest_beauty_profile_service_1 = require("./interest_beauty_profile.service");
const interest_beauty_profile_controller_1 = require("./interest_beauty_profile.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let InterestBeautyProfileModule = class InterestBeautyProfileModule {
};
InterestBeautyProfileModule = __decorate([
    (0, common_1.Module)({
        controllers: [interest_beauty_profile_controller_1.InterestBeautyProfileController],
        providers: [interest_beauty_profile_service_1.InterestBeautyProfileService],
        imports: [prisma_module_1.PrismaModule],
    })
], InterestBeautyProfileModule);
exports.InterestBeautyProfileModule = InterestBeautyProfileModule;
//# sourceMappingURL=interest_beauty_profile.module.js.map
//# debugId=7f8f6758-92db-53ad-bd0b-9531064e9fb3
