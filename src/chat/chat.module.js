"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="49467285-9d5f-5805-b8dd-61332d4f6503")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const user_service_1 = require("../auth/user/user.service");
const consultation_service_1 = require("../consultation/consultation.service");
const media_service_1 = require("../media/media.service");
const prisma_module_1 = require("../prisma/prisma.module");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const chat_controller_1 = require("./chat.controller");
const chat_service_1 = require("./chat.service");
let ChatModule = class ChatModule {
};
ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule],
        controllers: [chat_controller_1.ChatController],
        providers: [
            chat_service_1.ChatService,
            user_service_1.UserService,
            media_service_1.MediaService,
            transaction_consultation_service_1.TransactionConsultationService,
            consultation_service_1.ConsultationService,
        ],
        exports: [chat_service_1.ChatService],
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map
//# debugId=49467285-9d5f-5805-b8dd-61332d4f6503
