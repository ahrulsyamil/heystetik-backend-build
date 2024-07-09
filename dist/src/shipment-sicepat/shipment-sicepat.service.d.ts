import { ConfigService } from '@nestjs/config';
import { CancelPickupDto } from './dto/cancel-pickup.dto';
import { GetTariffDto } from './dto/get-tariff.dto';
import { PickupDto } from './dto/pickup.dto';
import { DestinationEntity } from './entities/destination.entity';
import { OriginEntity } from './entities/origin.entity';
import { TariffEntity } from './entities/tariff.entity';
import { TrackingEntity } from './entities/tracking.entity';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ShipmentSicepatService {
    private readonly configService;
    private readonly prismaService;
    private axiosPickup;
    private axiosTracking;
    constructor(configService: ConfigService, prismaService: PrismaService);
    getOrigin(): Promise<OriginEntity>;
    getDestination(): Promise<DestinationEntity>;
    getTariff(getTariffDto: GetTariffDto): Promise<TariffEntity>;
    getWaybill(awb: string): Promise<TrackingEntity>;
    getTrackingByRefno(refno: string): Promise<TrackingEntity>;
    getAwbByRefNo(refno: string): Promise<null>;
    pickup(pickupDto: PickupDto): Promise<null>;
    cancelPickup(cancelPickup: CancelPickupDto): Promise<null>;
}
