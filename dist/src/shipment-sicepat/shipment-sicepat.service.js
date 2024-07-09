"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="099960b9-fec5-57cd-8629-8245d0e2d1ce")}catch(e){}}();

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
exports.ShipmentSicepatService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
const prisma_service_1 = require("../prisma/prisma.service");
let ShipmentSicepatService = class ShipmentSicepatService {
    constructor(configService, prismaService) {
        this.configService = configService;
        this.prismaService = prismaService;
        const httpPickup = axios_1.default.create({
            baseURL: `${this.configService.get('app').environment == 'development'
                ? this.configService.get('sicepat')
                    .development_pickup_api_base_url
                : this.configService.get('sicepat')
                    .production_pickup_api_base_url}/api`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'api-key': this.configService.get('app').environment == 'development'
                    ? this.configService.get('sicepat')
                        .development_pickup_api_key
                    : this.configService.get('sicepat')
                        .production_pickup_api_key,
            },
        });
        httpPickup.interceptors.response.use((response) => {
            const new_response = { ...response };
            if ((response.data?.status >= 400 && response.data?.status <= 599) ||
                response.data?.datas?.length == 0) {
                throw new common_1.HttpException({
                    message: response.data?.error_message
                        ? `SiCepat: ${response.data?.error_message}`
                        : 'SiCepat: something went wrong',
                }, response.data?.status ?? 400);
            }
            return new_response;
        }, (error) => {
            console.error('An error occurred:', error);
            throw new common_1.HttpException({
                message: error?.response?.data?.status
                    ? `SiCepat: ${error?.response?.data?.error_message}`
                    : 'Something went wrong at SiCepat call api',
            }, Number(error?.response?.data?.status) ?? 500);
        });
        this.axiosPickup = httpPickup;
        const httpTracking = axios_1.default.create({
            baseURL: `${this.configService.get('sicepat')
                .production_tracking_base_url}/customer`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'api-key': this.configService.get('sicepat')
                    .production_tracking_api_key,
            },
        });
        httpTracking.interceptors.response.use((response) => {
            const new_response = { ...response };
            return new_response;
        }, (error) => {
            let message = 'Something went wrong at sicepat call api';
            let code = 500;
            if (error?.response?.data?.sicepat) {
                message = `SiCepat: ${error?.response?.data?.sicepat?.status?.description}`;
                code = error?.response?.data?.sicepat?.status?.code;
            }
            else {
                message = `SiCepat: ${error?.response?.data?.message}`;
                code = error?.response?.data?.statusCode;
            }
            throw new common_1.HttpException({
                message,
            }, code);
        });
        this.axiosTracking = httpTracking;
    }
    async getOrigin() {
        const response = await this.axiosTracking.get('/origin');
        return response.data;
    }
    async getDestination() {
        const response = await this.axiosTracking.get('/destination');
        return response.data;
    }
    async getTariff(getTariffDto) {
        const response = await this.axiosTracking.get('/tariff', {
            params: getTariffDto,
        });
        return response.data;
    }
    async getWaybill(awb) {
        const response = await this.axiosTracking.get(`/waybill`, {
            params: {
                waybill: awb,
            },
        });
        return response.data;
    }
    async getTrackingByRefno(refno) {
        const response = await this.axiosTracking.get(`/waybill-refno`, {
            params: {
                waybill: refno,
            },
        });
        return response.data;
    }
    async getAwbByRefNo(refno) {
        const response = await this.axiosTracking.get(`/waybillNumber`, {
            params: {
                orderId: refno,
            },
        });
        return response.data;
    }
    async pickup(pickupDto) {
        const response = await this.axiosPickup.post('/partner/requestpickuppackage', pickupDto);
        return response.data;
    }
    async cancelPickup(cancelPickup) {
        const response = await this.axiosPickup.post('/partner/cancelpickup', cancelPickup);
        return response.data;
    }
};
ShipmentSicepatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService])
], ShipmentSicepatService);
exports.ShipmentSicepatService = ShipmentSicepatService;
//# sourceMappingURL=shipment-sicepat.service.js.map
//# debugId=099960b9-fec5-57cd-8629-8245d0e2d1ce
