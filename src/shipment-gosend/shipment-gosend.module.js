"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1a111131-779c-5ef7-a431-1d3623e06bb5")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentGosendModule = void 0;
const common_1 = require("@nestjs/common");
const shipment_gosend_service_1 = require("./shipment-gosend.service");
const shipment_gosend_controller_1 = require("./shipment-gosend.controller");
const webhook_header_auth_key_strategy_1 = require("./webhook-header-auth-key.strategy");
const user_service_1 = require("../auth/user/user.service");
const prisma_module_1 = require("../prisma/prisma.module");
const shipping_service_1 = require("../shipping/shipping.service");
const order_management_service_1 = require("../order-management/order-management.service");
let ShipmentGosendModule = class ShipmentGosendModule {
};
ShipmentGosendModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [shipment_gosend_controller_1.ShipmentGosendController],
        providers: [
            shipment_gosend_service_1.ShipmentGosendService,
            webhook_header_auth_key_strategy_1.HeaderWebhookAuthKeyStrategy,
            user_service_1.UserService,
            shipping_service_1.ShippingService,
            order_management_service_1.OrderManagementService,
        ],
    })
], ShipmentGosendModule);
exports.ShipmentGosendModule = ShipmentGosendModule;
//# sourceMappingURL=shipment-gosend.module.js.map
//# debugId=1a111131-779c-5ef7-a431-1d3623e06bb5
