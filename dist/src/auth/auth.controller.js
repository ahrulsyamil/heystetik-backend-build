"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4099da51-5af4-51fd-8585-2be777266ef8")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const throttler_1 = require("@nestjs/throttler");
const axios_1 = require("axios");
const bcrypt_1 = require("bcrypt");
const crypto = require("crypto");
const dayjs = require("dayjs");
const useragent = require("express-useragent");
const jwt = require("jsonwebtoken");
const change_password_dto_1 = require("./dto/change-password.dto");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const user_agent_decorator_1 = require("../decorators/user-agent.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const base64_1 = require("../globals/constant/base64");
const media_1 = require("../globals/constant/media");
const media_2 = require("../globals/helpers/media");
const string_1 = require("../globals/helpers/string");
const mail_service_1 = require("../mail/mail.service");
const media_service_1 = require("../media/media.service");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const verify_apple_id_token_1 = require("verify-apple-id-token");
const auth_guard_1 = require("./auth.guard");
const auth_service_1 = require("./auth.service");
const apple_login_by_token_dto_1 = require("./dto/apple-login-by-token.dto");
const facebook_login_by_token_dto_1 = require("./dto/facebook-login-by-token.dto");
const forgot_password_dto_1 = require("./dto/forgot-password.dto");
const google_login_by_token_dto_1 = require("./dto/google-login-by-token.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const update_profile_dto_1 = require("./dto/update-profile.dto");
const user_from_token_dto_1 = require("./dto/user-from-token.dto");
const apple_guard_1 = require("./guards/apple.guard");
const facebook_guard_1 = require("./guards/facebook.guard");
const google_guard_1 = require("./guards/google.guard");
const user_service_1 = require("./user/user.service");
let AuthController = class AuthController {
    constructor(authService, userService, usersService, configService, mediaService, mailService) {
        this.authService = authService;
        this.userService = userService;
        this.usersService = usersService;
        this.configService = configService;
        this.mediaService = mediaService;
        this.mailService = mailService;
    }
    async login(userAgent, body) {
        const find = await this.userService.findBy({
            OR: [
                {
                    email: body.email,
                },
                {
                    no_phone: (0, string_1.transformPhoneNumber)(body.email),
                },
            ],
            finish_register: true,
        });
        if (!find)
            throw new common_1.BadRequestException('Invalid username or password');
        if (userAgent.isMobile && ![2, 3].includes(find.roleId)) {
            throw new common_1.BadRequestException('Only for doctor or customer user');
        }
        const isMatch = await (0, bcrypt_1.compare)(body.password, find.password);
        if (!isMatch)
            throw new common_1.BadRequestException('Invalid username or password');
        const token = jwt.sign({
            sub: find.id,
        }, this.configService.get('jwt').secret, {
            expiresIn: '7d',
        });
        return {
            token,
            user: {
                ...find,
                password: undefined,
            },
        };
    }
    async loginCms(userAgent, body) {
        const find = await this.userService.findBy({
            OR: [
                {
                    email: body.email,
                },
                {
                    username: body.email,
                },
            ],
        });
        if (!find)
            throw new common_1.BadRequestException('Invalid username or password');
        if ([3].includes(find.roleId)) {
            throw new common_1.BadRequestException('Invalid user role');
        }
        const isMatch = await (0, bcrypt_1.compare)(body.password, find.password);
        if (!isMatch)
            throw new common_1.BadRequestException('Invalid username or password');
        const token = jwt.sign({
            sub: find.id,
        }, this.configService.get('jwt').secret, {
            expiresIn: '7d',
        });
        return {
            token,
            user: {
                ...find,
                password: undefined,
            },
        };
    }
    googleLogin() { }
    async googleRedirect(userAgent, req, response) {
        if (!userAgent.isMobile) {
            response.send('This page is only accessible on a mobile device');
        }
        else {
            const token = jwt.sign({
                sub: req.user.id,
            }, this.configService.get('jwt').secret, {
                expiresIn: '7d',
            });
            const redirectUrl = `heystetik://login?token=${encodeURIComponent(token)}`;
            response.redirect(301, redirectUrl);
        }
    }
    async googleLoginByToken(body, response) {
        const googleUserInfoURL = this.configService.get('google').user_info_url;
        const result = await axios_1.default
            .get(`${googleUserInfoURL}?access_token=${body.token}`)
            .catch((err) => {
            throw new common_1.HttpException({
                message: err.response?.data?.error_description,
                data: err.response?.data,
            }, err.response?.status);
        });
        const { name, email, picture } = result.data;
        let user = await this.usersService.findByEmail(email);
        if (!user) {
            const photoBaseUrl = picture
                ? await (0, media_2.imageUrlToBase64)(picture)
                : base64_1.defaultUserImage;
            const fileInfo = await (0, media_2.saveBase64ToFile)(photoBaseUrl, media_1.MEDIA_PROFILE_PICTURE_DIR, 'profile-picture');
            const media = await this.mediaService.createMedia(fileInfo);
            const checkUsername = await this.userService.findBy({
                username: email.split('@')[0],
            });
            user = await this.usersService.create({
                fullname: name,
                email: email,
                username: checkUsername
                    ? (0, string_1.generateRandomUsernameFromEmail)(email)
                    : email.split('@')[0],
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
        }
        const token = jwt.sign({
            sub: user.id,
        }, this.configService.get('jwt').secret, {
            expiresIn: '7d',
        });
        return response.status(200).json({
            message: 'Success',
            data: {
                token,
                user,
            },
        });
    }
    async facebookLogin() { }
    async facebookLoginRedirect(userAgent, req, response) {
        if (!userAgent.isMobile) {
            response.send('This page is only accessible on a mobile device');
        }
        else {
            const token = jwt.sign({
                sub: req.user.id,
            }, this.configService.get('jwt').secret, {
                expiresIn: '7d',
            });
            const redirectUrl = `heystetik://login?token=${encodeURIComponent(token)}`;
            response.redirect(301, redirectUrl);
        }
    }
    async facebookLoginByToken(body) {
        const facebookUserInfoURL = this.configService.get('facebook').user_info_url;
        const result = await axios_1.default
            .get(`${facebookUserInfoURL}?fields=name,email&access_token=${body.token}`)
            .catch((err) => {
            console.log(err.response.data);
            throw new common_1.HttpException({
                message: err.response?.data?.error?.message,
                data: err.response?.data?.error,
            }, err.response?.status);
        });
        const { name, email } = await result.data;
        let user = await this.usersService.findByEmail(email);
        if (!user) {
            const fileInfo = await (0, media_2.saveBase64ToFile)(base64_1.defaultUserImage, media_1.MEDIA_PROFILE_PICTURE_DIR, 'profile-picture');
            const media = await this.mediaService.createMedia(fileInfo);
            const checkUsername = await this.userService.findBy({
                username: email.split('@')[0],
            });
            user = await this.usersService.create({
                fullname: name,
                email: email,
                username: checkUsername
                    ? (0, string_1.generateRandomUsernameFromEmail)(email)
                    : email.split('@')[0],
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
        }
        const token = jwt.sign({
            sub: user.id,
        }, this.configService.get('jwt').secret, {
            expiresIn: '7d',
        });
        return {
            token,
            user,
        };
    }
    appleLogin() { }
    async appleLoginByToken(body) {
        let jwtClaims = null;
        try {
            jwtClaims = await (0, verify_apple_id_token_1.default)({
                idToken: body.token,
                clientId: this.configService.get('apple').client_id,
            });
        }
        catch (err) {
            throw new common_1.UnauthorizedException('Something went wrong for apple id token');
        }
        const { email } = jwtClaims;
        let user = await this.usersService.findByEmail(email);
        if (!user) {
            const fileInfo = await (0, media_2.saveBase64ToFile)(base64_1.defaultUserImage, media_1.MEDIA_PROFILE_PICTURE_DIR, 'profile-picture');
            const media = await this.mediaService.createMedia(fileInfo);
            const checkUsername = await this.userService.findBy({
                username: email.split('@')[0],
            });
            user = await this.usersService.create({
                fullname: email.split('@')[0],
                email: email,
                username: checkUsername
                    ? (0, string_1.generateRandomUsernameFromEmail)(email)
                    : email.split('@')[0],
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
        }
        const token = jwt.sign({
            sub: user.id,
        }, this.configService.get('jwt').secret, {
            expiresIn: '7d',
        });
        return {
            token,
            user,
        };
    }
    async userFromToken(data) {
        const decoded = this.authService.validateToken(data.token);
        if (!decoded?.sub)
            throw new common_1.UnauthorizedException('Not authorized, token failed');
        const user = await this.userService.findById(decoded.sub);
        if (!user)
            throw new common_1.UnauthorizedException('Not authorized, user not found');
        if (!user.is_active)
            throw new common_1.UnauthorizedException('Account is not active');
        if (![2, 3].includes(user.roleId)) {
            throw new common_1.BadRequestException('Only for doctor or customer user');
        }
        const token = jwt.sign({
            sub: user.id,
        }, this.configService.get('jwt').secret, {
            expiresIn: '7d',
        });
        return {
            token,
            user,
        };
    }
    async changePassword(user, data) {
        const findUser = await this.usersService.findOne(user.id);
        if (!findUser)
            throw new common_1.BadRequestException('User not found');
        if (!findUser.password)
            throw new common_1.BadRequestException('Invalid old password');
        const validOldPassword = await (0, bcrypt_1.compare)(data.old_password.toString(), findUser.password);
        if (!validOldPassword)
            throw new common_1.BadRequestException('Invalid old password');
        await this.authService.changePassword(user.id, data);
        return 'Success';
    }
    async forgotPassword(body) {
        const find = await this.usersService.findBy({
            email: body.email,
            finish_register: true,
        });
        if (!find)
            throw new common_1.BadRequestException('Email not found');
        const token = await (0, bcrypt_1.hash)(crypto.randomBytes(32).toString('hex'), 12);
        body.token = token;
        body.expired_at = dayjs().add(1, 'day').toDate();
        await this.authService.forgotPassword(body);
        await this.mailService.sendEmailResetPassword(find.email, {
            fullname: find.fullname,
            link: `${this.configService.get('app').client_base_url}/auth/reset-password?token=${encodeURIComponent(token)}`,
        });
        return 'Success';
    }
    async resetPassword(body) {
        const find = await this.authService.findResetPassword({
            token: body.token,
        });
        if (!find)
            throw new common_1.BadRequestException('Invalid token');
        if (dayjs().isAfter(find.expired_at))
            throw new common_1.BadRequestException('Reset password token expired');
        if (find.used_at)
            throw new common_1.BadRequestException('Invalid reset password link');
        const user = await this.userService.findBy({
            email: find.email,
        });
        if (!user)
            throw new common_1.BadRequestException('User not found');
        await this.usersService.updateUser(user.id, {
            password: (0, bcrypt_1.hashSync)(body.password_new.toString(), 12),
        });
        await this.authService.updateResetPassword(find.id, {
            used_at: new Date(),
        });
        return 'Success';
    }
    async getSession(user) {
        const find = await this.authService.userSession(user.id);
        return find;
    }
    async updateProfile(user, data) {
        const [existUsername, existEmail] = await Promise.all([
            this.usersService.findBy({
                username: data.username,
                id: {
                    not: user.id,
                },
            }),
            this.usersService.findBy({
                email: data.email,
                id: {
                    not: user.id,
                },
            }),
        ]);
        if (existUsername) {
            throw new common_1.BadRequestException('Username is already taken.  Please choose a different and unique username.');
        }
        if (existEmail) {
            throw new common_1.BadRequestException('Email is already taken. Please choose a different email');
        }
        await this.usersService.updateUser(user.id, {
            username: data.username,
            fullname: data.name,
            email: data.email,
            no_phone: data.no_phone,
        });
        return data;
    }
};
__decorate([
    (0, throttler_1.Throttle)(5, 60),
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiCreatedResponse)({ type: login_user_dto_1.LoginUserDto }),
    __param(0, (0, user_agent_decorator_1.UserAgent)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof useragent !== "undefined" && useragent.Details) === "function" ? _a : Object, login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Login successfully'),
    (0, throttler_1.Throttle)(5, 60),
    (0, common_1.Post)('login-cms'),
    (0, swagger_1.ApiCreatedResponse)({ type: login_user_dto_1.LoginUserDto }),
    __param(0, (0, user_agent_decorator_1.UserAgent)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof useragent !== "undefined" && useragent.Details) === "function" ? _b : Object, login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginCms", null);
__decorate([
    (0, common_1.Get)('google/login'),
    (0, common_1.UseGuards)(google_guard_1.GoogleAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleLogin", null);
__decorate([
    (0, common_1.Get)('google/redirect'),
    (0, common_1.UseGuards)(google_guard_1.GoogleAuthGuard),
    __param(0, (0, user_agent_decorator_1.UserAgent)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof useragent !== "undefined" && useragent.Details) === "function" ? _c : Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleRedirect", null);
__decorate([
    (0, common_1.Post)('google/login-by-token'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [google_login_by_token_dto_1.GoogleLoginByTokenDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleLoginByToken", null);
__decorate([
    (0, common_1.Get)('facebook/login'),
    (0, common_1.UseGuards)(facebook_guard_1.FacebookAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookLogin", null);
__decorate([
    (0, common_1.Get)('facebook/redirect'),
    (0, common_1.UseGuards)(facebook_guard_1.FacebookAuthGuard),
    __param(0, (0, user_agent_decorator_1.UserAgent)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof useragent !== "undefined" && useragent.Details) === "function" ? _d : Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookLoginRedirect", null);
__decorate([
    (0, common_1.Post)('facebook/login-by-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [facebook_login_by_token_dto_1.FacebookLoginByTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookLoginByToken", null);
__decorate([
    (0, common_1.Get)('apple/login'),
    (0, common_1.UseGuards)(apple_guard_1.AppleAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "appleLogin", null);
__decorate([
    (0, common_1.Post)('apple/login-by-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [apple_login_by_token_dto_1.AppleLoginByTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "appleLoginByToken", null);
__decorate([
    (0, common_1.Post)('token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_from_token_dto_1.UserFromTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userFromToken", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('change-password'),
    (0, response_message_decorator_1.ResponseMessage)('Successfully changed password'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('session'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getSession", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('profile'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        update_profile_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        users_service_1.UsersService,
        config_1.ConfigService,
        media_service_1.MediaService,
        mail_service_1.MailService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map
//# debugId=4099da51-5af4-51fd-8585-2be777266ef8
