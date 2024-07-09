import { StatusEntity } from './status.entity';
export declare class SicepatEntity<T = any[]> {
    constructor(partial: Partial<SicepatEntity>);
    status: StatusEntity;
    results?: T;
    result?: T;
}
