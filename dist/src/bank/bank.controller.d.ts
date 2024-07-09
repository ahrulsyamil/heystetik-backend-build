import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { BankService } from './bank.service';
export declare class BankController {
    private readonly bankService;
    constructor(bankService: BankService);
    findAll(pageOptionsDto: PageOptionsDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").bank>>;
}
