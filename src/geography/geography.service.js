"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b7625050-b909-50a5-87b2-a325d8bc3af9")}catch(e){}}();

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
exports.GeographyService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let GeographyService = class GeographyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllProvince(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        const result = await this.prisma.provinces.findMany({
            where: {
                ...filter,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
            orderBy: {
                name: pageOptionsDto.order,
            },
        });
        const countAll = await this.prisma.provinces.count({
            where: {
                deleted_at: null,
                ...filter,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(result, pageMetaDto);
    }
    async findAllKotaKabupaten(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        if (pageOptionsDto.province_id) {
            filter.provinces_id = pageOptionsDto.province_id;
        }
        if (pageOptionsDto.province_ids) {
            filter.provinces_id = {
                in: pageOptionsDto.province_ids,
            };
        }
        const result = await this.prisma.kota_kabupatens.findMany({
            where: {
                ...filter,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
            orderBy: {
                name: pageOptionsDto.order,
            },
        });
        const countAll = await this.prisma.kota_kabupatens.count({
            where: {
                deleted_at: null,
                ...filter,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(result, pageMetaDto);
    }
    getProvince() {
        return this.prisma.sicepat_destination.findMany({
            distinct: 'province',
            orderBy: {
                province: 'asc',
            },
        });
    }
    getCity(getCityDto) {
        return this.prisma.sicepat_destination.findMany({
            where: {
                province: getCityDto.province,
            },
            distinct: 'city',
            orderBy: {
                city: 'asc',
            },
        });
    }
    getSubdistrict(getSubdistrictDto) {
        return this.prisma.sicepat_destination.findMany({
            where: {
                province: getSubdistrictDto.province,
                city: getSubdistrictDto.city,
            },
            distinct: 'subdistrict',
            orderBy: {
                subdistrict: 'asc',
            },
        });
    }
    getZipCode(getZipCodeDto) {
        return this.prisma.sicepat_destination.findMany({
            where: {
                province: getZipCodeDto.province,
                city: getZipCodeDto.city,
                subdistrict: getZipCodeDto.subdistrict,
            },
            orderBy: {
                village: 'asc',
            },
        });
    }
};
GeographyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GeographyService);
exports.GeographyService = GeographyService;
//# sourceMappingURL=geography.service.js.map
//# debugId=b7625050-b909-50a5-87b2-a325d8bc3af9
