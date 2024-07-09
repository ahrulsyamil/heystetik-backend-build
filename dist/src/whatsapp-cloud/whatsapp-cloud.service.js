"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="55f62bff-ef78-5e55-ae03-9146916fdceb")}catch(e){}}();

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
exports.WhatsappCloudService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let WhatsappCloudService = class WhatsappCloudService {
    constructor(configService) {
        this.configService = configService;
        const http = axios_1.default.create({
            baseURL: `https://graph.facebook.com/${configService.get('whatsapp').version}/${configService.get('whatsapp').phone_number_id}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${configService.get('whatsapp').access_token}`,
            },
        });
        http.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            console.error('An error occurred:', error);
            throw new common_1.HttpException({
                message: error?.response?.data?.error?.message
                    ? `Whatsapp Cloud API: ${error?.response?.data?.error?.message}`
                    : 'Something went wrong at whatsapp cloud call api',
                ...error?.response?.data?.error,
            }, Number(error?.response?.data?.error?.code) >= 400 &&
                Number(error?.response?.data?.error?.code) < 500
                ? Number(error?.response?.data?.error?.code)
                : 500);
        });
        this.axios = http;
    }
    async sendTextMessage(mobileNumber, message) {
        const response = await this.axios.post('/messages', {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: mobileNumber,
            type: 'text',
            text: {
                body: message,
            },
        });
        return response.data;
    }
    async sendVerificationCode(mobileNumber, code) {
        const response = await this.axios.post('/messages', {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: mobileNumber,
            type: 'template',
            template: {
                name: 'verification_code',
                language: {
                    code: 'en',
                },
                components: [
                    {
                        type: 'body',
                        parameters: [
                            {
                                type: 'text',
                                text: code,
                            },
                        ],
                    },
                    {
                        type: 'button',
                        sub_type: 'url',
                        index: '0',
                        parameters: [
                            {
                                type: 'text',
                                text: code,
                            },
                        ],
                    },
                ],
            },
        });
        return response.data;
    }
};
WhatsappCloudService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], WhatsappCloudService);
exports.WhatsappCloudService = WhatsappCloudService;
//# sourceMappingURL=whatsapp-cloud.service.js.map
//# debugId=55f62bff-ef78-5e55-ae03-9146916fdceb
