import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PageOptionsAvailableVoucherDto } from './dto/page-options-available-voucher.dto';
import { PageOptionsVoucherDto } from './dto/page-options-vourcher.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class VoucherService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(pageOptionsDto: PageOptionsVoucherDto): Promise<PageDto<import(".prisma/client").voucher>>;
    findAllAvailableVoucher(pageOptionsDto: PageOptionsAvailableVoucherDto): Promise<PageDto<unknown>>;
    find(id: number): Promise<import(".prisma/client").voucher>;
    findByCode(code: string): Promise<import(".prisma/client").voucher>;
    create(data: Prisma.voucherCreateInput): Promise<import(".prisma/client").voucher>;
    update(id: number, data: Prisma.voucherUpdateInput): Promise<import(".prisma/client").voucher>;
    delete(id: number): Promise<import(".prisma/client").voucher>;
}
