"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3f2dac6d-5d94-5cfb-8c3d-1a1dd16de50e")}catch(e){}}();

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
exports.UserWishlistController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const user_entity_1 = require("../users/entities/user.entity");
const create_user_wishlist_dto_1 = require("./dto/create-user-wishlist.dto");
const page_options_user_wishlist_dto_1 = require("./dto/page-options-user-wishlist.dto");
const user_wishlist_service_1 = require("./user-wishlist.service");
let UserWishlistController = class UserWishlistController {
    constructor(userWishlistService) {
        this.userWishlistService = userWishlistService;
    }
    async findAll(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.userWishlistService.findAll(pageOptionsDto);
    }
    async create(user, data) {
        const find = await this.userWishlistService.findBy({
            product_id: data.product_id,
            user_id: user.id,
        });
        if (find)
            throw new common_1.BadRequestException('The product is already in the wishlist');
        data.user_id = user.id;
        return await this.userWishlistService.create(data);
    }
    async delete(user, id) {
        const find = await this.userWishlistService.findBy({
            user_id: user.id,
            product_id: id,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.userWishlistService.delete(user.id, id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_user_wishlist_dto_1.PageOptionUserWishlistDto]),
    __metadata("design:returntype", Promise)
], UserWishlistController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, create_user_wishlist_dto_1.CreateUserWishlistDto]),
    __metadata("design:returntype", Promise)
], UserWishlistController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], UserWishlistController.prototype, "delete", null);
UserWishlistController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('user-wishlist'),
    __metadata("design:paramtypes", [user_wishlist_service_1.UserWishlistService])
], UserWishlistController);
exports.UserWishlistController = UserWishlistController;
//# sourceMappingURL=user-wishlist.controller.js.map
//# debugId=3f2dac6d-5d94-5cfb-8c3d-1a1dd16de50e
