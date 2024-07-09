"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dabfe544-774c-561e-bf9b-99feb2a57bc1")}catch(e){}}();

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
exports.UserBankAccountController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const create_user_bank_account_dto_1 = require("./dto/create-user-bank-account.dto");
const update_user_bank_account_dto_1 = require("./dto/update-user-bank-account.dto");
const user_bank_account_service_1 = require("./user-bank-account.service");
let UserBankAccountController = class UserBankAccountController {
    constructor(userBankAccountService) {
        this.userBankAccountService = userBankAccountService;
    }
    async findAll(user) {
        return await this.userBankAccountService.findAll(user.id);
    }
    async find(user, id) {
        const find = await this.userBankAccountService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return find;
    }
    async create(user, data) {
        const count = (await this.userBankAccountService.findAll(user.id)).length;
        if (count >= 3)
            throw new common_1.BadRequestException('Maximum of 3 (three) active bank accounts are allowed');
        data.user_id = user.id;
        return await this.userBankAccountService.create(data);
    }
    async update(user, id, data) {
        const find = await this.userBankAccountService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.userBankAccountService.update(id, data);
    }
    async delete(user, id) {
        const find = await this.userBankAccountService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.userBankAccountService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserBankAccountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], UserBankAccountController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_user_bank_account_dto_1.CreateUserBankAccountDto]),
    __metadata("design:returntype", Promise)
], UserBankAccountController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, update_user_bank_account_dto_1.UpdateUserBankAccountDto]),
    __metadata("design:returntype", Promise)
], UserBankAccountController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], UserBankAccountController.prototype, "delete", null);
UserBankAccountController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiTags)('User Bank Account'),
    (0, common_1.Controller)('user-bank-account'),
    __metadata("design:paramtypes", [user_bank_account_service_1.UserBankAccountService])
], UserBankAccountController);
exports.UserBankAccountController = UserBankAccountController;
//# sourceMappingURL=user-bank-account.controller.js.map
//# debugId=dabfe544-774c-561e-bf9b-99feb2a57bc1
