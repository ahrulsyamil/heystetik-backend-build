"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ca4d387a-ddbb-5c15-beea-1c99dcc92d81")}catch(e){}}();

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
exports.ConcernService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const client_1 = require("@prisma/client");
let ConcernService = class ConcernService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllOld(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.search) {
            filter.name = { contains: pageOptionsDto.search };
        }
        if (pageOptionsDto.segment) {
            filter.segment = {
                in: pageOptionsDto.segment,
            };
        }
        const data = await this.prisma.concern.findMany({
            where: {
                ...filter,
            },
            include: {
                media_concern: {
                    include: {
                        media: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.concern.count({
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
    async findAll(pageOptionsDto) {
        let whereQuery = 'deleted_at IS NULL';
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND (LOWER(name) LIKE LOWER('%${pageOptionsDto.search}%'))`;
        }
        const query = `
      SELECT 
        * 
      FROM 
        concern 
      WHERE 
        ${whereQuery}
      ORDER BY
        CASE
          WHEN segment = 'Korektif Wajah' THEN 1
          WHEN segment = 'Korektif Tubuh' THEN 2
          WHEN segment = 'Augmentation Wajah & Tubuh' THEN 3
          WHEN segment = 'Penyakit Menular Seksual' THEN 4
          when segment = 'Masalah Kulit Lainnya' then 5
          ELSE 6
        END ASC,
        name ASC
    `;
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          ${query}
          LIMIT ${pageOptionsDto.take}
          OFFSET ${pageOptionsDto.skip}
        `));
        });
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT COUNT(*) FROM (
            ${query}
          ) COUNT
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async find(id) {
        return await this.prisma.concern.findUnique({
            where: {
                id,
            },
            include: {
                media_concern: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
};
ConcernService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConcernService);
exports.ConcernService = ConcernService;
//# sourceMappingURL=concern.service.js.map
//# debugId=ca4d387a-ddbb-5c15-beea-1c99dcc92d81
