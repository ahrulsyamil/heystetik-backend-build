"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a0015a93-ae4d-534e-92b7-05a500b564b1")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastModule = void 0;
const common_1 = require("@nestjs/common");
const broadcast_service_1 = require("./broadcast.service");
const broadcast_controller_1 = require("./broadcast.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const media_service_1 = require("../media/media.service");
let BroadcastModule = class BroadcastModule {
};
BroadcastModule = __decorate([
    (0, common_1.Module)({
        controllers: [broadcast_controller_1.BroadcastController],
        providers: [broadcast_service_1.BroadcastService, media_service_1.MediaService],
        imports: [prisma_module_1.PrismaModule],
        exports: [broadcast_service_1.BroadcastService],
    })
], BroadcastModule);
exports.BroadcastModule = BroadcastModule;
//# sourceMappingURL=broadcast.module.js.map
//# debugId=a0015a93-ae4d-534e-92b7-05a500b564b1
