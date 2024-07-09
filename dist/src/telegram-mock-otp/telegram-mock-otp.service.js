"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="05a4a789-8c48-548f-9f57-06461b18d663")}catch(e){}}();

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
exports.TelegramMockOtpService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let TelegramMockOtpService = class TelegramMockOtpService {
    constructor(configService) {
        this.configService = configService;
        const http = axios_1.default.create({
            baseURL: `${this.configService.get('telegram').bot_base_url}/bot${this.configService.get('telegram').mock_otp_token}`,
            headers: {
                'User-Agent': 'User-Agent: Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        http.interceptors.response.use((response) => {
            const new_response = { ...response };
            if (response.data?.status_code >= 400 &&
                response.data?.status_code <= 499) {
                new_response.data.message =
                    response.data?.description ?? 'Telegram Bot: something went wrong';
            }
            if (response.data?.status_code >= 500) {
                new_response.data.message =
                    response.data?.status_message ??
                        'Telegram Bot: there is a problem when call api';
            }
            return new_response;
        }, (error) => {
            throw new common_1.HttpException({
                message: error?.response?.data?.description ??
                    'Something went wrong at telegram bot call api',
            }, Number(error?.response?.data?.error_code) ?? 500);
        });
        this.axios = http;
    }
    async sendOtp(data) {
        const response = await this.axios.post('/sendMessage', {
            chat_id: this.configService.get('telegram').mock_otp_chat_id,
            text: `To: ${data.identifier} \n*${data.otp}* is your verification code. This code expires in 10 minutes. For your security, do not share this code.`,
            parse_mode: 'Markdown',
        });
        return response.data;
    }
};
TelegramMockOtpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TelegramMockOtpService);
exports.TelegramMockOtpService = TelegramMockOtpService;
//# sourceMappingURL=telegram-mock-otp.service.js.map
//# debugId=05a4a789-8c48-548f-9f57-06461b18d663
