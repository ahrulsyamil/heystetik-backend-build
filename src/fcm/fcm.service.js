"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ef3ad823-d7b7-5bee-85af-1695fd230791")}catch(e){}}();

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
exports.FcmService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const prisma_service_1 = require("../prisma/prisma.service");
const serviceAccount = require("./heystetik-fae95-firebase-adminsdk-h6i5l-4b1851f90e.json");
const enum_1 = require("../globals/constant/enum");
const array_1 = require("../globals/helpers/array");
admin.initializeApp({
    credential: admin.credential.cert({
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
        projectId: serviceAccount.project_id,
    }),
});
let FcmService = class FcmService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async save(data) {
        return await this.prisma.user_notification_setting.upsert({
            where: {
                user_id: data.user_id,
            },
            create: data,
            update: data,
        });
    }
    async find(user_id) {
        return await this.prisma.user_notification_setting.findUnique({
            where: {
                user_id,
            },
        });
    }
    async verifyToken(token) {
        try {
            await admin.auth().verifyIdToken(token, true);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async sendNotificationToUser(data) {
        await admin.messaging().send({
            notification: { title: data.title, body: data.body },
            token: data.token,
            android: {
                priority: enum_1.PriorityStatus[data.priority],
            },
        });
    }
    async sendNotificationToTopic(data) {
        await admin.messaging().send({
            notification: {
                title: data.title,
                body: data.body,
                imageUrl: data.img_url,
            },
            topic: data.topic.toString(),
            android: {
                priority: enum_1.PriorityStatus[data.priority],
                data: (0, array_1.convertObjectToString)(data.data),
                notification: {
                    title: data.title,
                    body: data.body,
                    imageUrl: data.img_url,
                },
            },
        });
    }
    async subscribeToTopic(token, topic) {
        try {
            await admin.messaging().subscribeToTopic(token, topic);
        }
        catch (error) {
            throw new Error('Unable to subscribe to topic.');
        }
    }
    async unsubscribeFromTopic(token, topic) {
        try {
            await admin.messaging().unsubscribeFromTopic(token, topic);
        }
        catch (error) {
            throw new Error('Unable to unsubscribe from topic.');
        }
    }
    async cleanupInvalidTokens() {
        const users = await this.prisma.user_notification_setting.findMany();
        for (const user of users) {
            if (user.token && !(await this.verifyToken(user.token))) {
                await this.prisma.user_notification_setting.update({
                    where: { id: user.id },
                    data: { token: null, is_active: false },
                });
            }
        }
    }
};
FcmService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FcmService);
exports.FcmService = FcmService;
//# sourceMappingURL=fcm.service.js.map
//# debugId=ef3ad823-d7b7-5bee-85af-1695fd230791
