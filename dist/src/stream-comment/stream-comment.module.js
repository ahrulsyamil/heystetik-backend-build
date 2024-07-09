"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3cb2e06c-a6a9-5f74-a3eb-69695eaff07e")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamCommentModule = void 0;
const common_1 = require("@nestjs/common");
const stream_comment_service_1 = require("./stream-comment.service");
const stream_comment_controller_1 = require("./stream-comment.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const stream_service_1 = require("../stream/stream.service");
const user_service_1 = require("../auth/user/user.service");
const notification_service_1 = require("../notification/notification.service");
let StreamCommentModule = class StreamCommentModule {
};
StreamCommentModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [stream_comment_controller_1.StreamCommentController],
        providers: [
            stream_comment_service_1.StreamCommentService,
            user_service_1.UserService,
            stream_service_1.StreamService,
            notification_service_1.NotificationService,
        ],
    })
], StreamCommentModule);
exports.StreamCommentModule = StreamCommentModule;
//# sourceMappingURL=stream-comment.module.js.map
//# debugId=3cb2e06c-a6a9-5f74-a3eb-69695eaff07e
