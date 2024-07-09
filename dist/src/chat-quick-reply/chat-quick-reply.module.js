"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5a0f1a1c-ce1a-5e53-a280-f6c63b8eb978")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatQuickReplyModule = void 0;
const common_1 = require("@nestjs/common");
const chat_quick_reply_controller_1 = require("./chat-quick-reply.controller");
const chat_quick_reply_service_1 = require("./chat-quick-reply.service");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const media_service_1 = require("../media/media.service");
let ChatQuickReplyModule = class ChatQuickReplyModule {
};
ChatQuickReplyModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [chat_quick_reply_controller_1.ChatQuickReplyController],
        providers: [chat_quick_reply_service_1.ChatQuickReplyService, user_service_1.UserService, media_service_1.MediaService],
    })
], ChatQuickReplyModule);
exports.ChatQuickReplyModule = ChatQuickReplyModule;
//# sourceMappingURL=chat-quick-reply.module.js.map
//# debugId=5a0f1a1c-ce1a-5e53-a280-f6c63b8eb978
