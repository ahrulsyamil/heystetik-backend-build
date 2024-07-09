"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f06c0ed2-1249-5c0b-b7de-17561a37dcdb")}catch(e){}}();

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
exports.InterestHistoryTreatmentSkinGoalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InterestHistoryTreatmentSkinGoalsService = class InterestHistoryTreatmentSkinGoalsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInterestHistoryTreatmentSkinGoalsDto) {
        await this.prisma.interest_history_treatment_skin_goals.deleteMany({
            where: {
                userId: createInterestHistoryTreatmentSkinGoalsDto.userId,
            },
        });
        if (createInterestHistoryTreatmentSkinGoalsDto.lists.length > 0) {
            createInterestHistoryTreatmentSkinGoalsDto.lists?.map(async (value) => {
                await this.prisma.interest_history_treatment_skin_goals.create({
                    data: {
                        userId: createInterestHistoryTreatmentSkinGoalsDto.userId,
                        name_history_treatment: value.name_history_treatment,
                        status: createInterestHistoryTreatmentSkinGoalsDto.status,
                    },
                });
            });
        }
    }
    findAll() {
        return this.prisma.interest_history_treatment_skin_goals.findMany({
            include: {
                user_id: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.interest_history_treatment_skin_goals.findUnique({
            where: { id },
            include: {
                user_id: true,
            },
        });
    }
    update(id, updateInterestHistoryTreatmentSkinGoalsDto) {
        return this.prisma.interest_history_treatment_skin_goals.update({
            where: { id },
            data: updateInterestHistoryTreatmentSkinGoalsDto,
        });
    }
    remove(id) {
        return this.prisma.interest_history_treatment_skin_goals.delete({
            where: { id },
        });
    }
    findAllBy(where) {
        return this.prisma.interest_history_treatment_skin_goals.findMany({
            where,
        });
    }
};
InterestHistoryTreatmentSkinGoalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InterestHistoryTreatmentSkinGoalsService);
exports.InterestHistoryTreatmentSkinGoalsService = InterestHistoryTreatmentSkinGoalsService;
//# sourceMappingURL=interest_history_treatment_skin_goals.service.js.map
//# debugId=f06c0ed2-1249-5c0b-b7de-17561a37dcdb
