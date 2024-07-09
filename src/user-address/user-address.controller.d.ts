import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserAdressDto } from './dto/create-user-address.dto';
import { GetCityDto } from './dto/get-city.dto';
import { GetSubdistrictDto } from './dto/get-subdistrict.dto';
import { GetZipCodeDto } from './dto/get-zip-code.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
import { CityEntity } from './entities/city.entity';
import { ProvinceEntity } from './entities/province.entity';
import { SubdistrictEntity } from './entities/subdistrict.entity';
import { ZipCodeEntity } from './entities/zip-code.entity';
import { UserAddressService } from './user-address.service';
export declare class UserAddressController {
    private readonly userAddressService;
    constructor(userAddressService: UserAddressService);
    findAll(user: UserEntity): Promise<import(".prisma/client").user_address[]>;
    create(user: UserEntity, data: CreateUserAdressDto): Promise<import(".prisma/client").user_address>;
    find(user: UserEntity, id: number): Promise<import(".prisma/client").user_address>;
    update(user: UserEntity, id: number, data: UpdateUserAddressDto): Promise<import(".prisma/client").user_address>;
    delete(user: UserEntity, id: number): Promise<import(".prisma/client").user_address>;
    getProvince(): Promise<ProvinceEntity[]>;
    getCity(getCityDto: GetCityDto): Promise<CityEntity[]>;
    getSubdistrict(getSubdistrictDto: GetSubdistrictDto): Promise<SubdistrictEntity[]>;
    getZipCode(getZipCodeDto: GetZipCodeDto): Promise<ZipCodeEntity[]>;
}
