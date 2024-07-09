"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4d6ab8c3-8146-541f-9d05-afc2698b7a60")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketGateway = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const websockets_1 = require("@nestjs/websockets");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const socket_io_1 = require("socket.io");
const media_1 = require("../globals/helpers/media");
const media_2 = require("../globals/constant/media");
const media_service_1 = require("../media/media.service");
const class_validator_error_transformer_1 = require("../globals/transformer/class-validator-error.transformer");
const chat_service_1 = require("../chat/chat.service");
const join_room_dto_1 = require("../chat/dto/join-room.dto");
const leave_room_dto_1 = require("../chat/dto/leave-room.dto");
const send_message_dto_1 = require("../chat/dto/send-message.dto");
const typing_dto_1 = require("../chat/dto/typing.dto");
const read_message_dto_1 = require("../chat/dto/read-message.dto");
const socket_service_1 = require("./socket.service");
const bull_1 = require("@nestjs/bull");
const notification_service_1 = require("../notification/notification.service");
let SocketGateway = class SocketGateway {
    constructor(socketService, chatService, mediaService, queueFcm, notificationService) {
        this.socketService = socketService;
        this.chatService = chatService;
        this.mediaService = mediaService;
        this.queueFcm = queueFcm;
        this.notificationService = notificationService;
        this.logger = new common_1.Logger('SocketGateway');
    }
    async afterInit() {
        this.logger.log('Initialized SocketGateway......');
    }
    async handleConnection(socket) {
        const user = await this.chatService.getUserFromSocket(socket);
        if (!user.success) {
            this.loggingClient(socket.id, {
                success: false,
                message: user.message,
                data: {
                    client_id: socket.id,
                },
            });
            return;
        }
        const targetDisconnect = await this.socketService.getClientByUserId(user.data.id);
        if (targetDisconnect) {
            this.server.to(targetDisconnect.id).disconnectSockets();
        }
        await this.socketService.replaceClientByUserId(user.data.id, {
            id: socket.id,
            user_id: user.data.id,
            user_fullname: user.data.fullname,
            role: this.chatService.defineUserRole(user.data.roleId),
        });
        this.broadcastOnlineClients();
        if (targetDisconnect) {
            this.loggingClient(socket.id, {
                success: true,
                message: "You're connected by disconnecting other active sessions",
                data: {
                    client_id: socket.id,
                    disconnected_client_id: targetDisconnect.id,
                },
            });
        }
        else {
            this.loggingClient(socket.id, {
                success: true,
                message: "You're connected",
                data: {
                    client_id: socket.id,
                },
            });
        }
        this.logger.log(`Client connected: ${socket.id}`);
    }
    async handleDisconnect(socket) {
        await this.socketService.removeClient(socket.id);
        this.broadcastOnlineClients();
        this.logger.log(`Client disconnected: ${socket.id}`);
    }
    async broadcastOnlineClients() {
        const onlineClients = await this.socketService.getOnlineClients();
        this.server.emit('onlineClients', onlineClients);
    }
    loggingClient(clientId, response) {
        this.server.to(clientId).emit('log', response);
    }
    async recentChat(clientId, response) {
        this.server.to(clientId).emit('recentChat', response);
    }
    async validateDto(socket, dto, payload, event) {
        const messageDto = (0, class_transformer_1.plainToInstance)(dto, payload);
        const errors = await (0, class_validator_1.validate)(messageDto);
        if (errors.length > 0) {
            this.loggingClient(socket.id, {
                success: false,
                message: 'Validation error',
                data: {
                    client_id: socket.id,
                    event,
                    ...payload,
                },
                errors: (0, class_validator_error_transformer_1.ClassValidatorErrorTransformer)(errors),
            });
            return false;
        }
        return true;
    }
    async handleJoinRoom(socket, payload) {
        const validate = await this.validateDto(socket, join_room_dto_1.JoinRoomDto, payload, 'joinRoom');
        if (!validate)
            return;
        const findRoom = await this.chatService.findRoom(payload.room);
        if (!findRoom) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'joinRoom',
                message: 'Room not found',
                data: {
                    client_id: socket.id,
                    room: payload.room,
                },
            });
            return;
        }
        if (findRoom.ended) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'joinRoom',
                message: 'Consultation session has ended',
                data: {
                    client_id: socket.id,
                    room: payload.room,
                },
            });
            return;
        }
        const client = await this.socketService.getClient(socket.id);
        if (![findRoom.doctor_id, findRoom.customer_id].includes(client.user_id)) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'joinRoom',
                message: 'Forbidden access to the room',
            });
            return;
        }
        if (findRoom?.consultation?.status != 'AKTIF') {
            this.loggingClient(socket.id, {
                success: false,
                event: 'typing',
                message: `Invalid emit for consultation status ${findRoom.consultation.status}`,
                data: {
                    client_id: client.id,
                    ...payload,
                },
            });
            return;
        }
        socket.join(findRoom.code);
        this.loggingClient(socket.id, {
            success: true,
            event: 'joinRoom',
            message: `You join the room '${findRoom.code}'`,
            data: {
                client_id: socket.id,
                room: payload.room,
            },
        });
        this.logger.log(`Client ${socket.id} joined room ${findRoom.code}`);
    }
    async handleLeaveRoom(socket, payload) {
        const validate = await this.validateDto(socket, join_room_dto_1.JoinRoomDto, payload, 'leaveRoom');
        if (!validate)
            return;
        const findRoom = await this.chatService.findRoom(payload.room);
        if (!findRoom) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'leaveRoom',
                message: 'Room not found',
                data: {
                    client_id: socket.id,
                    room: payload.room,
                },
            });
            return;
        }
        socket.leave(findRoom.code);
        this.loggingClient(socket.id, {
            success: true,
            event: 'leaveRoom',
            message: `You leave the room '${findRoom.code}'`,
            data: {
                client_id: socket.id,
                room: payload.room,
            },
        });
        this.logger.log(`Client ${socket.id} leave room ${findRoom.code}`);
    }
    async listenForMessages(socket, payload) {
        const validate = await this.validateDto(socket, send_message_dto_1.SendMessageDto, payload, 'sendMessage');
        if (!validate)
            return;
        const findRoom = await this.chatService.findRoom(payload.room);
        if (!findRoom) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'sendMessage',
                message: 'Room not found',
                data: {
                    client_id: socket.id,
                    ...payload,
                },
            });
            return;
        }
        const client = await this.socketService.getClient(socket.id);
        if (![findRoom.doctor_id, findRoom.customer_id].includes(client.user_id)) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'sendMessage',
                message: 'Forbidden access to the room',
                data: {
                    client_id: socket.id,
                    ...payload,
                },
            });
            return;
        }
        if (findRoom?.consultation?.status != 'AKTIF') {
            this.loggingClient(socket.id, {
                success: false,
                event: 'typing',
                message: `Invalid emit for consultation status ${findRoom.consultation.status}`,
                data: {
                    client_id: client.id,
                    ...payload,
                },
            });
            return;
        }
        const mediaChatMessage = [];
        if (payload.files && payload.files.length > 0) {
            await Promise.all(payload.files.map(async (file) => {
                const fileInfo = await (0, media_1.saveBase64ToFile)(file, media_2.MEDIA_CHAT_MESSAGE_DIR, 'message');
                const media = await this.mediaService.createMedia(fileInfo);
                mediaChatMessage.push({
                    media_id: media.id,
                });
            }));
        }
        const message = await this.chatService.createMessage({
            chat_room_id: findRoom.id,
            sender_id: client.user_id,
            receiver_id: findRoom.doctor_id == client.user_id
                ? findRoom.customer_id
                : findRoom.doctor_id,
            message: payload.message,
            seen: false,
        }, mediaChatMessage);
        socket.to(findRoom.code).emit('newMessage', message);
        this.server.to(socket.id).emit('myMessage', message);
        const receiverId = client.role == 'Doctor' ? findRoom.customer_id : findRoom.doctor_id;
        const receiver = await this.socketService.getClientByUserId(receiverId);
        if (receiver) {
            const recentChat = await this.chatService.findRecentChatByRoom(receiver.user_id, findRoom.code);
            this.recentChat(receiver.id, recentChat);
        }
        else {
            this.queueFcm.add('sendNotificationToTopic', {
                topic: receiverId.toString(),
                title: client.role == 'Doctor'
                    ? findRoom.doctor.fullname
                    : findRoom.customer.fullname,
                body: payload.message,
                data: {
                    type: 'CHAT',
                    room_code: findRoom.code,
                    sender_user_id: client.user_id,
                    receiver_user_id: findRoom.doctor_id == client.user_id
                        ? findRoom.customer_id
                        : findRoom.doctor_id,
                    customer_id: findRoom.customer_id,
                    doctor_id: findRoom.doctor_id,
                    consultation_id: findRoom.consultation.id,
                },
            });
        }
        this.loggingClient(socket.id, {
            success: true,
            event: 'sendMessage',
            message: 'Send message successfully',
            data: {
                client_id: socket.id,
                ...payload,
            },
        });
    }
    async handleTyping(socket, payload) {
        const validate = await this.validateDto(socket, typing_dto_1.TypingDto, payload, 'typing');
        if (!validate)
            return;
        const findRoom = await this.chatService.findRoom(payload.room);
        if (!findRoom) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'typing',
                message: 'Room not found',
                data: {
                    client_id: socket.id,
                    ...payload,
                },
            });
            return;
        }
        const client = await this.socketService.getClient(socket.id);
        if (![findRoom.doctor_id, findRoom.customer_id].includes(client.user_id)) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'typing',
                message: 'Forbidden access to the room',
                data: {
                    client_id: client.id,
                    ...payload,
                },
            });
            return;
        }
        if (findRoom?.consultation?.status != 'AKTIF') {
            this.loggingClient(socket.id, {
                success: false,
                event: 'typing',
                message: `Invalid emit for consultation status ${findRoom.consultation.status}`,
                data: {
                    client_id: client.id,
                    ...payload,
                },
            });
            return;
        }
        socket
            .to(findRoom.code)
            .emit('typingIndicator', { sender: client, isTyping: payload.is_typing });
    }
    async handleReadMessage(socket, payload) {
        const validate = await this.validateDto(socket, read_message_dto_1.ReadMessageDto, payload, 'readMessage');
        if (!validate)
            return;
        const findRoom = await this.chatService.findRoom(payload.room);
        if (!findRoom) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'readMessage',
                message: 'Room not found',
                data: {
                    client_id: socket.id,
                    ...payload,
                },
            });
            return;
        }
        const client = await this.socketService.getClient(socket.id);
        if (![findRoom.doctor_id, findRoom.customer_id].includes(client.user_id)) {
            this.loggingClient(socket.id, {
                success: false,
                event: 'readMessage',
                message: 'Forbidden access to the room',
                data: {
                    client_id: socket.id,
                    ...payload,
                },
            });
            return;
        }
        if (findRoom?.consultation?.status != 'AKTIF') {
            this.loggingClient(socket.id, {
                success: false,
                event: 'typing',
                message: `Invalid emit for consultation status ${findRoom.consultation.status}`,
                data: {
                    client_id: client.id,
                    ...payload,
                },
            });
            return;
        }
        await this.chatService.readChatMessageRoom(client.user_id, findRoom.code);
        this.loggingClient(socket.id, {
            success: true,
            event: 'readMessage',
            message: 'Read message successfully',
            data: {
                client_id: socket.id,
                ...payload,
            },
        });
    }
    async consultationDoctorSchedule(clientId, response) {
        this.server.to(clientId).emit('newConsultationSchedule', response);
    }
    emitListenApp(clientId, response) {
        this.server.to(clientId).emit('app', response);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinRoom'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        join_room_dto_1.JoinRoomDto]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leaveRoom'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        leave_room_dto_1.LeaveRoomDto]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleLeaveRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        send_message_dto_1.SendMessageDto]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "listenForMessages", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('typing'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        typing_dto_1.TypingDto]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('readMessage'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        read_message_dto_1.ReadMessageDto]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleReadMessage", null);
SocketGateway = __decorate([
    (0, swagger_1.ApiTags)('WebSocket'),
    (0, websockets_1.WebSocketGateway)({
        namespace: 'socket',
        cors: {
            origin: '*',
            credentials: true,
        },
    }),
    __param(3, (0, bull_1.InjectQueue)('queueFcm')),
    __metadata("design:paramtypes", [socket_service_1.SocketService,
        chat_service_1.ChatService,
        media_service_1.MediaService, Object, notification_service_1.NotificationService])
], SocketGateway);
exports.SocketGateway = SocketGateway;
//# sourceMappingURL=socket.gateway.js.map
//# debugId=4d6ab8c3-8146-541f-9d05-afc2698b7a60
