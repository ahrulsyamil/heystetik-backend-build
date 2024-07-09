"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0f4e7a47-8231-5a03-b17c-b008df65b44b")}catch(e){}}();

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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const isBetween = require("dayjs/plugin/isBetween");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
dayjs.extend(isBetween);
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptionsDto) {
        const filter = {};
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    fullname: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    username: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    department: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    email: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    no_phone: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    role: {
                        name: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                },
            ];
        }
        const result = await this.prisma.users.findMany({
            where: {
                ...filter,
                id: {
                    not: 0,
                },
                roleId: {
                    notIn: [2, 3],
                },
            },
            select: {
                id: true,
                username: true,
                fullname: true,
                email: true,
                department: true,
                no_phone: true,
                is_active: true,
                role: true,
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
        const countAll = await this.prisma.users.count({
            where: {
                deleted_at: null,
                id: {
                    not: 0,
                },
                roleId: {
                    notIn: [2, 3],
                },
                ...filter,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(result, pageMetaDto);
    }
    async create(createUserDto) {
        return this.prisma.users.create({
            data: {
                ...createUserDto,
                is_active: createUserDto.is_active,
            },
            include: {
                role: true,
            },
        });
    }
    async findOne(id) {
        return this.prisma.users.findUnique({
            where: { id },
            include: {
                role: true,
                province: true,
                city: true,
                doctor_schedules: true,
            },
        });
    }
    async findBy(where) {
        return this.prisma.users.findFirst({
            where,
        });
    }
    async findByEmail(email) {
        return this.prisma.users.findFirst({
            where: {
                email,
            },
            include: {
                role: true,
            },
        });
    }
    async updateDoctorRating(id, rating) {
        return this.prisma.users.update({
            where: {
                id,
            },
            data: {
                rating,
            },
        });
    }
    async updateUser(id, data) {
        return this.prisma.users.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        return this.prisma.users.delete({
            where: {
                id,
            },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
//# debugId=0f4e7a47-8231-5a03-b17c-b008df65b44b
