"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="33e0701e-8553-566d-88bb-461281715de2")}catch(e){}}();

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
exports.GeographyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const page_options_dto_1 = require("../decorators/page-options.dto");
const entity_transformer_1 = require("../globals/transformer/entity.transformer");
const get_city_dto_1 = require("./dto/get-city.dto");
const get_subdistrict_dto_1 = require("./dto/get-subdistrict.dto");
const get_zip_code_dto_1 = require("./dto/get-zip-code.dto");
const page_options_city_dto_1 = require("./dto/page-options-city.dto");
const city_entity_1 = require("./entities/city.entity");
const province_entity_1 = require("./entities/province.entity");
const subdistrict_entity_1 = require("./entities/subdistrict.entity");
const zip_code_entity_1 = require("./entities/zip-code.entity");
const geography_service_1 = require("./geography.service");
let GeographyController = class GeographyController {
    constructor(geographyService) {
        this.geographyService = geographyService;
    }
    findAll(pageOptionsDto) {
        console.log(page_options_dto_1.PageOptionsDto);
        return this.geographyService.findAllProvince(pageOptionsDto);
    }
    findAllProvince(pageOptionsDto) {
        return this.geographyService.findAllKotaKabupaten(pageOptionsDto);
    }
    async getProvince() {
        return (0, entity_transformer_1.transformEntity)(province_entity_1.ProvinceEntity, await this.geographyService.getProvince());
    }
    async getCity(getCityDto) {
        return (0, entity_transformer_1.transformEntity)(city_entity_1.CityEntity, await this.geographyService.getCity(getCityDto));
    }
    async getSubdistrict(getSubdistrictDto) {
        return (0, entity_transformer_1.transformEntity)(subdistrict_entity_1.SubdistrictEntity, await this.geographyService.getSubdistrict(getSubdistrictDto));
    }
    async getZipCode(getZipCodeDto) {
        return (0, entity_transformer_1.transformEntity)(zip_code_entity_1.ZipCodeEntity, await this.geographyService.getZipCode(getZipCodeDto));
    }
};
__decorate([
    (0, common_1.Get)('/provinces'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_dto_1.PageOptionsDto]),
    __metadata("design:returntype", void 0)
], GeographyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/kota-kabupatens'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_city_dto_1.PageOptionsCityDto]),
    __metadata("design:returntype", void 0)
], GeographyController.prototype, "findAllProvince", null);
__decorate([
    (0, common_1.Get)('province'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeographyController.prototype, "getProvince", null);
__decorate([
    (0, common_1.Get)('city'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_city_dto_1.GetCityDto]),
    __metadata("design:returntype", Promise)
], GeographyController.prototype, "getCity", null);
__decorate([
    (0, common_1.Get)('subdistrict'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_subdistrict_dto_1.GetSubdistrictDto]),
    __metadata("design:returntype", Promise)
], GeographyController.prototype, "getSubdistrict", null);
__decorate([
    (0, common_1.Get)('zip-code'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_zip_code_dto_1.GetZipCodeDto]),
    __metadata("design:returntype", Promise)
], GeographyController.prototype, "getZipCode", null);
GeographyController = __decorate([
    (0, common_1.Controller)('geography'),
    (0, swagger_1.ApiTags)('Geography'),
    __metadata("design:paramtypes", [geography_service_1.GeographyService])
], GeographyController);
exports.GeographyController = GeographyController;
//# sourceMappingURL=geography.controller.js.map
//# debugId=33e0701e-8553-566d-88bb-461281715de2
