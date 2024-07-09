"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4df358b6-0d56-5fd6-99f4-b41f704b48b6")}catch(e){}}();

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
exports.InterestConditionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let InterestConditionsService = class InterestConditionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInterestConditionsDto) {
        return await this.prisma.interest_conditions.create({
            data: createInterestConditionsDto,
        });
    }
    async createQuestion(requset) {
        return await this.prisma.interest_conditions_question.create({
            data: {
                interest_conditions_id: requset.interest_conditions_id,
                name: requset.name,
                type: requset.type,
                type_answer: requset.type_answer,
            },
        });
    }
    async createAnswer(request) {
        return await this.prisma.interest_conditions_answer.create({
            data: request,
        });
    }
    async findAllOld() {
        return await this.prisma.interest_conditions.findMany({
            include: {
                concern: true,
                interest_conditions_question: {
                    include: {
                        interest_conditions_answer: true,
                    },
                },
                media_interest_conditions_characteristics: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async findAll() {
        const whereQuery = 'IC.deleted_at IS NULL';
        const query = `
      SELECT 
        IC.* 
      FROM 
        interest_conditions  IC
      INNER JOIN 
        concern C ON C.id = IC.concern_id
      WHERE 
        ${whereQuery}
      ORDER BY
        CASE
          WHEN C.segment = 'Korektif Wajah' THEN 1
          WHEN C.segment = 'Korektif Tubuh' THEN 2
          WHEN C.segment = 'Augmentation Wajah & Tubuh' THEN 3
          WHEN C.segment = 'Penyakit Menular Seksual' THEN 4
          when C.segment = 'Masalah Kulit Lainnya' then 5
          ELSE 6
        END ASC,
        C.name ASC
    `;
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          ${query}
        `));
        });
        return data;
    }
    async findAllQuestion() {
        return await this.prisma.interest_conditions_question.findMany({
            include: {
                interest_conditions: true,
                interest_conditions_answer: true,
            },
        });
    }
    async findAllAnswer() {
        return await this.prisma.interest_conditions_answer.findMany({
            include: {
                interest_conditions_question: {
                    include: {
                        interest_conditions: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return await this.prisma.interest_conditions.findUnique({
            where: { id },
            include: {
                concern: {
                    include: {
                        media_concern: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                interest_conditions_characteristics: true,
                interest_conditions_question: {
                    include: {
                        interest_conditions_answer: true,
                    },
                },
                media_interest_conditions_characteristics: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async update(id, updateInterestConditionsDto) {
        return await this.prisma.interest_conditions.update({
            where: { id },
            data: updateInterestConditionsDto,
        });
    }
    async remove(id) {
        return await this.prisma.interest_conditions.delete({ where: { id } });
    }
};
InterestConditionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InterestConditionsService);
exports.InterestConditionsService = InterestConditionsService;
//# sourceMappingURL=interest-condition.service.js.map
//# debugId=4df358b6-0d56-5fd6-99f4-b41f704b48b6
