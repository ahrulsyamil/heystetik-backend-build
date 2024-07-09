"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f9c7d378-5dff-53fd-8fef-49a4f0f26d42")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamSaveModule = void 0;
const common_1 = require("@nestjs/common");
const stream_save_service_1 = require("./stream-save.service");
const stream_save_controller_1 = require("./stream-save.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const stream_service_1 = require("../stream/stream.service");
const stream_like_service_1 = require("../stream-like/stream-like.service");
let StreamSaveModule = class StreamSaveModule {
};
StreamSaveModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [stream_save_controller_1.StreamSaveController],
        providers: [stream_save_service_1.StreamSaveService, user_service_1.UserService, stream_service_1.StreamService, stream_like_service_1.StreamLikeService],
    })
], StreamSaveModule);
exports.StreamSaveModule = StreamSaveModule;
//# sourceMappingURL=stream-save.module.js.map
//# debugId=f9c7d378-5dff-53fd-8fef-49a4f0f26d42
