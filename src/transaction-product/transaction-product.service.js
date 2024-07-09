"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9f7ba69b-b97c-53c4-8d4c-17c7735dc70c")}catch(e){}}();

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
exports.TransactionProductService = void 0;
const common_1 = require("@nestjs/common");
const enum_1 = require("../globals/constant/enum");
const prisma_service_1 = require("../prisma/prisma.service");
let TransactionProductService = class TransactionProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async find(id) {
        return await this.prisma.transaction_product.findFirst({
            where: {
                id,
            },
            include: {
                payment_method: {
                    include: {
                        media_payment_method: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                transaction_product_items: {
                    include: {
                        product: {
                            include: {
                                skincare_detail: true,
                                drug_detail: true,
                                media_products: {
                                    include: {
                                        media: true,
                                    },
                                },
                            },
                        },
                        product_review: true,
                    },
                },
                shipping_product: {
                    include: {
                        shipper: true,
                        shipping_method: true,
                    },
                },
                product_invoice: {
                    include: {
                        product_invoice_items: true,
                    },
                },
                user: true,
                transaction_product_voucher_applieds: {
                    include: {
                        voucher: true,
                    },
                },
            },
        });
    }
    async update(id, data) {
        return await this.prisma.transaction_product.update({
            where: {
                id,
            },
            data,
        });
    }
    async findTransactionItemBy(where) {
        return await this.prisma.transaction_product_item.findFirst({
            where,
            include: {
                product: {
                    include: {
                        skincare_detail: true,
                        drug_detail: true,
                        media_products: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                product_review: true,
            },
        });
    }
    async findManyBy(where) {
        return await this.prisma.product.findMany({
            where,
            include: {
                skincare_detail: true,
                drug_detail: true,
                media_products: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async createManyTransactionVoucherApplied(data) {
        return this.prisma.transaction_product_voucher_applied.createMany({
            data,
        });
    }
    async countProductSalesById(product_id) {
        return this.prisma.transaction_product_item.aggregate({
            _sum: {
                qty: true,
            },
            where: {
                product_id,
                transaction_product: {
                    payment_status: enum_1.PaymentStatus.SUCCEEDED,
                },
            },
        });
    }
};
TransactionProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionProductService);
exports.TransactionProductService = TransactionProductService;
//# sourceMappingURL=transaction-product.service.js.map
//# debugId=9f7ba69b-b97c-53c4-8d4c-17c7735dc70c
