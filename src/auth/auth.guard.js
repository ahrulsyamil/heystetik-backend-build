"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="897f9c57-2af8-5a32-a573-9b2be2cd434f")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const user_service_1 = require("./user/user.service");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
let AuthGuard = class AuthGuard {
    constructor(user, configService, reflector) {
        this.user = user;
        this.configService = configService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const skipAuth = this.reflector.get('skipGuard', context.getHandler());
        if (skipAuth) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = request.headers?.authorization ?? null;
        if (!token)
            throw new common_1.UnauthorizedException('Not authorized, no token');
        if (!request.headers?.authorization.startsWith('Bearer'))
            throw new common_1.UnauthorizedException('Not authorized, token failed');
        const bearerToken = token.split(' ')[1];
        try {
            const decoded = jwt.verify(bearerToken, this.configService.get('jwt').secret);
            if (!decoded.sub)
                throw new common_1.UnauthorizedException('Not authorized, token failed');
            const user = await this.user.find(decoded.sub);
            if (!user)
                throw new common_1.UnauthorizedException('Not authorized, user not found');
            if (!user.is_active)
                throw new common_1.UnauthorizedException('Account is not active');
            request.user = {
                ...user,
                password: undefined,
            };
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err);
        }
        if (!request.user.no_phone) {
            throw new common_1.BadRequestException({
                message: 'Sorry, you need to fill out the phone number to continue. This number will be used for various communication purposes',
                error_code: 'PHONE_NUMBER_REQUIRED',
            });
        }
        return true;
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService,
        core_1.Reflector])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map
//# debugId=897f9c57-2af8-5a32-a573-9b2be2cd434f
