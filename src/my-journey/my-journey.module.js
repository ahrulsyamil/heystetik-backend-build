"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f85ece7f-c775-5d9a-a2e8-9c721c5ffab7")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyJourneyModule = void 0;
const common_1 = require("@nestjs/common");
const my_journey_service_1 = require("./my-journey.service");
const my_journey_controller_1 = require("./my-journey.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const media_service_1 = require("../media/media.service");
const concern_service_1 = require("../concern/concern.service");
let MyJourneyModule = class MyJourneyModule {
};
MyJourneyModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [my_journey_controller_1.MyJourneyController],
        providers: [my_journey_service_1.MyJourneyService, user_service_1.UserService, media_service_1.MediaService, concern_service_1.ConcernService],
    })
], MyJourneyModule);
exports.MyJourneyModule = MyJourneyModule;
//# sourceMappingURL=my-journey.module.js.map
//# debugId=f85ece7f-c775-5d9a-a2e8-9c721c5ffab7
