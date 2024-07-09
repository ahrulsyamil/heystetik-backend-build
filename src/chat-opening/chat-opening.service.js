"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bcb41816-c54e-5c43-80eb-3971fbb97aaf")}catch(e){}}();

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
exports.ChatOpeningService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ChatOpeningService = class ChatOpeningService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(doctor_id, createChatOpeningDto) {
        const { message, is_active } = createChatOpeningDto;
        return this.prisma.chat_opening.upsert({
            where: {
                doctor_id,
            },
            update: {
                message,
                is_active,
            },
            create: {
                doctor_id,
                message,
                is_active,
            },
        });
    }
    async findOne(doctor_id) {
        const chatOpening = await this.prisma.chat_opening.findUnique({
            where: { doctor_id },
        });
        return chatOpening;
    }
};
ChatOpeningService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatOpeningService);
exports.ChatOpeningService = ChatOpeningService;
//# sourceMappingURL=chat-opening.service.js.map
//# debugId=bcb41816-c54e-5c43-80eb-3971fbb97aaf
