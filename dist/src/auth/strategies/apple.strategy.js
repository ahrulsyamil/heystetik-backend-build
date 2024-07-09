"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8adf1fe3-cda3-52a9-8cf8-406c49b6d215")}catch(e){}}();

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
exports.AppleStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_apple_1 = require("passport-apple");
let AppleStrategy = class AppleStrategy extends (0, passport_1.PassportStrategy)(passport_apple_1.Strategy, 'apple') {
    constructor(configService) {
        super({
            clientID: configService.get('apple').client_id,
            teamID: configService.get('apple').team_id,
            keyID: configService.get('apple').key_id,
            scope: ['email', 'name'],
            passReqToCallback: false,
            keyFilePath: '../AuthKey_HLB2KZ583W.p8',
            callbackURL: 'https://heystetik.com',
        });
        this.configService = configService;
    }
    async validate(_accessToken, _refreshToken, profile) {
        console.log(_accessToken, _refreshToken, profile);
        return {
            emailAddress: profile.email,
            firstName: profile.name?.firstName || '',
            lastName: profile.name?.lastName || '',
        };
    }
};
AppleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppleStrategy);
exports.AppleStrategy = AppleStrategy;
//# sourceMappingURL=apple.strategy.js.map
//# debugId=8adf1fe3-cda3-52a9-8cf8-406c49b6d215
