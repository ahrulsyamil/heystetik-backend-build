import { user_balance_withdrawal_status } from '@prisma/client';
export declare class WithdrawalUserBalanceDto {
    user_id: number;
    user_bank_account_id: number;
    current_balance: number;
    amount: number;
    notes?: string;
    status: user_balance_withdrawal_status;
}
