"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="17d6c7ca-7c01-5d2d-8287-7fe33889e5a0")}catch(e){}}();

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
exports.VoucherController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_available_voucher_dto_1 = require("./dto/page-options-available-voucher.dto");
const voucher_service_1 = require("./voucher.service");
const skip_guard_decorator_1 = require("../decorators/skip-guard.decorator");
const page_options_vourcher_dto_1 = require("./dto/page-options-vourcher.dto");
const create_voucher_dto_1 = require("./dto/create-voucher.dto");
const update_voucher_dto_1 = require("./dto/update-voucher.dto");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
let VoucherController = class VoucherController {
    constructor(voucherService) {
        this.voucherService = voucherService;
    }
    async findAvailable(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.voucherService.findAllAvailableVoucher(pageOptionsDto);
    }
    async findByCode(code) {
        const find = await this.voucherService.findByCode(code);
        if (!find)
            throw new common_1.BadRequestException('Voucher not found');
        return find;
    }
    async findAll(pageOptions) {
        return await this.voucherService.findAll(pageOptions);
    }
    async create(data) {
        return await this.voucherService.create(data);
    }
    async find(id) {
        const find = await this.voucherService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async update(id, data) {
        const find = await this.voucherService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return await this.voucherService.update(+id, data);
    }
    async delete(id) {
        const find = await this.voucherService.find(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return await this.voucherService.delete(+id);
    }
};
__decorate([
    (0, common_1.Get)('available'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_available_voucher_dto_1.PageOptionsAvailableVoucherDto]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "findAvailable", null);
__decorate([
    (0, common_1.Get)(':code/code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "findByCode", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_vourcher_dto_1.PageOptionsVoucherDto]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "findAll", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_voucher_dto_1.CreateVoucherDto]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "create", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "find", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_voucher_dto_1.UpdateVoucherDto]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "update", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "delete", null);
VoucherController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('voucher'),
    __metadata("design:paramtypes", [voucher_service_1.VoucherService])
], VoucherController);
exports.VoucherController = VoucherController;
//# sourceMappingURL=voucher.controller.js.map
//# debugId=17d6c7ca-7c01-5d2d-8287-7fe33889e5a0
