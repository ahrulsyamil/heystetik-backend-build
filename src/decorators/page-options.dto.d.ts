import { Order } from 'src/globals/constant/enum';
export declare class PageOptionsDto {
    readonly order?: Order;
    readonly page?: number;
    readonly take?: number;
    readonly search?: string;
    get skip(): number;
}
