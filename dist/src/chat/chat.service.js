"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5dc8776b-11ab-5c83-b316-5aba8ede7eaf")}catch(e){}}();

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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const auth_service_1 = require("../auth/auth.service");
const user_service_1 = require("../auth/user/user.service");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const string_1 = require("../globals/helpers/string");
const prisma_service_1 = require("../prisma/prisma.service");
const client_type_1 = require("./types/client.type");
let ChatService = class ChatService {
    constructor(prisma, authService, userService) {
        this.prisma = prisma;
        this.authService = authService;
        this.userService = userService;
        this.connectedClients = [];
    }
    async getUserFromSocket(socket) {
        let token = socket.handshake.headers.authorization;
        if (!token) {
            return {
                success: false,
                message: 'Not authorized, no token',
            };
        }
        if (!token.startsWith('Bearer')) {
            return {
                success: false,
                message: 'Not authorized, invalid token type',
            };
        }
        token = token.split(' ')[1];
        const validToken = this.authService.validateToken(token);
        if (!validToken) {
            return {
                success: false,
                message: 'Not authorized, invalid token',
            };
        }
        const user = await this.userService.findById(validToken.sub);
        if (!user) {
            return {
                success: false,
                message: 'User not found',
            };
        }
        return {
            success: true,
            data: user,
        };
    }
    addClient(client) {
        this.connectedClients.push(client);
    }
    removeClient(id) {
        this.connectedClients = this.connectedClients.filter((client) => {
            return client.id != id;
        });
    }
    getClient(id) {
        return this.connectedClients.find((x) => x.id == id);
    }
    getClientByUserId(user_id) {
        return this.connectedClients.find((x) => x.user_id == user_id);
    }
    replaceClientByUserId(user_id, client) {
        this.connectedClients = this.connectedClients.filter((x) => {
            return x.user_id != user_id;
        });
        this.addClient(client);
    }
    getOnlineClients() {
        return this.connectedClients;
    }
    defineUserRole(roleId) {
        let userRole = client_type_1.ERole.Superadmin;
        switch (roleId) {
            case 2:
                userRole = client_type_1.ERole.Doctor;
                break;
            case 3:
                userRole = client_type_1.ERole.Customer;
                break;
            default:
                userRole = client_type_1.ERole.Superadmin;
                break;
        }
        return userRole;
    }
    async findRoom(code) {
        const room = await this.prisma.chat_room.findFirst({
            where: {
                code,
            },
            include: {
                customer: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                doctor: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                consultation: {
                    include: {
                        transaction_consultation: true,
                    },
                },
                chat: {
                    orderBy: {
                        created_at: 'desc',
                    },
                    include: {
                        media_chat_messages: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
            },
        });
        return room;
    }
    async createRoom(payload) {
        return await this.prisma.chat_room.create({
            data: {
                doctor_id: payload.doctor_id,
                customer_id: payload.customer_id,
                code: payload.code || (0, string_1.randomString)(9),
                ended: false,
            },
        });
    }
    async createMessage(payload, mediaChatMessage) {
        return await this.prisma.chat_message.create({
            data: {
                chat_room_id: payload.chat_room_id,
                sender_id: payload.sender_id,
                receiver_id: payload.receiver_id,
                message: payload.message,
                seen: payload.seen,
                media_chat_messages: {
                    create: mediaChatMessage,
                },
            },
            include: {
                sender: {
                    select: {
                        fullname: true,
                    },
                },
                receiver: {
                    select: {
                        fullname: true,
                    },
                },
                media_chat_messages: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async fetchChatMessageByRoom(pageOptionsDto, code) {
        const filter = {
            chat_room: {
                code: code,
            },
        };
        if (pageOptionsDto.search) {
            filter.message = {
                contains: pageOptionsDto.search,
                mode: 'insensitive',
            };
        }
        if (pageOptionsDto.from_date) {
            filter.created_at = {
                lt: new Date(pageOptionsDto.from_date),
            };
        }
        const data = await this.prisma.chat_message.findMany({
            where: filter,
            include: {
                sender: {
                    select: {
                        fullname: true,
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                receiver: {
                    select: {
                        fullname: true,
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                media_chat_messages: {
                    include: {
                        media: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.chat_message.count({
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
    async fetchRecentChat(user_id) {
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
            SELECT 
              * 
            FROM (
              SELECT DISTINCT ON (cr.id)
                cr.*,
                cm.created_at AS last_message_date
              FROM 
                chat_room cr
              INNER JOIN 
                chat_message cm 
                ON cm.chat_room_id = cr.id
              WHERE
                (cr.customer_id = ${user_id} OR cr.doctor_id = ${user_id})
              ORDER BY cr.id, cm.created_at DESC
            ) result
            ORDER BY 
              result.last_message_date DESC
        `));
        });
        return await Promise.all(data.map(async (item) => {
            return await this.findRoom(item.code).then((data) => {
                const temp = {
                    ...data,
                    last_chat: data.chat[0] ?? null,
                    unseen_count: data.chat.filter((x) => !x.seen && x.receiver_id == user_id).length,
                };
                delete temp.chat;
                return temp;
            });
        }));
    }
    async fetchRecentChatOld(user_id) {
        return await this.prisma.chat_room
            .findMany({
            where: {
                OR: [{ customer_id: user_id }, { doctor_id: user_id }],
            },
            include: {
                doctor: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                customer: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                chat: {
                    orderBy: {
                        created_at: 'desc',
                    },
                    include: {
                        media_chat_messages: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                consultation: {
                    select: {
                        id: true,
                    },
                },
            },
        })
            .then((data) => {
            const response = data.map((item) => {
                const temp = {
                    ...item,
                    last_chat: item.chat[0] ?? null,
                    unseen_count: item.chat.filter((x) => !x.seen && x.receiver_id == user_id).length,
                };
                delete temp.chat;
                return temp;
            });
            return response;
        });
    }
    async searchRecentChat(pageOptionsDto) {
        const filter = {
            AND: [
                {
                    OR: [
                        { customer_id: pageOptionsDto.user_id },
                        { doctor_id: pageOptionsDto.user_id },
                    ],
                },
                pageOptionsDto.search
                    ? {
                        OR: [
                            {
                                doctor: {
                                    fullname: {
                                        contains: pageOptionsDto.search,
                                        mode: 'insensitive',
                                    },
                                },
                            },
                            {
                                customer: {
                                    fullname: {
                                        contains: pageOptionsDto.search,
                                        mode: 'insensitive',
                                    },
                                },
                            },
                            {
                                chat: {
                                    some: {
                                        message: {
                                            contains: pageOptionsDto.search,
                                            mode: 'insensitive',
                                        },
                                    },
                                },
                            },
                        ],
                    }
                    : {},
            ],
        };
        const data = await this.prisma.chat_room.findMany({
            where: {
                ...filter,
            },
            include: {
                doctor: true,
                customer: true,
                chat: {
                    where: {
                        message: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                    include: {
                        media_chat_messages: {
                            include: {
                                media: true,
                            },
                        },
                    },
                    take: 1,
                },
                consultation: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        const countAll = await this.prisma.chat_room.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data.map((item) => ({
            ...item,
            chat: item.chat[0] ?? null,
        })), pageMetaDto);
    }
    async getActiveRoomByUser(user_id) {
        return await this.prisma.chat_room.findMany({
            where: {
                OR: [{ customer_id: user_id }, { doctor_id: user_id }],
                ended: false,
            },
        });
    }
    async findRecentChatByRoom(user_id, code) {
        return await this.prisma.chat_room
            .findFirst({
            where: {
                code,
            },
            include: {
                doctor: true,
                customer: true,
                chat: {
                    orderBy: {
                        created_at: 'desc',
                    },
                },
            },
        })
            .then((data) => {
            const response = {
                ...data,
                last_chat: data.chat[0],
                unseen_count: data.chat.filter((x) => !x.seen && x.receiver_id == user_id).length,
            };
            delete response.chat;
            return response;
        });
    }
    async readChatMessageRoom(user_id, code) {
        return await this.prisma.chat_message.updateMany({
            where: {
                chat_room: {
                    code,
                },
                receiver_id: user_id,
            },
            data: {
                seen: true,
            },
        });
    }
    async createChatRoom(data) {
        return this.prisma.chat_room.create({
            data: {
                ...data,
                chat: {
                    create: [
                        {
                            sender_id: 0,
                            receiver_id: data.customer_id,
                            message: 'Selamat datang di chatroom konsultasi Heystetik.\n\nMohon tunggu sebentar ya, kak. Dokter sedang membaca dan memahami pre-assessment-mu dulu :)\n\nJangan khawatir, kami akan mengirimkan notifikasi setiap ada pesan baru dari dokter. Terima kasih sudah bersabar :)',
                        },
                    ],
                },
            },
        });
    }
};
ChatService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        auth_service_1.AuthService,
        user_service_1.UserService])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map
//# debugId=5dc8776b-11ab-5c83-b316-5aba8ede7eaf
