import { ConfigService } from '@nestjs/config';
import { BookingDto } from './dto/booking.dto';
import { EstimateDto } from './dto/estimate.dto';
import { BookingInfoEntity } from './entities/booking-info.entity';
import { BookingEntity } from './entities/booking.entity';
import { EstimateEntity } from './entities/estimate.entity';
export declare class ShipmentGosendService {
    private readonly configService;
    private axios;
    constructor(configService: ConfigService);
    estimate(estimateDto: EstimateDto): Promise<EstimateEntity>;
    booking(bookingDto: BookingDto): Promise<BookingEntity>;
    bookingInfoByOrderNo(orderNo: string): Promise<BookingInfoEntity>;
    bookingInfoByStoreOrderId(storeOrderId: string): Promise<BookingInfoEntity>;
    cancelBooking(orderNo: string): Promise<any>;
}
