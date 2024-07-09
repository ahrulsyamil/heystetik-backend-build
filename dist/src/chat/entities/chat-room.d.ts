import { BaseEntity } from 'src/globals/entities/base.entity';
export declare class ChatRoomEntity extends BaseEntity {
    doctor_id: number;
    customer_id: number;
    code: string;
    ended: boolean;
}
