"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="24b4f641-e920-546a-99f7-996b4c18657c")}catch(e){}}();

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
exports.HeaderWebhookAuthKeyStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const passport_headerapikey_1 = require("passport-headerapikey");
let HeaderWebhookAuthKeyStrategy = class HeaderWebhookAuthKeyStrategy extends (0, passport_1.PassportStrategy)(passport_headerapikey_1.default, 'api-key') {
    constructor(configService) {
        super({ header: 'X-Auth-Key', prefix: '' }, true, async (apiKey, done) => {
            return this.validate(apiKey, done);
        });
        this.configService = configService;
        this.validate = (authKey, done) => {
            if (this.configService.get('gosend').webhook_auth_key ===
                authKey) {
                done(null, true);
            }
            done(new common_1.UnauthorizedException(), null);
        };
    }
};
HeaderWebhookAuthKeyStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], HeaderWebhookAuthKeyStrategy);
exports.HeaderWebhookAuthKeyStrategy = HeaderWebhookAuthKeyStrategy;
//# sourceMappingURL=webhook-header-auth-key.strategy.js.map
//# debugId=24b4f641-e920-546a-99f7-996b4c18657c
