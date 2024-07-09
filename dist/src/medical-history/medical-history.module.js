"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fd3a9479-f675-5a1d-bb07-541fad80648d")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const medical_history_service_1 = require("./medical-history.service");
const medical_history_controller_1 = require("./medical-history.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const media_service_1 = require("../media/media.service");
let MedicalHistoryModule = class MedicalHistoryModule {
};
MedicalHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [medical_history_controller_1.MedicalHistoryController],
        providers: [medical_history_service_1.MedicalHistoryService, user_service_1.UserService, media_service_1.MediaService],
    })
], MedicalHistoryModule);
exports.MedicalHistoryModule = MedicalHistoryModule;
//# sourceMappingURL=medical-history.module.js.map
//# debugId=fd3a9479-f675-5a1d-bb07-541fad80648d
