"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6e5b725d-d899-5414-a6a3-f5d181cdd727")}catch(e){}}();

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
exports.UserBalanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
let UserBalanceService = class UserBalanceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.user_balance.create({
            data,
        });
    }
    async update(user_id, data) {
        return await this.prisma.user_balance.update({
            where: {
                user_id,
            },
            data,
        });
    }
    async find(user_id) {
        return await this.prisma.user_balance.findUnique({
            where: {
                user_id,
            },
            select: {
                balance: true,
            },
        });
    }
    async withdrawalBalance(data) {
        return await this.prisma.user_balance_withdrawal.create({
            data,
        });
    }
    async withdrawal(pageOptionsDto) {
        const filterDate = pageOptionsDto.period_start && pageOptionsDto.period_end
            ? {
                created_at: {
                    gte: new Date(pageOptionsDto.period_start),
                    lte: new Date(pageOptionsDto.period_end),
                },
            }
            : {};
        const filter = {
            user_id: pageOptionsDto.user_id,
            ...filterDate,
        };
        const data = await this.prisma.user_balance_withdrawal.findMany({
            where: filter,
            include: {
                user_balance_withdrawal_histories: true,
            },
            orderBy: {
                created_at: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.user_balance_withdrawal.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async createWithdrawalHistory(data) {
        return this.prisma.user_balance_withdrawal_history.create({
            data,
        });
    }
};
UserBalanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserBalanceService);
exports.UserBalanceService = UserBalanceService;
//# sourceMappingURL=user-balance.service.js.map
//# debugId=6e5b725d-d899-5414-a6a3-f5d181cdd727
