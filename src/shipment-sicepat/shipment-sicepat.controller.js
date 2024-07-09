"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9231fe2a-0099-566f-96eb-90f0d9195ddd")}catch(e){}}();

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
exports.ShipmentSicepatController = void 0;
const common_1 = require("@nestjs/common");
const cancel_pickup_dto_1 = require("./dto/cancel-pickup.dto");
const get_tariff_dto_1 = require("./dto/get-tariff.dto");
const get_tracking_dto_1 = require("./dto/get-tracking.dto");
const pickup_dto_1 = require("./dto/pickup.dto");
const shipment_sicepat_service_1 = require("./shipment-sicepat.service");
let ShipmentSicepatController = class ShipmentSicepatController {
    constructor(shipmentSicepatService) {
        this.shipmentSicepatService = shipmentSicepatService;
    }
    async getOrigin() {
        return await this.shipmentSicepatService.getOrigin();
    }
    async getDestination() {
        return await this.shipmentSicepatService.getDestination();
    }
    async getTariff(getTariffDto) {
        return await this.shipmentSicepatService.getTariff(getTariffDto);
    }
    async getTracking(getTrackingDto) {
        return await this.shipmentSicepatService.getTrackingByRefno(getTrackingDto.refno);
    }
    async pickup(pickupDto) {
        return await this.shipmentSicepatService.pickup(pickupDto);
    }
    async pickupCancel(cancelPickupDto) {
        return await this.shipmentSicepatService.cancelPickup(cancelPickupDto);
    }
};
__decorate([
    (0, common_1.Get)('origin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShipmentSicepatController.prototype, "getOrigin", null);
__decorate([
    (0, common_1.Get)('destination'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShipmentSicepatController.prototype, "getDestination", null);
__decorate([
    (0, common_1.Get)('tariff'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_tariff_dto_1.GetTariffDto]),
    __metadata("design:returntype", Promise)
], ShipmentSicepatController.prototype, "getTariff", null);
__decorate([
    (0, common_1.Get)('track/:refno'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_tracking_dto_1.GetTrackingDto]),
    __metadata("design:returntype", Promise)
], ShipmentSicepatController.prototype, "getTracking", null);
__decorate([
    (0, common_1.Post)('pickup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pickup_dto_1.PickupDto]),
    __metadata("design:returntype", Promise)
], ShipmentSicepatController.prototype, "pickup", null);
__decorate([
    (0, common_1.Post)('cancel-pickup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cancel_pickup_dto_1.CancelPickupDto]),
    __metadata("design:returntype", Promise)
], ShipmentSicepatController.prototype, "pickupCancel", null);
ShipmentSicepatController = __decorate([
    (0, common_1.Controller)('shipment-sicepat'),
    __metadata("design:paramtypes", [shipment_sicepat_service_1.ShipmentSicepatService])
], ShipmentSicepatController);
exports.ShipmentSicepatController = ShipmentSicepatController;
//# sourceMappingURL=shipment-sicepat.controller.js.map
//# debugId=9231fe2a-0099-566f-96eb-90f0d9195ddd
