"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c09c64be-fef6-56c8-a7d2-217736b49c26")}catch(e){}}();

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
exports.FacebookAuthStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_facebook_1 = require("passport-facebook");
const base64_1 = require("../../globals/constant/base64");
const media_1 = require("../../globals/constant/media");
const media_2 = require("../../globals/helpers/media");
const media_service_1 = require("../../media/media.service");
const users_service_1 = require("../../users/users.service");
let FacebookAuthStrategy = class FacebookAuthStrategy extends (0, passport_1.PassportStrategy)(passport_facebook_1.Strategy, 'facebook') {
    constructor(userService, configService, mediaService) {
        super({
            clientID: configService.get('facebook').app_id,
            clientSecret: configService.get('facebook').app_secret,
            callbackURL: configService.get('facebook').callback_url,
            scope: 'email',
            profileFields: ['id', 'displayName', 'link', 'photos', 'emails', 'name'],
        });
        this.userService = userService;
        this.configService = configService;
        this.mediaService = mediaService;
    }
    async validate(_accessToken, _refreshToken, profile, done) {
        const { displayName, emails, photos } = profile;
        const findUser = await this.userService.findByEmail(emails[0].value);
        if (findUser) {
            return done(null, findUser);
        }
        else {
            const photoBaseUrl = photos[0].value
                ? await (0, media_2.imageUrlToBase64)(photos[0].value)
                : base64_1.defaultUserImage;
            const fileInfo = await (0, media_2.saveBase64ToFile)(photoBaseUrl, media_1.MEDIA_PROFILE_PICTURE_DIR, 'profile-picture');
            const media = await this.mediaService.createMedia(fileInfo);
            const newUser = this.userService.create({
                fullname: displayName,
                email: emails[0].value,
                roleId: 3,
                password: null,
                no_phone: null,
                gender: null,
                is_active: true,
                verified_email_at: new Date(),
                media_user_profile_picture: {
                    create: {
                        media_id: media.id,
                    },
                },
            });
            return done(null, newUser);
        }
    }
};
FacebookAuthStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_1.ConfigService,
        media_service_1.MediaService])
], FacebookAuthStrategy);
exports.FacebookAuthStrategy = FacebookAuthStrategy;
//# sourceMappingURL=facebook.strategy.js.map
//# debugId=c09c64be-fef6-56c8-a7d2-217736b49c26
