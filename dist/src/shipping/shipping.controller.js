"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="720a553f-83e7-5140-b5f8-552b678869de")}catch(e){}}();

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
exports.ShippingController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const dayjs = require("dayjs");
const auth_guard_1 = require("../auth/auth.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const string_1 = require("../globals/constant/string");
const weight_1 = require("../globals/helpers/weight");
const order_management_service_1 = require("../order-management/order-management.service");
const product_service_1 = require("../product/product.service");
const shipment_gosend_service_1 = require("../shipment-gosend/shipment-gosend.service");
const shipment_sicepat_service_1 = require("../shipment-sicepat/shipment-sicepat.service");
const user_address_service_1 = require("../user-address/user-address.service");
const user_entity_1 = require("../users/entities/user.entity");
const method_dto_1 = require("./dto/method.dto");
const shipping_entity_1 = require("./entities/shipping.entity");
const sicepat_tracking_mock_1 = require("./mock-data/sicepat-tracking.mock");
const shipping_service_1 = require("./shipping.service");
let ShippingController = class ShippingController {
    constructor(shippingService, userAddressService, sicepatService, gosendService, productService, configService, orderManagementService) {
        this.shippingService = shippingService;
        this.userAddressService = userAddressService;
        this.sicepatService = sicepatService;
        this.gosendService = gosendService;
        this.productService = productService;
        this.configService = configService;
        this.orderManagementService = orderManagementService;
    }
    async findAll() {
        return await this.shippingService.findAllShippingMethod();
    }
    async generateShippingMethod(user, shippingMethodDto) {
        const availableShippingMethod = [];
        const userAddress = await this.userAddressService.find(shippingMethodDto.user_address_id);
        if (userAddress.user_id != user.id)
            throw new common_1.ForbiddenException();
        const [destination, shipper] = await Promise.all([
            this.userAddressService.getDestination({
                province: userAddress.province,
                city: userAddress.city,
                subdistrict: userAddress.subdistrict,
                zip_code: userAddress.zip_code,
            }),
            this.shippingService.findOneShipperByName('Apotek Srikandi'),
        ]);
        if (!destination)
            throw new common_1.BadRequestException('Destination not found');
        if (!shipper)
            throw new common_1.BadRequestException('Shipper not found');
        let totalWeight = 0;
        const products = await this.productService.getProducts(shippingMethodDto.product_item.map((product) => product.product_id));
        products.forEach((product) => {
            totalWeight += (0, weight_1.convertToKg)(shippingMethodDto.product_item.find((x) => x.product_id == product.id)
                .qty * product.shipping_product_weight, product.shipping_product_weight_type);
        });
        const [sicepat, gosend] = await Promise.all([
            this.sicepatService.getTariff({
                origin: shipper.origin_code,
                destination: destination.destination_code,
                weight: totalWeight,
            }),
            this.gosendService.estimate({
                origin: `${shipper.latitude},${shipper.longitude}`,
                destination: `${userAddress.pinpoint_latitude},${userAddress.pinpoint_longitude}`,
            }),
        ]);
        const shippingMethod = await this.shippingService.findAllShippingMethod();
        shippingMethod.forEach((method) => {
            if (gosend) {
                const gosendService = gosend[method.provider_service_code];
                if (gosendService) {
                    if (gosendService.active && gosendService.serviceable) {
                        availableShippingMethod.push(new shipping_entity_1.ShippingEntity({
                            id: method.id,
                            name: `${method.name} (${new Intl.NumberFormat('id-ID').format(gosendService.price.total_price)})`,
                            description: method.provider_service_code == 'Instant'
                                ? `Selesaikan transaksi sebelum 15:00 (${gosendService.shipment_method_description.replace('hours', 'jam')})`
                                : `Selesaikan transaksi sebelum 15:00 \nEstimasi tiba hari - besok (${gosendService.shipment_method_description.replace('hours', 'jam')})`,
                            info: method.description,
                            provider: method.provider,
                            price: gosendService.price.total_price,
                            is_active: true,
                        }));
                    }
                    else {
                        availableShippingMethod.push(new shipping_entity_1.ShippingEntity({
                            id: method.id,
                            name: `${method.name}`,
                            description: `${gosendService.errors[0]
                                ? `${gosendService.errors[0].message}\n${gosendService.shipment_method_description}`
                                : gosendService.shipment_method_description}`,
                            info: method.description,
                            provider: method.provider,
                            price: 0,
                            is_active: false,
                        }));
                    }
                }
            }
            const sicepatService = sicepat.sicepat.results.find((x) => x.service == method.provider_service_code);
            if (sicepatService) {
                availableShippingMethod.push(new shipping_entity_1.ShippingEntity({
                    id: method.id,
                    name: `${method.name} (${new Intl.NumberFormat('id-ID').format(sicepatService.tariff)})`,
                    description: `Estimasi tiba ${dayjs()
                        .add(Number(sicepatService.etd.replace(' hari', '').split(' - ')[0]), 'days')
                        .format('DD MMM')}${sicepatService.etd.replace(' hari', '').split(' - ')[1]
                        ? ` - ${dayjs()
                            .add(Number(sicepatService.etd.replace(' hari', '').split(' - ')[1]), 'days')
                            .format('DD MMM')}`
                        : ''} (${sicepatService.etd} kerja)`,
                    info: method.description,
                    provider: method.provider,
                    price: sicepatService.tariff,
                    is_active: true,
                }));
            }
        });
        return availableShippingMethod;
    }
    async getShippingInfo(ref_no) {
        const find = await this.shippingService.findShippingProductByTransactionId(ref_no);
        if (!find)
            throw new common_1.BadRequestException('Order data not found');
        return find;
    }
    async trackByReferenceNumber(ref_no) {
        let history = [];
        const find = await this.orderManagementService.findTransaction(ref_no);
        if (!find)
            throw new common_1.BadRequestException('Order data not found');
        if (find.shipping_product.shipping_method.provider == 'sicepat') {
            const sicepatHistory = this.configService.get('app').environment == 'development'
                ? sicepat_tracking_mock_1.SicepatTrackingMockData
                : await this.sicepatService.getTrackingByRefno(find.id.toUpperCase());
            history = sicepatHistory.sicepat.result.track_history.map((item) => ({
                transaction_product_id: find.id,
                provider: 'sicepat',
                status: string_1.SicepatDeliveryStatus.find((x) => x.key == item.status).status,
                description: item.receiver_name ? item.receiver_name : item.city ?? '-',
                date: dayjs(item.date_time).toDate(),
            }));
            await this.shippingService.updateByTransactionId(find.id, {
                delivery_status: string_1.SicepatDeliveryStatus.find((x) => x.key == sicepatHistory.sicepat.result.last_status.status).status,
                pod_receiver: sicepatHistory.sicepat.result.POD_receiver,
                pod_url: sicepatHistory.sicepat.result.pod_img_path,
            });
            if (sicepatHistory.sicepat.result.POD_receiver) {
                await this.orderManagementService.updateTransaction(find.id, {
                    order_status: 'ORDER_COMPLETED',
                });
            }
        }
        if (find.shipping_product.shipping_method.provider == 'gosend') {
            history = await this.shippingService.getShippingHistoryByTransactionId(find.id);
        }
        return history.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShippingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('method'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        method_dto_1.ShippingMethodDto]),
    __metadata("design:returntype", Promise)
], ShippingController.prototype, "generateShippingMethod", null);
__decorate([
    (0, common_1.Get)(':ref_no/info'),
    __param(0, (0, common_1.Param)('ref_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShippingController.prototype, "getShippingInfo", null);
__decorate([
    (0, common_1.Get)(':ref_no/track'),
    __param(0, (0, common_1.Param)('ref_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShippingController.prototype, "trackByReferenceNumber", null);
ShippingController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('shipping'),
    __metadata("design:paramtypes", [shipping_service_1.ShippingService,
        user_address_service_1.UserAddressService,
        shipment_sicepat_service_1.ShipmentSicepatService,
        shipment_gosend_service_1.ShipmentGosendService,
        product_service_1.ProductService,
        config_1.ConfigService,
        order_management_service_1.OrderManagementService])
], ShippingController);
exports.ShippingController = ShippingController;
//# sourceMappingURL=shipping.controller.js.map
//# debugId=720a553f-83e7-5140-b5f8-552b678869de
