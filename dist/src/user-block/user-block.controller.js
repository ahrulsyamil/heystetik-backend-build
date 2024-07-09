"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="21e00872-0452-5eac-9299-7924867d5865")}catch(e){}}();

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
exports.UserBlockController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const user_block_service_1 = require("./user-block.service");
const page_options_user_block_dto_1 = require("./dto/page-options-user-block.dto");
let UserBlockController = class UserBlockController {
    constructor(userBlockService, usersService) {
        this.userBlockService = userBlockService;
        this.usersService = usersService;
    }
    async findAll(user, pageOption) {
        pageOption.user_id = user.id;
        return await this.userBlockService.findAll(pageOption);
    }
    async block(user, username) {
        const find = await this.usersService.findBy({
            username,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.id == user.id)
            throw new common_1.BadRequestException('Invalid request');
        return await this.userBlockService.block({
            user_id: user.id,
            blocked_user_id: find.id,
        });
    }
    async unblock(user, username) {
        const find = await this.usersService.findBy({
            username,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.id == user.id)
            throw new common_1.BadRequestException('Invalid request');
        const findBlocked = await this.userBlockService.find({
            user_id: user.id,
            blocked_user_id: find.id,
        });
        if (!findBlocked)
            throw new common_1.BadRequestException('Blocked user not found');
        return await this.userBlockService.unblock({
            user_id: user.id,
            blocked_user_id: find.id,
        });
    }
    async find(user, username) {
        const findUser = await this.usersService.findBy({
            username,
        });
        if (!findUser)
            throw new common_1.BadRequestException('User not found');
        const find = await this.userBlockService.find({
            user_id: user.id,
            blocked_user_id: findUser.id,
        });
        if (!find)
            return null;
        return find;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_user_block_dto_1.PageOptionsUserBlockDto]),
    __metadata("design:returntype", Promise)
], UserBlockController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':username/block'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], UserBlockController.prototype, "block", null);
__decorate([
    (0, common_1.Post)(':username/unblock'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], UserBlockController.prototype, "unblock", null);
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], UserBlockController.prototype, "find", null);
UserBlockController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('user-block'),
    __metadata("design:paramtypes", [user_block_service_1.UserBlockService,
        users_service_1.UsersService])
], UserBlockController);
exports.UserBlockController = UserBlockController;
//# sourceMappingURL=user-block.controller.js.map
//# debugId=21e00872-0452-5eac-9299-7924867d5865
