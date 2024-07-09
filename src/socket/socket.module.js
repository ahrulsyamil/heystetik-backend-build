"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c29ce1b2-a326-5c35-a817-7a9c5e0dea9b")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketModule = void 0;
const common_1 = require("@nestjs/common");
const socket_service_1 = require("./socket.service");
const prisma_module_1 = require("../prisma/prisma.module");
const socket_gateway_1 = require("./socket.gateway");
const chat_service_1 = require("../chat/chat.service");
const media_service_1 = require("../media/media.service");
const auth_service_1 = require("../auth/auth.service");
const user_service_1 = require("../auth/user/user.service");
const mail_service_1 = require("../mail/mail.service");
const notification_service_1 = require("../notification/notification.service");
let SocketModule = class SocketModule {
};
SocketModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            socket_service_1.SocketService,
            socket_gateway_1.SocketGateway,
            chat_service_1.ChatService,
            media_service_1.MediaService,
            mail_service_1.MailService,
            auth_service_1.AuthService,
            user_service_1.UserService,
            notification_service_1.NotificationService,
        ],
        exports: [socket_gateway_1.SocketGateway, socket_service_1.SocketService],
    })
], SocketModule);
exports.SocketModule = SocketModule;
//# sourceMappingURL=socket.module.js.map
//# debugId=c29ce1b2-a326-5c35-a817-7a9c5e0dea9b
