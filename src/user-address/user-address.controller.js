"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a3ae1876-5008-5e4b-a8bb-80710137807b")}catch(e){}}();

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
exports.UserAddressController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const entity_transformer_1 = require("../globals/transformer/entity.transformer");
const user_entity_1 = require("../users/entities/user.entity");
const create_user_address_dto_1 = require("./dto/create-user-address.dto");
const get_city_dto_1 = require("./dto/get-city.dto");
const get_subdistrict_dto_1 = require("./dto/get-subdistrict.dto");
const get_zip_code_dto_1 = require("./dto/get-zip-code.dto");
const update_user_address_dto_1 = require("./dto/update-user-address.dto");
const city_entity_1 = require("./entities/city.entity");
const province_entity_1 = require("./entities/province.entity");
const subdistrict_entity_1 = require("./entities/subdistrict.entity");
const zip_code_entity_1 = require("./entities/zip-code.entity");
const user_address_service_1 = require("./user-address.service");
let UserAddressController = class UserAddressController {
    constructor(userAddressService) {
        this.userAddressService = userAddressService;
    }
    async findAll(user) {
        return await this.userAddressService.findAll(user.id);
    }
    async create(user, data) {
        const destination = await this.userAddressService.getDestination({
            province: data.province,
            city: data.city,
            subdistrict: data.subdistrict,
            zip_code: data.zip_code,
        });
        if (!destination)
            throw new common_1.BadRequestException('Destination not found');
        if (data.main_address) {
            await this.userAddressService.updateMainAddress(user.id, {
                main_address: false,
            });
        }
        data.user_id = user.id;
        return await this.userAddressService.create(data);
    }
    async find(user, id) {
        const find = await this.userAddressService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.userAddressService.find(id);
    }
    async update(user, id, data) {
        const find = await this.userAddressService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        if (data.province ||
            data.city ||
            data.subdistrict ||
            data.village ||
            data.zip_code) {
            const destination = await this.userAddressService.getDestination({
                province: data.province,
                city: data.city,
                subdistrict: data.subdistrict,
                zip_code: data.zip_code,
            });
            if (!destination)
                throw new common_1.BadRequestException('Destination not found');
        }
        if (data.main_address) {
            await this.userAddressService.updateMainAddress(user.id, {
                main_address: false,
            });
        }
        return await this.userAddressService.update(id, data);
    }
    async delete(user, id) {
        const find = await this.userAddressService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.userAddressService.delete(id);
    }
    async getProvince() {
        return (0, entity_transformer_1.transformEntity)(province_entity_1.ProvinceEntity, await this.userAddressService.getProvince());
    }
    async getCity(getCityDto) {
        return (0, entity_transformer_1.transformEntity)(city_entity_1.CityEntity, await this.userAddressService.getCity(getCityDto));
    }
    async getSubdistrict(getSubdistrictDto) {
        return (0, entity_transformer_1.transformEntity)(subdistrict_entity_1.SubdistrictEntity, await this.userAddressService.getSubdistrict(getSubdistrictDto));
    }
    async getZipCode(getZipCodeDto) {
        return (0, entity_transformer_1.transformEntity)(zip_code_entity_1.ZipCodeEntity, await this.userAddressService.getZipCode(getZipCodeDto));
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, create_user_address_dto_1.CreateUserAdressDto]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "find", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, update_user_address_dto_1.UpdateUserAddressDto]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('shipping/province'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "getProvince", null);
__decorate([
    (0, common_1.Get)('shipping/city'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_city_dto_1.GetCityDto]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "getCity", null);
__decorate([
    (0, common_1.Get)('shipping/subdistrict'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_subdistrict_dto_1.GetSubdistrictDto]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "getSubdistrict", null);
__decorate([
    (0, common_1.Get)('shipping/zip-code'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_zip_code_dto_1.GetZipCodeDto]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "getZipCode", null);
UserAddressController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('user-address'),
    __metadata("design:paramtypes", [user_address_service_1.UserAddressService])
], UserAddressController);
exports.UserAddressController = UserAddressController;
//# sourceMappingURL=user-address.controller.js.map
//# debugId=a3ae1876-5008-5e4b-a8bb-80710137807b
