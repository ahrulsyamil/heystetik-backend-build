"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e4862ffa-aa79-5a90-91a4-4ab1eb8e5737")}catch(e){}}();

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
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../src/prisma/prisma.service");
const path = require("path");
let MediaService = class MediaService {
    constructor(prisma) {
        this.prisma = prisma;
        this.insertMediaData = async (files) => {
            const medias = [];
            await Promise.all(files.map(async (file) => {
                const media = await this.createMedia({
                    filename: file.filename,
                    ext: path.extname(file.filename),
                    mime: file.mimetype,
                    destination: file.path.replaceAll('\\', '/'),
                    path: file.path.replaceAll('\\', '/').replace('uploads/', ''),
                    size: file.size,
                });
                medias.push({
                    media_id: media.id,
                });
            }));
            return medias;
        };
    }
    async createMedia(createMediaDto) {
        return await this.prisma.media.create({
            data: createMediaDto,
        });
    }
    async createManyMedia(createMediaDto) {
        return await this.prisma.media.createMany({
            data: createMediaDto,
        });
    }
    async findMediaById(id) {
        const media = await this.prisma.media.findUnique({ where: { id } });
        if (!media) {
            throw new common_1.BadRequestException('Media not found');
        }
        return media;
    }
    async createMediaChatMessage(createMediaChatMessageDto) {
        return this.prisma.media_chat_message.create({
            data: {
                media_id: createMediaChatMessageDto.media_id,
                chat_message_id: createMediaChatMessageDto.chat_message_id,
            },
        });
    }
    async deleteMediaMyJourney(where) {
        return this.prisma.media_my_journey.deleteMany({
            where,
        });
    }
    async createMediaMyJourney(data) {
        return this.prisma.media_my_journey.create({
            data,
        });
    }
};
MediaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MediaService);
exports.MediaService = MediaService;
//# sourceMappingURL=media.service.js.map
//# debugId=e4862ffa-aa79-5a90-91a4-4ab1eb8e5737
