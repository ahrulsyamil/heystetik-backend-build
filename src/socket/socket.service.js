"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b522c950-d3d5-5213-93b2-fd1390b4622b")}catch(e){}}();

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
exports.SocketService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ioredis_1 = require("ioredis");
let SocketService = class SocketService {
    constructor(configService) {
        this.configService = configService;
        this.redisClient = new ioredis_1.Redis({
            port: configService.get('redis').port,
            host: configService.get('redis').host,
        });
    }
    async getOnlineClients() {
        try {
            const clients = await this.redisClient.get('online_clients');
            return clients ? JSON.parse(clients) : [];
        }
        catch (err) {
            return [];
        }
    }
    async removeClient(id) {
        const clients = await this.getOnlineClients();
        await this.redisClient.set('online_clients', JSON.stringify(clients.filter((client) => client.id != id)));
    }
    async getClient(id) {
        const clients = await this.getOnlineClients();
        return clients ? clients.find((x) => x.id == id) : null;
    }
    async getClientByUserId(user_id) {
        const clients = await this.getOnlineClients();
        return clients ? clients.find((x) => x.user_id == user_id) : null;
    }
    async replaceClientByUserId(user_id, client) {
        let clients = await this.getOnlineClients();
        clients = clients.filter((client) => client.user_id != user_id);
        clients.push(client);
        await this.redisClient.set('online_clients', JSON.stringify(clients));
    }
    async resetClient() {
        await this.redisClient.del('online_clients');
    }
};
SocketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SocketService);
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map
//# debugId=b522c950-d3d5-5213-93b2-fd1390b4622b
