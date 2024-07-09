"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b58fc4b6-6cba-54e8-b7d7-61abf0afa640")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManagementModule = void 0;
const common_1 = require("@nestjs/common");
const order_management_service_1 = require("./order-management.service");
const order_management_controller_1 = require("./order-management.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const shipment_sicepat_service_1 = require("../shipment-sicepat/shipment-sicepat.service");
const shipment_gosend_service_1 = require("../shipment-gosend/shipment-gosend.service");
const user_address_service_1 = require("../user-address/user-address.service");
const shipping_service_1 = require("../shipping/shipping.service");
let OrderManagementModule = class OrderManagementModule {
};
OrderManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [order_management_controller_1.OrderManagementController],
        providers: [
            order_management_service_1.OrderManagementService,
            shipment_sicepat_service_1.ShipmentSicepatService,
            shipment_gosend_service_1.ShipmentGosendService,
            user_address_service_1.UserAddressService,
            shipping_service_1.ShippingService,
        ],
    })
], OrderManagementModule);
exports.OrderManagementModule = OrderManagementModule;
//# sourceMappingURL=order-management.module.js.map
//# debugId=b58fc4b6-6cba-54e8-b7d7-61abf0afa640
