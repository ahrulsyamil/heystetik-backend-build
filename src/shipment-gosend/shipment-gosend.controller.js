"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="53a02841-469f-542c-9329-fe266c63496d")}catch(e){}}();

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
exports.ShipmentGosendController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_guard_1 = require("../auth/auth.guard");
const skip_guard_decorator_1 = require("../decorators/skip-guard.decorator");
const order_management_service_1 = require("../order-management/order-management.service");
const shipping_service_1 = require("../shipping/shipping.service");
const booking_dto_1 = require("./dto/booking.dto");
const cancel_booking_dto_1 = require("./dto/cancel-booking.dto");
const estimate_dto_1 = require("./dto/estimate.dto");
const webhook_dto_1 = require("./dto/webhook.dto");
const booking_info_entity_1 = require("./entities/booking-info.entity");
const booking_entity_1 = require("./entities/booking.entity");
const estimate_entity_1 = require("./entities/estimate.entity");
const shipment_gosend_service_1 = require("./shipment-gosend.service");
const raw_body_decorator_1 = require("../decorators/raw-body.decorator");
const string_1 = require("../globals/constant/string");
let ShipmentGosendController = class ShipmentGosendController {
    constructor(shipmentGosendService, shippingService, orderManagementService) {
        this.shipmentGosendService = shipmentGosendService;
        this.shippingService = shippingService;
        this.orderManagementService = orderManagementService;
    }
    async handleBookingStatusUpdate(payload, res) {
        if (payload.store_order_id &&
            string_1.GosendDeliveryStatus.find((x) => x.key == payload.status)) {
            this.shippingService.createShippingHistory({
                transaction_product_id: payload.store_order_id,
                provider: 'gosend',
                status: string_1.GosendDeliveryStatus.find((x) => x.key == payload.status)
                    .status,
                description: `${string_1.GosendDeliveryStatus.find((x) => x.key == payload.status).description} ${payload.status == 'confirmed' ? `(${payload.booking_id})` : ''}`,
                date: payload.event_date ? new Date(payload.event_date) : new Date(),
                payload: JSON.stringify(payload),
            });
            this.shippingService.updateByTransactionId(payload.store_order_id, {
                delivery_status: string_1.GosendDeliveryStatus.find((x) => x.key == payload.status).status,
            });
            if (payload.status == 'allocated') {
                this.shippingService.updateByTransactionId(payload.store_order_id, {
                    driver_name: payload.driver_name,
                    driver_phone: payload.driver_phone ??
                        payload.driver_phone2 ??
                        payload.driver_phone3 ??
                        null,
                    driver_photo: payload.driver_photo_url,
                });
            }
            if (['on_hold', 'cancelled', 'rejected'].includes(payload.status)) {
                this.shippingService.updateByTransactionId(payload.store_order_id, {
                    cancelled_by: payload.cancelled_by ?? null,
                    cancelled_reason: payload.cancellation_reason ?? null,
                });
            }
            if (payload.status == 'delivered') {
                this.orderManagementService.updateTransaction(payload.store_order_id, {
                    order_status: 'ORDER_COMPLETED',
                });
                this.shippingService.updateByTransactionId(payload.store_order_id, {
                    pod_receiver: payload.receiver_name,
                });
            }
        }
        console.log('Webhook Received:', payload);
        res.status(200).json();
    }
    async getEstimate(estimationDto) {
        return new estimate_entity_1.EstimateEntity(await this.shipmentGosendService.estimate(estimationDto));
    }
    async booking(bookingDto) {
        return new booking_entity_1.BookingEntity(await this.shipmentGosendService.booking(bookingDto));
    }
    async getBookingByOrderNo(orderNo) {
        return new booking_info_entity_1.BookingInfoEntity(await this.shipmentGosendService.bookingInfoByOrderNo(orderNo));
    }
    async getBookingByStoreOrderId(storeOrderId) {
        return new booking_info_entity_1.BookingInfoEntity(await this.shipmentGosendService.bookingInfoByStoreOrderId(storeOrderId));
    }
    async cancelBooking(cancelBookingDto) {
        return await this.shipmentGosendService.cancelBooking(cancelBookingDto.orderNo);
    }
};
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('api-key')),
    (0, common_1.Post)('webhook/booking-status'),
    __param(0, (0, raw_body_decorator_1.RawBody)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [webhook_dto_1.ShipmentGosendWebhookDto, Object]),
    __metadata("design:returntype", Promise)
], ShipmentGosendController.prototype, "handleBookingStatusUpdate", null);
__decorate([
    (0, common_1.Get)('estimate'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [estimate_dto_1.EstimateDto]),
    __metadata("design:returntype", Promise)
], ShipmentGosendController.prototype, "getEstimate", null);
__decorate([
    (0, common_1.Post)('booking'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [booking_dto_1.BookingDto]),
    __metadata("design:returntype", Promise)
], ShipmentGosendController.prototype, "booking", null);
__decorate([
    (0, common_1.Get)('booking/info/order-no/:orderNo'),
    __param(0, (0, common_1.Param)('orderNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShipmentGosendController.prototype, "getBookingByOrderNo", null);
__decorate([
    (0, common_1.Get)('booking/info/store-order-id/:storeOrderId'),
    __param(0, (0, common_1.Param)('storeOrderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShipmentGosendController.prototype, "getBookingByStoreOrderId", null);
__decorate([
    (0, common_1.Put)('booking/cancel'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cancel_booking_dto_1.CancelBookingDto]),
    __metadata("design:returntype", Promise)
], ShipmentGosendController.prototype, "cancelBooking", null);
ShipmentGosendController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('shipment-gosend'),
    __metadata("design:paramtypes", [shipment_gosend_service_1.ShipmentGosendService,
        shipping_service_1.ShippingService,
        order_management_service_1.OrderManagementService])
], ShipmentGosendController);
exports.ShipmentGosendController = ShipmentGosendController;
//# sourceMappingURL=shipment-gosend.controller.js.map
//# debugId=53a02841-469f-542c-9329-fe266c63496d
