"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="59f359e0-573d-5910-8f1b-3047b360843a")}catch(e){}}();

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
exports.ShippingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ShippingService = class ShippingService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAllShippingMethod() {
        return this.prismaService.shipping_method.findMany({});
    }
    findOneShippingMethod(id) {
        return this.prismaService.shipping_method.findUnique({
            where: {
                id,
            },
        });
    }
    findOneShipperByName(name) {
        return this.prismaService.shipper.findUnique({
            where: {
                name,
            },
        });
    }
    findOneShipperBy(where) {
        return this.prismaService.shipper.findFirst({
            where,
        });
    }
    create(data) {
        return this.prismaService.shipping_product.create({
            data,
        });
    }
    async updateByTransactionId(id, data) {
        return this.prismaService.shipping_product.update({
            where: {
                transaction_product_id: id,
            },
            data,
        });
    }
    async createLog(data) {
        return this.prismaService.shipping_log.create({
            data,
        });
    }
    async findShippingProductByTransactionId(id) {
        return this.prismaService.shipping_product.findUnique({
            where: {
                transaction_product_id: id,
            },
            include: {
                shipping_method: true,
                shipper: true,
                transaction_product: true,
            },
        });
    }
    async createShippingHistory(data) {
        return this.prismaService.shipping_product_history.create({
            data,
        });
    }
    async getShippingHistoryByTransactionId(id) {
        return this.prismaService.shipping_product_history.findMany({
            where: {
                transaction_product_id: id,
            },
        });
    }
    async findAllShippingProduct(where) {
        return this.prismaService.shipping_product.findMany({
            where,
            orderBy: {
                id: 'asc',
            },
        });
    }
};
ShippingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShippingService);
exports.ShippingService = ShippingService;
//# sourceMappingURL=shipping.service.js.map
//# debugId=59f359e0-573d-5910-8f1b-3047b360843a
