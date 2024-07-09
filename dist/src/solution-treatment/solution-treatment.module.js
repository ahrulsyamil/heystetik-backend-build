"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="07c2d047-ce41-5faa-8f57-0650aad3cf66")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionTreatmentModule = void 0;
const common_1 = require("@nestjs/common");
const solution_treatment_service_1 = require("./solution-treatment.service");
const solution_treatment_controller_1 = require("./solution-treatment.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const user_location_service_1 = require("../user-location/user-location.service");
const clinic_service_1 = require("../clinic/clinic.service");
const user_wishlist_treatment_service_1 = require("../user-wishlist-treatment/user-wishlist-treatment.service");
let SolutionTreatmentModule = class SolutionTreatmentModule {
};
SolutionTreatmentModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [solution_treatment_controller_1.SolutionTreatmentController],
        providers: [
            solution_treatment_service_1.SolutionTreatmentService,
            user_service_1.UserService,
            user_location_service_1.UserLocationService,
            clinic_service_1.ClinicService,
            user_wishlist_treatment_service_1.UserWishlistTreatmentService,
        ],
    })
], SolutionTreatmentModule);
exports.SolutionTreatmentModule = SolutionTreatmentModule;
//# sourceMappingURL=solution-treatment.module.js.map
//# debugId=07c2d047-ce41-5faa-8f57-0650aad3cf66
