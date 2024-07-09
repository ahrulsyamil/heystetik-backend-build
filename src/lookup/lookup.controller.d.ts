import { CreateLookupDto } from './dto/create-lookup.dto';
import { PageOptionsLookupDto } from './dto/page-options-lookup.dto';
import { LookupService } from './lookup.service';
export declare class LookupController {
    private readonly lookupService;
    constructor(lookupService: LookupService);
    findAll(pageOptionsDto: PageOptionsLookupDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").lookup>>;
    create(createDto: CreateLookupDto): Promise<import(".prisma/client").lookup>;
}
