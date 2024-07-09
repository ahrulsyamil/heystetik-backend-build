"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="40385c48-bb9d-5bcd-ab0a-41c14c847f2e")}catch(e){}}();

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
exports.InterestFaceCorrectiveSkinGoalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InterestFaceCorrectiveSkinGoalsService = class InterestFaceCorrectiveSkinGoalsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInterestFaceCorrectiveSkinGoalsDto) {
        await this.prisma.interest_face_corrective_skin_goals.deleteMany({
            where: {
                userId: createInterestFaceCorrectiveSkinGoalsDto.userId,
            },
        });
        if (createInterestFaceCorrectiveSkinGoalsDto.lists.length > 0) {
            createInterestFaceCorrectiveSkinGoalsDto.lists?.map(async (value) => {
                await this.prisma.interest_face_corrective_skin_goals.create({
                    data: {
                        userId: createInterestFaceCorrectiveSkinGoalsDto.userId,
                        name_face_corrective: value.name_face_corrective,
                        status: createInterestFaceCorrectiveSkinGoalsDto.status,
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
    update(id, updateInterestFaceCorrectiveSkinGoalsDto) {
        return this.prisma.interest_face_corrective_skin_goals.update({
            where: { id },
            data: updateInterestFaceCorrectiveSkinGoalsDto,
        });
    }
    remove(id) {
        return this.prisma.interest_face_corrective_skin_goals.delete({
            where: { id },
        });
    }
    findAllBy(where) {
        return this.prisma.interest_face_corrective_skin_goals.findMany({
            where,
        });
    }
};
InterestFaceCorrectiveSkinGoalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InterestFaceCorrectiveSkinGoalsService);
exports.InterestFaceCorrectiveSkinGoalsService = InterestFaceCorrectiveSkinGoalsService;
//# sourceMappingURL=interest_face_corrective_skin_goals.service.js.map
//# debugId=40385c48-bb9d-5bcd-ab0a-41c14c847f2e
