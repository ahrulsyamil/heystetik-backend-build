"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="023bd403-66ed-56ee-a2b4-70a4b363d4bc")}catch(e){}}();

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
exports.UserAddressService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserAddressService = class UserAddressService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user_id) {
        return await this.prisma.user_address.findMany({
            where: {
                user_id,
            },
            orderBy: [
                {
                    main_address: 'desc',
                },
                {
                    id: 'desc',
                },
            ],
        });
    }
    async find(id) {
        return await this.prisma.user_address.findFirst({
            where: {
                id,
            },
        });
    }
    async create(data) {
        return await this.prisma.user_address.create({
            data,
        });
    }
    async updateMainAddress(user_id, data) {
        return await this.prisma.user_address.updateMany({
            where: {
                user_id,
                main_address: true,
            },
            data,
        });
    }
    async update(id, data) {
        return await this.prisma.user_address.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        return await this.prisma.user_address.delete({
            where: {
                id,
            },
        });
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
    getDestination(getDestionationDto) {
        return this.prisma.sicepat_destination.findFirst({
            where: getDestionationDto,
        });
    }
};
UserAddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserAddressService);
exports.UserAddressService = UserAddressService;
//# sourceMappingURL=user-address.service.js.map
//# debugId=023bd403-66ed-56ee-a2b4-70a4b363d4bc
