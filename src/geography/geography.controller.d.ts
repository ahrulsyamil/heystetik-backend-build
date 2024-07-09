import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { GetCityDto } from './dto/get-city.dto';
import { GetSubdistrictDto } from './dto/get-subdistrict.dto';
import { GetZipCodeDto } from './dto/get-zip-code.dto';
import { PageOptionsCityDto } from './dto/page-options-city.dto';
import { CityEntity } from './entities/city.entity';
import { ProvinceEntity } from './entities/province.entity';
import { SubdistrictEntity } from './entities/subdistrict.entity';
import { ZipCodeEntity } from './entities/zip-code.entity';
import { GeographyService } from './geography.service';
export declare class GeographyController {
    private readonly geographyService;
    constructor(geographyService: GeographyService);
    findAll(pageOptionsDto: PageOptionsDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").provinces>>;
    findAllProvince(pageOptionsDto: PageOptionsCityDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").kota_kabupatens>>;
    getProvince(): Promise<ProvinceEntity[]>;
    getCity(getCityDto: GetCityDto): Promise<CityEntity[]>;
    getSubdistrict(getSubdistrictDto: GetSubdistrictDto): Promise<SubdistrictEntity[]>;
    getZipCode(getZipCodeDto: GetZipCodeDto): Promise<ZipCodeEntity[]>;
}
