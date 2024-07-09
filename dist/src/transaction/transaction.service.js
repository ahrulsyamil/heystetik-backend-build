"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d4b2cda0-082b-52b2-8464-d13e0c091663")}catch(e){}}();

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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const dayjs = require("dayjs");
let TransactionService = class TransactionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptionsDto) {
        const whereTransactionConsultationStatus = [];
        let whereTransactionConsultationStatusQuery = '';
        const whereTransactionTreatmentStatus = [];
        let whereTransactionTreatmentStatusQuery = '';
        const whereTransactionProductStatus = [];
        let whereTransactionProductStatusQuery = '';
        if (pageOptionsDto.transaction_status) {
            pageOptionsDto.transaction_status.forEach((item) => {
                if (Object.keys(client_1.transaction_consultation_status).includes(item)) {
                    whereTransactionConsultationStatus.push(item);
                }
            });
            pageOptionsDto.transaction_status.forEach((item) => {
                if (Object.keys(client_1.transaction_treatment_status).includes(item)) {
                    whereTransactionTreatmentStatus.push(item);
                }
            });
            pageOptionsDto.transaction_status.forEach((item) => {
                if (Object.keys(client_1.transaction_product_status).includes(item)) {
                    whereTransactionProductStatus.push(item);
                }
            });
        }
        if (whereTransactionConsultationStatus.length > 0) {
            whereTransactionConsultationStatusQuery = `AND TC.status IN (${whereTransactionConsultationStatus
                .map((status) => `'${status}'`)
                .join(',')})`;
        }
        if (whereTransactionTreatmentStatus.length > 0) {
            whereTransactionTreatmentStatusQuery = `AND TT.status IN (${whereTransactionTreatmentStatus
                .map((status) => `'${status}'`)
                .join(',')})`;
        }
        if (whereTransactionProductStatus.length > 0) {
            whereTransactionProductStatusQuery = `AND TP.status IN (${whereTransactionProductStatus
                .map((status) => `'${status}'`)
                .join(',')})`;
        }
        let where = '';
        if (pageOptionsDto.transaction_type) {
            where = `${where} AND transaction_type IN (${pageOptionsDto.transaction_type
                .map((type) => `'${type}'`)
                .join(',')})`;
        }
        if (pageOptionsDto.start_date && pageOptionsDto.end_date) {
            where = `${where} AND created_at between '${pageOptionsDto.start_date}' AND '${pageOptionsDto.end_date}'`;
        }
        if (pageOptionsDto.search) {
            whereTransactionConsultationStatusQuery = ` AND (
        SELECT
          COUNT(*)
        FROM
          transaction_consultation ts
        INNER JOIN 
          medical_history mh ON mh.id = ts.medical_history_id
        INNER JOIN
          interest_conditions ic ON ic.id = mh.interest_condition_id
        INNER JOIN
          concern cn ON cn.id = ic.concern_id
        LEFT JOIN
          consultation c ON c.transaction_consultation_id = ts.id
        LEFT JOIN
          users u ON u.id = c.doctor_id
        WHERE
          ts.id = TC.id
          AND (LOWER(u.fullname) LIKE LOWER('%${pageOptionsDto.search}%') OR LOWER(cn.name) LIKE LOWER('%${pageOptionsDto.search}%'))
      ) > 0`;
            whereTransactionTreatmentStatusQuery = ` AND (
        SELECT 
          COUNT(*)
        FROM 
          transaction_treatment_item tti
        INNER JOIN 
          treatment t ON t.id = tti.treatment_id
        INNER JOIN 
          clinic c ON c.id = t.clinic_id
        WHERE 
          tti.transaction_treatment_id = TT.id
          AND (LOWER(t.name) LIKE LOWER('%${pageOptionsDto.search}%') OR LOWER(c.name) LIKE LOWER('%${pageOptionsDto.search}%'))
      ) > 0`;
            whereTransactionProductStatusQuery = ` AND (
        SELECT 
          COUNT(*)
        FROM 
          transaction_product_item tpi
        INNER JOIN 
          product p ON p.id = tpi.product_id
        WHERE 
          tpi.transaction_product_id = TP.id
          AND (LOWER(p.name) LIKE LOWER('%${pageOptionsDto.search}%'))
      ) > 0`;
        }
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
            SELECT * FROM (
               (
                  SELECT
                     TC.id AS transaction_id, 
                     'CONSULTATION' AS transaction_type, 
                     TC.created_at
                  FROM 
                     transaction_consultation TC
                  WHERE
                     TC.customer_id = ${pageOptionsDto.user_id}
                     ${whereTransactionConsultationStatusQuery}
               )
               UNION
               (
                  SELECT 
                     TT.id AS transaction_id, 
                     'TREATMENT' AS transaction_type, 
                     TT.created_at
                  FROM 
                     transaction_treatment TT
                  WHERE 
                     TT.user_id = ${pageOptionsDto.user_id}
                     ${whereTransactionTreatmentStatusQuery}
               )
               UNION
               (
                  SELECT 
                     TP.id AS transaction_id, 
                     'PRODUCT' AS transaction_type, 
                     TP.created_at
                  FROM 
                     transaction_product TP
                  WHERE 
                     TP.user_id = ${pageOptionsDto.user_id}
                     ${whereTransactionProductStatusQuery}
               )
               ORDER BY created_at ${pageOptionsDto.order}
               LIMIT ${pageOptionsDto.take}
               OFFSET ${pageOptionsDto.skip}
            ) RESULT
            WHERE
               TRUE = TRUE
               ${where}
        `));
        });
        let countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         SELECT COUNT(*) FROM (
            (
               SELECT
                  TC.id AS transaction_id, 
                  'CONSULTATION' AS transaction_type, 
                  TC.created_at 
               FROM 
                  transaction_consultation TC
               WHERE
                  TC.customer_id = ${pageOptionsDto.user_id}
                  ${whereTransactionConsultationStatusQuery}
            )
            UNION
            (
               SELECT 
                  TT.id AS transaction_id, 
                  'TREATMENT' AS transaction_type, 
                  TT.created_at 
               FROM 
                  transaction_treatment TT
               WHERE 
                  TT.user_id = ${pageOptionsDto.user_id}
                  ${whereTransactionTreatmentStatusQuery}
            )
            UNION
            (
               SELECT 
                  TP.id AS transaction_id, 
                  'PRODUCT' AS transaction_type, 
                  TP.created_at 
               FROM 
                  transaction_product TP
               WHERE 
                  TP.user_id = ${pageOptionsDto.user_id}
                  ${whereTransactionProductStatusQuery}
            )
         ) COUNT 
         WHERE
            TRUE = TRUE
            ${where}    
      `));
        });
        countAll = countAll[0].count;
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data.map((item) => ({
            ...item,
            created_at: dayjs.tz(item.created_at).format(),
            updated_at: dayjs.tz(item.updated_at).format(),
        })), pageMetaDto);
    }
    async createTransactionLog(data) {
        return this.prisma.transaction_log.create({
            data,
        });
    }
    async findTransactionLogBy(where) {
        return this.prisma.transaction_log.findFirst({
            where,
        });
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map
//# debugId=d4b2cda0-082b-52b2-8464-d13e0c091663
