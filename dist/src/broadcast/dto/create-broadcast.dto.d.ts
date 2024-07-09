/// <reference types="multer" />
export declare class CreateBroadcastDto {
    topic: string;
    role_id: any[];
    title: string;
    description: string;
    execution_time: Date;
    interests: string[];
    province_ids: number[];
    city_ids: number[];
    link: string;
    user_reach: number;
    image: Express.Multer.File;
}
