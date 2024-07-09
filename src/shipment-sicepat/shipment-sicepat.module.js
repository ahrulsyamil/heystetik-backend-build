"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="01aacc22-a583-549e-9339-ca7e1e6a43b8")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentSicepatModule = void 0;
const common_1 = require("@nestjs/common");
const shipment_sicepat_service_1 = require("./shipment-sicepat.service");
const shipment_sicepat_controller_1 = require("./shipment-sicepat.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let ShipmentSicepatModule = class ShipmentSicepatModule {
};
ShipmentSicepatModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [shipment_sicepat_controller_1.ShipmentSicepatController],
        providers: [shipment_sicepat_service_1.ShipmentSicepatService],
    })
], ShipmentSicepatModule);
exports.ShipmentSicepatModule = ShipmentSicepatModule;
//# sourceMappingURL=shipment-sicepat.module.js.map
//# debugId=01aacc22-a583-549e-9339-ca7e1e6a43b8
