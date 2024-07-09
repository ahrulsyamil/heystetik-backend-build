"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dae5be7e-c35f-5e82-8f71-49147323bd9b")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("../mail/mail.service");
const media_service_1 = require("../media/media.service");
const prisma_module_1 = require("../prisma/prisma.module");
const users_service_1 = require("../users/users.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const oauth_serializer_1 = require("./oauth.serializer");
const facebook_strategy_1 = require("./strategies/facebook.strategy");
const google_strategy_1 = require("./strategies/google.strategy");
const user_service_1 = require("./user/user.service");
const passport_1 = require("@nestjs/passport");
const apple_strategy_1 = require("./strategies/apple.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            passport_1.PassportModule.register({ defaultStrategy: 'apple' }),
        ],
        providers: [
            auth_service_1.AuthService,
            user_service_1.UserService,
            users_service_1.UsersService,
            google_strategy_1.GoogleAuthStrategy,
            facebook_strategy_1.FacebookAuthStrategy,
            apple_strategy_1.AppleStrategy,
            oauth_serializer_1.OauthSessionSerializer,
            media_service_1.MediaService,
            mail_service_1.MailService,
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService, user_service_1.UserService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
//# debugId=dae5be7e-c35f-5e82-8f71-49147323bd9b
