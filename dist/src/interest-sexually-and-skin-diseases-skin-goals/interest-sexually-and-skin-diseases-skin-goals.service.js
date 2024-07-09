"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="75c5065c-2b54-5232-a8da-8b1c8b2a2463")}catch(e){}}();

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
exports.InterestSexuallyAndSkinDiseasesSkinGoalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InterestSexuallyAndSkinDiseasesSkinGoalsService = class InterestSexuallyAndSkinDiseasesSkinGoalsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        await this.prisma.interest_sexually_and_skin_diseases_skin_goals.deleteMany({
            where: {
                userId: data.userId,
            },
        });
        if (data.lists.length > 0) {
            data.lists.map(async (value) => {
                await this.prisma.interest_sexually_and_skin_diseases_skin_goals.create({
                    data: {
                        userId: data.userId,
                        name: value.name,
                    },
                });
            });
        }
    }
    findAllBy(where) {
        return this.prisma.interest_sexually_and_skin_diseases_skin_goals.findMany({
            where,
        });
    }
};
InterestSexuallyAndSkinDiseasesSkinGoalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InterestSexuallyAndSkinDiseasesSkinGoalsService);
exports.InterestSexuallyAndSkinDiseasesSkinGoalsService = InterestSexuallyAndSkinDiseasesSkinGoalsService;
//# sourceMappingURL=interest-sexually-and-skin-diseases-skin-goals.service.js.map
//# debugId=75c5065c-2b54-5232-a8da-8b1c8b2a2463
