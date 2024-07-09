"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fc1b3629-7f2a-5dc0-80c6-61632771771a")}catch(e){}}();

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
exports.ThrottleInterceptor = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto = require("crypto");
const ioredis_1 = require("ioredis");
const rxjs_1 = require("rxjs");
let ThrottleInterceptor = class ThrottleInterceptor {
    constructor(configService) {
        this.configService = configService;
        this.redisClient = new ioredis_1.Redis({
            port: configService.get('redis').port,
            host: configService.get('redis').host,
        });
    }
    async intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.tap)(async () => {
            const request = context.switchToHttp().getRequest();
            const include = ['/registration/step/phone-number'];
            if (include.includes(request.originalUrl)) {
                const clientIdentifier = request.ip;
                const key = crypto
                    .createHash('md5')
                    .update(`VerificationController-send-${clientIdentifier}`)
                    .digest('hex');
                await this.redisClient.del(key);
            }
        }), (0, rxjs_1.catchError)(async (err) => {
            const request = context.switchToHttp().getRequest();
            const except = ['/auth/login'];
            if ((err instanceof common_1.BadRequestException ||
                err instanceof common_1.UnprocessableEntityException) &&
                !except.includes(request.originalUrl)) {
                const clientIdentifier = request.ip;
                const key = crypto
                    .createHash('md5')
                    .update(`${context.getClass().name}-${context.getHandler().name}-${clientIdentifier}`)
                    .digest('hex');
                await this.redisClient.del(key);
            }
            throw err;
        }));
    }
};
ThrottleInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ThrottleInterceptor);
exports.ThrottleInterceptor = ThrottleInterceptor;
//# sourceMappingURL=throttle.interceptor.js.map
//# debugId=fc1b3629-7f2a-5dc0-80c6-61632771771a
