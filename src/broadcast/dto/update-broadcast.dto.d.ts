import { CreateBroadcastDto } from './create-broadcast.dto';
import { BroadcastStatus } from 'src/globals/constant/enum';
declare const UpdateBroadcastDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBroadcastDto>>;
export declare class UpdateBroadcastDto extends UpdateBroadcastDto_base {
    status: BroadcastStatus;
}
export {};
