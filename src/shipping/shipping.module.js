"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5dddf6aa-bc34-52d1-b197-8287a8ed3202")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingModule = void 0;
const common_1 = require("@nestjs/common");
const shipping_service_1 = require("./shipping.service");
const shipping_controller_1 = require("./shipping.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const user_service_1 = require("../auth/user/user.service");
const user_address_service_1 = require("../user-address/user-address.service");
const shipment_sicepat_service_1 = require("../shipment-sicepat/shipment-sicepat.service");
const shipment_gosend_service_1 = require("../shipment-gosend/shipment-gosend.service");
const product_service_1 = require("../product/product.service");
const order_management_service_1 = require("../order-management/order-management.service");
let ShippingModule = class ShippingModule {
};
ShippingModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [shipping_controller_1.ShippingController],
        providers: [
            shipping_service_1.ShippingService,
            user_service_1.UserService,
            user_address_service_1.UserAddressService,
            shipment_sicepat_service_1.ShipmentSicepatService,
            shipment_gosend_service_1.ShipmentGosendService,
            product_service_1.ProductService,
            order_management_service_1.OrderManagementService,
        ],
    })
], ShippingModule);
exports.ShippingModule = ShippingModule;
//# sourceMappingURL=shipping.module.js.map
//# debugId=5dddf6aa-bc34-52d1-b197-8287a8ed3202
