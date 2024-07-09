"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="71796ea4-4899-55b4-b3ad-03a4a7229b0b")}catch(e){}}();

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
exports.InterestBeautyProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InterestBeautyProfileService = class InterestBeautyProfileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createInterestBeautyProfileDto) {
        return this.prisma.interest_beauty_profile.upsert({
            where: {
                user_id: createInterestBeautyProfileDto.user_id,
            },
            create: createInterestBeautyProfileDto,
            update: createInterestBeautyProfileDto,
        });
    }
    findAll() {
        return this.prisma.interest_beauty_profile.findMany({
            include: {
                user: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.interest_beauty_profile.findUnique({
            where: { id },
            include: {
                user: true,
            },
        });
    }
    update(id, updateInterestBeautyProfileDto) {
        return this.prisma.interest_beauty_profile.update({
            where: { id },
            data: updateInterestBeautyProfileDto,
        });
    }
    remove(id) {
        return this.prisma.interest_beauty_profile.delete({ where: { id } });
    }
    findByUser(user_id) {
        return this.prisma.interest_beauty_profile.findFirst({
            where: {
                user_id,
            },
        });
    }
};
InterestBeautyProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InterestBeautyProfileService);
exports.InterestBeautyProfileService = InterestBeautyProfileService;
//# sourceMappingURL=interest_beauty_profile.service.js.map
//# debugId=71796ea4-4899-55b4-b3ad-03a4a7229b0b
