"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f6eb59d3-f3ab-5229-94f3-59d4f5e71a69")}catch(e){}}();

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
exports.UserAlreadyExist = exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bcrypt_1 = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma_service_1 = require("../prisma/prisma.service");
const user_service_1 = require("./user/user.service");
let AuthService = class AuthService {
    constructor(prisma, userService, configService) {
        this.prisma = prisma;
        this.userService = userService;
        this.configService = configService;
    }
    validateToken(token) {
        try {
            const isValid = jwt.verify(token, this.configService.get('jwt').secret);
            if (!isValid)
                return null;
            const decodeToken = jwt.decode(token, { json: true });
            if (!decodeToken.sub)
                return null;
            return decodeToken;
        }
        catch {
            return null;
        }
    }
    async authenticate(email, password) {
        try {
            const user = await this.userService.validateUser(email, password);
            const token = jwt.sign({
                sub: user.id,
            }, this.configService.get('jwt').secret, {
                expiresIn: '7d',
            });
            return { token, data: user };
        }
        catch (err) {
            throw err;
        }
    }
    async changePassword(user_id, data) {
        return await this.prisma.users.update({
            where: {
                id: user_id,
            },
            data: {
                password: (0, bcrypt_1.hashSync)(data.new_password.toString(), 12),
            },
        });
    }
    async findResetPassword(where) {
        return await this.prisma.reset_password.findFirst({
            where,
        });
    }
    async forgotPassword(data) {
        return await this.prisma.reset_password.create({
            data: {
                email: data.email,
                token: data.token,
                expired_at: data.expired_at,
            },
        });
    }
    async updateResetPassword(id, data) {
        return await this.prisma.reset_password.update({
            where: {
                id,
            },
            data,
        });
    }
    async userSession(id) {
        return this.prisma.users.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                fullname: true,
                username: true,
                email: true,
                no_phone: true,
                gender: true,
                role: true,
                media_user_profile_picture: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
class UserAlreadyExist extends Error {
    constructor() {
        super(...arguments);
        this.name = 'UserAlreadyExistExecption';
        this.message = 'User already Exist';
    }
}
exports.UserAlreadyExist = UserAlreadyExist;
//# sourceMappingURL=auth.service.js.map
//# debugId=f6eb59d3-f3ab-5229-94f3-59d4f5e71a69
