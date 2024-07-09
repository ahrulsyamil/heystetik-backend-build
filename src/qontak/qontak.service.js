"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e3f84661-35ee-521c-b298-034018baeab2")}catch(e){}}();

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
exports.QontakService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
const ioredis_1 = require("ioredis");
let QontakService = class QontakService {
    async onApplicationBootstrap() {
        const accessToken = await this.redisClient.get('qontak_access_token');
        this.axios = await this.createAxios({
            Authorization: `Bearer ${accessToken}`,
        });
    }
    constructor(configService) {
        this.configService = configService;
        this.redisClient = new ioredis_1.Redis({
            port: configService.get('redis').port,
            host: configService.get('redis').host,
        });
    }
    async createAxios(header) {
        const http = axios_1.default.create({
            baseURL: this.configService.get('qontak').base_url,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                ...header,
            },
        });
        http.interceptors.response.use((response) => response, async (error) => {
            console.error('An error occurred:', error);
            console.log('+++++++++', error.response.data);
            if (!['/api/open/v1/oauth/token'].includes(error.request.path) &&
                error.response.data.error.code == 401) {
                const [accessToken, refreshToken] = await Promise.all([
                    this.redisClient.get('qontak_access_token'),
                    this.redisClient.get('qontak_refresh_token'),
                ]);
                if (!accessToken || !refreshToken) {
                    const token = await this.authToken();
                    await this.setToken(token.access_token, token.refresh_token);
                }
                else {
                    const token = await this.authRefreshToken(refreshToken);
                    await this.setToken(token.access_token, token.refresh_token);
                }
                throw new common_1.HttpException({
                    message: 'Something went wrong, please try again!',
                }, 400);
            }
            throw new common_1.HttpException({
                message: Array.isArray(error.response.data.error.messages) &&
                    error.response.data.error.messages.every((item) => typeof item === 'string')
                    ? `Qontak: ${error.response.data.error.messages.join(', ')}`
                    : error.response.status == 404
                        ? 'Not found'
                        : 'Something went wrong at Qontak call api',
            }, Number(error.response.status) ?? 500);
        });
        return http;
    }
    async setToken(accessToken, refreshToken) {
        await Promise.all([
            this.redisClient.set('qontak_access_token', accessToken),
            this.redisClient.set('qontak_refresh_token', refreshToken),
        ]);
        this.axios = await this.createAxios({
            Authorization: `Bearer ${accessToken}`,
        });
    }
    async authToken() {
        const response = await this.axios.post('/api/open/v1/oauth/token', {
            username: this.configService.get('qontak').username,
            password: this.configService.get('qontak').password,
            grant_type: 'password',
            client_id: this.configService.get('qontak').client_id,
            client_secret: this.configService.get('qontak').client_secret,
        });
        return response.data;
    }
    async authRefreshToken(refreshToken) {
        const response = await this.axios.post('/api/open/v1/oauth/token', {
            refresh_token: refreshToken,
            grant_type: 'refresh_token',
            client_id: this.configService.get('qontak').client_id,
            client_secret: this.configService.get('qontak').client_secret,
        });
        return response.data;
    }
    async integrationChannel() {
        const response = await this.axios.get('/api/open/v1/integrations');
        return response.data;
    }
    async sendVerificationCode(name, mobileNumber, code) {
        const response = await this.axios.post('/api/open/v1/broadcasts/whatsapp/direct', {
            to_name: name,
            to_number: mobileNumber,
            message_template_id: this.configService.get('qontak')
                .otp_message_template_id,
            channel_integration_id: this.configService.get('qontak')
                .otp_channel_integration_id,
            language: {
                code: 'en',
            },
            parameters: {
                body: [
                    {
                        key: '1',
                        value_text: code,
                        value: code,
                    },
                ],
                buttons: [
                    {
                        index: '0',
                        type: 'url',
                        value: code,
                    },
                ],
            },
        });
        return response.data;
    }
};
QontakService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], QontakService);
exports.QontakService = QontakService;
//# sourceMappingURL=qontak.service.js.map
//# debugId=e3f84661-35ee-521c-b298-034018baeab2
