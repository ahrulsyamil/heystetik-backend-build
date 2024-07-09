import { UserBalanceService } from './user-balance.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsWithdrawalHistoryDto } from './dto/page-options-withdrawal-history.dto';
import { WithdrawalUserBalanceDto } from './dto/withdrawal-user-balance.dto';
import { UserBankAccountService } from 'src/user-bank-account/user-bank-account.service';
export declare class UserBalanceController {
    private readonly userBalanceService;
    private readonly userBankAccountService;
    constructor(userBalanceService: UserBalanceService, userBankAccountService: UserBankAccountService);
    balance(user: UserEntity): Promise<{
        balance: number;
    }>;
    withdrawal(user: UserEntity, pageOptionsDto: PageOptionsWithdrawalHistoryDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").user_balance_withdrawal & {
        user_balance_withdrawal_histories: import(".prisma/client").user_balance_withdrawal_history[];
    }>>;
    withdrawalBalance(user: UserEntity, data: WithdrawalUserBalanceDto): Promise<import(".prisma/client").user_balance_withdrawal>;
}
