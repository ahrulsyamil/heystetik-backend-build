"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e9bdaa12-7b24-5d99-8f99-801320396e26")}catch(e){}}();

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
exports.MidtransService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config_1 = require("@nestjs/config");
let MidtransService = class MidtransService {
    constructor(configService) {
        this.configService = configService;
        const http = axios_1.default.create({
            baseURL: this.configService.get('app').environment == 'development'
                ? this.configService.get('midtrans')
                    .sandbox_api_base_url
                : this.configService.get('midtrans')
                    .production_api_base_url,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Basic ${btoa(this.configService.get('midtrans').server_key)}`,
            },
        });
        http.interceptors.response.use((response) => {
            const new_response = { ...response };
            if (response.data?.status_code >= 400 &&
                response.data?.status_code <= 499) {
                new_response.data.message = response.data?.transaction_status
                    ? `Transaction is ${response.data?.transaction_status}`
                    : response.data?.status_message ?? 'Midtrans: something went wrong';
            }
            if (response.data?.status_code >= 500) {
                new_response.data.message =
                    response.data?.status_message ??
                        'Midtrans: there is a problem with the payment gateway';
            }
            return new_response;
        }, (error) => {
            console.error('An error occurred:', error);
            throw new common_1.HttpException({
                message: error?.response?.data?.status_message
                    ? `Midtrans: ${error?.response?.data?.status_message}`
                    : 'Something went wrong at midtrans call api',
            }, Number(error?.response?.data?.status_code) ?? 500);
        });
        this.axios = http;
    }
    async charge(createChargeDto) {
        const response = await this.axios.post('/charge', createChargeDto);
        return response.data;
    }
    async status(order_id) {
        const response = await this.axios.get(`${order_id}/status`);
        return response.data;
    }
    async cancel(order_id) {
        const response = await this.axios.post(`${order_id}/cancel`);
        return response.data;
    }
};
MidtransService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MidtransService);
exports.MidtransService = MidtransService;
//# sourceMappingURL=midtrans.service.js.map
//# debugId=e9bdaa12-7b24-5d99-8f99-801320396e26
