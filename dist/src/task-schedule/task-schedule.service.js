"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d2864a33-b9db-5bf1-8403-883941697d23")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TaskScheduleService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskScheduleService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const string_1 = require("../globals/constant/string");
const order_management_service_1 = require("../order-management/order-management.service");
const prisma_service_1 = require("../prisma/prisma.service");
const shipment_sicepat_service_1 = require("../shipment-sicepat/shipment-sicepat.service");
const shipping_service_1 = require("../shipping/shipping.service");
let TaskScheduleService = TaskScheduleService_1 = class TaskScheduleService {
    constructor(prismaService, shipmentSicepat, shippingService, orderManagementService) {
        this.prismaService = prismaService;
        this.shipmentSicepat = shipmentSicepat;
        this.shippingService = shippingService;
        this.orderManagementService = orderManagementService;
        this.logger = new common_1.Logger(TaskScheduleService_1.name);
    }
    async handleScheduleUpdateSicepatWaybill() {
        const shipping = (await this.shippingService.findAllShippingProduct({
            waybill: null,
            shipping_method: {
                provider: 'sicepat',
            },
        })).slice(0, 20);
        await Promise.all(shipping.map(async (item) => {
            try {
                const find = await this.shipmentSicepat.getTrackingByRefno(item.transaction_product_id);
                if (!find)
                    return null;
                return await this.shippingService.updateByTransactionId(item.transaction_product_id, {
                    waybill: find.sicepat.result.waybill_number,
                });
            }
            catch (err) {
                console.log(err);
                return null;
            }
        }));
    }
    async handleScheduleUpdateSicepatDeliveredPackage() {
        const shipping = (await this.shippingService.findAllShippingProduct({
            waybill: {
                not: null,
            },
            shipping_method: {
                provider: 'sicepat',
            },
        })).slice(0, 20);
        await Promise.all(shipping.map(async (item) => {
            try {
                const find = await this.shipmentSicepat.getTrackingByRefno(item.transaction_product_id);
                if (!find)
                    return null;
                await this.shippingService.updateByTransactionId(item.transaction_product_id, {
                    delivery_status: string_1.SicepatDeliveryStatus.find((x) => x.key == find.sicepat.result.last_status.status).status,
                    pod_receiver: find.sicepat.result.POD_receiver,
                    pod_url: find.sicepat.result.pod_img_path,
                });
                if (find.sicepat.result.POD_receiver) {
                    await this.orderManagementService.updateTransaction(item.transaction_product_id, {
                        order_status: 'ORDER_COMPLETED',
                    });
                }
                return null;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        }));
    }
};
__decorate([
    (0, schedule_1.Cron)('0 10 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskScheduleService.prototype, "handleScheduleUpdateSicepatWaybill", null);
__decorate([
    (0, schedule_1.Cron)('0 20 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskScheduleService.prototype, "handleScheduleUpdateSicepatDeliveredPackage", null);
TaskScheduleService = TaskScheduleService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        shipment_sicepat_service_1.ShipmentSicepatService,
        shipping_service_1.ShippingService,
        order_management_service_1.OrderManagementService])
], TaskScheduleService);
exports.TaskScheduleService = TaskScheduleService;
//# sourceMappingURL=task-schedule.service.js.map
//# debugId=d2864a33-b9db-5bf1-8403-883941697d23
