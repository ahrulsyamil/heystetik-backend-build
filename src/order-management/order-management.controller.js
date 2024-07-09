"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="245ccf55-8994-515c-9d2a-367cbe13e94c")}catch(e){}}();

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
exports.OrderManagementController = void 0;
const common_1 = require("@nestjs/common");
const order_management_service_1 = require("./order-management.service");
const page_options_order_management_dto_1 = require("./dto/page-options-order-management.dto");
const page_options_get_products_dto_1 = require("./dto/page-options-get-products.dto");
const client_1 = require("@prisma/client");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const shipment_sicepat_service_1 = require("../shipment-sicepat/shipment-sicepat.service");
const shipment_gosend_service_1 = require("../shipment-gosend/shipment-gosend.service");
const config_1 = require("@nestjs/config");
const dayjs = require("dayjs");
const number_1 = require("../globals/helpers/number");
const user_address_service_1 = require("../user-address/user-address.service");
const weight_1 = require("../globals/helpers/weight");
const shipping_service_1 = require("../shipping/shipping.service");
const enum_1 = require("../globals/constant/enum");
const string_1 = require("../globals/constant/string");
let OrderManagementController = class OrderManagementController {
    constructor(orderManagementService, sicepatService, gosendService, configService, userAddressService, shippingService) {
        this.orderManagementService = orderManagementService;
        this.sicepatService = sicepatService;
        this.gosendService = gosendService;
        this.configService = configService;
        this.userAddressService = userAddressService;
        this.shippingService = shippingService;
    }
    async findAll(pageOptionOrderManagementDto) {
        return await this.orderManagementService.findAll(pageOptionOrderManagementDto);
    }
    async getProductsByTransactionId(id, pageOptionsGetProductsDto) {
        pageOptionsGetProductsDto.transaction_id = id;
        return await this.orderManagementService.getProductsByTransactionId(pageOptionsGetProductsDto);
    }
    async processOrder(id) {
        const find = await this.orderManagementService.findTransaction(id);
        if (!find)
            throw new common_1.BadRequestException('Order data not found');
        if (find.payment_status !== enum_1.PaymentStatus.SUCCEEDED)
            throw new common_1.BadRequestException('Please complete the payment first');
        if (find.order_status !== 'NEW_ORDER')
            throw new common_1.BadRequestException('Invalid step order status');
        await this.orderManagementService.createTransactionOrderStatusHistory({
            transaction_product_id: find.id,
            status: client_1.transaction_product_order_status.DELIVERY_PROCESS,
        });
        return await this.orderManagementService.updateTransaction(find.id, {
            order_status: 'DELIVERY_PROCESS',
        });
    }
    async requestPickupOrder(id) {
        const find = await this.orderManagementService.findTransaction(id);
        if (!find)
            throw new common_1.BadRequestException('Order data not found');
        const destination = await this.userAddressService.getDestination({
            province: find.shipping_product.recipient_province,
            city: find.shipping_product.recipient_city,
            subdistrict: find.shipping_product.recipient_subdistrict,
            zip_code: find.shipping_product.recipient_zip_code,
        });
        if (!destination)
            throw new common_1.BadRequestException('Destination not found');
        if (find.payment_status !== enum_1.PaymentStatus.SUCCEEDED)
            throw new common_1.BadRequestException('Please complete the payment first');
        if (find.order_status !== 'DELIVERY_PROCESS')
            throw new common_1.BadRequestException('Invalid step order status');
        if (find.shipping_product.shipping_method.provider == 'gosend') {
            const payload = {
                paymentType: '3',
                shipment_method: find.shipping_product.shipping_method
                    .provider_service_code,
                routes: [
                    {
                        originName: find.shipping_product.shipper.name,
                        originContactName: find.shipping_product.shipper.email,
                        originContactPhone: find.shipping_product.shipper.phone,
                        originLatLong: `${find.shipping_product.shipper.latitude},${find.shipping_product.shipper.longitude}`,
                        originAddress: `${find.shipping_product.shipper.address}`,
                        destinationContactName: find.shipping_product.recipient_name,
                        destinationContactPhone: find.shipping_product.recipient_phone,
                        destinationNote: find.shipping_product.recipient_note,
                        destinationLatLong: `${find.shipping_product.recipient_latitude},${find.shipping_product.recipient_longitude}`,
                        destinationAddress: find.shipping_product.recipient_address,
                        item: find.transaction_product_items
                            .map((item) => item.product.name)
                            .join(', '),
                        storeOrderId: find.id,
                    },
                ],
            };
            try {
                const booking = await this.gosendService.booking(payload);
                this.shippingService.createLog({
                    user_id: find.user_id,
                    reference_number: find.id,
                    provider: 'gosend',
                    type: 'Booking',
                    payload: JSON.stringify(payload),
                    response: JSON.stringify(booking),
                });
                await this.shippingService.updateByTransactionId(find.id, {
                    delivery_status: 'Finding Driver',
                    waybill: booking.orderNo,
                });
            }
            catch (err) {
                this.shippingService.createLog({
                    user_id: find.user_id,
                    reference_number: find.id,
                    provider: 'gosend',
                    type: 'Booking',
                    payload: JSON.stringify(payload),
                    response_exception: typeof err == 'object' ? JSON.stringify(err) : err,
                });
                throw new common_1.InternalServerErrorException(err);
            }
        }
        if (find.shipping_product.shipping_method.provider == 'sicepat') {
            const receipt_number = (0, number_1.generateReceiptNumber)();
            const payload = {
                auth_key: this.configService.get('sicepat')
                    .development_pickup_api_key,
                reference_number: find.id.toUpperCase(),
                pickup_request_date: dayjs().format('YYYY-MM-DD HH:ss'),
                pickup_merchant_name: find.shipping_product.shipper.name,
                pickup_address: find.shipping_product.shipper.address,
                pickup_city: find.shipping_product.shipper.city,
                pickup_merchant_phone: find.shipping_product.shipper.phone,
                pickup_merchant_email: find.shipping_product.shipper.email,
                notes: find.shipping_product.recipient_note,
                PackageList: find.transaction_product_items.map((item) => ({
                    receipt_number: receipt_number,
                    origin_code: find.shipping_product.shipper.origin_code,
                    delivery_type: find.shipping_product.shipping_method
                        .provider_service_code,
                    parcel_category: 'Fragile/Medicine/Skincare',
                    parcel_content: item.product.name,
                    parcel_qty: item.qty,
                    parcel_uom: 'Pcs',
                    parcel_value: item.qty * item.price,
                    total_weight: (0, weight_1.convertToKg)(item.product.shipping_product_weight * item.qty, item.product.shipping_product_weight_type),
                    shipper_name: find.shipping_product.shipper.name,
                    shipper_address: find.shipping_product.shipper.address,
                    shipper_province: find.shipping_product.shipper.province,
                    shipper_city: find.shipping_product.shipper.city,
                    shipper_district: find.shipping_product.shipper.subdistrict,
                    shipper_zip: find.shipping_product.shipper.zip_code,
                    shipper_phone: find.shipping_product.shipper.phone,
                    shipper_latitude: find.shipping_product.shipper.latitude,
                    shipper_longitude: find.shipping_product.shipper.longitude,
                    recipient_title: find.user.gender == 'Laki-laki' ? 'Mr' : 'Ms',
                    recipient_name: find.shipping_product.recipient_name,
                    recipient_address: find.shipping_product.recipient_address,
                    recipient_province: find.shipping_product.recipient_province,
                    recipient_city: find.shipping_product.recipient_city,
                    recipient_district: find.shipping_product.recipient_subdistrict,
                    recipient_zip: find.shipping_product.recipient_zip_code,
                    recipient_phone: find.shipping_product.recipient_phone,
                    recipient_email: find.user.email,
                    destination_code: destination.destination_code,
                })),
            };
            try {
                const pickup = await this.sicepatService.pickup(payload);
                this.shippingService.createLog({
                    user_id: find.user_id,
                    reference_number: find.id,
                    provider: 'sicepat',
                    type: 'Request Pickup',
                    payload: JSON.stringify(payload),
                    response: JSON.stringify(pickup),
                });
                await this.shippingService.updateByTransactionId(find.id, {
                    delivery_status: 'Pickup Request',
                    waybill: this.configService.get('app').environment ==
                        'development'
                        ? string_1.SicepatWaybillExample[Math.floor(Math.random() * string_1.SicepatWaybillExample.length)]
                        : null,
                });
            }
            catch (err) {
                this.shippingService.createLog({
                    user_id: find.user_id,
                    reference_number: find.id,
                    provider: 'sicepat',
                    type: 'Request Pickup',
                    payload: JSON.stringify(payload),
                    response_exception: typeof err == 'object' ? JSON.stringify(err) : err,
                });
                throw new common_1.InternalServerErrorException(err);
            }
        }
        await this.orderManagementService.createTransactionOrderStatusHistory({
            transaction_product_id: find.id,
            status: client_1.transaction_product_order_status.IN_DELIVERY,
        });
        return await this.orderManagementService.updateTransaction(find.id, {
            order_status: 'IN_DELIVERY',
        });
    }
    async retryRequestPickupOrder(id) {
        const find = await this.orderManagementService.findTransaction(id);
        if (!find)
            throw new common_1.BadRequestException('Order data not found');
        const destination = await this.userAddressService.getDestination({
            province: find.shipping_product.recipient_province,
            city: find.shipping_product.recipient_city,
            subdistrict: find.shipping_product.recipient_subdistrict,
            zip_code: find.shipping_product.recipient_zip_code,
        });
        if (!destination)
            throw new common_1.BadRequestException('Destination not found');
        if (find.payment_status !== enum_1.PaymentStatus.SUCCEEDED)
            throw new common_1.BadRequestException('Please complete the payment first');
        const payload = {
            paymentType: '3',
            shipment_method: find.shipping_product.shipping_method
                .provider_service_code,
            routes: [
                {
                    originName: find.shipping_product.shipper.name,
                    originContactName: find.shipping_product.shipper.email,
                    originContactPhone: find.shipping_product.shipper.phone,
                    originLatLong: `${find.shipping_product.shipper.latitude},${find.shipping_product.shipper.longitude}`,
                    originAddress: `${find.shipping_product.shipper.address}`,
                    destinationContactName: find.shipping_product.recipient_name,
                    destinationContactPhone: find.shipping_product.recipient_phone,
                    destinationNote: find.shipping_product.recipient_note,
                    destinationLatLong: `${find.shipping_product.recipient_latitude},${find.shipping_product.recipient_longitude}`,
                    destinationAddress: find.shipping_product.recipient_address,
                    item: find.transaction_product_items
                        .map((item) => item.product.name)
                        .join(', '),
                    storeOrderId: find.id,
                },
            ],
        };
        try {
            const booking = await this.gosendService.booking(payload);
            this.shippingService.createLog({
                user_id: find.user_id,
                reference_number: find.id,
                provider: 'gosend',
                type: 'Retry Booking',
                payload: JSON.stringify(payload),
                response: JSON.stringify(booking),
            });
            await this.shippingService.updateByTransactionId(find.id, {
                waybill: booking.orderNo ?? null,
                delivery_status: 'Finding Driver',
                driver_name: null,
                driver_phone: null,
                driver_photo: null,
                cancelled_by: null,
                cancelled_reason: null,
            });
        }
        catch (err) {
            this.shippingService.createLog({
                user_id: find.user_id,
                reference_number: find.id,
                provider: 'gosend',
                type: 'Retry Booking',
                payload: JSON.stringify(payload),
                response_exception: typeof err == 'object' ? JSON.stringify(err) : err,
            });
            throw new common_1.InternalServerErrorException(err);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_order_management_dto_1.PageOptionsOrderManagementDto]),
    __metadata("design:returntype", Promise)
], OrderManagementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/products'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, page_options_get_products_dto_1.PageOptionsGetProductDto]),
    __metadata("design:returntype", Promise)
], OrderManagementController.prototype, "getProductsByTransactionId", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Process orders successfully'),
    (0, common_1.Post)(':id/process-order'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderManagementController.prototype, "processOrder", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Request pickup order successfully'),
    (0, common_1.Post)(':id/request-pickup-order'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderManagementController.prototype, "requestPickupOrder", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Retry request pickup order successfully'),
    (0, common_1.Post)(':id/request-pickup-order/retry'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderManagementController.prototype, "retryRequestPickupOrder", null);
OrderManagementController = __decorate([
    (0, common_1.Controller)('order-management'),
    __metadata("design:paramtypes", [order_management_service_1.OrderManagementService,
        shipment_sicepat_service_1.ShipmentSicepatService,
        shipment_gosend_service_1.ShipmentGosendService,
        config_1.ConfigService,
        user_address_service_1.UserAddressService,
        shipping_service_1.ShippingService])
], OrderManagementController);
exports.OrderManagementController = OrderManagementController;
//# sourceMappingURL=order-management.controller.js.map
//# debugId=245ccf55-8994-515c-9d2a-367cbe13e94c
