import { Response } from 'express';
import { OrderManagementService } from 'src/order-management/order-management.service';
import { ShippingService } from 'src/shipping/shipping.service';
import { BookingDto } from './dto/booking.dto';
import { CancelBookingDto } from './dto/cancel-booking.dto';
import { EstimateDto } from './dto/estimate.dto';
import { ShipmentGosendWebhookDto } from './dto/webhook.dto';
import { BookingInfoEntity } from './entities/booking-info.entity';
import { BookingEntity } from './entities/booking.entity';
import { EstimateEntity } from './entities/estimate.entity';
import { ShipmentGosendService } from './shipment-gosend.service';
export declare class ShipmentGosendController {
    private readonly shipmentGosendService;
    private readonly shippingService;
    private readonly orderManagementService;
    constructor(shipmentGosendService: ShipmentGosendService, shippingService: ShippingService, orderManagementService: OrderManagementService);
    handleBookingStatusUpdate(payload: ShipmentGosendWebhookDto, res: Response): Promise<void>;
    getEstimate(estimationDto: EstimateDto): Promise<EstimateEntity>;
    booking(bookingDto: BookingDto): Promise<BookingEntity>;
    getBookingByOrderNo(orderNo: string): Promise<BookingInfoEntity>;
    getBookingByStoreOrderId(storeOrderId: string): Promise<BookingInfoEntity>;
    cancelBooking(cancelBookingDto: CancelBookingDto): Promise<any>;
}
