"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d7c2966b-8675-53bc-ba21-0ea585b09cac")}catch(e){}}();

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
exports.TransactionTreatmentService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let TransactionTreatmentService = class TransactionTreatmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async find(id) {
        return await this.prisma.transaction_treatment.findFirst({
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
                transaction_treatment_items: {
                    include: {
                        treatment: {
                            include: {
                                media_treatments: {
                                    include: {
                                        media: true,
                                    },
                                },
                                clinic: true,
                            },
                        },
                        treatment_review: true,
                    },
                },
            },
        });
    }
    async update(id, data) {
        return await this.prisma.transaction_treatment.update({
            where: {
                id,
            },
            data,
        });
    }
    async findAll(user_id, pageOptionsDto) {
        const filter = {
            user_id,
            AND: [
                pageOptionsDto.status
                    ? {
                        status: {
                            in: pageOptionsDto.status,
                        },
                    }
                    : {},
                pageOptionsDto.payment_status
                    ? {
                        payment_status: {
                            in: pageOptionsDto.payment_status,
                        },
                    }
                    : {},
            ],
        };
        const data = await this.prisma.transaction_treatment.findMany({
            where: filter,
            include: {
                payment_method: true,
                transaction_treatment_items: {
                    include: {
                        treatment: {
                            include: {
                                clinic: true,
                                media_treatments: {
                                    include: {
                                        media: true,
                                    },
                                },
                            },
                        },
                        treatment_review: true,
                    },
                },
            },
            orderBy: {
                created_at: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.transaction_treatment.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data.map((item) => ({
            ...item,
            transaction_type: 'TREATMENT',
        })), pageMetaDto);
    }
    async findTransactionItemBy(where) {
        return await this.prisma.transaction_treatment_item.findFirst({
            where,
            include: {
                treatment: {
                    include: {
                        media_treatments: {
                            include: {
                                media: true,
                            },
                        },
                        clinic: true,
                    },
                },
                treatment_review: {
                    include: {
                        media_treatment_reviews: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async createManyTransactionVoucer(data) {
        return this.prisma.transaction_treatment_voucher_applied.createMany({
            data,
        });
    }
};
TransactionTreatmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionTreatmentService);
exports.TransactionTreatmentService = TransactionTreatmentService;
//# sourceMappingURL=transaction-treatment.service.js.map
//# debugId=d7c2966b-8675-53bc-ba21-0ea585b09cac
