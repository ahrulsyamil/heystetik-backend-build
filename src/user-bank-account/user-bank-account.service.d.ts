import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserBankAccountDto } from './dto/create-user-bank-account.dto';
import { UpdateUserBankAccountDto } from './dto/update-user-bank-account.dto';
export declare class UserBankAccountService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(user_id: number): Promise<(import(".prisma/client").user_bank_account & {
        bank: import(".prisma/client").bank;
    })[]>;
    find(id: number): Promise<import(".prisma/client").user_bank_account & {
        bank: import(".prisma/client").bank;
    }>;
    create(data: CreateUserBankAccountDto): Promise<import(".prisma/client").user_bank_account>;
    update(id: number, data: UpdateUserBankAccountDto): Promise<import(".prisma/client").user_bank_account>;
    delete(id: number): Promise<import(".prisma/client").user_bank_account>;
}
