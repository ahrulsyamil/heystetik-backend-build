"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4092af69-cff0-5d8c-9222-49b7585e9d2e")}catch(e){}}();

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
exports.MedicalHistoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MedicalHistoryService = class MedicalHistoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(customer_id, createMedicalHistoryDto, media) {
        const { interest_condition_id, medical_history_item } = createMedicalHistoryDto;
        return await this.prisma.medical_history.create({
            data: {
                customer_id,
                interest_condition_id,
                medical_history_items: {
                    create: medical_history_item,
                },
                media_medical_histories: {
                    create: media,
                },
            },
        });
    }
    async findOne(id) {
        return this.prisma.medical_history.findUnique({
            where: {
                id,
            },
            include: {
                interest_condition: {
                    include: {
                        concern: true,
                    },
                },
                medical_history_items: {
                    include: {
                        interest_conditions_answer: true,
                        interest_conditions_question: true,
                    },
                },
                media_medical_histories: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async findBy(where) {
        return this.prisma.medical_history.findFirst({
            where,
            include: {
                interest_condition: {
                    include: {
                        concern: true,
                    },
                },
                medical_history_items: {
                    include: {
                        interest_conditions_answer: true,
                        interest_conditions_question: true,
                    },
                },
                media_medical_histories: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
};
MedicalHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MedicalHistoryService);
exports.MedicalHistoryService = MedicalHistoryService;
//# sourceMappingURL=medical-history.service.js.map
//# debugId=4092af69-cff0-5d8c-9222-49b7585e9d2e
