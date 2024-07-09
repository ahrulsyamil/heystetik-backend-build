import { ConfigService } from '@nestjs/config';
import { CreateChargeDto } from './dto/create-charge.dto';
export declare class XenditService {
    private readonly configService;
    private axios;
    constructor(configService: ConfigService);
    charge(createChargeDto: CreateChargeDto): Promise<any>;
    status(id: string): Promise<any>;
}
