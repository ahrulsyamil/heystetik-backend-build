"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a7f604f6-84db-58cc-ab97-7d5a43b7f21b")}catch(e){}}();

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
exports.MinheyService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const dayjs = require("dayjs");
let MinheyService = class MinheyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllTransaction(pageOptionsDto) {
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
               )
               ORDER BY created_at ${pageOptionsDto.order}
               LIMIT ${pageOptionsDto.take}
               OFFSET ${pageOptionsDto.skip}
            ) RESULT
            WHERE
               RESULT.created_at >= CURRENT_DATE - INTERVAL '30 days'
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
            )
         ) COUNT 
         WHERE
            COUNT.created_at >= CURRENT_DATE - INTERVAL '30 days'
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
        })), pageMetaDto);
    }
};
MinheyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MinheyService);
exports.MinheyService = MinheyService;
//# sourceMappingURL=minhey.service.js.map
//# debugId=a7f604f6-84db-58cc-ab97-7d5a43b7f21b
