"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="102989d6-9c62-5ce0-b72c-c6524a7ca444")}catch(e){}}();

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
exports.UserBalanceController = void 0;
const common_1 = require("@nestjs/common");
const user_balance_service_1 = require("./user-balance.service");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const page_options_withdrawal_history_dto_1 = require("./dto/page-options-withdrawal-history.dto");
const withdrawal_user_balance_dto_1 = require("./dto/withdrawal-user-balance.dto");
const user_bank_account_service_1 = require("../user-bank-account/user-bank-account.service");
let UserBalanceController = class UserBalanceController {
    constructor(userBalanceService, userBankAccountService) {
        this.userBalanceService = userBalanceService;
        this.userBankAccountService = userBankAccountService;
    }
    async balance(user) {
        return {
            balance: (await this.userBalanceService.find(user.id))?.balance ?? 0,
        };
    }
    async withdrawal(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.userBalanceService.withdrawal(pageOptionsDto);
    }
    async withdrawalBalance(user, data) {
        const findBankAccount = await this.userBankAccountService.find(data.user_bank_account_id);
        if (!findBankAccount)
            throw new common_1.BadRequestException('User bank account not found');
        if (findBankAccount.user_id != user.id)
            throw new common_1.ForbiddenException('Forbidden user bank account');
        let findBalance = await this.userBalanceService.find(user.id);
        if (!findBalance) {
            findBalance = await this.userBalanceService.create({
                user_id: user.id,
                balance: 0,
            });
        }
        if (findBalance.balance < data.amount)
            throw new common_1.BadRequestException('Withdrawal amount cannot exceed the current balance.');
        data.user_id = user.id;
        data.current_balance = findBalance.balance;
        data.notes = `Withdrawal (${findBankAccount.bank.code.toUpperCase()} - ${findBankAccount.account_number} - ${findBankAccount.name})`;
        const withdrawal = await this.userBalanceService.withdrawalBalance({
            ...data,
            status: 'processed',
        });
        if (withdrawal) {
            const updateBalance = await this.userBalanceService.update(user.id, {
                balance: findBalance.balance - data.amount,
            });
            if (updateBalance) {
                await this.userBalanceService.createWithdrawalHistory({
                    user_balance_withdrawal_id: withdrawal.id,
                    status: 'processed',
                });
            }
        }
        return withdrawal;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserBalanceController.prototype, "balance", null);
__decorate([
    (0, common_1.Get)('withdrawal'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_withdrawal_history_dto_1.PageOptionsWithdrawalHistoryDto]),
    __metadata("design:returntype", Promise)
], UserBalanceController.prototype, "withdrawal", null);
__decorate([
    (0, common_1.Post)('withdrawal'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        withdrawal_user_balance_dto_1.WithdrawalUserBalanceDto]),
    __metadata("design:returntype", Promise)
], UserBalanceController.prototype, "withdrawalBalance", null);
UserBalanceController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiTags)('Profile Doctor'),
    (0, common_1.Controller)('user-balance'),
    __metadata("design:paramtypes", [user_balance_service_1.UserBalanceService,
        user_bank_account_service_1.UserBankAccountService])
], UserBalanceController);
exports.UserBalanceController = UserBalanceController;
//# sourceMappingURL=user-balance.controller.js.map
//# debugId=102989d6-9c62-5ce0-b72c-c6524a7ca444
