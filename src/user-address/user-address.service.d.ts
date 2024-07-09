import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserAdressDto } from './dto/create-user-address.dto';
import { GetCityDto } from './dto/get-city.dto';
import { GetDestinationDto } from './dto/get-destination.dto';
import { GetSubdistrictDto } from './dto/get-subdistrict.dto';
import { GetZipCodeDto } from './dto/get-zip-code.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
export declare class UserAddressService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(user_id: number): Promise<import(".prisma/client").user_address[]>;
    find(id: number): Promise<import(".prisma/client").user_address>;
    create(data: CreateUserAdressDto): Promise<import(".prisma/client").user_address>;
    updateMainAddress(user_id: number, data: UpdateUserAddressDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    update(id: number, data: UpdateUserAddressDto): Promise<import(".prisma/client").user_address>;
    delete(id: number): Promise<import(".prisma/client").user_address>;
    getProvince(): import(".prisma/client").PrismaPromise<import(".prisma/client").sicepat_destination[]>;
    getCity(getCityDto: GetCityDto): import(".prisma/client").PrismaPromise<import(".prisma/client").sicepat_destination[]>;
    getSubdistrict(getSubdistrictDto: GetSubdistrictDto): import(".prisma/client").PrismaPromise<import(".prisma/client").sicepat_destination[]>;
    getZipCode(getZipCodeDto: GetZipCodeDto): import(".prisma/client").PrismaPromise<import(".prisma/client").sicepat_destination[]>;
    getDestination(getDestionationDto: GetDestinationDto): import(".prisma/client").Prisma.Prisma__sicepat_destinationClient<import(".prisma/client").sicepat_destination>;
}
