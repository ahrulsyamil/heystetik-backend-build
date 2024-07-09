import { CancelPickupDto } from './dto/cancel-pickup.dto';
import { GetTariffDto } from './dto/get-tariff.dto';
import { GetTrackingDto } from './dto/get-tracking.dto';
import { PickupDto } from './dto/pickup.dto';
import { DestinationEntity } from './entities/destination.entity';
import { OriginEntity } from './entities/origin.entity';
import { TariffEntity } from './entities/tariff.entity';
import { TrackingEntity } from './entities/tracking.entity';
import { ShipmentSicepatService } from './shipment-sicepat.service';
export declare class ShipmentSicepatController {
    private readonly shipmentSicepatService;
    constructor(shipmentSicepatService: ShipmentSicepatService);
    getOrigin(): Promise<OriginEntity>;
    getDestination(): Promise<DestinationEntity>;
    getTariff(getTariffDto: GetTariffDto): Promise<TariffEntity>;
    getTracking(getTrackingDto: GetTrackingDto): Promise<TrackingEntity>;
    pickup(pickupDto: PickupDto): Promise<null>;
    pickupCancel(cancelPickupDto: CancelPickupDto): Promise<null>;
}
