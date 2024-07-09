import { CreateChargeDto } from './dto/create-charge.dto';
import { ConfigService } from '@nestjs/config';
export declare class MidtransService {
    private readonly configService;
    private axios;
    constructor(configService: ConfigService);
    charge(createChargeDto: CreateChargeDto): Promise<any>;
    status(order_id: string): Promise<any>;
    cancel(order_id: string): Promise<any>;
}
