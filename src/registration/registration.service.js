"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3d615277-9d93-5457-b386-db9543d206c5")}catch(e){}}();

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
exports.RegistrationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RegistrationService = class RegistrationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(data) {
        return await this.prisma.users.create({
            data,
        });
    }
    async updateUser(id, data, media = undefined) {
        if (media) {
            const findMedia = await this.prisma.media_user_profile_picture.findMany({
                where: {
                    user_id: id,
                },
                include: {
                    media: true,
                },
            });
            if (findMedia.length > 0) {
                await this.prisma.media_user_profile_picture.deleteMany({
                    where: {
                        id: {
                            in: findMedia.map((item) => item.id),
                        },
                    },
                });
                await this.prisma.media.deleteMany({
                    where: {
                        id: {
                            in: findMedia.map((item) => item.media.id),
                        },
                    },
                });
            }
        }
        return await this.prisma.users.update({
            where: {
                id,
            },
            data: {
                ...data,
                media_user_profile_picture: {
                    create: media,
                },
            },
        });
    }
    async createUserRegistrationStep(data) {
        return await this.prisma.user_registration_step.upsert({
            where: {
                user_id: data.user_id,
            },
            create: data,
            update: data,
        });
    }
    async updateUserRegistrationStep(data) {
        return await this.prisma.user_registration_step.update({
            where: {
                user_id: data.user_id,
            },
            data,
        });
    }
};
RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegistrationService);
exports.RegistrationService = RegistrationService;
//# sourceMappingURL=registration.service.js.map
//# debugId=3d615277-9d93-5457-b386-db9543d206c5
