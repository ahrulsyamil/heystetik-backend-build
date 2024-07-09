"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7cc6d262-5834-5b24-8381-ffd857ffed91")}catch(e){}}();

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
exports.UserBankAccountService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserBankAccountService = class UserBankAccountService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user_id) {
        return await this.prisma.user_bank_account.findMany({
            where: {
                user_id,
            },
            include: {
                bank: true,
            },
        });
    }
    async find(id) {
        return await this.prisma.user_bank_account.findUnique({
            where: {
                id,
            },
            include: {
                bank: true,
            },
        });
    }
    async create(data) {
        return await this.prisma.user_bank_account.create({
            data,
        });
    }
    async update(id, data) {
        return await this.prisma.user_bank_account.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        return await this.prisma.user_bank_account.delete({
            where: {
                id,
            },
        });
    }
};
UserBankAccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserBankAccountService);
exports.UserBankAccountService = UserBankAccountService;
//# sourceMappingURL=user-bank-account.service.js.map
//# debugId=7cc6d262-5834-5b24-8381-ffd857ffed91
