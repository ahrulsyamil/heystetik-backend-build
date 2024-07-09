"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="84085d77-1f19-5e6b-9cac-da903017e718")}catch(e){}}();

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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationService = class NotificationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptionsDto) {
        const filter = {
            recipient_id: pageOptionsDto.recipient_id,
        };
        const data = await this.prisma.notification.findMany({
            where: {
                ...filter,
            },
            include: {
                media_notification: {
                    include: {
                        media: true,
                    },
                },
                sender: true,
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.notification.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async create(data, media) {
        return await this.prisma.notification.create({
            data: {
                ...data,
                media_notification: {
                    create: media,
                },
            },
        });
    }
    async find(id) {
        return this.prisma.notification.findUnique({
            where: {
                id,
            },
        });
    }
    async update(id, data) {
        return this.prisma.notification.update({
            where: {
                id,
            },
            data,
        });
    }
    async updateMany(where, data) {
        return this.prisma.notification.updateMany({
            where,
            data,
        });
    }
    async findAllNotificationSetting(user_id) {
        return this.prisma.notification_setting.findMany({
            where: {
                user_id,
            },
        });
    }
    async findAllNotificationSettingBy(where) {
        return this.prisma.notification_setting.findMany({
            where,
            include: {
                user: true,
            },
        });
    }
    async storeNotificationSetting(data) {
        return this.prisma.notification_setting.upsert({
            where: {
                user_id_type: {
                    user_id: data.user_id,
                    type: data.type,
                },
            },
            create: data,
            update: data,
        });
    }
    async findAllNotificationUserActivity(user_id, follower_id) {
        return this.prisma.notification_user_activity.findMany({
            where: {
                user_id,
                follower_id,
            },
        });
    }
    async findAllNotificationUserActivityBy(where) {
        return this.prisma.notification_user_activity.findMany({
            where,
        });
    }
    async storeNotificationUserActivity(data) {
        return this.prisma.notification_user_activity.upsert({
            where: {
                user_id_follower_id_type: {
                    user_id: data.user_id,
                    follower_id: data.follower_id,
                    type: data.type,
                },
            },
            create: data,
            update: data,
        });
    }
    async unreadCount(userId) {
        return this.prisma.notification.count({
            where: {
                recipient_id: userId,
                is_read: false,
            },
        });
    }
};
NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map
//# debugId=84085d77-1f19-5e6b-9cac-da903017e718
