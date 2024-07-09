"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ba7fae78-f7be-5f94-8e67-98e36ea43e40")}catch(e){}}();

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
exports.TransactionConsultationService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let TransactionConsultationService = class TransactionConsultationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(insertTransactionConsultationDto) {
        return await this.prisma.transaction_consultation.create({
            data: insertTransactionConsultationDto,
        });
    }
    async find(id) {
        return await this.prisma.transaction_consultation.findFirst({
            where: {
                id,
            },
            include: {
                consultation_invoice: true,
                customer: true,
                payment_method: {
                    include: {
                        media_payment_method: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                medical_history: {
                    include: {
                        interest_condition: {
                            include: {
                                concern: true,
                            },
                        },
                    },
                },
                consultation: {
                    include: {
                        doctor: {
                            include: {
                                media_user_profile_picture: {
                                    include: {
                                        media: true,
                                    },
                                },
                            },
                        },
                        medical_history: {
                            include: {
                                interest_condition: true,
                            },
                        },
                    },
                },
                consultation_review: true,
            },
        });
    }
    async update(id, updateTransactionConsultationDto) {
        return await this.prisma.transaction_consultation.update({
            where: {
                id,
            },
            data: updateTransactionConsultationDto,
        });
    }
    async findAll(customer_id, pageOptionsDto) {
        const filter = {
            customer_id,
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
        const data = await this.prisma.transaction_consultation.findMany({
            where: filter,
            include: {
                payment_method: true,
                consultation: {
                    include: {
                        medical_history: {
                            include: {
                                interest_condition: {
                                    include: {
                                        concern: true,
                                    },
                                },
                            },
                        },
                        doctor: {
                            include: {
                                media_user_profile_picture: {
                                    include: {
                                        media: true,
                                    },
                                },
                            },
                        },
                    },
                },
                consultation_review: true,
            },
            orderBy: {
                created_at: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.transaction_consultation.count({
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
            transaction_type: 'CONSULTATION',
        })), pageMetaDto);
    }
    async createManyTransactionVoucer(data) {
        return this.prisma.transaction_consultation_voucher_applied.createMany({
            data,
        });
    }
};
TransactionConsultationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionConsultationService);
exports.TransactionConsultationService = TransactionConsultationService;
//# sourceMappingURL=transaction-consultation.service.js.map
//# debugId=ba7fae78-f7be-5f94-8e67-98e36ea43e40
