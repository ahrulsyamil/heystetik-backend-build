import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserBalance } from './dto/create-user-balance.dto';
import { UpdateUserBalance } from './dto/update-user-balance.dto';
import { WithdrawalUserBalanceDto } from './dto/withdrawal-user-balance.dto';
import { PageOptionsWithdrawalHistoryDto } from './dto/page-options-withdrawal-history.dto';
import { PageDto } from 'src/decorators/page.dto';
import { CreateWithdrawalHistoryDto } from './dto/create-withdrawal-history.dto';
export declare class UserBalanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserBalance): Promise<import(".prisma/client").user_balance>;
    update(user_id: number, data: UpdateUserBalance): Promise<import(".prisma/client").user_balance>;
    find(user_id: number): Promise<{
        balance: number;
    }>;
    withdrawalBalance(data: WithdrawalUserBalanceDto): Promise<import(".prisma/client").user_balance_withdrawal>;
    withdrawal(pageOptionsDto: PageOptionsWithdrawalHistoryDto): Promise<PageDto<import(".prisma/client").user_balance_withdrawal & {
        user_balance_withdrawal_histories: import(".prisma/client").user_balance_withdrawal_history[];
    }>>;
    createWithdrawalHistory(data: CreateWithdrawalHistoryDto): Promise<import(".prisma/client").user_balance_withdrawal_history>;
}
