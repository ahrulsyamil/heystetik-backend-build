"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="17579f29-f6ab-56f8-b83c-62b3faf6b799")}catch(e){}}();

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
exports.PharmacyService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let PharmacyService = class PharmacyService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    psefPharmacy() {
        return this.prismaService.pharmacy.findMany({
            include: {
                pharmacists: {
                    take: 1,
                    where: {
                        is_default: true,
                    },
                },
                pharmacy_operation_hours: true,
            },
        });
    }
    async findAll(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    city: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    telp: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        const data = await this.prismaService.pharmacy.findMany({
            where: {
                ...filter,
            },
            include: {
                media_pharmacy_npwp: {
                    include: {
                        media: true,
                    },
                },
                pharmacy_operation_hours: true,
                pharmacists: true,
            },
            orderBy: [
                {
                    updated_at: pageOptionsDto.order,
                },
                {
                    id: pageOptionsDto.order,
                },
            ],
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prismaService.pharmacy.count({
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
    async create(data) {
        return this.prismaService.pharmacy.create({
            data,
        });
    }
    async update(id, data) {
        return this.prismaService.pharmacy.update({
            where: {
                id,
            },
            data,
        });
    }
    async find(id) {
        return this.prismaService.pharmacy.findUnique({
            where: {
                id,
            },
            include: {
                media_pharmacy_npwp: {
                    include: {
                        media: true,
                    },
                },
                pharmacy_operation_hours: true,
                pharmacists: true,
            },
        });
    }
    async delete(id) {
        return await this.prismaService.pharmacy.delete({
            where: {
                id,
            },
        });
    }
    async findAllPharmacist(pharmacy_id, pageOptionsDto) {
        const filter = {};
        filter.pharmacy_id = pharmacy_id;
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    sipa_no: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    phone: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        const data = await this.prismaService.pharmacist.findMany({
            where: {
                ...filter,
            },
            include: {
                pharmacist_schedule: true,
            },
            orderBy: [
                {
                    is_default: 'desc',
                },
                {
                    updated_at: pageOptionsDto.order,
                },
            ],
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prismaService.pharmacist.count({
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
    async findPharmacist(id) {
        return this.prismaService.pharmacist.findUnique({
            where: {
                id,
            },
        });
    }
    async createPharmacist(data) {
        return this.prismaService.pharmacist.create({
            data: {
                pharmacy_id: data.pharmacy_id,
                name: data.name,
                sipa_no: data.sipa_no,
                phone: data.phone,
                pharmacist_schedule: {
                    create: data.schedules,
                },
            },
        });
    }
    async updatePharmacist(id, data) {
        const deleteSchedules = data.schedules && data.schedules.length > 0
            ? { deleteMany: { pharmacist_id: id } }
            : {};
        return this.prismaService.pharmacist.update({
            where: {
                id,
            },
            data: {
                pharmacy_id: data.pharmacy_id,
                name: data.name,
                sipa_no: data.sipa_no,
                phone: data.phone,
                pharmacist_schedule: {
                    ...deleteSchedules,
                    create: data.schedules,
                },
            },
        });
    }
    async deletePharmacist(id) {
        return this.prismaService.pharmacist.delete({
            where: {
                id,
            },
        });
    }
};
PharmacyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PharmacyService);
exports.PharmacyService = PharmacyService;
//# sourceMappingURL=pharmacy.service.js.map
//# debugId=17579f29-f6ab-56f8-b83c-62b3faf6b799
