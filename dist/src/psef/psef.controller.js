"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bbffb792-11ea-5625-af02-397788f95d77")}catch(e){}}();

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
exports.PsefController = void 0;
const common_1 = require("@nestjs/common");
const psef_service_1 = require("./psef.service");
const pharmacy_service_1 = require("../pharmacy/pharmacy.service");
const entity_transformer_1 = require("../globals/transformer/entity.transformer");
const psef_pharmacy_entity_1 = require("./entities/psef-pharmacy.entity");
let PsefController = class PsefController {
    constructor(psefService, pharmacyService) {
        this.psefService = psefService;
        this.pharmacyService = pharmacyService;
    }
    async pharmacy(res) {
        return res.json({
            data: (0, entity_transformer_1.transformEntity)(psef_pharmacy_entity_1.PsefPharmacyEntity, await this.pharmacyService.psefPharmacy()),
        });
    }
};
__decorate([
    (0, common_1.Get)('pharmacy'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PsefController.prototype, "pharmacy", null);
PsefController = __decorate([
    (0, common_1.Controller)('psef'),
    __metadata("design:paramtypes", [psef_service_1.PsefService,
        pharmacy_service_1.PharmacyService])
], PsefController);
exports.PsefController = PsefController;
//# sourceMappingURL=psef.controller.js.map
//# debugId=bbffb792-11ea-5625-af02-397788f95d77
