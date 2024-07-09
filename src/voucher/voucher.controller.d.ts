import { UserEntity } from 'src/users/entities/user.entity';
import { PageOptionsAvailableVoucherDto } from './dto/page-options-available-voucher.dto';
import { VoucherService } from './voucher.service';
import { PageOptionsVoucherDto } from './dto/page-options-vourcher.dto';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
export declare class VoucherController {
    private readonly voucherService;
    constructor(voucherService: VoucherService);
    findAvailable(user: UserEntity, pageOptionsDto: PageOptionsAvailableVoucherDto): Promise<import("../decorators/page.dto").PageDto<unknown>>;
    findByCode(code: string): Promise<import(".prisma/client").voucher>;
    findAll(pageOptions: PageOptionsVoucherDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").voucher>>;
    create(data: CreateVoucherDto): Promise<import(".prisma/client").voucher>;
    find(id: string): Promise<import(".prisma/client").voucher>;
    update(id: string, data: UpdateVoucherDto): Promise<import(".prisma/client").voucher>;
    delete(id: string): Promise<import(".prisma/client").voucher>;
}
