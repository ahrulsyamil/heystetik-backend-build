"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="87321e37-436a-59a3-a6fc-94ba71d173bc")}catch(e){}}();

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
exports.UserCartController = void 0;
const common_1 = require("@nestjs/common");
const user_cart_service_1 = require("./user-cart.service");
const page_options_user_cart_dto_1 = require("./dto/page-options-user-cart.dto");
const user_entity_1 = require("../users/entities/user.entity");
const user_decorator_1 = require("../decorators/user.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../globals/guards/roles.guard");
const create_user_cart_dto_1 = require("./dto/create-user-cart.dto");
const delete_many_user_cart_dto_1 = require("./dto/delete-many-user-cart.dto");
const update_user_cart_dto_1 = require("./dto/update-user-cart.dto");
let UserCartController = class UserCartController {
    constructor(userCartService) {
        this.userCartService = userCartService;
    }
    async findAll(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.userCartService.findAll(pageOptionsDto);
    }
    async create(user, data) {
        const find = await this.userCartService.findBy({
            user_id: user.id,
            product_id: data.product_id,
        });
        data.user_id = user.id;
        if (find) {
            return await this.userCartService.update(find.id, {
                qty: find.qty + data.qty,
            });
        }
        else {
            return await this.userCartService.create(data);
        }
    }
    async update(user, id, data) {
        const find = await this.userCartService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.userCartService.update(id, data);
    }
    async delete(user, id) {
        const find = await this.userCartService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.userCartService.delete(id);
    }
    async deleteMany(user, data) {
        const findMany = await this.userCartService.findManyBy({
            id: { in: data.ids },
        });
        if (findMany.length == 0)
            throw new common_1.BadRequestException('Data not found');
        if (findMany.filter((x) => x.user_id != user.id).length > 0)
            throw new common_1.ForbiddenException();
        return await this.userCartService.deleteMany(data.ids);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_user_cart_dto_1.PageOptionUserCartDto]),
    __metadata("design:returntype", Promise)
], UserCartController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, create_user_cart_dto_1.CreateUserCartDto]),
    __metadata("design:returntype", Promise)
], UserCartController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, update_user_cart_dto_1.UpdateUserCartDto]),
    __metadata("design:returntype", Promise)
], UserCartController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], UserCartController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        delete_many_user_cart_dto_1.DeleteManyUserCartDto]),
    __metadata("design:returntype", Promise)
], UserCartController.prototype, "deleteMany", null);
UserCartController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('user-cart'),
    __metadata("design:paramtypes", [user_cart_service_1.UserCartService])
], UserCartController);
exports.UserCartController = UserCartController;
//# sourceMappingURL=user-cart.controller.js.map
//# debugId=87321e37-436a-59a3-a6fc-94ba71d173bc
