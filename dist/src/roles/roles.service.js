"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6f4326e4-19ae-559e-8aab-24793f362956")}catch(e){}}();

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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let RolesService = class RolesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        return this.prismaService.roles.create({
            data,
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
                    code: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        if (pageOptionsDto.back_office_role) {
            filter.id = {
                notIn: [2, 3],
            };
        }
        const result = await this.prismaService.roles.findMany({
            where: {
                ...filter,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
            orderBy: [
                {
                    updated_at: pageOptionsDto.order,
                },
                {
                    id: 'desc',
                },
            ],
        });
        const countAll = await this.prismaService.roles.count({
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
    async findOne(id) {
        return this.prismaService.roles.findUnique({
            where: { id },
            include: {
                menu_roles: {
                    include: {
                        menu: true,
                    },
                },
            },
        });
    }
    async findRoleWithMenuAction(id) {
        return this.prismaService.roles.findUnique({
            where: { id },
            include: {
                menu_roles: {
                    include: {
                        menu: {
                            include: {
                                childrens: true,
                                menu_actions: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findBy(where) {
        return this.prismaService.roles.findFirst({
            where,
        });
    }
    async update(id, data) {
        return this.prismaService.roles.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        return this.prismaService.roles.delete({ where: { id } });
    }
    async findAllMenu(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.select_group) {
            filter.path = null;
        }
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
        const result = await this.prismaService.menu.findMany({
            where: {
                ...filter,
            },
            include: {
                parent: true,
                childrens: {
                    orderBy: {
                        name: 'asc',
                    },
                },
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
            orderBy: {
                name: 'asc',
            },
        });
        const countAll = await this.prismaService.menu.count({
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
    async findAllMenuBy(where) {
        return this.prismaService.menu.findMany({
            where,
        });
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map
//# debugId=6f4326e4-19ae-559e-8aab-24793f362956
