"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1d68501d-71d2-547d-b2c3-4d648dd6858c")}catch(e){}}();

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
exports.InterestBodyCorrectiveSkinGoalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InterestBodyCorrectiveSkinGoalsService = class InterestBodyCorrectiveSkinGoalsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInterestBodyCorrectiveSkinGoalsDto) {
        await this.prisma.interest_body_corrective_skin_goals.deleteMany({
            where: {
                userId: createInterestBodyCorrectiveSkinGoalsDto.userId,
            },
        });
        if (createInterestBodyCorrectiveSkinGoalsDto.lists.length > 0) {
            createInterestBodyCorrectiveSkinGoalsDto.lists.map(async (value) => {
                await this.prisma.interest_body_corrective_skin_goals.create({
                    data: {
                        userId: createInterestBodyCorrectiveSkinGoalsDto.userId,
                        name_body_corrective: value.name_body_corrective,
                        status: createInterestBodyCorrectiveSkinGoalsDto.status,
                    },
                });
            });
        }
    }
    findAll() {
        return this.prisma.interest_face_corrective_skin_goals.findMany({
            include: {
                user_id: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.interest_face_corrective_skin_goals.findUnique({
            where: { id },
            include: {
                user_id: true,
            },
        });
    }
    update(id, updateInterestBodyCorrectiveSkinGoalsDto) {
        return this.prisma.interest_face_corrective_skin_goals.update({
            where: { id },
            data: updateInterestBodyCorrectiveSkinGoalsDto,
        });
    }
    remove(id) {
        return this.prisma.interest_face_corrective_skin_goals.delete({
            where: { id },
        });
    }
    findAllBy(where) {
        return this.prisma.interest_body_corrective_skin_goals.findMany({
            where,
        });
    }
};
InterestBodyCorrectiveSkinGoalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InterestBodyCorrectiveSkinGoalsService);
exports.InterestBodyCorrectiveSkinGoalsService = InterestBodyCorrectiveSkinGoalsService;
//# sourceMappingURL=interest_body_corrective_skin_goals.service.js.map
//# debugId=1d68501d-71d2-547d-b2c3-4d648dd6858c
