import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetCityDto } from './dto/get-city.dto';
import { GetSubdistrictDto } from './dto/get-subdistrict.dto';
import { GetZipCodeDto } from './dto/get-zip-code.dto';
import { PageOptionsCityDto } from './dto/page-options-city.dto';
export declare class GeographyService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllProvince(pageOptionsDto: PageOptionsDto): Promise<PageDto<import(".prisma/client").provinces>>;
    findAllKotaKabupaten(pageOptionsDto: PageOptionsDto & PageOptionsCityDto): Promise<PageDto<import(".prisma/client").kota_kabupatens>>;
    getProvince(): import(".prisma/client").PrismaPromise<import(".prisma/client").sicepat_destination[]>;
    getCity(getCityDto: GetCityDto): import(".prisma/client").PrismaPromise<import(".prisma/client").sicepat_destination[]>;
    getSubdistrict(getSubdistrictDto: GetSubdistrictDto): import(".prisma/client").PrismaPromise<import(".prisma/client").sicepat_destination[]>;
    getZipCode(getZipCodeDto: GetZipCodeDto): import(".prisma/client").PrismaPromise<import(".prisma/client").sicepat_destination[]>;
}
