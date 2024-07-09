import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserBankAccountDto } from './dto/create-user-bank-account.dto';
import { UpdateUserBankAccountDto } from './dto/update-user-bank-account.dto';
import { UserBankAccountService } from './user-bank-account.service';
export declare class UserBankAccountController {
    private readonly userBankAccountService;
    constructor(userBankAccountService: UserBankAccountService);
    findAll(user: UserEntity): Promise<(import(".prisma/client").user_bank_account & {
        bank: import(".prisma/client").bank;
    })[]>;
    find(user: UserEntity, id: number): Promise<import(".prisma/client").user_bank_account & {
        bank: import(".prisma/client").bank;
    }>;
    create(user: UserEntity, data: CreateUserBankAccountDto): Promise<import(".prisma/client").user_bank_account>;
    update(user: UserEntity, id: number, data: UpdateUserBankAccountDto): Promise<import(".prisma/client").user_bank_account>;
    delete(user: UserEntity, id: number): Promise<import(".prisma/client").user_bank_account>;
}
