"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d75ec589-0b33-5413-93b3-f12bbbdae51b")}catch(e){}}();

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
exports.ShipmentGosendService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let ShipmentGosendService = class ShipmentGosendService {
    constructor(configService) {
        this.configService = configService;
        const http = axios_1.default.create({
            baseURL: this.configService.get('app').environment == 'development'
                ? this.configService.get('gosend').integration_base_url
                : this.configService.get('gosend').production_base_url,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Client-ID': this.configService.get('gosend').integration_client_id,
                'Pass-Key': this.configService.get('gosend').integration_pass_key,
            },
        });
        http.interceptors.response.use((response) => response, (error) => {
            console.error('An error occurred:', error);
            if (error.response.status != 503) {
                throw new common_1.HttpException({
                    message: typeof error.response.data.errors == 'object' &&
                        error.response.data.errors.length > 0
                        ? `GoSend: ${error.response.data.errors.join(', ')}`
                        : error.response.headers['error-message']
                            ? `GoSend: ${error.response.headers['error-message']}`
                            : error.response.status == 404
                                ? 'Data not found'
                                : 'Something went wrong at GoSend call api',
                }, Number(error.response.status) ?? 500);
            }
        });
        this.axios = http;
    }
    async estimate(estimateDto) {
        const response = await this.axios.get('/gokilat/v10/calculate/price', {
            params: estimateDto,
        });
        if (!response)
            return null;
        return response.data;
    }
    async booking(bookingDto) {
        const response = await this.axios.post('/gokilat/v10/booking', bookingDto);
        return response.data;
    }
    async bookingInfoByOrderNo(orderNo) {
        const response = await this.axios.get(`/gokilat/v10/booking/orderno/${orderNo}`);
        return response.data;
    }
    async bookingInfoByStoreOrderId(storeOrderId) {
        const response = await this.axios.get(`/gokilat/v10/booking/storeOrderId/${storeOrderId}`);
        return response.data;
    }
    async cancelBooking(orderNo) {
        const response = await this.axios.put('/gokilat/v10/booking/cancel', {
            orderNo,
        });
        return response.data;
    }
};
ShipmentGosendService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ShipmentGosendService);
exports.ShipmentGosendService = ShipmentGosendService;
//# sourceMappingURL=shipment-gosend.service.js.map
//# debugId=d75ec589-0b33-5413-93b3-f12bbbdae51b
