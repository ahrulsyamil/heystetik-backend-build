"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2aba4448-64f4-5898-ab2c-f9a2751c87e7")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskScheduleModule = void 0;
const common_1 = require("@nestjs/common");
const task_schedule_service_1 = require("./task-schedule.service");
const prisma_module_1 = require("../prisma/prisma.module");
const shipment_sicepat_service_1 = require("../shipment-sicepat/shipment-sicepat.service");
const shipping_service_1 = require("../shipping/shipping.service");
const order_management_service_1 = require("../order-management/order-management.service");
let TaskScheduleModule = class TaskScheduleModule {
};
TaskScheduleModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            task_schedule_service_1.TaskScheduleService,
            shipment_sicepat_service_1.ShipmentSicepatService,
            shipping_service_1.ShippingService,
            order_management_service_1.OrderManagementService,
        ],
    })
], TaskScheduleModule);
exports.TaskScheduleModule = TaskScheduleModule;
//# sourceMappingURL=task-schedule.module.js.map
//# debugId=2aba4448-64f4-5898-ab2c-f9a2751c87e7
