"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ac69cd4e-5ae2-5731-979c-65c5f129676a")}catch(e){}}();

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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const enum_1 = require("../../globals/constant/enum");
const prisma_service_1 = require("../../prisma/prisma.service");
const auth_service_1 = require("../auth.service");
const SALT_PASSWORD = 12;
let UserService = class UserService {
    constructor(prismaClient) {
        this.prismaClient = prismaClient;
    }
    async create(user) {
        if (user.password) {
            user.password = await bcrypt.hash(user.password, SALT_PASSWORD);
        }
        const userData = await this.prismaClient.users.create({
            data: user,
        });
        delete userData.password;
        return userData;
    }
    async createByUserPhone(user) {
        return await this.prismaClient.users.create({
            data: {
                no_phone: user.no_phone,
                verification_code_phone: 55555,
                roleId: 3,
            },
        });
    }
    async updateUserEmail(user) {
        try {
            const userData = await this.prismaClient.users.update({
                where: {
                    id: user.userId,
                },
                data: {
                    email: user.email,
                    verification_code_email: 55555,
                },
            });
            return userData;
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new auth_service_1.UserAlreadyExist();
                }
            }
            throw error;
        }
    }
    async updateInfoPersonal(user, media) {
        try {
            if (user.password) {
                user.password = await bcrypt.hash(user.password, SALT_PASSWORD);
            }
            await this.prismaClient.users.update({
                where: {
                    id: +user.userId,
                },
                data: {
                    gender: user.gender,
                    cityId: user.cityId,
                    fullname: user.fullname,
                    email: user.email,
                    password: user.password,
                    referral_code: user.referral_code,
                    provinceId: user.provinceId,
                    photo_profile: user.photo_profile,
                    media_user_profile_picture: {
                        create: media,
                    },
                },
            });
            if (user.password) {
                delete user.password;
            }
            return user;
        }
        catch (error) {
            console.log('error auth. service', error);
            throw error;
        }
    }
    async findOne(user) {
        const userData = await this.prismaClient.users.findUnique({
            where: user,
            include: {
                media_user_profile_picture: {
                    include: {
                        media: true,
                    },
                },
            },
        });
        if (!userData)
            return null;
        return userData;
    }
    async findBy(where) {
        return await this.prismaClient.users.findFirst({
            where,
            include: {
                role: true,
            },
        });
    }
    async validateUser(email, password) {
        const byEmail = await this.findOne({ email });
        if (!byEmail)
            throw new UserNotFoundException();
        const isMatch = await bcrypt.compare(password, byEmail.password);
        if (!isMatch)
            throw new AuthenticationFailedExecption();
        delete byEmail.password;
        return byEmail;
    }
    async findByPhoneNumber(data) {
        try {
            const user = this.prismaClient.users.findUnique({
                where: { no_phone: data.no_phone },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async findByEmailUnique(data) {
        try {
            const user = await this.prismaClient.users.findFirst({
                where: { email: data.email },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async findByEmail(data) {
        try {
            const user = this.prismaClient.users.findMany({
                where: { email: data.email },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const user = await this.prismaClient.users.findUnique({
                where: { id: id },
                include: {
                    role: true,
                    media_user_profile_picture: {
                        include: {
                            media: true,
                        },
                    },
                },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async verifyUser(data) {
        try {
            if (data.verify_type === enum_1.VerifyType.EMAIL) {
                const user = await this.prismaClient.users.findFirst({
                    where: {
                        id: data.userId,
                        verification_code_email: data.code,
                    },
                });
                if (user) {
                    await this.prismaClient.users.update({
                        where: {
                            id: data.userId,
                        },
                        data: {
                            is_active: true,
                        },
                    });
                }
                else {
                    throw new FailedVerifyAccouont();
                }
            }
            else if (data.verify_type === enum_1.VerifyType.PHONE) {
                const user = await this.prismaClient.users.findFirst({
                    where: {
                        id: data.userId,
                        verification_code_phone: data.code,
                    },
                });
                if (user) {
                    await this.prismaClient.users.update({
                        where: {
                            id: data.userId,
                        },
                        data: {
                            is_active: true,
                        },
                    });
                }
                else {
                    throw new FailedVerifyAccouont();
                }
            }
            else {
                throw new InvalidVerifyType();
            }
        }
        catch (error) {
            throw error;
        }
    }
    async find(id) {
        return await this.prismaClient.users.findUnique({
            where: {
                id,
            },
            include: {
                role: true,
                interest_beauty_profile: true,
                interest_face_corrective_skin_goals: true,
                interest_body_corrective_skin_goals: true,
                interest_augmentation_skin_goals: true,
                interest_history_treatment_skin_goals: true,
                interest_budget_skin_goals: true,
                media_user_profile_picture: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async findAllBy(where) {
        return this.prismaClient.users.findMany({
            where,
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
class UserNotFoundException extends Error {
    constructor() {
        super(...arguments);
        this.name = 'UserNotFoundExecption';
        this.message = 'User not found';
    }
}
class AuthenticationFailedExecption extends Error {
    constructor() {
        super(...arguments);
        this.name = 'AuthenticationFailedExecption';
        this.message = 'Password is wrong';
    }
}
class FailedVerifyAccouont extends Error {
    constructor() {
        super(...arguments);
        this.name = 'FailedVerifyAccouont';
        this.message = 'Faield Verify Accouont';
    }
}
class InvalidVerifyType extends Error {
    constructor() {
        super(...arguments);
        this.name = 'InvalidVerifyType';
        this.message = 'Invalid Verify Type';
    }
}
//# sourceMappingURL=user.service.js.map
//# debugId=ac69cd4e-5ae2-5731-979c-65c5f129676a
