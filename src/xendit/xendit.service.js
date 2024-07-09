"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2428af4c-c5f9-5577-aaab-d4a12f4acb8e")}catch(e){}}();

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
exports.XenditService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let XenditService = class XenditService {
    constructor(configService) {
        this.configService = configService;
        const http = axios_1.default.create({
            baseURL: this.configService.get('xendit').api_base_url,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Basic ${btoa(`${this.configService.get('xendit').secret_key}:`)}`,
            },
        });
        http.interceptors.response.use((response) => response, (error) => {
            console.error('An error occurred:', error);
            throw new common_1.HttpException({
                message: error.response.data.message ??
                    'Something went wrong at Xendit call api',
            }, Number(error.response.status) ?? 500);
        });
        this.axios = http;
    }
    async charge(createChargeDto) {
        const response = await this.axios.post('/payment_requests', createChargeDto);
        return response.data;
    }
    async status(id) {
        const response = await this.axios.get(`/payment_requests/${id}`);
        return response.data;
    }
};
XenditService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], XenditService);
exports.XenditService = XenditService;
//# sourceMappingURL=xendit.service.js.map
//# debugId=2428af4c-c5f9-5577-aaab-d4a12f4acb8e
