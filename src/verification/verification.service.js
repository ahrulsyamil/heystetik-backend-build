"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="07d19a7a-fec4-56c2-8a28-6b2f373edcbc")}catch(e){}}();

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
exports.VerificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VerificationService = class VerificationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.verification_code.create({
            data: {
                identifier: data.identifier,
                code: data.code,
                method: data.method,
                type: data.type,
                expired_at: data.expired_at,
            },
        });
    }
    async updateManyBy(where, data) {
        return await this.prisma.verification_code.updateMany({
            where,
            data,
        });
    }
    async findBy(where) {
        return await this.prisma.verification_code.findFirst({
            where,
            orderBy: {
                id: 'desc',
            },
        });
    }
    async update(id, data) {
        return await this.prisma.verification_code.update({
            where: {
                id,
            },
            data,
        });
    }
};
VerificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VerificationService);
exports.VerificationService = VerificationService;
//# sourceMappingURL=verification.service.js.map
//# debugId=07d19a7a-fec4-56c2-8a28-6b2f373edcbc
