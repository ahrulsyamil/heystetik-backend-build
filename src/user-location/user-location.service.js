"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="18690359-e05e-5dd7-b374-8e836c5cf52d")}catch(e){}}();

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
exports.UserLocationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserLocationService = class UserLocationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async find(user_id) {
        return await this.prisma.user_location.findUnique({
            where: {
                user_id,
            },
        });
    }
    async createOrUpdate(data) {
        return await this.prisma.user_location.upsert({
            where: {
                user_id: data.user_id,
            },
            create: data,
            update: data,
        });
    }
};
UserLocationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserLocationService);
exports.UserLocationService = UserLocationService;
//# sourceMappingURL=user-location.service.js.map
//# debugId=18690359-e05e-5dd7-b374-8e836c5cf52d
