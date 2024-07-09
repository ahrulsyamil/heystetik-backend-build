"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="76a4845f-013b-5ae5-a21e-ebdc059e5bea")}catch(e){}}();

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
exports.PaymentMethodService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PaymentMethodService = class PaymentMethodService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptions) {
        const filter = {};
        if (pageOptions && pageOptions.method) {
            filter.method = {
                in: pageOptions.method,
            };
        }
        return this.prisma.payment_method.findMany({
            where: {
                ...filter,
            },
            include: {
                media_payment_method: {
                    include: {
                        media: true,
                    },
                },
                how_to_pays: true,
            },
        });
    }
    async find(id) {
        return this.prisma.payment_method.findUnique({
            where: {
                id,
            },
            include: {
                media_payment_method: {
                    include: {
                        media: true,
                    },
                },
                how_to_pays: true,
            },
        });
    }
};
PaymentMethodService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentMethodService);
exports.PaymentMethodService = PaymentMethodService;
//# sourceMappingURL=payment-method.service.js.map
//# debugId=76a4845f-013b-5ae5-a21e-ebdc059e5bea
