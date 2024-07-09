"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bd79e9e1-f0d4-50f7-b3e5-e3e1ee45b474")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatOpeningModule = void 0;
const common_1 = require("@nestjs/common");
const chat_opening_controller_1 = require("./chat-opening.controller");
const chat_opening_service_1 = require("./chat-opening.service");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
let ChatOpeningModule = class ChatOpeningModule {
};
ChatOpeningModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [chat_opening_controller_1.ChatOpeningController],
        providers: [chat_opening_service_1.ChatOpeningService, user_service_1.UserService],
    })
], ChatOpeningModule);
exports.ChatOpeningModule = ChatOpeningModule;
//# sourceMappingURL=chat-opening.module.js.map
//# debugId=bd79e9e1-f0d4-50f7-b3e5-e3e1ee45b474
